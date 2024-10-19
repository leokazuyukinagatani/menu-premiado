import clsx from "clsx";
import { useState } from "react";
import { Link as LinkScroll } from "react-scroll";

interface NavLinkProps {
    title: string;
    to: string;
}
const NavLink = ({ title, to }: NavLinkProps) => {
    return (
        <LinkScroll
            className="base-bold text-red-700 uppercase transition-colors duration-500 cursor-pointer hover:text-red-600 max-lg:my-4 max-lg:h-5"
            to={to}
        >
            {title}
        </LinkScroll>
    );
};
export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    function handleToggleMenu() {
        setIsOpen((prevState) => !prevState);
    }

    return (
        <header className="fixed top-0 left-0 z-50 w-full py-10 bg-s6">
            <div className="container flex h-14 items-center max-lg:px-5">
                <a href="/" className="lg:hidden flex-1 cursor-pointer z-2">
                    <img
                        src="/images/logo_gastrono_city.png"
                        alt="logo"
                        width={60}
                        height={20}
                    />
                </a>

                <div
                    className={clsx(
                        "w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-gray-200 max-lg:opacity-0",
                        isOpen
                            ? "max-lg:opacity-100"
                            : "max-lg:pointer-events-none"
                    )}
                >
                    <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
                        <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
                            <ul className="flex max-lg:block max-lg:px-12">
                                <li className="nav-li">
                                    <NavLink title="Inicio" to="/" />
                                    <div className="dot" />
                                    <NavLink title="pricing" to="pricing" />
                                </li>
                                <li className="nav-logo">
                                    <LinkScroll
                                        to="hero"
                                        offset={-100}
                                        spy
                                        smooth
                                        className={clsx(
                                            "max-lg:hidden transition-transform duration-500 cursor-pinter"
                                        )}
                                    >
                                        <img
                                            src="/images/logo_gastrono_city.png"
                                            alt="logo"
                                            width={80}
                                            height={25}
                                        />
                                    </LinkScroll>
                                </li>

                                <li className="nav-li">
                                    <NavLink title="faq" to="/faq" />
                                    <div className="dot" />
                                    <NavLink title="download" to="/download" />
                                </li>
                            </ul>
                        </nav>

                        {/* <div className="lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90">
                            <img
                                src="/images/bg-outlines.svg"
                                width={960}
                                height={380}
                                alt="outline"
                                className="relative z-2"
                            />
                            <img
                                src="/images/bg-outlines-fill.png"
                                width={960}
                                height={380}
                                alt="outline"
                                className="absolute inset-0 mix-blend-soft-light opacity-5"
                            />
                        </div> */}
                    </div>
                </div>

                <button
                    className="lg:hidden z-2 size-10 border-2 border-gray-400/25 rounded-full flex justify-center items-center"
                    onClick={handleToggleMenu}
                    type="button"
                >
                    <img
                        src={`/images/${isOpen ? "close" : "burger-menu"}.svg`}
                        alt="magic"
                        className="size-1/2 object-contain"
                    />
                </button>
            </div>
        </header>
    );
}
