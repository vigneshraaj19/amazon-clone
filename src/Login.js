import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
export default () => {
  return (
<Swiper
// install Swiper modules
modules={[Navigation,Autoplay]}
slidesPerView={1}
loop={true}
autoplay={{
    delay: 1000,
}}
navigation
>
   <SwiperSlide>
  <img className="home__image" 
       src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2021/desktop-2x._CB658860139_.jpg" alt="" />
       </SwiperSlide>
        <SwiperSlide>
       <img className="home__image" 
       src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Beauty/GW/May/Unrec/Kotak/Skincare-desktop-Hero._CB637398142_.jpg" alt="" />
       </SwiperSlide>
        <SwiperSlide>
       <img className="home__image" 
       src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2022/BAU/ATFGW/3000x1200_best_find_coupon._CB636934541_.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
       <img className="home__image" 
       src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/Heropanti2/3000x1200_Hero-Tall_NP._CB637454814_.jpg" alt="" />
     </SwiperSlide>
...
</Swiper>
);
};