import { useRef } from "react";

const images = [
  "/Images/Tokopedia.png",
  "/Images/gucci.png",
  "/Images/adidas.png",
  "/Images/Bukalapak.png",
  "/Images/Tokopedia.png",
  "/Images/gucci.png",
  "/Images/adidas.png",
  "/Images/Bukalapak.png",
  "/Images/Tokopedia.png",
  "/Images/gucci.png",
  "/Images/adidas.png",
  "/Images/Bukalapak.png",
];

const BrandSection = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (carouselRef.current) {
      carouselRef.current.style.animationPlayState = "paused";
    }
  };

  const handleMouseLeave = () => {
    if (carouselRef.current) {
      carouselRef.current.style.animationPlayState = "running";
    }
  };

  return (
    <section className="my-16 px-4">
      <div className="py-10 text-center">
        <p className="text-2xl sm:text-3xl font-bold text-[#101913]">
          We Collaborate With 250+ Leading Top <br className="hidden sm:block" />
          E-Commerce and Brands
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative overflow-hidden w-full py-6">
        <div
          ref={carouselRef}
          className="flex w-max animate-marquee space-x-8 sm:space-x-14"
        >
          {[...images, ...images].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Brand ${index}`}
              className="cursor-pointer h-auto max-w-[60px] sm:max-w-[100px] md:max-w-[140px] lg:max-w-[180px] xl:max-w-[220px]"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
