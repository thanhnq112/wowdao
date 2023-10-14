export default function TimelineHorizontal({ timelines = [] }) {
    const nbTimelines = timelines.length;

    return (
        <ul className="timeline-horizontal">
            {timelines.map((e) => (
                (e.value) ? (
                    <li
                        key={e.id}
                        style={{ width: `${100 / nbTimelines}%` }}
                        className="timeline-horizontal__element"
                    >
                        <div className="timeline-horizontal__element__step">Step 0{e.id}</div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="none">
                            <circle cx="15.0331" cy="15.2941" r="13.624" fill="white" stroke="white" strokeWidth="2" />
                            <path d="M13.0827 10.7222C12.8971 10.5261 12.8969 10.1933 13.0822 9.99683C13.2509 9.81801 13.5132 9.81776 13.6822 9.99626L17.4532 13.9807C18.1253 14.6909 18.1253 15.8965 17.4532 16.6067L13.6807 20.5927C13.5124 20.7704 13.2513 20.7705 13.083 20.593C12.8974 20.3972 12.8972 20.0646 13.0825 19.8686L16.167 16.6066C16.8386 15.8963 16.8384 14.6913 16.1666 13.9812L13.0827 10.7222Z" fill="#1C1E23" />
                        </svg>
                        <div className="timeline-horizontal__element__value">{e.value}</div>

                        <div className="timeline-horizontal__element__mobile"><span>Step 0{e.id}: </span>{e.value}</div>
                    </li>
                ) : ''


            ))}
        </ul>
    )
}