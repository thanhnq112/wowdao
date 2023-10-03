import SlideLayout from "@/layouts/SlideLayout";
import TimelineHorizontal from "@/components/TimelineHorizontal";

export const ai_startups_timeline = [
    {
        id: 1,
        value: "Propose projects to be listed",
    },
    {
        id: 2,
        value: "Wait to be vested",
    },
    {
        id: 3,
        value: "Sell IP-NFT to raise funds",
    },
    {
        id: 4,
        value: "Get support from the whole AI community",
    },
    {
        id: 5,
        value: "Build cutting edge AI products",
    }
];

export const investors_timeline = [
    {
        id: 1,
        value: "Buy IP-NFTs to fund AI startups"
    },
    {
        id: 2,
        value: "Get access to use their outputs indefinitely"
    },
    {
        id: 3,
        value: "Easily trade NFTs to transfer the ownership and earn profit at anytime"
    }
]

export default function NinthSlide() {
    return (
        <SlideLayout>
            <div className="page-home__slide-9">
                <div className="page-home__slide-9__inner">
                    <div className="page-home__slide-9__bg"></div>

                    <div className="page-home__slide-9__ai-startup">
                        <h1>01. For AI startups</h1>
                        <TimelineHorizontal timelines={ai_startups_timeline} />
                    </div>
                    <div className="page-home__slide-9__investors">
                        <div>
                            <strong> Crowdfunding platform
                                for AI startups</strong>
                        </div>
                        <div className="page-home__slide-9__investors__timeline">
                            <div>
                                <h1>02. For investors</h1>
                                <p>
                                    Invest in top AI startups vested by the AI community
                                </p>
                            </div>
                            <TimelineHorizontal timelines={investors_timeline} />
                        </div>
                    </div>

                </div>

            </div>
        </SlideLayout>
    )
}