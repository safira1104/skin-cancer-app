// app/summary/layout.tsx
import { ReactNode } from "react";
import HorizontalSummaryMenu from "../../components/horizontal-summary-menu"; // sesuaikan path

export default function SummaryLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="p-4">
      <HorizontalSummaryMenu activePath={typeof window !== "undefined" ? window.location.pathname : ""} />
      <div className="mt-4">{children}</div>
    </div>
  );
}
