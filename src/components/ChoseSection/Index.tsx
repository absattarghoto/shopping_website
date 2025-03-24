const ChoseSection = () => {
    return (
      <section className="px-4 md:px-0">
        <div>
          <p className="text-center text-3xl md:text-4xl text-[#101913] font-bold py-12 md:py-20">
            Why Choose Ba<span className="text-[#3C9379]">chira</span>?
          </p>
        </div>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8 md:gap-4 pb-16">
          {/* Feature Card 1 */}
          <div className="flex-1 text-center px-4 group transition-all duration-300 hover:-translate-y-2 cursor-pointer">
            <div className="flex justify-center mb-4">
              <img 
                src="Images/Icon (4).png" 
                alt="Free Delivery" 
                className="w-16 h-16 transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <p className="text-xl text-[#101913] font-bold mb-2 transition-colors duration-300 group-hover:text-[#3C9379]">
              Free Delivery
            </p>
            <p className="text-sm text-[#535A56] group-hover:text-[#101913] transition-colors duration-300">
              Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do eiusmod tempor
            </p>
          </div>
  
          {/* Feature Card 2 */}
          <div className="flex-1 text-center px-4 group transition-all duration-300 hover:-translate-y-2 cursor-pointer">
            <div className="flex justify-center mb-4">
              <img 
                src="Images/Icon (5).png" 
                alt="Trusted Platform" 
                className="w-16 h-16 transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <p className="text-xl text-[#101913] font-bold mb-2 transition-colors duration-300 group-hover:text-[#3C9379]">
              Trusted Platform
            </p>
            <p className="text-sm text-[#535A56] group-hover:text-[#101913] transition-colors duration-300">
              Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do eiusmod tempor
            </p>
          </div>
  
          {/* Feature Card 3 */}
          <div className="flex-1 text-center px-4 group transition-all duration-300 hover:-translate-y-2 cursor-pointer">
            <div className="flex justify-center mb-4">
              <img 
                src="Images/Icon (6).png" 
                alt="Here For You" 
                className="w-16 h-16 transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <p className="text-xl text-[#101913] font-bold mb-2 transition-colors duration-300 group-hover:text-[#3C9379]">
              Here For You
            </p>
            <p className="text-sm text-[#535A56] group-hover:text-[#101913] transition-colors duration-300">
              Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do eiusmod tempor
            </p>
          </div>
        </div>
      </section>
    )
  }
  
  export default ChoseSection