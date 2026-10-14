import Hero from "./components/Hero";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import Education from "./components/Education";
import Footer from "./components/Footer"
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, Flip);
}
export default function Home() {
  return (
   <div>
<Hero/>
<TechStack/>
<Projects/>
<Education/>
<Footer/>
   </div>
  );
}
