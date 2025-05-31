import React from 'react'

function ProjectFutures() {
  return (
    <>
     {/* <!-- Projects Section --> */}
    <section id="projects" className="py-20 glass">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" data-aos="fade-up">
                <span className="gradient-text">Featured Projects</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* <!-- Project 1 --> */}
                <div className="project-card bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 card-hover" data-aos="zoom-in">
                    <div className="h-60 bg-gradient-to-r from-indigo-500/20 to-purple-600/20 flex items-center justify-center relative">
                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Project" className="absolute inset-0 w-full h-full object-cover">
                        <div className="project-overlay">
                            <h3 className="text-xl font-semibold">E-commerce Platform</h3>
                            <p className="text-sm mb-3">Full-featured online store with payment integration</p>
                            <div className="flex space-x-3">
                                <a href="#" className="text-sm bg-indigo-600 hover:bg-indigo-700 px-3 py-1 rounded">Live Demo</a>
                                <a href="#" className="text-sm border border-indigo-500 hover:bg-indigo-500/10 px-3 py-1 rounded">Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">E-commerce Platform</h3>
                        <p className="text-slate-400 mb-4">A complete online shopping solution with product management, cart functionality, and secure checkout.</p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-1 bg-indigo-900/30 text-xs rounded">React</span>
                            <span className="px-2 py-1 bg-indigo-900/30 text-xs rounded">Node.js</span>
                            <span className="px-2 py-1 bg-indigo-900/30 text-xs rounded">MongoDB</span>
                        </div>
                    </div>
                </div>
                
                {/* <!-- Project 2 --> */}
                <div className="project-card bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 card-hover" data-aos="zoom-in" data-aos-delay="100">
                    <div className="h-60 bg-gradient-to-r from-indigo-500/20 to-purple-600/20 flex items-center justify-center relative">
                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Project" className="absolute inset-0 w-full h-full object-cover">
                        <div className="project-overlay">
                            <h3 className="text-xl font-semibold">Analytics Dashboard</h3>
                            <p className="text-sm mb-3">Real-time data visualization platform</p>
                            <div className="flex space-x-3">
                                <a href="#" className="text-sm bg-indigo-600 hover:bg-indigo-700 px-3 py-1 rounded">Live Demo</a>
                                <a href="#" className="text-sm border border-indigo-500 hover:bg-indigo-500/10 px-3 py-1 rounded">Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">Analytics Dashboard</h3>
                        <p className="text-slate-400 mb-4">Interactive data visualization tool with custom reporting and real-time updates.</p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-1 bg-indigo-900/30 text-xs rounded">Vue.js</span>
                            <span className="px-2 py-1 bg-indigo-900/30 text-xs rounded">D3.js</span>
                            <span className="px-2 py-1 bg-indigo-900/30 text-xs rounded">Firebase</span>
                        </div>
                    </div>
                </div>
                
                {/* <!-- Project 3 --> */}
                <div className="project-card bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 card-hover" data-aos="zoom-in" data-aos-delay="200">
                    <div className="h-60 bg-gradient-to-r from-indigo-500/20 to-purple-600/20 flex items-center justify-center relative">
                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Project" className="absolute inset-0 w-full h-full object-cover">
                        <div className="project-overlay">
                            <h3 className="text-xl font-semibold">Fitness App</h3>
                            <p className="text-sm mb-3">Mobile workout tracker with AI coach</p>
                            <div className="flex space-x-3">
                                <a href="#" className="text-sm bg-indigo-600 hover:bg-indigo-700 px-3 py-1 rounded">Live Demo</a>
                                <a href="#" className="text-sm border border-indigo-500 hover:bg-indigo-500/10 px-3 py-1 rounded">Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">Fitness App</h3>
                        <p className="text-slate-400 mb-4">Mobile-first workout tracker with exercise library, progress tracking, and AI-powered recommendations.</p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-1 bg-indigo-900/30 text-xs rounded">React Native</span>
                            <span className="px-2 py-1 bg-indigo-900/30 text-xs rounded">GraphQL</span>
                            <span className="px-2 py-1 bg-indigo-900/30 text-xs rounded">AWS</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="text-center mt-12" data-aos="fade-up">
                <a href="#" className="inline-flex items-center px-8 py-3 border border-indigo-500 rounded-lg font-medium hover:bg-indigo-500/10 transition">
                    <i className="fas fa-folder-open mr-2"></i> View All Projects
                </a>
            </div>
        </div>
    </section>
    </>
  )
}

export default ProjectFutures