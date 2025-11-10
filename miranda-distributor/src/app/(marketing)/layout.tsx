import type { ReactNode } from "react";
import WhatsappFab from "@/components/WhatsappFab";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <WhatsappFab />
    </>
  );
}


