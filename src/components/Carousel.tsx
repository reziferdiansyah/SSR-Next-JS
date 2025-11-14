'use client';

import { useRouter } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Carousel() {
    const router = useRouter();

    const slides = [
        {
            img: "/images/carousel1.jpg",
            alt: "Proyek Pemboran Sumur 1",
            title: "Jasa Sumur Bor Profesional",
            secondtitle: "Melayani pengeboran air bersih untuk rumah, industri, dan lainnya"
        },
        {
            img: "/images/carousel2.jpg",
            alt: "Proyek Pemboran Sumur 2",
            title: "Teknisi Ahli & Terpercaya",
            secondtitle: "Lebih dari 10 tahun pengalaman di bidang pengeboran air tanah"
        },
        {
            img: "/images/carousel3.jpg",
            alt: "Proyek Pemboran Sumur 3",
            title: "Hasil Cepat & Bergaransi",
            secondtitle: "Menggunakan alat bor modern dengan akurasi tinggi"
        }
    ];

    return (
        <section className="mb-16">
            <Swiper
                modules={[Autoplay, Pagination, Navigation, Mousewheel, Keyboard]}
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop={true}
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                className="overflow-hidden shadow-lg"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative h-96 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                            <img src={slide.img} alt={slide.alt} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-opacity-40 flex flex-col items-center justify-center">
                                <h3 className="text-black text-lg md:text-3xl font-bold">{slide.title}</h3>
                                <span className="text-black text-sm md:text-xl">{slide.secondtitle}</span>
                                <button onClick={() => router.push('/services')} className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 transition duration-300 cursor-pointer">Layanan Jasa Kami</button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
