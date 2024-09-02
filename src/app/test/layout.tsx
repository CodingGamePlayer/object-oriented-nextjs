"use client";

import Sidebar from "./components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex bg-gray-200 h-screen ">
        <Sidebar />
        <div className="flex-1 p-4">{children}</div>
      </body>
    </html>
  );
}
