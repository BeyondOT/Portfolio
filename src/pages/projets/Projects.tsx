import { A11y, Navigation, Pagination, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectCard from "../../components/cards/projectCard/ProjectCard";
import "swiper/css/effect-coverflow";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import styles from "./projects.module.scss";

const Projects = () => {
  return (
    <section className="section" data-aos="fade-up">
      <div className="header">
        <h2>Projets</h2>
      </div>
      <div className={styles.projects}>
        <Swiper
         effect={"coverflow"}
          modules={[Navigation, Pagination, A11y, EffectCoverflow]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          breakpoints= {{
            990: {slidesPerView: 3},
            720: {slidesPerView: 2},
          }}
          coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 40,
          modifier: 1,
          slideShadows: false,
        }}
          
        >
          <SwiperSlide>
            <ProjectCard
              title="First Project"
              content="This is my first project. It does this and that."
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard
              title="Second Project"
              content="This is my second prch and Im proudxwsqdgqs dgqsqsdqsdghd qhqdhsdqsht. It does this and that."
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard
              title="Third Project"
              content="This is my third project. It does this and that."
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard
              title="Fourth Project"
              content="This is my Fourth project. It does this and that."
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
export default Projects;
