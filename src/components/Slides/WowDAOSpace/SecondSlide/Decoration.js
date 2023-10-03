import Image from "next/image";

export default function Decoration() {
    return (
        <div className="home-decoration">
            <div className="home-decoration__cameras">
                <div className="home-decoration__cameras__element">
                    <Image
                        src={"/home/light_camera/light_camera_1.png"}
                        width={210}
                        height={123}
                        alt="Light camera 1"
                    />
                </div>
                <div className="home-decoration__cameras__element">
                    <Image
                        src={"/home/light_camera/light_camera_2.png"}
                        width={138}
                        height={80}
                        alt="Light camera 2"
                    />
                </div>
                <div className="home-decoration__cameras__element">
                    <Image
                        src={"/home/light_camera/light_camera_3.png"}
                        width={442}
                        height={255}
                        alt="Light camera 3"
                    />
                </div>
            </div>
        </div>
    )
}