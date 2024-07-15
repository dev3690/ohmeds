import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/FaqAccordion.css'; // Import the CSS file

const faqs = [
  {
    question: "Where to ask questions about medications?",
    answer: "You can ask questions about medications by contacting our customer support team through the app or website."
  },
  {
    question: "How much time will ohmeds take to deliver?",
    answer: "Ohmeds typically takes 2-5 business days to deliver, depending on your location."
  },
  {
    question: "Is there any return policy in ohmeds?",
    answer: "Yes, ohmeds has a return policy. You can return items within 30 days of purchase if they meet our return criteria."
  }
];

const FaqAccordion = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="faq-container container mt-5">
      <h2 className="faq-header">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleExpand(index)}>
            {faq.question}
            <span className="arrow">{expanded === index ? '▲' : '▼'}</span>
          </div>
          {expanded === index && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}
      <div className="faq-more">
        More <span className="arrow">▼</span>
      </div>
    </div>
  );
};

export default FaqAccordion;
