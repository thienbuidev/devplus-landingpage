import About from "@/components/about/about";
import Contact from "@/components/home-page/contact";

export default function Home() {
  return (
    <div>
      <div className="bg-[url('/bg-2.jpg')] bg-cover bg-center h-[50vh]"></div>
      <About />
      <div className="py-16">
        <Contact />
      </div>
    </div>
  );
}
