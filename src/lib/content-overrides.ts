import { prisma } from "@/lib/db";

/**
 * Reads a JSON content override by key, falling back to `defaultValue` when
 * no database is configured, the key has no row yet, or the query fails.
 * This is what lets admin-edited copy take effect without requiring a
 * database in local dev or for every deployment.
 */
export async function getContentOverride<T>(key: string, defaultValue: T): Promise<T> {
  if (!prisma) return defaultValue;
  try {
    const row = await prisma.contentOverride.findUnique({ where: { key } });
    if (!row) return defaultValue;
    return { ...defaultValue, ...(row.data as object) } as T;
  } catch (err) {
    console.error(`Failed to read content override "${key}":`, err);
    return defaultValue;
  }
}

export async function setContentOverride(key: string, data: unknown) {
  if (!prisma) {
    throw new Error("No database configured -- set DATABASE_URL to enable content editing.");
  }
  await prisma.contentOverride.upsert({
    where: { key },
    create: { key, data: data as object },
    update: { data: data as object },
  });
}
