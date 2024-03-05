function Productivity() {
  return (
    <section className="pb-28">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 text-white gap-12 mx-auto mt-8 place-items-center">
          <div className="w-[550px] max-w-full">
            <img
              src="../../src/assets/illustration-stay-productive.png"
              alt="productive img"
              className="w-full h-fit"
            />
          </div>
          <div >
            <h1 className="font-medium leading-8 text-[2.1rem]">
              Stay productive,
              <br />
              whereever you are
            </h1>
            <div className="my-6 font-normal text-sm tracking-[0.8px]">
              <p className="mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                qui reiciendis aperiam nihil nam 
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                qui reiciendis aperiam nihil nam 
              </p>
            </div>
            <a href="/" className="flex items-center w-fit gap-1  text-[#67dbda] hover:text-[#42b0d1] transition-all duration-200 border-b border-[#67dbda] border-solid pb-2">
                See how Floyer works
                <img src="/assets/icon-arrow.svg" alt="arrow" className="object-contain animate-[movRight_1s_infinite_ease-in-out]"/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Productivity;
