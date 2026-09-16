import { Hero } from "@/components/hero";
import { Clients } from "@/components/clients";
import { WorkGrid } from "@/components/work-grid";
import { Playground } from "@/components/playground";
import { Services } from "@/components/services";
import { About } from "@/components/about";
import { Faq } from "@/components/faq";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <WorkGrid />
      <Playground />
      <Services />
      <About />
      <Faq />
      <Contact />
    </>
  );
}
