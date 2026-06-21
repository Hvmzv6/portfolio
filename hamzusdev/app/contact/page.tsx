import type { Metadata } from "next";
import ContactPageClient from "@/components/ContactPageClient";

export const metadata: Metadata = {
  title: "Initiate Protocol | Contact Hamza Safsai",
  description: "Get in touch with Hamza Safsai for full-stack engineering contracts, architecture consultations, or digital product development queries.",
  openGraph: {
    title: "Initiate Protocol | Contact Hamza Safsai",
    description: "Get in touch with Hamza Safsai for full-stack engineering contracts, architecture consultations, or digital product development queries.",
    images: [
      {
        url: "/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Hamza Safsai - Contact Coordinates",
      },
    ],
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
