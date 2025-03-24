const Footer = () => {
    return (
      <footer className=" text-gray-700 py-6 px-4 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
          {/* Brand Info */}
          <div>
          <p className="text-3xl text-[#101913] font-bold">
            Ba<span className="text-[#3C9379]">chira</span>?
          </p>
            <p className="mt-2">
              Bachira is an online store dealing with all products. We provide cheap, high-quality products to customers.
            </p>
          </div>
  
          {/* For Beginners */}
          <div>
            <h3 className="font-medium mb-2">For Beginner</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-green-600">About</a></li>
              <li><a href="#" className="hover:text-green-600">Career</a></li>
              <li><a href="#" className="hover:text-green-600">Promotion</a></li>
            </ul>
          </div>
  
          {/* Overview */}
          <div>
            <h3 className="font-medium mb-2">Overview</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-green-600">Product</a></li>
              <li><a href="#" className="hover:text-green-600">Categories</a></li>
              <li><a href="#" className="hover:text-green-600">Pricing</a></li>
            </ul>
          </div>
  
          {/* Connect Us */}
          <div>
            <h3 className="font-medium mb-2">Connect Us</h3>
            <p className="text-sm">abdulsattarghoto321@gmail.com</p>
            <p className="text-sm">+92 3103252121</p>
            <p className="text-sm">Akhtar Colony karachi, Sindh</p>
          </div>
        </div>
  
        {/* Copyright */}
        <div className="text-center text-xs text-gray-500 mt-6">
          © 2025 • All Rights Reserved Bachira by Gitanaja
        </div>
      </footer>
    );
  };
  
  export default Footer;
  