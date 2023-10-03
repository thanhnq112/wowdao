import Image from "next/image";

export const defaultValue = {
    camera_1: {
        dimensition: {
            width: 100,
            height: 100
        },
        position: {
            top: 300,
            left: 330
        },
        rotation: 40
    },
    camera_2: {
        dimensition: {
            width: 100,
            height: 100
        },
        position: {
            top: 300,
            left: 330
        },
        rotation: 40
    },
    camera_3: {
        dimensition: {
            width: 100,
            height: 100
        },
        position: {
            top: 300,
            left: 330
        },
        rotation: 40
    }
}

export default function LightCameras({ properties = defaultValue }) {
    const { camera_1, camera_2, camera_3 } = properties;
    return(
        <div className="light-camera">
            <div>
                <Image 
                    src={"/home/light_camera_top"} 
                    width={camera_1.width} 
                    height={camera_1.height} 
                    alt="Camera 1"
                />
                 <Image 
                    src={"/home/light_camera_top"} 
                    width={camera_1.width} 
                    height={camera_1.height} 
                    alt="Camera 1"
                />
            </div>
        </div>
    )
}