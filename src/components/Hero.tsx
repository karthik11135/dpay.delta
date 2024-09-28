
import TopBar from "./TopBar";
import BalanceCard from "./BalanceCard";
import WelcomeCard from "./WelcomeCard";
import OtherInfoHero from "./OtherInfoHero";

const Hero = () => {
  return (
    <div className="px-5">
      <TopBar />
      <WelcomeCard />
      <BalanceCard />
      <OtherInfoHero />
    </div>
  );
};

export default Hero;
