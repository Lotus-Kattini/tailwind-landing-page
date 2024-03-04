import { useState } from "react"
import FeaturesBox from "./FeaturesBox"

function Features() {
    const [items,setitems]=useState([
        {
        icon:"icon-access-anywhere.svg",
        title:'Access your files, anywhere',
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ullam neque sequi "
        },
        {
        icon:"icon-security.svg",
        title:'Real time, collaboration',
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ullam neque sequi "
        },
        {
        icon:"icon-collaboration.svg",
        title:'Store any type of files',
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ullam neque sequi "
        },
        {
        icon:"icon-any-file.svg",
        title:'Store any type of files',
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ullam neque sequi "
        },
])
  return (
    <section >
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 w-[50rem] mx-auto max-w-full">
                {items.map((item,index)=>
                <FeaturesBox key={index} title={item.title} icon={item.icon} desc={item.desc}/>
                )}
            </div>
        </div>
    </section>
  )
}

export default Features