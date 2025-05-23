'use client';

import Link from "next/link";
import { cn } from "../app/lib/utils";
import { SummaryMenu } from "../app/lib/summary-menu";


export default function HorizontalSummaryMenu({ activePath }: { activePath: string }) {
  return (
    <nav className="flex flex-wrap gap-4 border-b pb-2">
      {SummaryMenu.map((item) => (
        <Link
          key={item.path}
          href={item.path}
          className={cn(
            "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors",
            activePath === item.path
              ? "bg-blue-100 text-blue-700"
              : "text-gray-600 hover:bg-gray-100"
          )}
        >
          <item.icon className="w-4 h-4" />
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
