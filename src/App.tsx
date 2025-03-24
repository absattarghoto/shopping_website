import BrandSection from "./components/BrandSection/Index"
import HeroSection from "./components/HeroSection/Index"
import Navbar from "./components/Navbar/Index"



const App = () => {
  return (
    <>
   
      <Navbar/>
      <main className="mt-20"> 
       <HeroSection/>
       <BrandSection/>
      
      </main>
   
    </>
  )
}

export default App
