import { useConfig } from "@/providers/ConfigProvider";

export default function GetStartedBtn() {
    const { swiperRef } = useConfig();

    const handleClick = () => {
        if (swiperRef) {
            swiperRef.current.slideNext();
        };
    };

    return (
        <div className="get-started">
            <div className="get-started__button" onClick={handleClick}>
                GET STARTED
            </div>
            <div className="border">
                <div className="border--left">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 31L1 9C1 4.58172 4.58173 1 9 1L31 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M31 31L9 31C4.58172 31 1 27.4183 1 23L1 0.999997" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </div>
                <div className="border--right">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H23C27.4183 1 31 4.58172 31 9V31" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M31 1L31 23C31 27.4183 27.4183 31 23 31L0.999998 31" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </div>
            </div>
        </div>
    );
};
