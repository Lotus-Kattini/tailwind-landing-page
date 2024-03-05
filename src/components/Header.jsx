import { useEffect, useRef, useState } from "react"

function Header() {
  const headerRef=useRef()
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY > 100){
        headerRef.current.style.background='#0c1524';
        headerRef.current.style.padding='1rem 0';
      }
      else{
        headerRef.current.style.background='transparent';
        headerRef.current.style.padding='3rem 0';
      }
    })
  },[])
  const [link,setlinks]=useState(['Features','Team','SignIn'])
  return (
    <header ref={headerRef} className="pt-12 fixed top-0 left-0 w-full z-50 transition-all duration-200">
        <div className="container flex items-center justify-between  gap-[1.9rem] sm:gap-0 flex-col sm:flex-row">
          <a href="#">
              <img src="../../src/assets/logo.svg" alt="logo" />
          </a>
          <nav >
            <ul className="flex gap-10 items-center ">
              {link.map((link)=>
              <li key={link}>
                <a href={`/${link.toLowerCase()}`} className="text-white opacity-[0.7] hover:opacity-[1] hover:underline transition-all duration-200">{link}</a>
              </li>)}
            </ul>
          </nav>
        </div>
    </header>
  )
}

export default Header