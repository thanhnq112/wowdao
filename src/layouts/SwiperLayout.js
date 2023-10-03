import TopBar from "@/components/Topbar/TopBar";
import Footer from "./Footer";
import { Swiper } from "swiper/react";
import { Mousewheel, EffectFade } from "swiper";
import { useConfig } from '@/providers/ConfigProvider';
import CustomParticles from "@/components/CustomParticles";
import PaginationSlide from "./PaginationSlide";

export default function SwiperLayout({ children, className, showFooter = true }) {
    const { config, setConfig, swiperRef } = useConfig();

    const handleSlideChange = (e) => {
        setConfig((prev) => ({
            ...prev,
            currentSlideIndex: e.realIndex,
            showPaginationSlide: e.realIndex !== 0,
            showSecondNavWrap: e.realIndex !== 0,
            showFooterNavWrap: e.realIndex !== 0,
        }));
    };

    return (
        <section id="pc" className={className}>
             <TopBar />
            <Swiper
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                speed={1000}
                loop
                centeredSlides={true}
                effect={"fade"}
                virtualTranslate={true}
                direction={"vertical"}
                mousewheel={true}
                modules={[EffectFade, Mousewheel]}
                fadeEffect={{
                    crossFade: true
                }}
                className="my-swiper"
                onSlideChange={handleSlideChange}
            >
                {children}
            </Swiper>
            <CustomParticles />
            {/* {config.showPaginationSlide && <PaginationSlide />} */}
            {config.showFooterNavWrap && <Footer />}
        </section>
    );
};