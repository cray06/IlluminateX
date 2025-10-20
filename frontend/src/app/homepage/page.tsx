import { JSX } from "react";
import NavbarHomepage from "@/component/homepage/navbar/NavbarHomepage";
import Hero from "@/component/homepage/Hero";
import FeaturesGrid, {Feature} from "../../component/homepage/FeaturesGrid";
import WelcomeModal from "@/component/homepage/welcome/WelcomeModal";

export default function Page(): JSX.Element {
  const features: Feature[] = [
    {
      id: "f1",
      imgSrc: "/homepage/card/firstcard.png",
      imgAlt: "reward",
      description: "Earn rewards by watching and answering questions correctly",
    },
    {
      id: "f2",
      imgSrc: "/homepage/card/secondcard.png",
      imgAlt: "connect",
      description: "Connect with friends and creators, and grow more",
    },
    {
      id: "f3",
      imgSrc: "/homepage/card/thirdcard.png",
      imgAlt: "coin",
      description: "Your Ilux coin is safe and secured no need to panic",
    },
    {
      id: "f4",
      imgSrc: "/homepage/card/fourthcard.png",
      imgAlt: "faith",
      description: "We are faith based",
    },
  ];

  return (
    <div>
      <WelcomeModal />
      <NavbarHomepage />
      <main className="flex flex-col items-center">
        <Hero
          mainTitle={"Where Innovation Meets\nCreativity and Technology"}
          subtitle={"Where Innovation Meets\nCreativity and Technology"}
        />

        <FeaturesGrid features={features} />
      </main>
    </div>
  );
}
