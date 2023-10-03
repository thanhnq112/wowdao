import Image from "next/image";

export default function Stars() {
    return (
        <div className="stars">
            <div className="stars__element">
                <Image 
                    src={"/home/star.png"}
                    width={30}
                    height={30}
                    alt="Star top"
                />
            </div>
            <div className="stars__element">
                <Image 
                    src={"/home/star.png"}
                    width={30}
                    height={30}
                    alt="Star top"
                />
            </div>
            <div className="stars__element">
                <Image 
                    src={"/home/star.png"}
                    width={30}
                    height={30}
                    alt="Star top"
                />
            </div>
            <div className="stars__element">
                <Image 
                    src={"/home/star.png"}
                    width={30}
                    height={30}
                    alt="Star top"
                />
            </div>
        </div>
    )
}