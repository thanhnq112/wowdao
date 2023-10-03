import SlideLayout from "@/layouts/SlideLayout";
import JudgeSlide from "./JudgeSlide";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { useRef, useState } from "react";
import PageHomeSlideTitle from "@/components/PageHomeSlideTitle";

export default function EighthSlide() {
    const swiperMembersRef = useRef();
    const [currentIdx, setCurrentIdx] = useState(1);
    const [nbSlides, setNBSlides] = useState(0);

    return (
        <SlideLayout>
            <div className="page-home__slide-8">
                <PageHomeSlideTitle title="Technical Roadmap of the comprehensive AI platform" />
                <div className="page-home__slide-8__container">
                    <Swiper
                        onBeforeInit={(swiper) => {
                            swiperMembersRef.current = swiper;
                        }}
                        onInit={(swiper) => setNBSlides(swiper.slides.length)}
                        slidesPerView={1}
                        spaceBetween={40}
                        allowTouchMove={true}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        // navigation={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 14,
                            },
                        }}
                        modules={[Pagination, Autoplay]}
                        onRealIndexChange={(swiper) => setCurrentIdx(swiper.realIndex)}
                        className="mySwiper"
                    >
                        {Array.from(Array(10).keys()).map((e, index) => (
                            <SwiperSlide key={index}>
                                <JudgeSlide value={e} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <svg className="page-home__slide-8__judge__clip-path" viewBox="0 0 162 159" xmlns="http://www.w3.org/2000/svg">
                    <clipPath id="judge-avatar-clip" clipPathUnits="objectBoundingBox" transform="scale(0.00617284, 0.006289308)">
                        <path d="M30.3212 145.09C50.789 160.32 76.367 159.086 80.6841 158.816C90.8865 158.176 107.1 157.167 117.14 145.721C124.531 137.3 122.377 130.302 130.407 119.485C139.276 107.561 148.054 108.858 154.318 101.977C169.044 85.766 160.257 38.8795 131.669 16.0937C99.6288 -9.44804 41.9295 -5.28716 14.3417 33.6018C-11.8852 70.5634 0.471172 122.872 30.3212 145.09Z" fill="white">
                        </path>
                    </clipPath>
                </svg>
            </div>
        </SlideLayout>
    );
};