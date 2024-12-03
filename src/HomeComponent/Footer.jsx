import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import facebook from "../assets/facebook.svg";
import linkedin from "../assets/linkin.svg";
import insta from "../assets/insta.svg";
import x from "../assets/x.svg";

const Footer = () => {
  return (
    <div className="mt-16">
      <div className="md:flex px-6 md:px-16 my-6 ">
        <div className="flex-1">
          <div className="logo flex space-x-1 py-3 text-[#7f7caf]">
            <img src={logo} alt="logo" />
            <h2 className="text-2xl font-semibold   ">Apex</h2>
          </div>
          <p className="py-3 pr-5">
            Join thousands of businesses and individuals who trust Apex for
            their logistics needs and experience the difference of
            efficient,dependable service.
          </p>
          <div className="my-5">
            <h3 className="font-semibold">Subscribe to our newsletter</h3>
            <div className="border md:w-[60%]  flex rounded-lg py-1 px-1">
              <input
                type="text"
                placeholder="Enter email address"
                className=" w-full py-2 px-1 outline-none"
              />
              <button className=" px-8 py-2 text-white bg-[#7f7caf] hover:bg-[#a09cd8] rounded-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="md:flex justify-around  mt-4 md:mt-0 flex-1 ">
          <div className="">
            <h3 className="py-3">
              <Link className="text-[#636262] text-xl">Home</Link>
            </h3>
            <nav>
              <div className="list-none">
                <li className="py-3">
                  <Link>About</Link>
                </li>
                <li className="py-2 md:py-3">
                  <Link>Pricing</Link>
                </li>
                <li className="py-2 md:py-3">
                  <Link>Services</Link>
                </li>
              </div>
            </nav>
          </div>

          <div className="mt-2 md:mt-0">
            <h3 className="py-3">
              <Link className="text-[#636262] text-xl">Resources</Link>
            </h3>
            <nav>
              <div className="list-none">
                <li className="py-2 md:py-3">
                  <Link>FAQs</Link>
                </li>
                <li className="py-2 md:py-3">
                  <Link>Blogs</Link>
                </li>
                <li className="py-2 md:py-3">
                  <Link>Press</Link>
                </li>
              </div>
            </nav>
          </div>
          <div className="mt-2 md:mt-0">
            <h3 className="py-3">
              <Link className="text-[#636262] text-xl">Company</Link>
            </h3>
            <nav>
              <div className="list-none">
                <li className="py-2 md:py-3 flex gap-2">
                  <Link className="pt-2">Careers</Link>
                  <p className="rounded-md  px-2  bg-[#7f7caf] text-center text-white">
                    Hiring
                  </p>
                </li>
                <li className="py-2 md:py-3">
                  <Link>Partners</Link>
                </li>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="border-t-2 px-3 md:px-16 py-3 flex justify-between">
        <p className="text-[#636262] text-sm">
          apexlogistics 2024.Allrights reserved
        </p>
        <div className="flex space-x-2">
          <img src={facebook} alt="" className="w-5" />
          <img src={linkedin} alt="" className="w-5" />
          <img src={insta} alt="" className="w-5" />
          <img src={x} alt="" className="w-5" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
