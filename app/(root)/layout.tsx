import { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <div>{children}</div>
    </main>
  );
};

export default RootLayout;
