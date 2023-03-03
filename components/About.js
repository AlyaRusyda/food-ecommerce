import Testi from "./Testi";

const About = () => {
  return (
    <>
      <section id="about">
        <div className="my-20">
          <h1 className="text-orange-600 font-bold text-4xl my-8 text-center">
            Apa Kata Mereka?
          </h1>
          <Testi />
        </div>
      </section>
    </>
  );
};

export default About;
