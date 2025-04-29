import Contact from "@/components/home-page/contact";
import Content from "@/components/home-page/content";
import Introduction from "@/components/home-page/introduction";
import Service from "@/components/home-page/service";
import University from "@/components/home-page/university";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen pb-20 font-[family-name:var(--font-geist-sans)]">
      <Introduction />
      <University />
      <Service />
      <Content />
      <Contact />
    </div>
  );
}
