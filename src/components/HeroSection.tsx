import Typewriter from "typewriter-effect";

import { IoMailOutline } from "react-icons/io5";
import { IoDownloadOutline } from "react-icons/io5";

function HeroSection() {
  return (
    <>
      <div className="absolute sm:px-6 lg:px-8 top-0 left-0 flex text-center justify-center items-center z-40 h-dvh w-full text-white">
        <div className="mb-8 md:mb-0 ">
          <h1 className="xl:text-7xl lg:text-6xl md:text-6xl text-5xl font-bold mb-4 drop-shadow-lg shadow-black">
            Hi I'm Gabriel, <br />
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Web Developer")
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString("Web Builders")
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString("Web Design")
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString("Ecommerce")
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString("SEO")
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString("App Developer")
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString("UI/UX")
                  .pauseFor(2500)
                  .deleteAll()
                  .start();
              }}
              options={{
                loop: true,
              }}
            />
          </h1>
          <p className="text-2xl md:text-4xl font-bold mb-4 drop-shadow-lg shadow-black">
            I'm a Developer based in the Philippines.
          </p>
          <div className="flex gap-10 justify-center">
            <a
              href="mailto:mail.gabrietutor@gmail.com"
              className="bg-orange-600 text-lg hover:scale-105 hover:bg-orange-500 text-white font-bold py-3 px-5 rounded mt-8 drop-shadow-lg shadow-black duration-75 ease-in-out"
            >
              <div className="flex items-center gap-1">
                <IoMailOutline />
                <span>Hire me</span>
              </div>
            </a>
            <a href="https://drive.google.com/file/d/1ZP7dAJwzyzfK4WvBGvK2E8g3VL7lzWoi/view?usp=sharing" className="border-2 border-orange-300 text-lg hover:scale-105 hover:bg-orange-500 hover:border-orange-500 text-white font-bold py-3 px-5 rounded mt-8 drop-shadow-lg shadow-black duration-75 ease-in-out">
              <div className="flex items-center gap-1">
                <IoDownloadOutline />
                <span>Resume</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
