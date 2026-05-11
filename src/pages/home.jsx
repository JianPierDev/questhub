import { Footer } from "../common/footer/footer";
import { Header } from "../common/header/header";
import { Carousel } from "../components/carousel/Carousel";
import { GameSection } from "../components/game-section/game-section";

export function HomePage() {
  return (
    <>
      <Header />
      <Carousel />

      <GameSection
        title={"Capcom has arrived with low prices and a lot of hype!"}
        developer={"capcom"}
      />
      <GameSection
        title={"Ubisoft isn't falling behind—take advantage of these discounts!"}
        developer={"ubisoft"}
      />
      <GameSection title={"Nonstop action!"} genres={"action"} />
      <GameSection title={"Epic adventure games!"} genres={"adventure"} />
      <GameSection
        title={"Strategy games are a must!"}
        genres={"strategy"}
      />

      <Footer />
    </>
  );
}