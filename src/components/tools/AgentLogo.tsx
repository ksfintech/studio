"use client";
import Image from "next/image";
import { useState } from "react";

export function AgentLogo({ logoUrl, company, size = 64 }: { logoUrl?: string; company: string; size?: number }) {
  const [error, setError] = useState(false);
  if (logoUrl && !error) {
    return (
      <div
        className="relative rounded-lg border border-border overflow-hidden bg-background flex-shrink-0"
        style={{ width: size, height: size }}
      >
        <Image
          src={logoUrl}
          alt={`${company} logo`}
          fill
          className="object-contain p-2"
          sizes={`${size}px`}
          onError={() => setError(true)}
        />
      </div>
    );
  }
  return (
    <div
      className="rounded-lg border border-border bg-muted flex items-center justify-center flex-shrink-0"
      style={{ width: size, height: size }}
    >
      <span className="font-bold text-muted-foreground" style={{ fontSize: size * 0.4 }}>
        {company.charAt(0)}
      </span>
    </div>
  );
} 