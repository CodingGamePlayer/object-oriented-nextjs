"use client";

import Sidebar from "./components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex h-screen">
        <Sidebar />
        <div className="flex-1 ml-64">
          <main className="h-screen p-7 overflow-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
