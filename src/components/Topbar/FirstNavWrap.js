import Image from "next/image";

export default function FirstNavWrap() {
    return (
        <div className="nav-wrap">
            <div className="nav-wrap__item">
                <div className="nav-wrap__item__first-title">
                    EN
                </div>
                <div className="nav-wrap__item__dropdown">
                    <Image src={"./home/narrow_down.svg"} width={10} height={10} alt="Narrow down" />
                </div>
            </div>
            <div className="nav-wrap__item">
                <div className="nav-wrap__item__first-title">
                    LOGIN
                </div>
            </div>
            <div className="nav-wrap__item">
                <div className="nav-wrap__item__first-title">
                    SIGN UP
                </div>
            </div>
        </div>
    );
};