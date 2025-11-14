'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Carousel() {
    return (
        <section className="mb-16">
            <Swiper
                modules={[Autoplay, Pagination, Navigation, Mousewheel, Keyboard]}
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                className="overflow-hidden shadow-lg"
            >
                <SwiperSlide>
                    <div className="relative h-96 bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center">
                        <img src="/images/carousel1.jpg" alt="Proyek Pemboran Sumur 1" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
                            <h3 className="text-white text-2xl font-bold">Proyek Pemboran Sumur Residensial</h3>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative h-96 bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center">
                        <img src="/images/carousel2.jpg" alt="Proyek Pemboran Sumur 2" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
                            <h3 className="text-white text-2xl font-bold">Proyek Pemboran Sumur Komersial</h3>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative h-96 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                        <img src="/images/carousel3.jpg" alt="Proyek Pemboran Sumur 3" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
                            <h3 className="text-white text-2xl font-bold">Perawatan dan Pemeliharaan Sumur</h3>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
}
