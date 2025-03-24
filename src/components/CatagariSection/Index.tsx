const CatagariSection = () => {
    return (
      <section className="px-4 md:px-8">
        <div>
          <p className="text-2xl sm:text-3xl font-bold text-[#101913] py-5">
            Browse Categories of <br className="hidden sm:block" />
            The Store
          </p>
        </div>
  
        {/* Mobile Layout: Stacked Cards */}
        <div className="sm:hidden grid gap-4 pb-8">
          {/* Card 1 */}
          <div className="relative group overflow-hidden h-[180px] rounded-lg">
            <div
              className="bg-[url('/Images/Group1.png')] bg-cover bg-center h-full w-full transform transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-60 transition duration-500" />
            <h1 className="absolute bottom-4 right-4 text-base font-bold text-white transition-transform duration-500 group-hover:-translate-y-2">
              Fashion -<br />
              <span className="font-normal">1000 items</span>
            </h1>
          </div>
  
          {/* Card 2 */}
          <div className="relative group overflow-hidden h-[180px] rounded-lg">
            <div
              className="bg-[url('/Images/Group2.png')] bg-cover bg-center h-full w-full transform transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-60 transition duration-500" />
            <h1 className="absolute bottom-4 right-4 text-base font-bold text-white transition-transform duration-500 group-hover:-translate-y-2">
              Skincare -<br />
              <span className="font-normal">2000 items</span>
            </h1>
          </div>
  
          {/* Card 3 */}
          <div className="relative group overflow-hidden h-[386px] rounded-lg">
            <div
              className="bg-[url('/Images/Group3.png')] bg-cover bg-center h-full w-full transform transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-60 transition duration-500" />
            <h1 className="absolute bottom-4 right-4 text-base font-bold text-white transition-transform duration-500 group-hover:-translate-y-2">
              Skincare -<br />
              <span className="font-normal">2000 items</span>
            </h1>
          </div>
  
          {/* Card 4 */}
          <div className="relative group overflow-hidden h-[386px] rounded-lg">
            <div
              className="bg-[url('/Images/Group4.png')] bg-cover bg-center h-full w-full transform transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-60 transition duration-500" />
            <h1 className="absolute bottom-4 right-4 text-base font-bold text-white transition-transform duration-500 group-hover:-translate-y-2">
              Skincare -<br />
              <span className="font-normal">2000 items</span>
            </h1>
          </div>
        </div>
  
        {/* Desktop Layout: Grid with Two Rows */}
        <div className="hidden sm:grid grid-rows-2 grid-flow-col gap-4 pb-8">
          {/* First Column: Two stacked cards */}
          <div className="row-span-2 flex flex-col gap-4">
            {/* Top Card */}
            <div className="relative group overflow-hidden h-[180px] w-[500px] rounded-lg">
              <div
                className="bg-[url('/Images/Group1.png')] bg-cover bg-center h-full w-full transform transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-60 transition duration-500" />
              <h1 className="absolute bottom-4 right-4 text-base font-bold text-white transition-transform duration-500 group-hover:-translate-y-2">
                Fashion -<br />
                <span className="font-normal">1000 items</span>
              </h1>
            </div>
            {/* Bottom Card */}
            <div className="relative group overflow-hidden h-[180px] w-[500px] rounded-lg">
              <div
                className="bg-[url('/Images/Group2.png')] bg-cover bg-center h-full w-full transform transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-60 transition duration-500" />
              <h1 className="absolute bottom-4 right-4 text-base font-bold text-white transition-transform duration-500 group-hover:-translate-y-2">
                Skincare -<br />
                <span className="font-normal">2000 items</span>
              </h1>
            </div>
          </div>
  
          {/* Second Column: Single tall card */}
          <div className="relative group row-span-2 overflow-hidden h-[386px] w-[287px] rounded-lg">
            <div
              className="bg-[url('/Images/Group3.png')] bg-cover bg-center h-full w-full transform transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-60 transition duration-500" />
            <h1 className="absolute bottom-4 right-4 text-base font-bold text-white transition-transform duration-500 group-hover:-translate-y-2">
              Skincare -<br />
              <span className="font-normal">2000 items</span>
            </h1>
          </div>
  
          {/* Third Column: Single tall card */}
          <div className="relative group row-span-2 overflow-hidden h-[386px] w-[361px] rounded-lg">
            <div
              className="bg-[url('/Images/Group4.png')] bg-cover bg-center h-full w-full transform transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-60 transition duration-500" />
            <h1 className="absolute bottom-4 right-4 text-base font-bold text-white transition-transform duration-500 group-hover:-translate-y-2">
              Skincare -<br />
              <span className="font-normal">2000 items</span>
            </h1>
          </div>
        </div>
      </section>
    );
  };
  
  export default CatagariSection;
  