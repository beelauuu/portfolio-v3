import Typing from "react-typing-effect";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import Desk from "./Desk";
import { calculateSizes } from "../constants/index.js";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 640 });
  const isTablet = useMediaQuery({ minWidth: 748, maxWidth: 911 });
  const isSpecial = useMediaQuery({ minWidth: 911, maxWidth: 1023 });
  const sizes = calculateSizes(isSmall, isMobile, isTablet, isSpecial);
  return (
    <section className="min-h-screen w-full flex flex-col relative" id="about">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-4xl text-3xl font-medium text-black text-center font-generalsans">
          Hi, I'm Brian! <span className="waving-hand">👋</span>
        </p>
        <Typing
          text={[
            "Incoming SWE Intern @ Palantir",
            "CS + Math @ University of Maryland",
            "Previously @ AWS, Amazon, Northrop Grumman",
          ]}
          speed={100}
          eraseSpeed={50}
          eraseDelay={2000}
          typingDelay={500}
          className="hero_tag text-gray_gradient"
        />
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full">
          <PerspectiveCamera makeDefault position={[0, 0, 67]} />
          <ambientLight intensity={2} />
          <Desk
            scale={sizes.deskScale}
            position={sizes.deskPosition}
            rotation={[0, 0, 0]}
          />
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
