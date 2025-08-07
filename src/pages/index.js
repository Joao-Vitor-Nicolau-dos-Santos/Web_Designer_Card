import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import ProfileCard from "../components/ProfileCard";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <ProfileCard
        imageSrc="https://cdn.griinstitute.org/uploads/crm_people/0031R00002OUMta_Marketing_Edited_Photo_2025-02-03_11-53-29.jpg"
        flagSrc="https://www.griinstitute.org/assets/img/country_flags/1x1/br.svg"
        logoSrc="https://cdn.griinstitute.org/uploads/crm_company/0033600000DmrRO_Marketing_Edited_Logo_2025-06-14_01-23-10.jpg"
        name="Armless John"
        title="Software Developer"
        company="GRI Institute"
        matchPercent={66}
        expertise="Servers, Web And Mobile"
        isRepresentative
      />
    </main>
  );
}
