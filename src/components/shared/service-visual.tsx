import Image from "next/image";
import { Headset, PhoneCall } from "lucide-react";

import { cn } from "@/lib/utils";
import { blurMap } from "@/lib/image-blur-map";
import { serviceIllustrationMap } from "@/components/illustrations/services";
import type { Service } from "@/lib/content";

const iconMap = {
  "phone-call": PhoneCall,
  headset: Headset,
};

export function ServiceVisual({
  service,
  className,
}: {
  service: Pick<Service, "slug" | "image" | "icon" | "title">;
  className?: string;
}) {
  if (service.image) {
    return (
      <div className={cn("relative overflow-hidden bg-muted", className)}>
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="photo-grade object-cover transition-transform duration-700 group-hover:scale-105"
          placeholder={blurMap[service.image] ? "blur" : "empty"}
          blurDataURL={blurMap[service.image]}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
      </div>
    );
  }

  const Illustration = serviceIllustrationMap[service.slug];

  if (Illustration) {
    return (
      <div
        className={cn(
          "relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-deep-blue/15 via-deep-blue/5 to-background bg-engineering-grid",
          className
        )}
      >
        <Illustration className="h-2/3 w-2/3 transition-transform duration-700 group-hover:scale-105" />
      </div>
    );
  }

  const Icon = service.icon ? iconMap[service.icon] : PhoneCall;

  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-deep-blue/15 via-deep-blue/5 to-background bg-engineering-grid",
        className
      )}
    >
      <Icon className="h-14 w-14 text-deep-blue/20 transition-transform duration-700 group-hover:scale-110" strokeWidth={1.25} />
      <Icon className="absolute h-7 w-7 text-deep-blue" strokeWidth={1.75} />
    </div>
  );
}
