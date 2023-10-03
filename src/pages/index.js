import FirstSlide from '@/components/Slides/WowDAOSpace/FirstSlide/FirstSlide';
import SwiperLayout from '@/layouts/SwiperLayout';
import SecondSlide from '@/components/Slides/WowDAOSpace/SecondSlide/SecondSlide';
// Import Swiper React components
import { SwiperSlide } from "swiper/react";
import ThirdSlide from '@/components/Slides/WowDAOSpace/ThirdSlide/ThirdSlide';
import FourthSlide from '@/components/Slides/WowDAOSpace/FourthSlide/FourthSlide';
import FifthSlide from '@/components/Slides/WowDAOSpace/FifthSlide/FifthSlide';
import SixthSlide from '@/components/Slides/WowDAOSpace/SixthSlide/SixthSlide';
import SeventhSlide from '@/components/Slides/WowDAOSpace/SeventhSlide/SeventhSlide';
import EighthSlide from '@/components/Slides/WowDAOSpace/EighthSlide/EighthSlide';
import NinthSlide from '@/components/Slides/WowDAOSpace/NinthSlide/NinthSlide';
import TenthSlide from '@/components/Slides/WowDAOSpace/TenthSlide/TenthSlide';
import EleventhSlide from '@/components/Slides/WowDAOSpace/EleventhSlide/EleventhSlide';

export default function Home() {

    return (
        <SwiperLayout className="page-home" showFooter={false} slides={[FirstSlide]}>
            <SwiperSlide>
                <FirstSlide />
            </SwiperSlide>
            <SwiperSlide>
                <SecondSlide />
            </SwiperSlide>
            <SwiperSlide>
                <ThirdSlide />
            </SwiperSlide>
            <SwiperSlide>
                <FourthSlide />
            </SwiperSlide>
            <SwiperSlide>
                <FifthSlide />
            </SwiperSlide>
            <SwiperSlide>
                <SixthSlide />
            </SwiperSlide>
            <SwiperSlide>
                <SeventhSlide />
            </SwiperSlide>
            <SwiperSlide>
                <EighthSlide />
            </SwiperSlide>
            <SwiperSlide>
                <NinthSlide />
            </SwiperSlide>
            <SwiperSlide>
                <TenthSlide />
            </SwiperSlide>
            <SwiperSlide>
                <NinthSlide />
            </SwiperSlide>
            <SwiperSlide>
                <EleventhSlide />
            </SwiperSlide>
        </SwiperLayout>
    )
}
