import Link from "next/link";
import Image from "next/image";
import { useConfig } from "@/providers/ConfigProvider";
import SwiperNavigation from "./SwiperNavigation";
import ThemeSwitchBtn from "@/components/Buttons/ThemeSwitchBtn";
import StartExploringMobileBtn from "@/components/Buttons/StartExploringMobileBtn";
import { useState } from "react";

export default function Footer() {
    const { config } = useConfig();
    const [showSocialLinks, setShowSocialLinks] = useState(false);

    return (
        <div className="footer">
            <div className="footer__left">
                <SwiperNavigation />
            </div>
            <div className="footer__right">
                <div className="footer__social"
                    onMouseEnter={() => setShowSocialLinks(true)}
                    onMouseLeave={() => setShowSocialLinks(false)}
                >
                    <div className={`footer__social__links ${showSocialLinks ? "footer__social__links--active" : ""}`}>
                        <Link href={"/"}>
                            <Image src={"./footer/facebook_icon.svg"} width={40} height={40} alt="Facebook" />
                        </Link>
                        <Link href={"/"}>
                            <Image src={"./footer/instagram_icon.svg"} width={40} height={40} alt="Facebook" />
                        </Link>
                        <Link href={"/"}>
                            <Image src={"./footer/linkedin_icon.svg"} width={40} height={40} alt="Facebook" />
                        </Link>
                        <Link href={"/"}>
                            <Image src={"./footer/twitter_icon.svg"} width={40} height={40} alt="Facebook" />
                        </Link>
                        <Link href={"/"}>
                            <Image src={"./footer/discord_icon.svg"} width={40} height={40} alt="Facebook" />
                        </Link>
                    </div>
                    <div className="footer__btn">
                        <svg viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.625 4.75C17.9372 4.75 19 3.68719 19 2.375C19 1.06281 17.9372 0 16.625 0C15.3128 0 14.25 1.06281 14.25 2.375C14.25 2.546 14.2702 2.71106 14.3034 2.87138L4.15744 7.94556C3.72162 7.44681 3.08869 7.125 2.375 7.125C1.06281 7.125 0 8.18781 0 9.5C0 10.8122 1.06281 11.875 2.375 11.875C3.08869 11.875 3.72162 11.5532 4.15744 11.0544L14.3046 16.1274C14.2702 16.2889 14.25 16.454 14.25 16.625C14.25 17.9372 15.3128 19 16.625 19C17.9372 19 19 17.9372 19 16.625C19 15.3128 17.9372 14.25 16.625 14.25C15.9113 14.25 15.2784 14.5718 14.8426 15.0706L4.69656 9.99638C4.72981 9.83606 4.75 9.671 4.75 9.5C4.75 9.329 4.72981 9.16394 4.69656 9.00362L14.8438 3.93062C15.2784 4.42819 15.9113 4.75 16.625 4.75Z" fill="currentColor" />
                        </svg>

                    </div>
                </div>
                <div className="footer__btn">
                    <ThemeSwitchBtn />
                </div>
                <div className="footer__btn">
                    {config.currentSlideIndex > 9 ? "" : 0}{config.currentSlideIndex}
                </div>
            </div>

            <div className="footer__mobileBtn">
                <StartExploringMobileBtn />
            </div>
        </div>
    )
}