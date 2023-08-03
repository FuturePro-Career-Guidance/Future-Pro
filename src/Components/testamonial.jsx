import React from "react";
import "./testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css/pagination";
import "swiper/css/autoplay";




const Testimonial = () => {
  const clients = [
    {
      img: require("../Assests/profilepic1.jpg"),
      review:
        "I was feeling lost in my career search until I tried the assessment on this website. It recommended the perfect career path for me, and now I feel confident about my future. Thank you for helping me discover my true potential! - Sarah R.",
    },
    {
       img: require("../Assests/profilepic2.jpg"),
      review:
        "The CV preparation service exceeded my expectations. The writers really understood my strengths and highlighted them in a way that caught the attention of employers. I secured a job interview within days of sending out my new CV! - John P.",
    },
    {
      img: require("../Assests/profilepic3.jpg"),
      review:
        "I used to get nervous during interviews, but the interview preparation sessions on this website changed everything. I felt more confident and well-prepared than ever before. Thanks to your guidance, I landed my dream job! - Emily T",
    },
    {
      img: require("../Assests/profilepic4.jpg"),
      review:
        "Kick-starting my career was daunting, but this website made it so much easier. The job opportunities and networking events they provided were invaluable. I couldn't have asked for a better support system as I launched my professional journey! - Michael S",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
        <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
        // Install Swiper modules
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }} // Set the delay to 5000ms (5 seconds) o
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;



