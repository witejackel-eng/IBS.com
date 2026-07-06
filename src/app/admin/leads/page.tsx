import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function AdminLeadsPage() {
  if (!prisma) {
    return (
      <div className="rounded-2xl border border-dashed border-border bg-card p-10 text-center">
        <p className="text-charcoal">No database configured.</p>
        <p className="mt-2 text-sm text-steel">
          Set <code className="rounded bg-secondary px-1.5 py-0.5">DATABASE_URL</code> to start
          persisting and viewing contact submissions here.
        </p>
      </div>
    );
  }

  const leads = await prisma.contactSubmission.findMany({ orderBy: { createdAt: "desc" } });

  if (leads.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border bg-card p-10 text-center text-steel">
        No contact submissions yet.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-semibold text-charcoal font-heading">Leads ({leads.length})</h1>
      <div className="overflow-hidden rounded-2xl border border-border bg-card">
        <table className="w-full text-left text-sm">
          <thead className="bg-secondary/60 text-xs tracking-wide text-steel uppercase">
            <tr>
              <th className="px-5 py-3">Name</th>
              <th className="px-5 py-3">Contact</th>
              <th className="px-5 py-3">Interested in</th>
              <th className="px-5 py-3">Message</th>
              <th className="px-5 py-3">Status</th>
              <th className="px-5 py-3">Received</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id} className="border-t border-border align-top">
                <td className="px-5 py-4">
                  <p className="font-medium text-charcoal">{lead.name}</p>
                  {lead.company && <p className="text-xs text-steel">{lead.company}</p>}
                </td>
                <td className="px-5 py-4 text-steel">
                  <p>{lead.email}</p>
                  {lead.phone && <p>{lead.phone}</p>}
                </td>
                <td className="px-5 py-4 text-steel">{lead.serviceInterest || "—"}</td>
                <td className="max-w-xs px-5 py-4 text-steel">{lead.message}</td>
                <td className="px-5 py-4">
                  <span className="rounded-full bg-secondary px-2.5 py-1 text-xs text-steel">{lead.status}</span>
                </td>
                <td className="px-5 py-4 text-xs text-steel">
                  {new Date(lead.createdAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
