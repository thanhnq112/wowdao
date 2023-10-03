import TimelineComponent from "@/components/TimeLineComponent";
import SlideLayout from "@/layouts/SlideLayout";
import SlideTitle from "./SlideTitle";

export const timelineRoadmap = [
    {
        id: 1,
        time: "Q4.2022 to Q1.2023",
        content: [
            "Develop and lauch an MVP that supports computer vision products",
            "Develop and lauch an MVP that supports computer vision products",
            "Develop and lauch an MVP that supports computer vision products",
        ]
    },
    {
        id: 2,
        time: "Q4.2022 to Q1.2023",
        content: [
            "Develop and lauch an MVP that supports computer vision products",
            "Develop and lauch an MVP that supports computer vision products",
            "Develop and lauch an MVP that supports computer vision products",

        ]
    },
    {
        id: 3,
        time: "Q4.2022 to Q1.2023",
        content: [
            "Develop and lauch an MVP that supports computer vision products",
            "Develop and lauch an MVP that supports computer vision products",
            "Develop and lauch an MVP that supports computer vision products",
            "Develop and lauch an MVP that supports computer vision products",

        ]
    },
    {
        id: 4,
        time: "Q4.2022 to Q1.2023",
        content: [
            "Develop and lauch an MVP that supports computer vision products",
            "Develop and lauch an MVP that supports computer vision products",
            "Develop and lauch an MVP that supports computer vision products",

        ]
    }
]

export default function SixthSlide() {
    return (
        <div>
            <SlideLayout>
                <div className="timeline-home">
                    <SlideTitle />
                    <div className="timeline-home__inner">
                        <div className="timeline-home__line">
                            <div></div>
                            <div></div>
                        </div>
                        <div className="timeline-home__timelines">
                            {timelineRoadmap.map((e) => (
                                <TimelineComponent
                                    key={e.id}
                                    time={e.time}
                                    content={e.content}
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </SlideLayout>
        </div>
    )
}