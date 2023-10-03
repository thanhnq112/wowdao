import HeroBanner from "./HeroBanner";
import SlideLayout from "@/layouts/SlideLayout";
import LightCamera from "./LightCamera";
import Stars from "./Stars";

export default function FirstSlide() {
    return (
        <SlideLayout showAuroras={true} >
            <div className="page-home__slide-1">
                <HeroBanner />
                <div className="page-home__slide-1__decoration">
                    <LightCamera />
                    <Stars />
                </div>
            </div>
        </SlideLayout>
    );
};