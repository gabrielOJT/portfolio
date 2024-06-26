function About() {
  return (
    <>
      <h1 className="xl:text-7xl lg:text-6xl text-center md:text-6xl text-5xl font-bold mb-4 text-gray-800 pt-20">
        ABOUT ME
      </h1>
      <div className="h-full flex flex-col md:flex-row items-center text-center justify-center pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-auto md:w-2/5">
          <img
            src={"/programmer.gif"}
            alt="Hero"
            className="w-auto float-left h-96 rounded"
          />
        </div>
        <div className="md:w-3/5 mb-8 md:mb-0">
          {/* <h1 className="xl:text-7xl lg:text-6xl md:text-6xl text-5xl font-bold mb-4 text-gray-900">
            ABOUT ME
          </h1> */}
          <p className="mb-4 text-justify text-gray-600">
            Hi, I'm Gab! I'm a fresh IT graduate, eager to contribute my skills
            in web development. I graduated Cum Laude and received awards for
            Best Programmer and Best in Capstone Research. Driven by my dream to
            become a professional programmer, I've been passionately learning
            and exploring technology since 2021. I'm proficient in HTML, CSS,
            and JavaScript, and have advanced my skills by learning React JS and
            Next JS. I also have backend knowledge with PHP, MySQL, NoSQL, and
            Postgres. During my internship at{" "}
            <a href="www.brisklabs.dev" target="_blank">
              www.brisklabs.dev
            </a>
            , I worked as a front-end and back-end developer on the fully
            functional www.gstandings.com Additionally, I've developed
            cross-platform applications using React with Ionic Framework and
            Capacitor. Despite being a fresh graduate, I believe I have the
            skills and determination to bring your website ideas to life. I'm
            ready and excited to enter the industry and make a significant
            impact.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
