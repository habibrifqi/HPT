
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      {/* <!-- Header/Navigation --> */}
      <Navbar />

      {/* <!-- About Section --> */}
      <Hero />



      {/* <!-- Skills Section --> */}
      <section id="about" className="py-20 glass">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" data-aos="fade-up">
                <span className="gradient-text">About Me</span>
            </h2>
            
            <div className="flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/3 mb-8 lg:mb-0 flex justify-center" data-aos="fade-right">
                    <div className="relative w-64 h-64 gradient-border">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-600/20 rounded-lg opacity-20 blur-xl"></div>
                        {/* <img src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070&auto=format&fit=crop" alt="About" className="relative z-10 w-full h-full rounded-lg object-cover"> */}
                    </div>
                </div>
                
                <div className="lg:w-2/3 lg:pl-12" data-aos="fade-left">
                    <h3 className="text-2xl font-semibold mb-4">Who am I?</h3>
                    <p className="mb-6 text-lg opacity-90">
                        I'm a passionate full-stack developer with 7+ years of experience creating modern web applications. I specialize in React, Node.js, and cloud-native architectures, delivering scalable solutions that drive business growth.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 card-hover" data-aos="zoom-in">
                            <h4 className="font-semibold mb-2 flex items-center">
                                <i className="fas fa-graduation-cap mr-2 text-indigo-400"></i> Education
                            </h4>
                            <p className="font-medium">MSc in Computer Science</p>
                            <p className="text-sm text-slate-400">Stanford University, 2016</p>
                        </div>
                        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 card-hover" data-aos="zoom-in" data-aos-delay="100">
                            <h4 className="font-semibold mb-2 flex items-center">
                                <i className="fas fa-briefcase mr-2 text-indigo-400"></i> Experience
                            </h4>
                            <p className="font-medium">Lead Developer</p>
                            <p className="text-sm text-slate-400">TechVision Inc., 2019-Present</p>
                        </div>
                    </div>
                    
                    <p className="mb-6 opacity-90">
                        My approach combines technical excellence with creative problem-solving. I thrive in collaborative environments and enjoy mentoring junior developers. When I'm not coding, you'll find me hiking, playing chess, or experimenting with new coffee brewing techniques.
                    </p>
                    
                    <div className="flex flex-wrap gap-4">
                        <a href="#" className="inline-flex items-center px-6 py-3 border border-indigo-500 rounded-lg font-medium hover:bg-indigo-500/10 transition">
                            <i className="fas fa-download mr-2"></i> Download CV
                        </a>
                        <a href="#contact" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg font-medium hover:opacity-90 transition">
                            <i className="fas fa-handshake mr-2"></i> Hire Me
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>








      {/* <section id="skills" className="h-screen">
       <h1>asdsda</h1>
    </section> */}
     


    </>

  );
}
