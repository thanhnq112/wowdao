import PageHomeSlideTitle from "@/components/PageHomeSlideTitle";
import SlideLayout from "@/layouts/SlideLayout";
import Image from "next/image";

export default function EleventhSlide() {
    return (
        <SlideLayout>
            <div className="page-home__slide-11">
                <PageHomeSlideTitle
                    title={"IP-NFTs pool for AI innovations"}
                />
                <div className="page-home__slide-11__inner">
                    <div className="page-home__slide-11__inner__img">
                        <Image
                            src={"/home/ip_nfts_innovations_img.png"}
                            fill
                            size="100vw"
                            alt="slide 11 images"
                            unoptimized
                        />
                    </div>
                </div>
            </div>
        </SlideLayout>
    )
}