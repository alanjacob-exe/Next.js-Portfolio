import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { Jost } from "next/font/google";

const jost = Jost({ weight: "500", subsets: ["latin"] });

import { Didact_Gothic } from "next/font/google";
const didact = Didact_Gothic({
  weight: "400",
  subsets: ["latin"],
});

export default function FirstPost(props) {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <>
      <div className="w-full min-h-screen bg-white ">
        <Particles
          className="h-full w-full absolute justify-center z-1"
          height="100vh"
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            autoPlay: true,
            background: {
              color: { value: "#567698" },
              image: "linear-gradient(180deg, #283E51 0%, #0A2342 100%)",
              position: "",
              repeat: "",
              size: "",
              opacity: 1,
            },
            backgroundMask: {
              composite: "destination-out",
              cover: { color: { value: "#fff" }, opacity: 1 },
              enable: false,
            },
            backgroundMode: { enable: false, zIndex: -1 },
            detectRetina: true,
            infection: {
              cure: false,
              delay: 0,
              enable: false,
              infections: 0,
              stages: [],
            },
            interactivity: {
              events: {
                onClick: { enable: true, mode: "repulse" },
                onDiv: {
                  selectors: [],
                  enable: false,
                  mode: [],
                  type: "circle",
                },
                onHover: {
                  enable: true,
                  mode: "bubble",
                  parallax: { enable: false, force: 2, smooth: 10 },
                },
                resize: true,
              },
              modes: {
                attract: { distance: 200, duration: 0.4, speed: 1 },
                bounce: { distance: 200 },
                bubble: { distance: 250, duration: 2, opacity: 0, size: 0 },
                connect: { distance: 80, links: { opacity: 0.5 }, radius: 60 },
                grab: {
                  distance: 400,
                  links: { blink: false, consent: false, opacity: 1 },
                },
                light: {
                  area: {
                    gradient: {
                      start: { value: "#ffffff" },
                      stop: { value: "#000000" },
                    },
                    radius: 1000,
                  },
                  shadow: { color: { value: "#000000" }, length: 2000 },
                },
                push: { quantity: 4 },
                remove: { quantity: 2 },
                repulse: { distance: 400, duration: 0.4, speed: 1 },
                slow: { factor: 3, radius: 200 },
                trail: { delay: 1, quantity: 1 },
              },
            },
            manualParticles: [],
            motion: { disable: false, reduce: { factor: 4, value: false } },
            particles: {
              bounce: {
                horizontal: {
                  random: { enable: false, minimumValue: 0.1 },
                  value: 1,
                },
                vertical: {
                  random: { enable: false, minimumValue: 0.1 },
                  value: 1,
                },
              },
              collisions: {
                bounce: {
                  horizontal: {
                    random: { enable: false, minimumValue: 0.1 },
                    value: 1,
                  },
                  vertical: {
                    random: { enable: false, minimumValue: 0.1 },
                    value: 1,
                  },
                },
                enable: false,
                mode: "bounce",
              },
              color: {
                value: "#ffffff",
                animation: { enable: false, speed: 1, sync: true },
              },
              life: {
                count: 0,
                delay: {
                  random: { enable: false, minimumValue: 0 },
                  value: 0,
                  sync: false,
                },
                duration: {
                  random: { enable: false, minimumValue: 0.0001 },
                  value: 0,
                  sync: false,
                },
              },
              links: {
                blink: false,
                color: { value: "#ffffff" },
                consent: false,
                distance: 150,
                enable: false,
                frequency: 1,
                opacity: 0.4,
                shadow: { blur: 5, color: { value: "#00ff00" }, enable: false },
                triangles: { enable: false, frequency: 1 },
                width: 1,
                warp: false,
              },
              move: {
                angle: { offset: 45, value: 90 },
                attract: { enable: false, rotate: { x: 600, y: 600 } },
                direction: "none",
                distance: 0,
                enable: true,
                gravity: { acceleration: 9.81, enable: false, maxSpeed: 50 },
                noise: {
                  delay: {
                    random: { enable: false, minimumValue: 0 },
                    value: 0,
                  },
                  enable: false,
                },
                outModes: {
                  default: "out",
                  bottom: "out",
                  left: "out",
                  right: "out",
                  top: "out",
                },
                random: true,
                size: false,
                speed: 1,
                straight: false,
                trail: {
                  enable: false,
                  length: 10,
                  fillColor: { value: "#000000" },
                },
                vibrate: false,
                warp: false,
              },
              number: {
                density: { enable: true, area: 800, factor: 1000 },
                limit: 0,
                value: 160,
              },
              opacity: {
                random: { enable: true, minimumValue: 1 },
                value: 1,
                animation: {
                  enable: true,
                  minimumValue: 0,
                  speed: 1,
                  sync: false,
                },
              },
              reduceDuplicates: false,
              rotate: {
                random: { enable: false, minimumValue: 0 },
                value: 0,
                animation: { enable: false, speed: 0, sync: false },
                direction: "clockwise",
                path: false,
              },
              shadow: {
                blur: 0,
                color: { value: "#000000" },
                enable: false,
                offset: { x: 0, y: 0 },
              },
              shape: {
                options: {
                  polygon: { nb_sides: 5 },
                  star: { nb_sides: 5 },
                  image: {
                    src: "https://cdn.matteobruni.it/images/particles/github.svg",
                    width: 100,
                    height: 100,
                  },
                  images: {
                    src: "https://cdn.matteobruni.it/images/particles/github.svg",
                    width: 100,
                    height: 100,
                  },
                },
                type: "circle",
              },
              size: {
                random: { enable: true, minimumValue: 1 },
                value: 3,
                animation: {
                  destroy: "none",
                  enable: false,
                  minimumValue: 0.3,
                  speed: 4,
                  startValue: "max",
                  sync: false,
                },
              },
              stroke: {
                width: 0,
                color: {
                  value: "#000000",
                  animation: { enable: false, speed: 1, sync: true },
                },
              },
              twinkle: {
                lines: { enable: false, frequency: 0.05, opacity: 1 },
                particles: { enable: false, frequency: 0.05, opacity: 1 },
              },
            },
            pauseOnBlur: true,
            pauseOnOutsideViewport: false,
            themes: [],
          }}
        />{" "}
        <div className=" z-10 absolute   h-screen  w-full flex-col flex ">
          <div className="w-full h-[10%]  ">
            <div className=" flex w-[10%] h-full">
              <div className="text-2xl m-auto">
                {" "}
                <div className={jost.className}> Alan</div>
              </div>
            </div>
          </div>
          <div className="w-[80%] h-[90%] mt-auto  mx-auto flex">
            <div className="h-[40%] flex justify-center text-center w-full  mt-[12%]">
              <div className="my-auto text-[130px]">
                <div className={jost.className}>React developer.</div>
              </div>
            </div>
            {/* <div className="w-full h-[10%] flex border mt-[7%]">
              <div className="w-[50%] font-mono text-3xl h-full ">
                Welcome Visitor👋
              </div>
              <div className="w-[50%] text-right border">Welcome Visitor👋</div>
            </div> */}
            {/* <div className="w-full h-[78%] border flex">
              <div className="w-[30%] border h-full">1</div>
              <div className="w-[70%] h-full ">
                <div className="h-full w-full  flex">
                  <div className="h-[70%] w-full bg-black my-auto">
                    <div className={jost.className}>
                      <div className="text-6xl font-semibold text-orange-500">
                        Hi I'm
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          {/* <div className=" relative top-16 left-14 font-mono font-semibold text-2xl flex">
              Welcome Visitor👋,
            </div>
            <div className="w-full absolute top-16 right-0  ml-auto font-mono font-semibold text-2xl flex">
              <div className="ml-auto w-[20%] border">facebook</div>
          </div> */}
          {/* <div className="w-full h-[90%]  bg-white">Body</div> */}
          {/* <div className="font-semibold text-white text-8xl  text-center  mt-10">
            Hello 👋,
          </div>
          <div className="font-semibold text-white text-8xl  text-center  mt-10">
            I'm Alan
          </div> */}
        </div>
      </div>
      <div className="h-[500px] w-full flex bg-black justify-center text-center">
        <Zoom bottom>
          {" "}
          <div className="my-auto relative font-semibold text-6xl">Name</div>
        </Zoom>
      </div>
    </>
  );
}
