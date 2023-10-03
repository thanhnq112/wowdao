import Image from "next/image";

export default function NavbarHamburger({ openedHamburger, setOpenedHamburger }) {

    return (
        <div
            className="navbar_hamburger"
            onClick={() => setOpenedHamburger((prev) => !prev)}
        >
            {openedHamburger ? (
                <div>
                    <Image src={"/hamburger_close_new.png"} width={44} height={44} alt="Hamburger close" />
                </div>
            ) : (
                <div>
                    <Image src={"/hamburger_open_new.png"} width={24} height={16} alt="Hamburger open" />
                </div>
            )}
        </div>
    )
}