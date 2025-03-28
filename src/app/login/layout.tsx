import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adzy Labs login ",
  description: "Adzy labs login ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={``} style={{ backgroundColor: "#DFE4DF" }}>
        {children}
      </body>
    </html>
  );
}
