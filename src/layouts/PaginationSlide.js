import { useConfig } from "@/providers/ConfigProvider";
import { useMemo } from "react";

export const PaginationElement = ({ isLastSlide, isActiveSlide }) => {
    return (
        <div className="pagination-slide__element">
            <div className="pagination-slide__element__circle">
                {isActiveSlide && <div className="pagination-slide__element__circle--active" />}
            </div>
            {!isLastSlide && (
                <div className="pagination-slide__element__line" />
            )}
        </div>
    )
};

export function defineNumberOfSlides(swiperRef) {
    return swiperRef.current.slides.length ? swiperRef.current?.slides.length : 1;
};

export default function PaginationSlide() {
    const { swiperRef, config } = useConfig();
    const nbSlides = useMemo(() => defineNumberOfSlides(swiperRef), [swiperRef]);

    return (
        <div className="pagination-slide">
            {Array.from(Array(nbSlides - 1).keys()).map((e, index) => (
                <PaginationElement
                    key={index}
                    isLastSlide={(index + 1) === nbSlides - 1}
                    isActiveSlide={(index + 1) === config.currentSlideIndex}
                />
            ))}
        </div>
    );
};