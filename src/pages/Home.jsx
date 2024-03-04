import Features from "../components/Features"
import Getstarted from "../components/Getstarted"
import Landing from "../components/Landing"
import Productivity from "../components/Productivity"
import Testimonials from "../components/Testimonials"

function Home() {
  return (
    <>
      <Landing/>
      <Features/>
      <Productivity/>
      <Testimonials/>
      <Getstarted/>
    </>
  )
}

export default Home