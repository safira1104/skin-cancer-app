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
        <main className="flex-grow flex justify-center items-center min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
