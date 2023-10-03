import { useConfig } from "@/providers/ConfigProvider";

export default function SwiperNavigation() {
    const { swiperRef } = useConfig();

    return (
        <div className="navigation">
            <div
                className="navigation--prev footer__btn"
                onClick={() => swiperRef.current?.slidePrev()}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width={"100%"} height={"100%"}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
                </svg>
            </div>
            <div
                className="navigation--next footer__btn"
                onClick={() => swiperRef.current?.slideNext()}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width={"100%"} height={"100%"}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                </svg>
            </div>
        </div>
    );
};