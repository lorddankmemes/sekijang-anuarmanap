import PosterImg from "../assets/img/pic.png";
import TagImg from "../assets/img/Anuar Manap 1.2.png";
import ReactGA from "react-ga";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <>
      <section>
        <div className="w-full relative mx-auto max-w-screen-2xl px-4 pt-24 sm:px-6 lg:flex lg:flex-row lg:px-8">
          <div className="basis-1/2 flex justify-center scale-[1.4] ">
            <img
              src={PosterImg}
              alt="Anuar Manap"
              className="w-auto h-[579px]"
            />
          </div>
          <div className="basis-1/2 flex text-center justify-center items-center sm:text-left">
            <div className="max-w-sm">
              <img src={TagImg} alt="Anuar" className="scale-[1.2]" />
              <div className="text-center py-20">
                <h1 className="text-5xl">
                  <span className="text-gray-700">
                    #anuarmanap #anakjatisekijang
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
