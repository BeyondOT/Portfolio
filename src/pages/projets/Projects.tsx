import { A11y, EffectCoverflow, Navigation, Pagination } from "swiper";
import "swiper/css/effect-coverflow";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import ProjectCard from "../../components/cards/projectCard/ProjectCard";
import Divider from "../../components/divider/Divider";
import styles from "./projects.module.scss";


const Projects = () => {
  return (
    <section id="projects" className={`${styles.container} section`} data-aos="fade-up">
      <Divider nameOfClass={styles.divider}/>
      <div className={`${styles.header} header`}>
        <h2>Projets</h2>
      </div>
      <div className={styles.projects}>
        <Swiper
          modules={[Navigation, Pagination, A11y, EffectCoverflow]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            990: { slidesPerView: 3 },
            720: { slidesPerView: 2 },
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
