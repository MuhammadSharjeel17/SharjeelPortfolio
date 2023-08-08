import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "friendly service i got from him really appreciate Very knowledgeble i am heartfully thanking for ur service Thank u so much 🥰",
    },
    {
      img: profilePic2,
      review:
        "Great work, delivered as requested, and a little above and beyond fixing my crap code. I’ll be back, hope you’re ready for some real work now Ridho.",
    },
    {
      img: profilePic3,
      review:
        "He works fast and good. Website is smooth and well made with react. Good communication and responsive, would order again 💯.",
    },
    {
      img: profilePic4,
      review:
        "This guy is legit. I've used him twice. Thorough, knowledgeable and extremely communicative. I plan to use him for my other sites as well. I wish there were more people on fiverr like him.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Professional Work </span>
        <span>from me</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
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
