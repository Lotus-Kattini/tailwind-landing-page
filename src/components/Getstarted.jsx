
function Getstarted() {
  return (
    <section>
        <div className="container relative text-white">
            <div className="bg-[#1c2230] absolute w-[50rem] max-w-full left-[50%] translate-x-[-50%] top-[-150%] element-center p-2 flex-col rounded-sm min-h-[275px]">
                <h1 className="font-bold text-[1rem] md:text-[2rem] mb-2">Get Early Access Today </h1>
                <p className="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                <div className="w-full mx-auto flex items-center justify-between md:px-[4rem] flex-wrap gap-[1rem] md:gap-[2.5rem]">
                    <input className="rounded-[2rem] w-full md:flex-1 h-[3rem] pl-5 outline-none text-black" type="email" placeholder="example@gmail.com"/>
                    <button className="w-full h-[3rem] md:w-[13rem] bg-[#42b0d1] hover:bg-[#8cdae4] transition-all duration-200 rounded-[2rem]">Get started for free</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Getstarted