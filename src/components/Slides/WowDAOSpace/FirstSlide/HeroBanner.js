import GetStartedBtn from "@/components/Buttons/GetStartedBtn";
import Image from "next/image";

export default function HeroBanner() {
    return (
        <div className="hero-banner">
            <div className="hero-banner__content">
                <div className="hero-banner__content__text">
                    <span>
                        WowDAO

                    </span>
                </div>
                <div className="hero-banner__content__effect">
                    <div className="hero-banner__content__camera">
                        <Image
                            src={"/home/light_camera_left.png"}
                            width={173}
                            height={173}
                            alt="Camera 2"
                        />
                        <div className="hero-banner__content__camera__light">
                            <Image
                                src={"/home/light.png"}
                                width={677}
                                height={258}
                                alt="light"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <GetStartedBtn />
        </div>
    );
};