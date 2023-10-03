import PageHomeSlideTitle from "@/components/PageHomeSlideTitle";

export default function SlideTitle() {
    return (
        <div className="timeline-home__title">
            <div className="timeline-home__title__text">
                <PageHomeSlideTitle 
                    title="Roadmap"
                    // fontSize={48}
                />
                <div className="timeline-home__title__text__bg" />
            </div>
            <span>
                We aim to democratize AI
            </span>
        </div>
    )
}