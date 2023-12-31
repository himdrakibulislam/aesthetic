import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar } from "swiper/modules";
import Card from "../card/Card";
import { Randomize } from "../../utils/functions";

const ProjectSlide =({ projects }) => {
  //  Randomize(projects)
  return (
    <Swiper
      scrollbar={{
        hide: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
      }}
      modules={[Scrollbar]}
      className="swipper my-6"
    >
      {projects.map((project) => (
        <SwiperSlide key={project.id}>
          <Card
            className="animate__animated animate__fadeInRightBig"
            image={
              process.env.NEXT_PUBLIC_BACKEND_URL +
              project.project_images[0].image
            }
            title={project.location}
            url={`/projects/${project.slug}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
export default ProjectSlide;