import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "x8 Bikes",
  description:
    "Rent bikes in Kozhikode at the best prices! Easy booking, well-maintained bikes, perfect for city rides and trips. Affordable & hassle-free rentals.",
  keywords: [
    "affordable bike hire",
    "Kozhikode bike rentals",
    "two-wheeler rental",
    "easy bike booking",
    "city bike rentals",
    "budget bike rental",
  ],
  openGraph: {
    title: "Cheap Bike Rentals in Kozhikode | Quick & Reliable Rides",
    description:
      "Rent bikes in Kozhikode at the best prices! Easy booking, well-maintained bikes, perfect for city rides and trips.",
    images: "",
    url: "",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
      <Footer />
    </html>
  );
}
