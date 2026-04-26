import { setRequestLocale } from "next-intl/server";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Work } from "@/components/work";
import { Stack } from "@/components/stack";
import { Certifications } from "@/components/certifications";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main id="top" className="flex-1">
        <Hero />
        <About />
        <Work />
        <Stack />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
