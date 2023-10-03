import SlideLayout from "@/layouts/SlideLayout";
import PageHomeSlideTitle from "@/components/PageHomeSlideTitle";
import Image from "next/image";

export default function FourthSlide() {
    return (
        <SlideLayout showAuroras={false}>
            <div className="page-home__slide-4">
                <div className="page-home__slide-4__title-general">
                    <PageHomeSlideTitle
                        title={`${"Build AI Products with Ease on WowDAO's Comprehensive Platform"}`}
                    // fontSize={30}
                    />
                </div>

                <div className="page-home__slide-4__inner">
                    <Image
                        src={"/home/slide4_home_bg.png"}
                        fill
                        sizes="100vw"
                        alt="Slide 4 background"
                        quality={100}
                        unoptimized
                    />
                </div>

                <div className="page-home__slide-4__inner-mobile">
                    <Image
                        src={"/home/slide4_home_bg_mobile.png"}
                        fill
                        sizes="98vw"
                        alt="Slide 4 background mobile"
                        quality={100}
                        unoptimized
                    />
                </div>


            </div>
        </SlideLayout>
    )
}