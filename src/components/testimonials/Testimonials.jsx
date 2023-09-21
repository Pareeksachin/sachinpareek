import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/anup_painuly.jpeg";
import AVTR2 from "../../assets/rishikesh_raj.jpeg";
import AVTR3 from "../../assets/Ayush_raj.jpg";
import AVTR4 from "../../assets/rishi_sharma.jpeg";

// import required modules
import { Pagination } from "swiper";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Anup Painuly",
    review:
    "I've had the privilege of working alongside Sachin Pareek during his time at CDAC, where he proved to be a highly talented data science professional. Sachin's expertise in data science is impressive, and he consistently delivered exceptional results on various data-driven projects. His strong analytical abilities, dedication, and attention to detail make him a valuable asset to any team. Sachin's positive attitude and willingness to collaborate further enhance his professional qualities"
  },
  {
    avatar: AVTR2,
    name: "Rishikesh Raj",
    review:
      "Any organization would be lucky to have Sachin as their team member. He will be a valuable asset to any company. He has knowledge of different domains, On top of that, he is also good at trading. ",
  },
  {
    avatar: AVTR3,
    name: "Ayush Raj ",
    review:
    "I'm amazed by Sachin's ability to work on multiple tasks and still be focused and deliver quality work. He is an excellent person to work with. He is a great asset to the team when one requires a passionate and consistent Pal. He is well organized, diligence and a fast learner.He has good problem solving skills, leadership traits and a good programming skills and he is solution oriented. He is focused and determined towards his work and have friendly environment."
      
  },
  {
    avatar: AVTR4,
    name: "Rishi Sharma",
    review:
    "Sachin is a highly focused person as well as analytical and can add to any team he is a part of.His energy to make things happen was contagious and it helped us achieve great goals. One of the best team member I had for sure"

  },

];

// https://swiperjs.com/demos#pagination-dynamic

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews from Linkedin</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testiomonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="coworker-avatar">
                <img src={avatar} alt="Coworker" />
              </div>
              <h5 className="coworker__name">{name}</h5>
              <small className="coworker__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
