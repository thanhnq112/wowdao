import Image from "next/image";

export default function LightCamera() {
    return (
        <div className="light-camera">
            <div className="light-camera__top">
                <Image
                    src={"/home/light_camera_top.png"}
                    width={63}
                    height={63}
                    alt="Camera 1"
                />
            </div>
            <div className="light-camera__right">
                <Image
                    src={"/home/light_camera_right.png"}
                    width={112}
                    height={112}
                    alt="Camera 3"
                />
            </div>
        </div>
    )
}