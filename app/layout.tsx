import "./globals.css";
import Sidebar from "../components/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex">
        <Sidebar />
        <main className="flex-1 min-h-screen p-6 ml-[250px]">
          {children}
        </main>
      </body>
    </html>
  );
}
