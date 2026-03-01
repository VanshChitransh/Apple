import Hero from "./component/Hero"
import Navbar from "./component/Navbar"
import ProductViewer from "./component/ProductViewer"
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
import ShowCase from "./component/ShowCase";
gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <ProductViewer/>
      <ShowCase/>
    </div>
  )
}

export default App