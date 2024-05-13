
import React, { useState, useEffect } from 'react';
import { fetchLabTests } from '../api/api'; 
import './CarePage.css';

const CarePage = () => {
  const [labTests, setLabTests] = useState([]);

    const faqs = [
      {
        question: "How does home sample collection work?",
        answer: "Once you have chosen a convenient time slot for your booking, and placed an order, our WHO certified health professionals will arrive at your chosen address and collect blood and/or urine samples.  Once samples are collected, they will be processed at one of our partner labs closest to you and the test report will be available on your app and email."
      },
      {
        question: "Can I reschedule/cancel my diagnostic test appointment?",
        answer: "The appointment can be rescheduled or cancelled 2 hours before your chosen slot."
      },
      {
        question: "How can I receive my reports on email again ?",
        answer: "You can email your test reports by going to Profile> Activity &Records> Medical Records> Diagnostic Tests and selecting the email reports button."
      },
      {
        question: "I did not get my reports on email",
        answer: "Sometimes, mail providers mistakenly mark the reports email as Spam. Please check the spam folder (or) trigger the reports email again on the app   You would have received an SMS after your sample collection indicating the time it would take for results to be available  In case the communicated time has elapsed and you have not received your report on email, please reach out to us at hello@cure.fit "
      },
      {
        question: "What instructions should I follow for my tests?",
        answer: "All instructions that have to be followed for your tests will be communicated to you at the time of booking a slot. You will also receive an email covering the instructions."
      },
      {
        question: "How can I get a refund for my Full body Health Check /Diagnostic Screening pack ?",
        answer: "Only if you have not completed your Full Body health check up/ Diagnostic Screening within 1 year from the purchase date, please write to hello@curefit.com  e.g: If heath check is purchased on 1/10/2019, you can write to us till 1/10/2020. We do not refund any amount for health check ups with a purchase date older than a year."
      },
      {
        question: "Can I club two or more sample collection slots?",
        answer: "We are currently working on enabling multiple orders from the same address (for the same person or different).  Till then, you can request the phlebotomist who comes for the sample collection for the first order, to add on the rest of the tests (for the same person or different).  You can directly pay him via card / UPI / cash for the additional tests purchased. "
      }
    ];

  useEffect(() => {
    const getLabTests = async () => {
      try {
        const data = await fetchLabTests();
        setLabTests(data);
      } catch (error) {
        console.error('Error fetching lab tests:', error);
      }
    };

    getLabTests();
  }, []);

  return (
    <div className="care-page">
      <div className='top'>
        <button>Lab Test</button>
      </div>
      <h2>Lab Tests</h2>
      <p>Assess and monitor your health from the comfort of your home now.</p>
      <div className="lab-tests-container">
        {labTests.map(test => (
          <div key={test.id} className="lab-test">
            <img src={test.image} alt={test.id} />
            <div className="content">
              <p>Price: <span> ${test.price} </span></p>
              <p>Offer Price: <span1> ${test.offerPrice} </span1></p>
            </div>
          </div>
        ))}
      </div>
      <hr className="horizontal-line" />
      <h2>Tests for Senior Citizen</h2>
      <div className="additional-content">
        
        <div className="additional-div">
          <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/diagnostics/screening-packs/sr_citizen_adv_m_mag.png" alt="" />
          <p>Price: <span>$4999</span></p>
          <p>Offer Price: <span1>$3999</span1></p>
        </div>
        <div className="additional-div">
        <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/diagnostics/screening-packs/sr_citizen_adv_f_mag.png" alt="" />
        <p>Price: <span>$4999</span></p>
          <p>Offer Price: <span1>$3999</span1></p>
        </div>
      </div>
      
      <div className="faq-container">
        <h2>FAQs</h2>
        <p>7 Questions</p>
        <div className="details-container">
          {faqs.map((faq, index) => (
            <div key={index}>
              <details>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
              <hr className="faq-line" />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default CarePage;
