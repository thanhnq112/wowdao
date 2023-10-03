import Image from "next/image";
import { ecosystems } from "@/config/ecosystem";
import { useState } from "react";
import EcosystemElement from "./EcosystemElement";

export function Ecosystem() {
    const [activeEcosystem, setActiveEcosystem] = useState(1);

    const EcosystemTabs = () => {
        return (
            <div className="ecosystem-home__output__content__right">
                {ecosystems.map((e) => {
                    if (e.index === activeEcosystem) {
                        return (
                            <EcosystemElement system={e} key={e.index} />
                        )
                    };
                    return undefined;
                })}
            </div>
        )
    };

    return (
        <div className="ecosystem-home">
            <div className="ecosystem-home__input">
                <div className="ecosystem-home__input__members">
                    <div>
                        <svg width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.10716 11.7733C6.79967 10.1566 9.09152 10.1566 9.78403 11.7733L13.2628 19.8946C13.8281 21.2143 12.8601 22.6821 11.4244 22.6821H4.46678C3.03111 22.6821 2.06305 21.2143 2.62835 19.8946L6.10716 11.7733Z" fill="#ED01E7" />
                            <ellipse cx="7.94661" cy="6.82748" rx="6.21101" ry="5.88412" fill="#ED01E7" />
                            <path d="M15.2585 11.7733C15.951 10.1566 18.2429 10.1566 18.9354 11.7733L22.4142 19.8946C22.9795 21.2143 22.0115 22.6821 20.5758 22.6821H13.6182C12.1825 22.6821 11.2144 21.2143 11.7797 19.8946L15.2585 11.7733Z" fill="#ED01E7" />
                            <ellipse cx="17.098" cy="6.82748" rx="6.21101" ry="5.88412" fill="#ED01E7" />
                            <path d="M24.4145 11.7733C25.107 10.1566 27.3989 10.1566 28.0914 11.7733L31.5702 19.8946C32.1355 21.2143 31.1675 22.6821 29.7318 22.6821H22.7742C21.3385 22.6821 20.3704 21.2143 20.9357 19.8946L24.4145 11.7733Z" fill="#ED01E7" />
                            <ellipse cx="26.254" cy="6.82748" rx="6.21101" ry="5.88412" fill="#ED01E7" />
                        </svg>
                    </div>
                    <h3>DAO <br /> Members</h3>
                </div>
            </div>
            <div className="ecosystem-home__input__exchange">
                <div>
                    $Wow token, Free<br />
                    access to all AI tools
                </div>
                <div>
                    <svg viewBox="0 0 179 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.292892 8.70711C-0.0976257 8.31659 -0.0976257 7.68342 0.292892 7.2929L6.65686 0.928935C7.04738 0.538411 7.68054 0.538411 8.07108 0.928935C8.46159 1.31946 8.46159 1.95262 8.07108 2.34315L2.41422 8L8.07108 13.6569C8.46159 14.0474 8.46159 14.6805 8.07108 15.0711C7.68054 15.4616 7.04738 15.4616 6.65686 15.0711L0.292892 8.70711ZM179 9L1 9L1 7L179 7L179 9Z" fill="#96E9FF" />
                    </svg>
                </div>
                <div>
                    <svg viewBox="0 0 179 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M178.707 7.29289C179.098 7.68342 179.098 8.31658 178.707 8.70711L172.343 15.0711C171.953 15.4616 171.319 15.4616 170.929 15.0711C170.538 14.6805 170.538 14.0474 170.929 13.6569L176.586 8L170.929 2.34315C170.538 1.95262 170.538 1.31946 170.929 0.928932C171.319 0.538408 171.953 0.538408 172.343 0.928932L178.707 7.29289ZM178 9L-1.09558e-08 9L1.09558e-08 7L178 7L178 9Z" fill="white" />
                    </svg>
                </div>
                <div className="ecosystem-home__input__fund">
                    <div>
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.84497 16.0926C7.2907 16.089 11.7171 16.6777 16.0073 17.8432C16.6131 18.0082 17.218 17.5582 17.218 16.93V16.0926M4.0948 4.21924V4.84415C4.0948 5.00989 4.02896 5.16884 3.91177 5.28603C3.79457 5.40323 3.63562 5.46907 3.46988 5.46907H2.84497M2.84497 5.46907V5.15661C2.84497 4.63918 3.26491 4.21924 3.78234 4.21924H17.8429M2.84497 5.46907V12.968M17.8429 4.21924V4.84415C17.8429 5.1891 18.1229 5.46907 18.4678 5.46907H19.0927M17.8429 4.21924H18.1554C18.6728 4.21924 19.0927 4.63918 19.0927 5.15661V13.2805C19.0927 13.7979 18.6728 14.2179 18.1554 14.2179H17.8429M2.84497 12.968V13.2805C2.84497 13.5291 2.94373 13.7675 3.11952 13.9433C3.29531 14.1191 3.53374 14.2179 3.78234 14.2179H4.0948M2.84497 12.968H3.46988C3.63562 12.968 3.79457 13.0339 3.91177 13.1511C4.02896 13.2683 4.0948 13.4272 4.0948 13.5929V14.2179M17.8429 14.2179V13.5929C17.8429 13.4272 17.9087 13.2683 18.0259 13.1511C18.1431 13.0339 18.3021 12.968 18.4678 12.968H19.0927M17.8429 14.2179H4.0948M13.4685 9.21855C13.4685 9.8815 13.2051 10.5173 12.7364 10.9861C12.2676 11.4548 11.6318 11.7182 10.9689 11.7182C10.3059 11.7182 9.6701 11.4548 9.20133 10.9861C8.73255 10.5173 8.46919 9.8815 8.46919 9.21855C8.46919 8.5556 8.73255 7.9198 9.20133 7.45102C9.6701 6.98225 10.3059 6.71889 10.9689 6.71889C11.6318 6.71889 12.2676 6.98225 12.7364 7.45102C13.2051 7.9198 13.4685 8.5556 13.4685 9.21855ZM15.9682 9.21855H15.9748V9.22521H15.9682V9.21855ZM5.96954 9.21855H5.97621V9.22521H5.96954V9.21855Z" stroke="#96E9FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div>Funds</div>
                </div>
            </div>
            <div className="ecosystem-home__output">
                <div className="ecosystem-home__output__logo">
                    <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="19.2712" cy="17.7292" r="16.7292" stroke="#4141C1" strokeWidth="2" />
                        <circle cx="19.2712" cy="17.7292" r="7.47917" fill="white" stroke="#4141C1" strokeWidth="2" />
                        <circle cx="2.69792" cy="12.7189" r="1.69792" fill="white" stroke="#4141C1" strokeWidth="2" />
                        <circle cx="32.7604" cy="7.32292" r="1.69792" fill="white" stroke="#4141C1" strokeWidth="2" />
                        <circle cx="21.9684" cy="34.3019" r="1.69792" fill="white" stroke="#4141C1" strokeWidth="2" />
                    </svg>
                </div>
                <div className="ecosystem-home__output__content">
                    <div className="ecosystem-home__output__content__left">
                        <div className="center-element">
                            <Image
                                src={"/home/logo.svg"}
                                width={188}
                                height={54}
                                alt="Logo ecosystem"
                            />
                        </div>
                        <ul className="ecosystem-home__output__content__list">
                            {ecosystems.map((e) => (
                                <li
                                    key={e.index}
                                    onMouseEnter={() => setActiveEcosystem(e.index)}
                                >
                                    <span>{e.index}. {e.value}</span>
                                    <div className="ecosystem-home__bg--blur"></div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <EcosystemTabs />
                </div>
            </div>
        </div>
    )
}