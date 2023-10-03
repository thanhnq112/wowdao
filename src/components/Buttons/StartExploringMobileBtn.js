import Image from "next/image";
import { useConfig } from "@/providers/ConfigProvider";

export default function StartExploringMobileBtn() {
    const { swiperRef } = useConfig();

    const handleClickStartExploring = () => {
        if (swiperRef) {
            swiperRef.current.slideNext();
        };
    };

    return (
        <div className="start-exploring-mobile" onClick={handleClickStartExploring}>
            <div className="start-exploring-mobile__button">
                <div className="start-exploring-mobile__button__context">
                    Start
                </div>
                <div className="start-exploring-mobile__icon">
                    <Image src={"/home/star_white.png"} width={21} height={21} alt="Star" />
                </div>
            </div>

            <div className="start-exploring-mobile__nav">
                <Image src={"/home/nav_right.png"} width={10} height={10} alt="Star" />
            </div>

            <div className="start-exploring-mobile__button__text">Exploring</div>
        </div>
    );
};