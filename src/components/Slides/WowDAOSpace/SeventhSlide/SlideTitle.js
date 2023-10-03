import PageHomeSlideTitle from "@/components/PageHomeSlideTitle";

export default function SlideTitle() {
    return (
        <div className="timeline-home__title">
            <div className="timeline-home__title__text">
                <PageHomeSlideTitle
                    title="Technical Roadmap of the comprehensive AI platform"
                    // fontSize={38}
                />
                <div className="page-home__slide-6__title__text__bg" />
            </div>
        </div>
    )
}