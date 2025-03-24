const AnimatedCarousel = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <div>
        <p className="text-2xl sm:text-3xl font-bold text-[#101913] py-8">
          Popular Products From
          <br className="hidden sm:block" />
          All Brands
        </p>
      </div>

      <div className="flex gap-6 w-max animate-[scroll_20s_linear_infinite] mb-20">
        {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((_, index) => (
          <div
            key={index}
            className="relative h-[400px] w-[300px] flex-shrink-0 overflow-hidden rounded-2xl"
          >
            <img
              src={`Images/Group 2 ${
                index > 4 ? `(${index - 5})` : index > 0 ? `(${index})` : ""
              }.png`}
              alt={`Carousel item ${index + 1}`}
              className="h-full w-full object-cover transform transition-transform duration-700 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCarousel;
