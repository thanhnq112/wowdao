import SlideLayout from "@/layouts/SlideLayout";
import { useConfig } from "@/providers/ConfigProvider";
import PageHomeSlideTitle from "@/components/PageHomeSlideTitle";
import Image from "next/image";

export default function FifthSlide() {
    const { swiperRef } = useConfig();

    const handleClick = () => {
        if (swiperRef) {
            swiperRef.current.slideNext();
        };
    };

    return (
        <div>
            <SlideLayout>
                <div className="page-home__slide-5">

                    <span className="page-home__slide-5__title">Benefits of WowDAO Token Holders</span>

                    <div className="page-home__slide-5__title-general">
                        <PageHomeSlideTitle
                            title={`${"Benefits of WowDAO Token Holders"}`}
                        // fontSize={40}
                        />

                    </div>
                    <div className="page-home__slide-5__inner">
                        <div className="page-home__slide-5__inner__img">
                            <Image
                                src={"/home/slide5_element_img.png"}
                                fill
                                sizes="90vw"
                                style={{
                                    objectFit: 'contain'
                                }}
                                quality={100}
                                alt={"slide 5 background"}
                                unoptimized
                            />
                        </div>
                    </div>
                    <div
                        className="page-home__slide-5__btn"
                        onClick={handleClick}
                    >
                        Exploring now
                    </div>

                    <span className="page-home__slide-5__content">1. Governance power <br />(Quadratic voting mechanism)</span>
                    <span className="page-home__slide-5__content">2. Rewards for engagement</span>
                    <span className="page-home__slide-5__content">3. Profit sharing</span>
                    <span className="page-home__slide-5__content">4. Free access to AI tools and IP pool of AI innovations</span>
                    <span className="page-home__slide-5__content">5. Early access to AI startups</span>
                </div>
            </SlideLayout>
        </div>
    )
}   