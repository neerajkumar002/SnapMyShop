const Footer = () => {
  return (
    <footer className="lg:px-14">
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="lg:w-[500px] ">
          <h3 className="font-semibold  text-3xl ">SNAPMYSHOP</h3>
          <p className="text-sm py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            iure, commodi quasi amet unde, quibusdam recusandae quis accusamus
            numquam nemo labore earum tempora. Obcaecati quibusdam numquam
            accusantium tempora? Illum, ad?
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 ">
          <div>
            <h3 className="uppercase font-semibold">Company</h3>
            <ul className="flex flex-col gap-2">
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="uppercase font-semibold">get in touch</h3>
            <p>+91 0000000001</p>
            <p>snapmyshop@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="text-center py-4 text-sm border-b border-t border-gray-500 mt-4 ">
        <p>Copyright 2025 &copy; snapmyshop.dev - All Right Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
