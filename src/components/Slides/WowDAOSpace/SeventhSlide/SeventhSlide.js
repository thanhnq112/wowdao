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

export default function SeventhSlide() {
    const handleOnClick = (e) => {
        const classComponent = 'timeline-home__component__mobile__'
        const dropdown = e.target.children[1]
        const content = e.target.parentNode.children[1]
        // timeline-home__component__mobile__content__active
        // timeline-home__component__mobile__time__dropdown__active
        if (dropdown.classList.contains(classComponent + 'time__dropdown__active')) {
            dropdown.classList.remove(classComponent + 'time__dropdown__active')
            content.classList.remove(classComponent + 'content__active')
        }
        else {
            const dropdownAll = document.querySelectorAll('.' + classComponent + 'time__dropdown')
            const contentAll = document.querySelectorAll('.' + classComponent + 'content')
            dropdownAll.forEach((e) => e.classList.remove(classComponent + 'time__dropdown__active'))
            contentAll.forEach((e) => e.classList.remove(classComponent + 'content__active'))
            dropdown.classList.add(classComponent + 'time__dropdown__active')
            content.classList.add(classComponent + 'content__active')
        }
    }

    return (
        <div>
            <SlideLayout>
                <div className="timeline-home">
                    <div className="timeline-home__slideTitle">
                        <SlideTitle />

                    </div>
                    <div className="timeline-home__inner">
                        <div className="timeline-home__line">
                            <div></div>
                            <div></div>
                        </div>
                        <div className="timeline-home__timelines" onClick={handleOnClick}>
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