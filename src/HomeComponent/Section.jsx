import realtracking from "../assets/Frame34276.png";
import flexdelivery from "../assets/Frame 34275.svg";
import support from "../assets/Frame34277.png";
import rectangle from "../assets/Rectangle.png";

const Section = () => {
  const testimony = [
    { tittle: "10000+", text: "Successful deliveries completed" },
    { tittle: "98%", text: "On-time delivery rate" },
    { tittle: "7000+", text: "Satified client" },
  ];
  const values = [
    {
      pic: realtracking,
      tittle: "Real time tracking",
      text: "Enjoy peace of mind with real-time tracking that keeps you updated on your delivery's journey,from pickup all the way to your door",
    },
    {
      pic: flexdelivery,
      tittle: "Flexible delivery",
      text: "Get your packages delivery when it's most convenient for you, with flexible options that fit your schedule",
    },
    {
      pic: support,
      tittle: "24/7 Support",
      text: "We're here for you anytime,day or night. Our dedicated support team is ready to answer your questions",
    },
  ];
  return (
    <div className="px-6 md:px-16">
      <div className="flex justify-around items-center py-6">
        {testimony.map((test, index) => (
          <div key={index} className="">
            <h2 className="font-semibold md:text-2xl">{test.tittle} </h2>
            <span className="md:text-base text-sm font-normal">
              {test.text}{" "}
            </span>
          </div>
        ))}
      </div>
      <div className=" text-center my-10 py-10">
        <p className=" border border-[#7f7caf] my-3  px-3 w-fit mx-auto">
          Core Commitments
        </p>
        <h2 className="font-semibold py-2 text-3xl">Values that define us</h2>
        <span className="text-base">
          Our values are the foundation of everything we do
        </span>
        <div className="md:flex justify-around gap-6 items-center mt-10  ">
          {values.map((value, index) => (
            <div
              key={index}
              className="border mt-4 md:mt-0  flex-1 text-left px-6 py-2 h-fit md:h-[300px] rounded-lg"
            >
              <img src={value.pic} alt="" className="py-3" />
              <h2 className="font-semibold text-2xl my-3">{value.tittle} </h2>
              <p className="text-base  font-normal py-3">{value.text} </p>
            </div>
          ))}
        </div>
      </div>
      <div className="md:flex justify-between items-center gap-6 my-10">
        <div className=" flex-1">
          <img src={rectangle} alt="" />
        </div>
        <div className="flex-1  md:px-10 mt-8 md:mt-0">
          <p className="border border-[#7f7caf] px-2 w-fit">About Us</p>
          <h2 className="font-medium py-2 text-4xl">Apex Logistics</h2>
          <p className="text-base font-normal py-3">
            At Apex Logistics, we are dedicated to redefining logistics solution
            with efficiency, reliability, and innovation. Specializing in
            end-to-end supply chain management,we deliver a seamless
            experiencewith global reach,serving businesses of all sizes
          </p>
          <br />
          <p className="py-3 text-base font-normal">
            From real-time tracking to flexing delivery options ,our services
            are designed to keep pace with the needs of a dynamic world. Our
            24/7 support team is committed to ensuring that each delivery
            reaches its destination safely and on time.
          </p>
          <button className="bg-[#7f7caf] text-white mt-8 px-5 py-2 font-semibold text-xl rounded-lg">
            See more
          </button>
        </div>
      </div>
      <div className="bg-[#e5e4f2] rounded-lg my-10 py-5">
        <h2 className="text-center font-medium text-3xl ">
          Delivery Cost Estimator
        </h2>
        <p className="text-center py-2 text-base font-normal text-gray-600">
          Get an instant delivery cost estimate by entering the details below
        </p>
        <div className="px-3 md:w-[50%] grid grid-cols-2 gap-4 mx-auto mt-6">
          <div className="">
            <label htmlFor="">Enter pickup location</label>
            <input
              type="text"
              placeholder="E.g City or State"
              className=" w-full py-2 rounded-lg px-2 my-2 outline-none"
            />
          </div>
          <div className="">
            <label htmlFor="">Enter delivery destination</label>
            <input
              type="text"
              placeholder="E.g City or State"
              className=" w-full py-2 rounded-lg px-2 my-2 outline-none"
            />
          </div>
          <div className="">
            <label htmlFor="">Package Weight</label>
            <input
              type="text"
              placeholder="E.g., 5 ibs or 2.3kg"
              className=" w-full py-2 rounded-lg px-2 my-2 outline-none"
            />
          </div>

          <div className="">
            <label htmlFor="">Delivery Speed</label>
            <input
              type="text"
              placeholder="Select speed option"
              className=" w-full py-2 rounded-lg px-2 my-2 outline-none"
            />
          </div>
          <div className="">
            <input
              type="checkbox"
              name=""
              id=""
              className="w-5 h-5  px-2 mr-2 outline-none"
            />
            <label htmlFor="">Do you need special handling</label>
          </div>
        </div>
        <button className="w-[50%] bg-[#7f7caf] hover:bg-[#a09cd8] font-semibold text-xl text-white mt-6 py-2 block mx-auto border text-center rounded-lg">
          Get Quotation
        </button>
      </div>
    </div>
  );
};

export default Section;
