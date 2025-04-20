const Contact = () => {
  return (
    <div className="py-4">
      <div className="text-center py-5 ">
        <h2 className="uppercase font-semibold text-2xl">Contact us</h2>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-center gap-3 mt-5">
        <div className="lg:w-[400px] lg:h-[400px]">
          <img src="/public/shopLocation.png" alt="snapshop" />
        </div>
        <div className="  w-[400px]">
          <h3 className="text-2xl font-semibold">Our Store</h3>
          <div className="py-5 text-xl text-gray-500 text-left">
            <p>SnapShop E-Commerce Pvt. Ltd. </p>
            <p> 123 Innovation Street, Sector 42, Tech Park, </p>
            <p>Bangalore, Karnataka – 560001 India</p>
          </div>
          <div className="text-gray-600 text-left text-xl">
            <p className="mb-3">📞 +91 98765 43210 </p>
            <p>📧 support@codetuts.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
