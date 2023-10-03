import Image from "next/image";

export default function Auroras() {
    return (
        <div className="auroras">
            <div className="auroras--right">
                <Image src={"/home/aurora_right.png"} width={843} height={945} alt="Aurora right" priority/>
            </div>
            <div className="auroras--left">
                <Image src={"/home/aurora_left.png"} width={908} height={1034} alt="Aurora left" priority/>
            </div>
            <div className="auroras--top">
                <Image src={"/home/aurora_top.png"} width={843} height={945} alt="Aurora top" priority/>
            </div>
            <div className="auroras--bottom">
                <Image src={"/home/aurora_bottom.png"} width={588} height={623} alt="Aurora bottom" priority/>
            </div>
        </div>
    )
}