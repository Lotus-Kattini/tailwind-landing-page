import { useState } from "react";

function Testimonials() {
  const [testimonials, settestimonials] = useState([
    {
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ut voluptatibus dicta, ",
      img:'profile-1.jpg',
      name:'Satlish batel',
      desc:'Founder & SEO'
    },
    {
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ut voluptatibus dicta, ",
      img:'profile-2.jpg',
      name:'Bruse yekl',
      desc:'Founder & SEO'
    },
    {
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ut voluptatibus dicta, ",
      img:'profile-3.jpg',
      name:'Eva ilo',
      desc:'Founder & SEO'
    },
  ]);
  return (
    <section className="pb-28">
      <div className="container relative">
        <div className="w-14 z-10 absolute left-30 top-[-2rem] max-w-full">
            <img src="/assets/bg-quotes.png" alt="quets" className="w-full h-full object-contain"/>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-white relative z-10 px-2">
          {testimonials.map((testimonial,index)=><div key={index} className="bg-[#21293c] p-8">
          <p className="pb-6">{testimonial.p}</p>
          <div className="flex items-center gap-4 w-full">
              <img src={`/assets/${testimonial.img}`} alt="img" className="w-[2rem] h-[2rem] rounded-full object-contain"/>
            <div>
                <h3 className="font-semibold ">{testimonial.name}</h3>
                <p className="font-normal text-sm text-gray-400">{testimonial.desc}</p>
            </div>
          </div>
          </div>)}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
