import Link from "next/link";
import Footer from "../components/homepage/Footer";
import Hero from "../components/homepage/Hero";
import UpcomingTournament from "../components/homepage/UpcomingTournament";
import HowWorks from "../components/homepage/HowWorks";
import GolfTour from "../components/homepage/GolfTour";
import LiveEvents from "../components/homepage/LiveEvents";
import HowtoPlay from "../components/homepage/HowtoPlay";
import WhySmashgolf from "../components/homepage/WhySmashgolf";
import Brands from "../components/homepage/Brands";
import Header from "../components/homepage/Header";

export default  function Home() {

  return (
    <div className="homepage">
      <Header/>

      <Hero />

      <UpcomingTournament />

      <HowWorks />

      <GolfTour />

      <WhySmashgolf />

      <HowtoPlay />

      <LiveEvents />

      <Brands />

      <Footer />
    </div>
  );
}
