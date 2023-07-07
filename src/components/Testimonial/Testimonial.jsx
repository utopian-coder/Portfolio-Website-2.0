import React from "react";
import "./Testimonial.css";
import TestimonialItem from "./TestimonialItem";
import avatar1 from "../../assets/avatar1.jpg";
import avatar2 from "../../assets/avatar2.jpg";
import avatar4 from "../../assets/avatar4.jpg";
import avatar3 from "../../assets/avatar3.jpg";

const testimonials = [
  {
    imgSource: avatar1,
    name: "Firstname Lastname",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi deserunt ut quas. Assumenda perferendis similique, unde quisquam expedita totam suscipit? Odio aliquam ducimus quis nihil!",
  },
  {
    imgSource: avatar2,
    name: "Firstname Lastname",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi deserunt ut quas. Assumenda perferendis similique, unde quisquam expedita totam suscipit? Odio aliquam ducimus quis nihil!",
  },
  {
    imgSource: avatar3,
    name: "Firstname Lastname",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi deserunt ut quas. Assumenda perferendis similique, unde quisquam expedita totam suscipit? Odio aliquam ducimus quis nihil!",
  },
  {
    imgSource: avatar4,
    name: "Firstname Lastname",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi deserunt ut quas. Assumenda perferendis similique, unde quisquam expedita totam suscipit? Odio aliquam ducimus quis nihil!",
  },
];

const Testimonial = () => {
  return (
    <section id='testimonials'>
      <h5>Revies from Clients</h5>
      <h2>Testimonials</h2>

      <div className='container testimonials-container'>
        <TestimonialItem testimonies={testimonials} />
      </div>
    </section>
  );
};

export default Testimonial;
