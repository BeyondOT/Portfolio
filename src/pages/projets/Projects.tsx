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
    <section
      id="projects"
      className={`${styles.container} section`}
      data-aos="fade-up"
    >
      <Divider nameOfClass={styles.divider} />
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
              title="Clipped"
              content="Clipped est une appli conviviale pour les joueurs afin de partager leurs moments forts de jeu avec leurs amis et la communauté."
              link="https://github.com/BeyondOT/Clipped-MERN"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard
              title="Miracle Morning"
              content="Miracle Morning est une application qui vous aide à vous lever tôt et à rester motivé en suivant votre progression."
              link="https://github.com/BeyondOT/MiracleMorning"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard title="3rd Project" content="Work in progress..." />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard title="4th Project" content="Work in progress..." />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
export default Projects;
