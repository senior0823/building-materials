// components/Layout.tsx
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <div className="my-5">{children}</div>;
};

export default Layout;
