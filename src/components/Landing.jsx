function Landing() {
  return (
    <section className="bg-[#1c2230]">
      <div className="container ">
        <div className="element-center flex-col mx-auto pt-52">
        <div className="w-[750px] max-w-full">
          <img src="/src/assets/illustration-intro.png" alt="landing-img" className="w-full h-fit"/>
        </div>
        <div className="text-white text-center">
          <h1 className="text-[1rem] md:text-[1.3rem] font-semibold mb-4">
            All your files in one secure location
            <br />
            accessable anywhere
          </h1>
          <p className="font-normal text-lg px-4 md:max-w-[600px] sm:max-w-full md:mx-auto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque cum
            consequuntur hic, esse asperiores incidunt ut sapiente reiciendis
            illo voluptates fuga dolor accusamus beatae natus aliquam, excepturi
            sequi quibusdam sint!
          </p>
        </div>
          <a href="/" className="btn mt-4 px-8 sm:px-14 text-white">Get started</a>
        </div>
      </div>
      <div className="w-full h-[8rem] sm:h-[13rem]">
        <img className="w-full h-full" src="/src/assets/bg-curvy-desktop.svg" alt="curve" />
      </div>
    </section>
  );
}

export default Landing;
