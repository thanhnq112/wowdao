import PageHomeSlideTitle from "@/components/PageHomeSlideTitle";
import SlideLayout from "@/layouts/SlideLayout";
import { Ecosystem } from "./Ecosystem";

export default function ThirdSlide() {
    return(
        <SlideLayout showAuroras={false}>
            <div className="page-home__slide-3">
                <PageHomeSlideTitle title={"Ecosystem"}/>
                <Ecosystem />
            </div>
        </SlideLayout>
    );
};
