import { useState } from "react";
import plus from "../assets/Icon wrap (1).svg";
import sub from "../assets/Icon wrap.svg";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What areas does Apex deliver to?",
      answer:
        "Very easy! EduDesks has a simple setup process, with guided steps to get you up and running fast.",
    },
    {
      question: "How do i calculate my delivery cost?",
      answer:
        "Absolutely! EduDesks lets you easily track and categorize income and expenses, making budgeting simple.",
    },
    {
      question: "How quickly can i expect my delivery?",
      answer:
        "Yes, you can easily modify employee payment details and schedules whenever needed.",
    },
    {
      question: "Can Apex delivery fragile or high-value items?",
      answer:
        "Currently, the platform does not support fee collection. However, you can manage and track school fees by entering the income manually.",
    },
  ];
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="px-6 md:px-16 ">
      <div className="md:flex gap-32 mt-20 ">
        <div className=" md:w-[40%] h-fit">
          <p className="border border-purple-400 text-purple-400 w-fit px-4  my-3">
            FAQs
          </p>
          <h2 className="font-semibold text-3xl ">Got any question?</h2>
          <h2 className="font-semibold text-3xl">We've got answers</h2>
          <p className="font-normal text-base py-4">
            Find answers to common questions about our services from tracking
            and delivery options to billing and support.
          </p>
        </div>
        <div className="w-full ">
          {faqs.map((faq, index) => (
            <div key={index} className=" py-3  rounded-lg my-6 px-2 ">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h2 className="font-meduim text-base text-[#041822]">
                  {faq.question}{" "}
                </h2>
                <span>
                  {openIndex === index ? (
                    <img src={sub} alt="" />
                  ) : (
                    <img src={plus} />
                  )}{" "}
                </span>
              </div>
              {openIndex === index && (
                <p className="text-[12px] text-[#59676e] py-2">{faq.answer} </p>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-32 border bg-[url('/src/assets/carton.png')] bg-cover bg-bottom h-[400px] rounded-lg  flex justify-center items-center">
        <div className="text-white text-center">
          <h2 className="font-semibold  text-3xl">
            Ready to get your delivery on the the road?
          </h2>
          <button className="bg-white capitalize text-[#7f7caf] py-2 px-5 rounded-lg block mx-auto mt-10">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
