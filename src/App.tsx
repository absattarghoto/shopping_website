import BrandSection from "./components/BrandSection/Index"
import CatagariSection from "./components/CatagariSection/Index"
import HeroSection from "./components/HeroSection/Index"
import Navbar from "./components/Navbar/Index"



const App = () => {
  return (
    <>
   
      <Navbar/>
      <main className="mt-20"> 
       <HeroSection/>
       <BrandSection/>
       <CatagariSection/>
      
      </main>
   
    </>
  )
}

export default App
