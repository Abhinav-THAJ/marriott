import type { Metadata } from "next";
import "./globals.css";
import { UtilityBar } from "@/components/layout/UtilityBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Marriott Hospital | Excellence in Healthcare & Compassionate Clinical Care",
    template: "%s | Marriott Hospital",
  },
  description:
    "Marriott Hospital is an advanced multi-speciality tertiary care institution in Kochi, Kerala. 24/7 Level-1 Emergency & Trauma, Robotic Surgeries, Cath Lab, 3T MRI, and NABL Diagnostic Services.",
  keywords: [
    "Marriott Hospital",
    "Best Hospital in Kochi",
    "Tertiary Care Hospital",
    "Emergency Care 24/7",
    "Cardiology",
    "Robotic Knee Replacement",
    "Neurosurgery",
    "Health Checkup Packages",
    "Cashless Insurance Hospital"
  ],
  authors: [{ name: "Marriott Hospital Medical Directorate" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  robots: "index, follow",
  openGraph: {
    title: "Marriott Hospital | Care That Puts You First",
    description: "Multidisciplinary tertiary care hospital with 24/7 emergency dispatch, expert doctors, advanced medical tech, and cashless hospitalization.",
    url: "https://marriotthospital.org",
    siteName: "Marriott Hospital",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden max-w-full w-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Newsreader:ital,opsz,wght@0,6..72,300..700;1,6..72,300..700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-surface text-on-surface antialiased selection:bg-secondary-fixed selection:text-primary overflow-x-hidden max-w-full w-full">
        <UtilityBar />
        <Navbar />
        <main className="flex-1 w-full overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
