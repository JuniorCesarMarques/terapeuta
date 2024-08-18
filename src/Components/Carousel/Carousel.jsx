import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Importa os estilos básicos do Swiper
import "swiper/css/navigation"; // Importa os estilos de navegação
import "swiper/css/pagination"; // Importa os estilos de paginação
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Importa os módulos necessários

import Img_1 from "../../assets/carousel/slide_1.svg"; 
import Img_2 from "../../assets/carousel/slide_2.svg"; 
import Img_3 from "../../assets/carousel/slide_3.svg"; 
import Img_4 from "../../assets/carousel/slide_4.svg"; 
import Img_5 from "../../assets/carousel/slide_5.svg"; 
import Img_6 from "../../assets/carousel/slide_6.svg"; 
import Img_7 from "../../assets/carousel/slide_7.svg"; 
import Img_8 from "../../assets/carousel/slide_8.svg"; 
import styles from "./Carousel.module.css"; 

const data = [
  { id: "1", image: Img_1 },
  { id: "2", image: Img_2 },
  { id: "3", image: Img_3 },
  { id: "4", image: Img_4 },
  { id: "5", image: Img_5 },
  { id: "6", image: Img_6 },
  { id: "7", image: Img_7 },
  { id: "8", image: Img_8 },
  // Adicione mais itens conforme necessário
];

const Carousel = () => {
  return (
    <div className={styles.carousel}>
      <Swiper
        autoplay={{delay: 3000, disableOnInteraction: false, reverseDirection: false}}
        loop={true} 
        modules={[Navigation, Pagination, Autoplay]} 
        spaceBetween={30} 
        slidesPerView={1} 
      >
        {data.map(({ id, image }) => (
          <SwiperSlide key={id}>
            <div className={styles.img_container}>
              <img src={image} alt={`Slide ${id}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
