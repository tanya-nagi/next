"use client";

import Introduction from "./homepage/02_introduction";
import Commitment from "./homepage/07_commitment";
import PlantToBrand from "./homepage/05_plantToBrand";
import BetterTomorrow from "./homepage/06_betterTomorrow";
import MakingHappenBetter from "./homepage/03_makingHappenBetter";
import Codevelopment from "./homepage/04_coDevelopment";
import Banner from "./homepage/01_banner";
import useGSAP from "@hooks/useGsap";

export default function Home() {
  useGSAP(".homepage-wrapper");
  return (
    <div className="homepage-wrapper">
      <Banner />
      <Introduction />
      <MakingHappenBetter />
      <Codevelopment />
      <PlantToBrand />
      <BetterTomorrow />
      <Commitment />
      {/* <SwiperTest /> */}
    </div>
  );
}
