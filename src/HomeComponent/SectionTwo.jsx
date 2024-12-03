import company from "../assets/Company logo.svg";
import company1 from "../assets/Company logo (1).svg";
import company2 from "../assets/Company logo (2).svg";
import company3 from "../assets/Company logo (3).svg";
import company4 from "../assets/Company logo (4).svg";
import company5 from "../assets/Company logo (5).svg";
import company6 from "../assets/Company logo (6).svg";
import bikebox from "../assets/bikebox.png";
import star from "../assets/star.svg";

import cl1 from "../assets/Ellipse 1.png";
import cl2 from "../assets/Ellipse 1 (1).png";
import cl3 from "../assets/Ellipse 1 (2).png";
import cl4 from "../assets/Ellipse 1 (3).png";
import cl5 from "../assets/Ellipse 1 (4).png";
import cl6 from "../assets/person.svg";

const SectionTwo = () => {
  const deliveries = [
    {
      id: 1,
      tittle: "Same day delivery",
      text: "For those urgent needs, our same-day delivery service gets your packages to their quickly and reliably.",
    },
    {
      id: 2,
      tittle: "Scheduled Delivery",
      text: "Choose a delivery date and time that suit you.We offer flexible scheduling to make sure your items arrive when needed.",
    },
    {
      id: 3,
      tittle: "Contactless Delivery",
      text: "Our contactless delivery option ensures that all deliveries are safe and secure,with no physical interaction required.",
    },
    {
      id: 4,
      tittle: "Bulk Delivery",
      text: "Perfect for businesses,our multi-stop bulk delivery services optimize routes to handle multiple deliveries efficiently",
    },
  ];
  const client = [
    {
      name: "Tobi Bakare",

      text: "lorem ipsum",
      pics: cl1,
    },
    {
      name: "Ngozi Obi",
      text: "lorem ipsum",
      pics: cl2,
    },
    {
      name: "Adesuwa Ighodaro",
      text: "lorem ipsum",
      pics: cl6,
    },
    {
      name: "Chukwudi Okafor",
      text: "lorem ipsum",
      pics: cl3,
    },
    {
      name: "Chukwudi Okafor",
      text: "lorem ipsum",
      pics: cl4,
    },
    {
      name: "Adebayo Adeyemi",
      text: "lorem ipsum",
      pics: cl5,
    },
  ];
  const patners = [
    { pics: company },
    { pics: company1 },
    { pics: company2 },
    { pics: company3 },
    { pics: company4 },
    { pics: company5 },
    { pics: company6 },
  ];

  return (
    <div className="">
      <div className="my-6">
        <h2 className="text-center text-2xl text-[#636262] py-3">
          Our partners
        </h2>
        <div className="flex justify-between gap-1 px-6">
          {patners.map((patner, index) => (
            <div className="" key={index}>
              <img src={patner.pics} alt="" />
            </div>
          ))}
        </div>
      </div>
      <div className="md:flex justify-center gap-20 px-6 md:px-16 bg-[#7f7caf] md:h-fit py-5">
        <div className="text-[#ffffff] py-6">
          <p className="border border-[#ffffff] px-2 w-fit">Our Services</p>
          <h2 className="font-semibold py-2 text-3xl">Why choose us</h2>
          <p className="text-base py-3">
            Our team is here to make delivery simple, convenient, and reliable ,
            no app required
          </p>
        </div>
        <div className="md:grid grid-cols-2 gap-5 py-6  md:px-10">
          {deliveries.map((delivery, index) => (
            <div
              key={index}
              className="rounded-lg px-4 h-[250px] md:h-[300px] py-2 bg-white mt-4 md:mt-0"
            >
              <div className="w-12 h-12 my-2 flex justify-center items-center text-white font-medium bg-[#7f7caf] rounded-full">
                <p className="">{delivery.id} </p>
              </div>
              <h2 className="font-semibold text-2xl my-3">
                {delivery.tittle}{" "}
              </h2>
              <p className="text-base font-normal">{delivery.text} </p>
            </div>
          ))}
        </div>
      </div>
      <div className="md:flex justify-between gap-6  items-center md:px-16 px-6 my-16">
        <div className="flex-1 mx-4">
          <p className="border border-[#7f7caf] px-4 w-fit">Join Us</p>
          <h2 className="font-meduim py-2 text-3xl">Become a rider</h2>
          <p className="text-base py-3">
            Here are the four steps to becoming a rider with Apex
          </p>
          <nav>
            <div className=" list-none  mt-5 ">
              <li className="flex space-x-3  my-3  w-full ">
                <div className="w-10 h-10  rounded-full p-2    flex justify-center items-center text-white  bg-[#7f7caf] ">
                  <p className="">1</p>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">Apply Online</h3>
                  <p className="py-2">
                    Fill out our rider application form on the Apex website,
                    providing your basic information,contact details, and any
                    relevant experience.
                  </p>
                </div>
              </li>
              <li className="flex space-x-3 my-4">
                <p className="w-10 h-10 p-2 bg-[#7f7caf] text-white rounded-full  text-center">
                  <span>2</span>
                </p>

                <div className="flex-1">
                  <h3 className="font-medium">Background and Vehicle check</h3>
                  <p className="py-2">
                    We'll conduct a background check and inspect your vehicle to
                    meet our standard.
                  </p>
                </div>
              </li>
              <li className="flex space-x-3 my-4">
                <p className="w-10 h-10 p-2 bg-[#7f7caf] text-white rounded-full  text-center">
                  <span>3</span>
                </p>

                <div className="flex-1">
                  <h3 className="font-medium">Attend Training</h3>
                  <p className="py-2">
                    Open approved, you'll complete a training session covering
                    our delivery process,customer service expectations.
                  </p>
                </div>
              </li>
              <li className="flex gap-4 my-4">
                <p className="text-center bg-[#7f7caf] text-white w-10 h-10 p-2 rounded-full">
                  <span>4</span>
                </p>
                <div className="flex-1">
                  <h3 className="font-medium">Start Delivering</h3>
                  <p>
                    After training you'll receive your rider gear and be ready
                    to hit the road! Log into our app, accept orders and start
                    delivering.
                  </p>
                </div>
              </li>
            </div>
          </nav>
          <button className="bg-[#7f7caf] text-white mt-8 px-8 py-2 font-meduim text-xl rounded-lg">
            Join team
          </button>
        </div>
        <div className="flex-1 text-right mt-5 md:mt-0">
          <img src={bikebox} alt="" className="w-[450px] block mx-auto" />
        </div>
      </div>
      <div className="my-10 px-6 md:px-16 bg-[#7f7caf] py-6">
        <div className="py-3 text-white">
          <p className="border border-[#ffffff] px-2 w-fit">Testimonials</p>
          <h2 className="font-semibold py-2 text-2xl">What our clients say</h2>
        </div>
        <div className="md:grid grid-cols-3 gap-5 mt-8 mb-3 ">
          {client.map((cl, index) => (
            <div
              key={index}
              className="py-2 px-3 mt-8 md:mt-0 rounded-lg bg-white"
            >
              <div className="flex justify-between pt-2 my-2">
                <div className="flex space-x-1 ">
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                </div>
                <span className="font-light"> 1 day</span>
              </div>
              <p className="text-base font-normal py-3 pr-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                minima perspiciatis repellat voluptatibus expedita labore,
                reprehenderit magnam? Esse ut sunt maxime fugit repellendus
                itaque hic laboriosam nobis dolor necessitatibus! Illo.
              </p>
              <div className="flex justify-between mt-5 py-2 ">
                <div className="flex gap-4 w-fit">
                  <img src={cl.pics} alt="" />
                  <div className="">
                    <h2 className="font-medium">{cl.name} </h2>
                    <p className="capitalize">google</p>
                  </div>
                </div>
                <p className="text-3xl font-bold">&#x201f;</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
