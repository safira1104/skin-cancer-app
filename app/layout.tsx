import "./globals.css";
import Sidebar from "../components/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex bg-rose-300">
        <Sidebar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
