import React, { useState } from "react";
import './FAQ.css';
import { IconMinus, IconPlus } from "@tabler/icons-react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = index => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    } 
  };

  const FAQData = [
    {
      question: "What types of ice bags do you manufacture?",
      answer: "We manufacture high-quality printed ice bags designed to withstand freezing temperatures and ensure durability and resistance. "
    },
    {
      question: "Are your ice bags customizable?",
      answer: "Yes, we provide customizable printing options to include your brand logo, designs, and other specifications."
    },
    {
      question: "What sizes of ice bags are available?",
      answer: "We offer a variety of sizes to meet different customer needs, ranging from small to large capacities."
    },
    {
      question: "What materials are used in your ice bags?",
      answer: "Our ice bags are made from high-quality, durable plastic materials that are designed to resist tearing and punctures."
    }
  ];

  return (
    <section className="faq">
      <h2>Frequently Asked Questions</h2>
      <p>Answers to Your Common Questions</p>
      <div className="faq-content">
        {FAQData.map((item, index) => (
          <div 
            key={index} 
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <span>{item.question}</span>
              {activeIndex === index ? <IconMinus size={16} /> : <IconPlus size={16} />}
            </div>
            {activeIndex === index && <div className="faq-answer">{item.answer}</div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;