import Hero from "../components/home/Hero";
import Specials from "../components/home/Specials";
import Testimonials from "../components/home/Testimonials";
import JoinCTA from "../components/home/JoinCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Specials />
      <Testimonials />
      <JoinCTA />
    </>
  );
}