import ContactPageClient from "@/components/ContactPageClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Initiate Protocol | Contact Hamza Safsafi",
  description: "Get in touch with Hamza Safsafi for full-stack engineering contracts, architecture consultations, or digital product development queries.",
  openGraph: {
    title: "Initiate Protocol | Contact Hamza Safsafi",
    description: "Get in touch with Hamza Safsafi for full-stack engineering contracts, architecture consultations, or digital product development queries.",
    images: [
      {
        url: "/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Hamza Safsafi - Contact Coordinates",
      },
    ],
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
