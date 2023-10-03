import Image from "next/image";

export default function JudgeElement() {
    return (
        <div className="page-home__slide-8__judge__item">
            <div
                className="page-home__slide-8__judge__avatar"
                style={{
                    backgroundImage: `url("/home/avatar_judge_bg.png")`,
                    aspectRatio: "unset",
                }}
            >
                <div className="page-home__slide-8__judge__avatar__inner">
                    <Image src={"/home/member_avatar_example.png"} width={190} height={190} alt="judge" />
                </div>
            </div>
            <div className="page-home__slide-8__judge__name">Aamar Hussain</div>
            <div className="page-home__slide-8__judge__company"> <strong>Director</strong> - Data &amp; AI Customer Solution Architecture, <strong>Microsoft</strong>
            </div>
        </div >
    )
}