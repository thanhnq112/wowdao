import { useState } from "react"

export default function TimlineComponent({ time = "Q4.2022 to Q1.2023", content = [] }) {
    const [showDecoration, setShowDecoration] = useState(false);

    return (
        <div className="timeline-home__component">
            <div className={`timeline-home__component__circle ${showDecoration ? "timeline-home__component__decoration" : ""}`} />
            <div className={`timeline-home__component__line ${showDecoration ? "timeline-home__component__decoration" : ""}`} />
            <div 
                className="timeline-home__component__inner"
                onMouseEnter={() => setShowDecoration(true)}
                onMouseLeave={() => setShowDecoration(false)}
            >
                <div className="timeline-home__component__time">
                    {time}
                </div>
                <ul>
                    {content.map((e, index) => (
                        <li key={index}>{e}</li>
                    ))}
                </ul>
                <svg className="timeline-home__component__clip-path" viewBox="0 0 162 159" xmlns="http://www.w3.org/2000/svg">
                    <clipPath id="timeline" clipPathUnits="objectBoundingBox" transform="scale(0.0033191053, 0.007464774)">
                        <path d="M0 16.9905C0 8.15393 7.16344 0.990479 16 0.990479H285.286C294.123 0.990479 301.286 8.15392 301.286 16.9905V73.2603C301.286 82.0968 294.123 89.2603 285.286 89.2603H0V16.9905Z" fill="white" />
                        <path d="M0 89.2604H23.5507C11.5317 89.2604 2.84232 119.722 0 134.953V89.2604Z" fill="white" />
                    </clipPath>
                </svg>
                <div className="timeline-home__component__bg" />
            </div>
        </div>
    )
}