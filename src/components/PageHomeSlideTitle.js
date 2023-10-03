export default function PageHomeSlideTitle({ title = "Ecosystem", adStyles={} }) {
    return (
        <div className="page-home__title" style={adStyles}>
            <div className="page-home__title__text">
                <h1 >
                    {title}
                </h1>
                {/* <div className="page-home__title__text__bg" /> */}
            </div>
        </div>
    )
}