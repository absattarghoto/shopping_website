const HeroSection = () => {
    return (
      <section className="h-full">
        <div className="min-h-[60vh]  w-full flex flex-col-reverse sm:flex-row justify-between items-center px-4 ">
 {/* Left Content */}
 <div className="max-w-[460px] text-center sm:text-left mt-3 sm:mt-0">
          <h1 className="text-[36px] sm:text-[54px] font-bold text-[#101913] leading-tight sm:leading-[64px]">
            Best Place to Buy<br />
            <span className="text-[#3C9379]">Everything.</span>
          </h1>
          <p className="text-sm text-[#535A56] py-4 sm:py-5">
            At Bachira, you can shop for all your favorite beauty brands, clothes,
            household products, and more at a single place.
          </p>
          <button className="px-4 py-2 bg-[#3C9379] text-white rounded-lg hover:bg-[#2D7A63] transition">
            Shopping Now
          </button>
        </div>
  
        {/* Right Image */}
        <div className="w-full flex justify-center sm:justify-end">
          <img
            src="Images/hero_image.png"
            className="max-w-[280px] sm:max-w-[700px] h-auto "
            alt="Hero Section Image"
          />
        </div>
        </div>
       
      </section>
    );
  };
  
  export default HeroSection;
  