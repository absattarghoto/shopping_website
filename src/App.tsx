import BrandSection from "./components/BrandSection/Index"
import CatagariSection from "./components/CatagariSection/Index"
import ChoseSection from "./components/ChoseSection/Index"
import Footer from "./components/Footer/Index"
import HeroSection from "./components/HeroSection/Index"
import Navbar from "./components/Navbar/Index"
import ProductSection from "./components/ProductSection/Index"



const App = () => {
  return (
    <>
   
      <Navbar/>
      <main className="mt-20"> 
       <HeroSection/>
       <BrandSection/>
       <CatagariSection/>
       <ChoseSection/>
       <ProductSection/>
       <Footer/>
      
      </main>
   
    </>
  )
}

export default App
