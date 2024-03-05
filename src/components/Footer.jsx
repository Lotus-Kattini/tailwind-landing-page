import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <section className="bg-[#0c1524]">
      <div className="container">
        <div className="flex items-center justify-between mt-[8rem] py-10 text-white">
          <div className="flex w-full flex-col md:flex-row items-center justify-between mt-[10rem] gap-[2rem]">
          <div className="w-[20rem] max-w-full">
          <a href="#">
            <img src="../../src/assets/logo.svg" alt="logo" />
          </a>
          <div className="flex items-start gap-[1.2rem] mt-4">
          <img src="../../src/assets/icon-location.svg"/>
          <p > Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, illum error cum quae distinctio molestias! Reiciendis officiis incidunt eum voluptatibus animi</p>
          </div>
          </div>
          <div className="w-[20rem] max-w-full">
            <div className="flex items-start gap-[1.2rem] mt-4">
            <img src="../../src/assets/icon-phone.svg"/>
            <p>+058458968</p>
            </div>
            <div className="flex items-start gap-[1.2rem] mt-4">
            <img src="../../src/assets/icon-email.svg"/>
            <p>example@gmail.com</p>
            </div>  
          </div>

          <div className="w-[20rem] max-w-full flex items-center gap-4">
            <div className="flex flex-col items-center gap-2 h-[5rem]">
            <a href="#" className="hover:underline">About Us</a>
              <a href="#" className="hover:underline">Jobs</a>
              <a href="#" className="hover:underline">Press</a>
              <a href="#" className="hover:underline">Blog</a>
            </div>
            <div className="flex flex-col items-center gap-2 h-[5rem]">
            <a href="#" className="hover:underline">Contact Us</a>
              <a href="#" className="hover:underline">Terms</a>
              <a href="#" className="hover:underline">Privacy</a>
            </div>

          </div>
          <div className="w-[20rem] max-w-full flex items-center gap-6 mt-14 sm:mt-8">
            <FaInstagram className="text-[2.2rem] border p-2 rounded-[50%]"/>
            <FaTwitter className="text-[2.2rem] border p-2 rounded-[50%]"/>
            <TiSocialFacebook className="text-[2.2rem] border p-2 rounded-[50%]"/>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer