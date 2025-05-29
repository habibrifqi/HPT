import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faEye } from "@fortawesome/free-solid-svg-icons";
import {
    faGithub,
    faInstagram,
    faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import TypingText from "./TypingText";

function Hero() {
    return (
        <>
            <section
                id="home"
                className="min-h-screen flex items-center pt-20 relative overflow-hidden"
            >
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-900/90 to-slate-900/20 z-10"></div>
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1639762681057-1e71f2a58d57?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>

                    {/* <!-- Floating elements --> */}
                    <div className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-indigo-500/20 blur-xl"></div>
                    <div className="absolute top-1/3 right-1/3 w-12 h-12 rounded-full bg-purple-500/20 blur-xl"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-16 h-16 rounded-full bg-indigo-600/20 blur-xl"></div>
                </div>

                <div className="container mx-auto px-6 py-20 relative z-20">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-12 md:mb-0" data-aos="fade-right">
                            <h1 className="text-4xl md:text-6xl font-bold mb-2 leading-tight">
                                Hi, I'm <span className="gradient-text">Alex Carter</span>
                            </h1>
                            <TypingText />
                            <p className="text-lg mb-8 max-w-lg opacity-90">
                                I craft high-performing digital experiences with cutting-edge
                                technologies and pixel-perfect designs.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="#contact"
                                    className="px-8 py-3 bg-gradient-to-r from-orange-600 to-indigo-700 rounded-lg font-medium hover:opacity-90 transition flex items-center text-white"
                                >
                                    <i className="fas fa-paper-plane mr-2"></i>
                                    <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                                    Contact Me
                                </a>
                                <a
                                    href="#projects"
                                    className="px-8 py-3 border border-indigo-500 rounded-lg font-medium hover:bg-indigo-500/10 transition flex items-center"
                                >
                                    <FontAwesomeIcon icon={faEye} className="mr-2" />
                                    View Work
                                </a>
                            </div>

                            <div className="mt-8 flex items-center space-x-6">
                                <div className="flex items-center">
                                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2 pulse"></div>
                                    <span className="text-sm">Available for work</span>
                                </div>
                                <div className="flex space-x-4">
                                    <a
                                        href="#"
                                        className="text-xl hover:text-indigo-400 transition"
                                    >
                                        <FontAwesomeIcon icon={faGithub} />
                                    </a>
                                    <a
                                        href="#"
                                        className="text-xl hover:text-indigo-400 transition"
                                    >
                                        <FontAwesomeIcon icon={faLinkedinIn} />
                                    </a>
                                    <a
                                        href="#"
                                        className="text-xl hover:text-indigo-400 transition"
                                    >
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div
                            className="md:w-1/2 flex justify-center"
                            data-aos="fade-left"
                            data-aos-delay="300"
                        >
                            <div className="relative w-64 h-64 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] group">
                                {/* Gradient aura effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-violet-700 to-blue-800 rounded-full opacity-20 blur-2xl group-hover:blur-3xl group-hover:opacity-30 transition-all duration-700"></div>

                                {/* Animated border rings */}
                                <div className="absolute inset-0 border-4 border-indigo-500/30 rounded-full animate-[spin_12s_linear_infinite]"></div>
                                <div className="absolute inset-4 border-4 border-purple-500/20 rounded-full animate-[spin_18s_linear_infinite_reverse]"></div>

                                {/* Main image with enhanced effects */}
                                <div className="relative z-10 w-full h-full overflow-hidden rounded-full border-4 border-white/10 shadow-2xl">
                                    <Image
                                        src="https://scontent.fsrg10-1.fna.fbcdn.net/v/t1.6435-9/33115509_1249449891855998_4707836291641769984_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeExPJhlQ5-a5knuTg3Xyuy5nUgRa2DOzDadSBFrYM7MNrvifRMqOo-4zm1noHp84ibyrDEUilwkhnBi_UipQ9li&_nc_ohc=fx4P_VN8RroQ7kNvwHd5ved&_nc_oc=Adlg7DvuGt7DghC3PAJ9Lwfp94zRlPDk_iCHwf7bD2u7XU4WKMjmT4r7bUDUNctlOms&_nc_zt=23&_nc_ht=scontent.fsrg10-1.fna&_nc_gid=ctGYC9YsOvVPSAIP_zwlXA&oh=00_AfHOaIXZo1OWolikGAwrczEMZ1ZjGdeWejwuur-UGGuxTg&oe=684048FD"
                                        width={1920}
                                        height={1080}
                                        alt="Profile"
                                        className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-500"
                                    />
                                    {/* Subtle overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 rounded-full"></div>
                                </div>

                                {/* Floating particles effect */}
                                <div className="absolute -inset-4 z-0 opacity-20">
                                    {[...Array(12)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="absolute w-2 h-2 bg-white rounded-full"
                                            style={{
                                                top: `${Math.random() * 100}%`,
                                                left: `${Math.random() * 100}%`,
                                                animation: `float ${5 + Math.random() * 10
                                                    }s linear infinite`,
                                                transform: `scale(${0.5 + Math.random() * 1.5})`,
                                            }}
                                        ></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;
