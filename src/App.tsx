import Hero from "./component/Hero"
import Navbar from "./component/Navbar"
import ProductViewer from "./component/ProductViewer"
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <ProductViewer/>
    </div>
  )
}

export default App