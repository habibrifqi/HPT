import React from 'react'

function Contact() {
    return (
        <>
            {/* Contact Section  */}
            <section id="contact" className="py-20 glass">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" data-aos="fade-up">
                        <span className="gradient-text">Get In Touch</span>
                    </h2>

                    <div className="flex flex-col lg:flex-row gap-12">
                        <div className="lg:w-1/2" data-aos="fade-right">
                            <h3 className="text-2xl font-semibold mb-6">Let's work together</h3>
                            <p className="mb-8 text-lg opacity-90">
                                I'm currently available for freelance projects or full-time positions. If you have a website or app idea that needs development, I'd love to hear about it.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="text-2xl mr-4 text-indigo-400">
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Email</h4>
                                        <a href="mailto:contact@alexcarter.dev" className="text-slate-400 hover:text-indigo-400 transition">contact@alexcarter.dev</a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="text-2xl mr-4 text-indigo-400">
                                        <i className="fas fa-phone-alt"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Phone</h4>
                                        <a href="tel:+15551234567" className="text-slate-400 hover:text-indigo-400 transition">+1 (555) 123-4567</a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="text-2xl mr-4 text-indigo-400">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Location</h4>
                                        <p className="text-slate-400">San Francisco, CA</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <h4 className="font-semibold mb-4">Follow Me</h4>
                                <div className="flex space-x-4">
                                    <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 hover:bg-indigo-500 transition">
                                        <i className="fab fa-github"></i>
                                    </a>
                                    <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 hover:bg-indigo-500 transition">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                    <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 hover:bg-indigo-500 transition">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 hover:bg-indigo-500 transition">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2" data-aos="fade-left">
                            <form className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
                                <div className="mb-6">
                                    <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                                    <div className="gradient-border-input">
                                        <input
                                            type="text"
                                            id="name"
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                </div>



                                <div className="mb-6">
                                    <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                                    
                                    <div className="gradient-border-input">
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
                                   <div className="gradient-border-input">
                                        <input
                                            type="text"
                                            id="subject"
                                            placeholder="Enter your subject"
                                        />
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                                    <div className="gradient-border-input">
                                       
                                        <textarea id="message" rows={5}></textarea>
                                     </div>
                                </div>

                                <button type="submit" className="w-full px-6 py-3 bg-gradient-to-r from-indigo-700 to-orange-600 hover:shadow-lg hover:bg-gradient-to-r hover:from-indigo-700 hover:to-orange-700  hover:scale-105 rounded-lg transition flex items-center justify-center">
                                    <i className="fas fa-paper-plane mr-2" ></i> Send Message
                                </button>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact