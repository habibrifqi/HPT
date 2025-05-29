import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faBriefcase, faDownload, faHandshake } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';

function Aboutme() {
    return (
        <>
            <section id="about" className="py-30 glass bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full opacity-5">
                    <div className="absolute top-20 left-10 w-64 h-64 bg-orange-600 rounded-full mix-blend-screen filter blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-64 h-64 bg-indigo-700 rounded-full mix-blend-screen filter blur-3xl"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-indigo-700">
                                About Me
                            </span>
                        </h2>
                        {/* <div className="w-20 h-1 bg-gradient-to-r from-orange-600 to-indigo-700 mx-auto"></div> */}
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        {/* Image with creative frame */}
                        <div className="lg:w-2/5 relative" data-aos="fade-right">
                            <div className="relative w-full max-w-md mx-auto">
                                <div className="absolute -inset-4 rounded-2xl bg-gradient-to-tr from-orange-600/30 to-indigo-700/30 blur-lg opacity-75"></div>
                                <div className="relative rounded-xl overflow-hidden border-2 border-slate-700/50">
                                    <Image
                                        src="https://scontent.fsrg10-1.fna.fbcdn.net/v/t1.6435-9/33115509_1249449891855998_4707836291641769984_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeExPJhlQ5-a5knuTg3Xyuy5nUgRa2DOzDadSBFrYM7MNrvifRMqOo-4zm1noHp84ibyrDEUilwkhnBi_UipQ9li&_nc_ohc=fx4P_VN8RroQ7kNvwHd5ved&_nc_oc=Adlg7DvuGt7DghC3PAJ9Lwfp94zRlPDk_iCHwf7bD2u7XU4WKMjmT4r7bUDUNctlOms&_nc_zt=23&_nc_ht=scontent.fsrg10-1.fna&_nc_gid=ctGYC9YsOvVPSAIP_zwlXA&oh=00_AfHOaIXZo1OWolikGAwrczEMZ1ZjGdeWejwuur-UGGuxTg&oe=684048FD"
                                        alt="Profile"
                                        className="w-full h-auto object-cover aspect-square"
                                    />
                                </div>
                                {/* <div className="absolute -bottom-6 -right-6 bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-lg">
                        <div className="text-amber-400 text-2xl">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStarHalfAlt} />
                        </div>
                    </div> */}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="lg:w-3/5" data-aos="fade-left">
                            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-indigo-700 text-transparent bg-clip-text inline-block">
                                Full-Stack Developer & Problem Solver
                            </h3>

                            <div className="prose prose-invert max-w-none mb-8">
                                <p className="text-lg leading-relaxed mb-6">
                                    With <span className="font-bold text-orange-600">7+ years</span> of hands-on experience, I craft digital solutions that blend technical excellence with intuitive design. My expertise spans the full development stack, from pixel-perfect UIs to robust backend systems.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-slate-800/70 p-6 rounded-xl border border-slate-700/50 hover:border-orange-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-orange-600/10"
                                        data-aos="zoom-in">
                                        <h4 className="font-semibold mb-3 flex items-center text-lg">
                                            <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center mr-3">
                                                <FontAwesomeIcon icon={faGraduationCap} className="text-orange-600" />
                                            </div>
                                            Education
                                        </h4>
                                        <div className="pl-13">
                                            <p className="font-medium text-orange-600">MSc Computer Science</p>
                                            <p className="text-slate-400">Stanford University, 2016</p>
                                        </div>
                                    </div>

                                    <div className="bg-slate-800/70 p-6 rounded-xl border border-slate-700/50 hover:border-purple-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-700/10"
                                        data-aos="zoom-in" data-aos-delay="100" >
                                        <h4 className="font-semibold mb-3 flex items-center text-lg">
                                            <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center mr-3">
                                                <FontAwesomeIcon icon={faBriefcase} className="text-indigo-700" />
                                            </div>
                                            Experience
                                        </h4>
                                        <div className="pl-13">
                                            <p className="font-medium text-indigo-700">Lead Developer</p>
                                            <p className="text-slate-400">TechVision Inc., 2019-Present</p>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-lg leading-relaxed mb-8">
                                    I believe in <span className="font-semibold text-indigo-400">continuous learning</span> and staying ahead of tech trends. When I&apos;m not architecting systems or debugging code, you&apos;ll find me exploring nature trails, analyzing chess strategies, or perfecting my pour-over coffee technique.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                {/* <a
                        href="#"
                        className="px-6 py-3 rounded-lg font-medium bg-gradient-to-r from-amber-500/10 to-amber-600/10 border border-amber-400/30 hover:border-amber-400/60 hover:bg-amber-500/20 transition-all group"
                    >
                        <span className="relative z-10 flex items-center">
                            <FontAwesomeIcon icon={faDownload} className="mr-2 group-hover:animate-bounce" />
                            Download CV
                        </span>
                    </a> */}
                                <a
                                    href="#projects"
                                    className="px-8 py-3 rounded-lg font-medium hover:bg-gradient-to-r from-orange-600 to-indigo-700 transition flex items-center relative group"
                                    data-aos="zoom-in-down" data-aos-delay="300"
                                >
                                    <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-orange-600 to-indigo-700 p-[2px] group-hover:p-[5px] transition-all">
                                        <span className="block h-full w-full bg-[var(--dark)] rounded-md"></span>
                                    </span>
                                    <span className="relative z-10 flex items-center">
                                        <FontAwesomeIcon icon={faDownload} className="mr-2" />
                                        Donwload CV
                                    </span>
                                </a>

                                <a
                                    href="#contact"
                                    className="px-6 py-3 rounded-lg font-medium bg-gradient-to-r from-indigo-700 to-orange-600 hover:shadow-lg hover:bg-gradient-to-r hover:from-indigo-700 hover:to-orange-700   transition-all group hover:scale-105"
                                    data-aos="zoom-in-up"
                                    data-aos-delay="300"
                                >
                                    <span className="relative z-10 flex items-center">
                                        <FontAwesomeIcon icon={faHandshake} className="mr-2 group-hover:animate-wiggle" />
                                        Let&apos;s Collaborate
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section id="about" className="py-20 glass">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" data-aos="fade-up">
                        <span className="gradient-text">About Me</span>
                    </h2>

                    <div className="flex flex-col lg:flex-row items-center">
                        <div className="lg:w-1/3 mb-8 lg:mb-0 flex justify-center" data-aos="fade-right">
                            <div className="relative w-64 h-64 gradient-border">
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-600/20 rounded-lg opacity-20 blur-xl"></div>
                                <img src="https://scontent.fsrg10-1.fna.fbcdn.net/v/t1.6435-9/33115509_1249449891855998_4707836291641769984_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeExPJhlQ5-a5knuTg3Xyuy5nUgRa2DOzDadSBFrYM7MNrvifRMqOo-4zm1noHp84ibyrDEUilwkhnBi_UipQ9li&_nc_ohc=fx4P_VN8RroQ7kNvwHd5ved&_nc_oc=Adlg7DvuGt7DghC3PAJ9Lwfp94zRlPDk_iCHwf7bD2u7XU4WKMjmT4r7bUDUNctlOms&_nc_zt=23&_nc_ht=scontent.fsrg10-1.fna&_nc_gid=ctGYC9YsOvVPSAIP_zwlXA&oh=00_AfHOaIXZo1OWolikGAwrczEMZ1ZjGdeWejwuur-UGGuxTg&oe=684048FD" alt="About" className="relative z-10 w-full h-full rounded-lg object-cover" />
                            </div>
                        </div>

                        <div className="lg:w-2/3 lg:pl-12" data-aos="fade-left">
                            <h3 className="text-2xl font-semibold mb-4">Who am I?</h3>
                            <p className="mb-6 text-lg opacity-90">
                                I&apos;m a passionate full-stack developer with 7+ years of experience creating modern web applications. I specialize in React, Node.js, and cloud-native architectures, delivering scalable solutions that drive business growth.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 card-hover" data-aos="zoom-in">
                                    <h4 className="font-semibold mb-2 flex items-center">
                                        <FontAwesomeIcon icon={faGraduationCap} className="mr-2  text-amber-500" />
                                        Education
                                    </h4>
                                    <p className="font-medium">MSc in Computer Science</p>
                                    <p className="text-sm text-slate-400">Stanford University, 2016</p>
                                </div>
                                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 card-hover" data-aos="zoom-in" data-aos-delay="100">
                                    <h4 className="font-semibold mb-2 flex items-center">
                                        <FontAwesomeIcon icon={faBriefcase} className="mr-2 text-blue-700" />
                                        Experience
                                    </h4>
                                    <p className="font-medium">Lead Developer</p>
                                    <p className="text-sm text-slate-400">TechVision Inc., 2019-Present</p>
                                </div>
                            </div>

                            <p className="mb-6 opacity-90">
                                My approach combines technical excellence with creative problem-solving. I thrive in collaborative environments and enjoy mentoring junior developers. When I'm not coding, you'll find me hiking, playing chess, or experimenting with new coffee brewing techniques.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="#projects"
                                    className="px-8 py-3 rounded-lg font-medium hover:bg-gradient-to-r from-orange-600 to-indigo-700 transition flex items-center relative group"
                                >
                                    <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-orange-600 to-indigo-700 p-[2px] group-hover:p-[5px] transition-all">
                                        <span className="block h-full w-full bg-[var(--dark)] rounded-md"></span>
                                    </span>
                                    <span className="relative z-10 flex items-center">
                                        <FontAwesomeIcon icon={faDownload} className="mr-2" />
                                        Donwload CV
                                    </span>
                                </a>
                                <a href="#contact" className="inline-flex items-center px-6 py-3 bg-gradient-to-r  from-orange-600 to-indigo-700 rounded-lg font-medium hover:opacity-90 transition">
                                    <i className="fas fa-handshake mr-2"></i>
                                    <FontAwesomeIcon icon={faHandshake} className="mr-2" />

                                    Hire Me
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    )
}

export default Aboutme