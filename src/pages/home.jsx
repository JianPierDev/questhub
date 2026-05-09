import { Header } from "../common/header/header";
import { Carousel } from "../components/carousel/Carousel";
import { GameSection } from "../components/game-section/game-section";

export function HomePage() {
  return (
    <>
      <Header />
      <Carousel />

      <GameSection
        title={"¡Capcom llegó con precios bajos y mucho hype!"}
        developer={"capcom"}
      />
      <GameSection
        title={"¡Ubisoft no se queda atras, aprovecha estos descuentos!"}
        developer={"ubisoft"}
      />
      <GameSection title={"¡Acción sin límites!"} genres={"action"} />
      <GameSection title={"¡Juegos épicos de aventura!"} genres={"adventure"} />
      <GameSection
        title={"¡Infaltable los juegos de estrategia!"}
        genres={"strategy"}
      />
    </>
  );
}