import PageHomeSlideTitle from "@/components/PageHomeSlideTitle";
import TimelineHorizontal from "@/components/TimelineHorizontal";
import SlideLayout from "@/layouts/SlideLayout";

export const enterprises_timeline = [
    {
        id: 1,
        value: "Challenge our AI community with your toughest problems in AI"
    },
    {
        id: 2,
        value: "Design contests"
    },
    {
        id: 3,
        value: "AI enthusiasts team up and compete"
    },
    {
        id: 4,
        value: "AI thought leaders judge and choose the top winners"
    },
    {
        id: 5,
        value: "Reward winners"
    },
    {
        id: 6,
        value: "Enterprises receive winning outputs"
    },
]


export const enthusiasts_timeline = [
    {
        id: 1,
        value: "Join hackathons "
    },
    {
        id: 2,
        value: "Find team mates on the community"
    },
    {
        id: 3,
        value: "Compete to receive cash prizes or tokens whether you win or not"
    },
    {
        id: 4,
        value: "Winners get funded"
    },
    {
        id: 5,
        value: "Build state of the art AI products"
    },
    {
        id: 6,
        value: "Earn more compensation"
    },
]
export default function TenthSlide() {
    return (
        <SlideLayout>
            <div className="page-home__slide-10">
                <div className="page-home__slide-10__bg"></div>
                <PageHomeSlideTitle
                    title={"Hackathons DAO platform "}
                />
                <div className="page-home__slide-10__inner">
                    <div className="page-home__slide-10__inner__element">
                        <h1>1. For enterprises/ organizations</h1>
                        <TimelineHorizontal timelines={enterprises_timeline}/>
                    </div>
                    <div className="page-home__slide-10__inner__element">
                        <h1>2. For AI enthusiasts/ Data scientists</h1>
                        <TimelineHorizontal timelines={enthusiasts_timeline}/>
                    </div>
                </div>
            </div>
        </SlideLayout>
    )
}