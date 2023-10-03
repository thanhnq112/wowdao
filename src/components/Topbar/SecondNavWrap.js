import Link from "next/link";
import { useEffect, useState } from "react";
import NavbarHamburger from "./NavbarHamburger";
import { useWindowDimensions } from "@/providers/WindowDimensitionsProvider";
import Constant from "@/config/constant";

export default function SecondNavWrap() {
    const { width } = useWindowDimensions();
    const [dropdownDataTrigger, setDropdownDataTrigger] = useState(null);
    const [itemListDataTrigger, setItemListDataTrigger] = useState(null);
    const [openedHamburger, setOpenedHamburger] = useState(false);

    useEffect(() => {
        const autoCloseNavbarHamburger = () => {
            if (width > Constant.WIDTH_TABLET_LANDSCAPE) setOpenedHamburger(false);
        };

        autoCloseNavbarHamburger();
    }, [width]);

    return (
        <div className="flex">
            <NavbarHamburger
                openedHamburger={openedHamburger}
                setOpenedHamburger={setOpenedHamburger}
            />
            <div className={`nav-wrap ${openedHamburger ? "nav-wrap--open" : ""}`}>
                <div className="nav-wrap__item"
                    onMouseEnter={() => setDropdownDataTrigger("organization")}
                    onMouseLeave={() => setDropdownDataTrigger(null)}
                >
                    <div className="nav-wrap__gap"></div>
                    <div className="nav-wrap__item__second-title">
                        Organization {" "}
                        <svg width="10" height="10" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.9997 5.49981L0.463867 1.96398L1.64303 0.785645L3.9997 3.14314L6.35637 0.785645L7.53553 1.96398L3.9997 5.49981Z" fill="currentColor" />
                        </svg>
                    </div>
                    {dropdownDataTrigger === "organization" && (
                        <div className="dropdown-list">
                            <Link className="dropdown-list__item" href={"/"}>
                                About
                            </Link>
                            <Link className="dropdown-list__item" href={"/"}>
                                Who should join WowDAO
                            </Link>
                            <Link className="dropdown-list__item" href={"/"}>
                                Whitepaper
                            </Link>
                            <Link className="dropdown-list__item" href={"/"}>
                                Pitch deck
                            </Link>
                            <Link className="dropdown-list__item" href={"/"}>
                                Available AI tools for DAO members
                            </Link>
                            <Link className="dropdown-list__item" href={"/"}>
                                Our advisors
                            </Link>
                            <Link className="dropdown-list__item" href={"/"}>
                                Blogs
                            </Link>
                        </div>
                    )}
                </div>

                <div
                    className="nav-wrap__item"
                    onMouseEnter={() => setDropdownDataTrigger("product")}
                    onMouseLeave={() => setDropdownDataTrigger(null)}
                >
                    <div className="nav-wrap__gap"></div>
                    <div className="nav-wrap__item__second-title">
                        Product {" "}
                        <svg width="10" height="10" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.9997 5.49981L0.463867 1.96398L1.64303 0.785645L3.9997 3.14314L6.35637 0.785645L7.53553 1.96398L3.9997 5.49981Z" fill="currentColor" />
                        </svg>
                    </div>
                    {dropdownDataTrigger === "product" && (
                        <div className="dropdown-list">
                            <div
                                className="dropdown-list__item"
                                href={"/"}
                                onMouseEnter={() => setItemListDataTrigger("platform")}
                            >
                                Hackathons platform: {" "}
                                <svg width="10" height="10" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.9997 5.49981L0.463867 1.96398L1.64303 0.785645L3.9997 3.14314L6.35637 0.785645L7.53553 1.96398L3.9997 5.49981Z" fill="currentColor" />
                                </svg>
                                <ul className={`dropdown-list__item__list ${itemListDataTrigger === "platform" ? "dropdown-list__item__list--open" : ""}`}>
                                    <li><Link href={"/"}>Compete</Link></li>
                                    <li><Link href={"/"}>Earn cash prizes</Link></li>
                                    <li><Link href={"/"}>Get funded</Link></li>
                                    <li><Link href={"/"}>Commercialize outputs</Link></li>
                                </ul>
                            </div>
                            <Link
                                className="dropdown-list__item"
                                href={"/"}
                                onMouseEnter={() => setItemListDataTrigger("crowdfunding")}
                            >
                                Crowdfunding platform for AI startups: {" "}
                                <svg width="10" height="10" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.9997 5.49981L0.463867 1.96398L1.64303 0.785645L3.9997 3.14314L6.35637 0.785645L7.53553 1.96398L3.9997 5.49981Z" fill="currentColor" />
                                </svg>
                                <ul className={`dropdown-list__item__list ${itemListDataTrigger === "crowdfunding" ? "dropdown-list__item__list--open" : ""}`}>
                                    <li>Raise funds from the AI community via the form of IP-NFTs</li>
                                </ul>
                            </Link>
                            <Link
                                className="dropdown-list__item"
                                href={"/"}
                                onMouseEnter={() => setItemListDataTrigger("marketplace")}
                            >
                                AI Data Marketplace: {" "}
                                <svg width="10" height="10" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.9997 5.49981L0.463867 1.96398L1.64303 0.785645L3.9997 3.14314L6.35637 0.785645L7.53553 1.96398L3.9997 5.49981Z" fill="currentColor" />
                                </svg>
                                <ul className={`dropdown-list__item__list ${itemListDataTrigger === "marketplace" ? "dropdown-list__item__list--open" : ""}`}>
                                    <li>Contribute and commercialize any dataset</li>
                                </ul>
                            </Link>
                            <Link
                                className="dropdown-list__item"
                                href={"/"}
                                onMouseEnter={() => setItemListDataTrigger("models")}
                            >
                                IP- NFT Pool for cutting edge AI models {" "}
                                <svg width="10" height="10" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.9997 5.49981L0.463867 1.96398L1.64303 0.785645L3.9997 3.14314L6.35637 0.785645L7.53553 1.96398L3.9997 5.49981Z" fill="currentColor" />
                                </svg>
                                <ul className={`dropdown-list__item__list ${itemListDataTrigger === "models" ? "dropdown-list__item__list--open" : ""}`}>
                                    <li>Buy, sell cutting edge AI products via IP-NFT</li>
                                    <li>Commercialize AI patents faster than ever</li>
                                </ul>
                            </Link>
                        </div>
                    )}
                </div>

                <div className="nav-wrap__item">
                    <div className="nav-wrap__gap"></div>

                    <div className="nav-wrap__item__second-title">
                        Jobs {" "}
                        <svg width="10" height="10" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.9997 5.49981L0.463867 1.96398L1.64303 0.785645L3.9997 3.14314L6.35637 0.785645L7.53553 1.96398L3.9997 5.49981Z" fill="currentColor" />
                        </svg>
                    </div>
                </div>

                <div
                    className="nav-wrap__item"
                    onMouseEnter={() => setDropdownDataTrigger("community")}
                    onMouseLeave={() => setDropdownDataTrigger(null)}
                >
                     <div className="nav-wrap__gap"></div>
                    <div className="nav-wrap__item__second-title">
                        Community {" "}
                        <svg width="10" height="10" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.9997 5.49981L0.463867 1.96398L1.64303 0.785645L3.9997 3.14314L6.35637 0.785645L7.53553 1.96398L3.9997 5.49981Z" fill="currentColor" />
                        </svg>
                    </div>
                    {dropdownDataTrigger === "community" && (
                        <div className="dropdown-list">
                            <Link className="dropdown-list__item" href={"/"}>
                                Join DAO to govern, collaborate, contribute and earn
                            </Link>
                            <Link className="dropdown-list__item" href={"/"}>
                                Join working groups of the WowDAO
                            </Link>
                            <Link className="dropdown-list__item" href={"/"}>
                                Follow us on social media
                            </Link>
                            <Link className="dropdown-list__item" href={"/"}>
                                Free access to tools for AI/ML model training
                            </Link>
                        </div>
                    )}
                </div>

                <div className="nav-wrap__item">
                    <div className="nav-wrap__item__second-title">
                        Wow Token
                    </div>
                </div>

                <div className="nav-wrap__item">
                    <div className="nav-wrap__item__second-title">
                        Worldwide
                        AI Hackathon
                    </div>
                </div>

                {/* <div className="nav-wrap__split">
                    <div className="nav-wrap__item">
                        <div className="nav-wrap__item__second-title">
                            Log in
                        </div>
                    </div>

                    <div className="nav-wrap__item">
                        <div className="nav-wrap__item__second-title">
                            Log up
                        </div>
                    </div>
                </div> */}
            </div>
        </div>

    );
};