import Image from "next/image";
import { useConfig } from "@/providers/ConfigProvider";

export default function StartExploringBtn() {
    const { swiperRef } = useConfig();

    const handleClickStartExploring = () => {
        if (swiperRef) {
            swiperRef.current.slideNext();
        };
    };

    return (
        <div className="start-exploring" onClick={handleClickStartExploring}>
            <div className="start-exploring__button">
                START EXPLORING
            </div>
            <div className="start-exploring__icon">
                <Image src={"/home/star.png"} width={21} height={21} alt="Star" />
            </div>
        </div>
    );
};