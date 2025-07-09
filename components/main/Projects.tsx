import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="z-[25]">
      <div className="w-full px-6 my-32">
        <div className="flex justify-center items-center py-16 text-center">
          <h3 className="text-[28px] sm:text-4xl font-bold pointer-events-none">Some of my latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Projects</span></h3>
        </div>
        <ul className="flex flex-col justify-center items-center sm:flex-row gap-5 md:gap-10 max-w-[1600px] flex-wrap">

          {/* project - 1 */}
          <li id="project1" className="group p-3 rounded-lg border border-white/20 bg-[#ffffff00] shadow-lg ">
            <div className="overflow-hidden rounded-lg h-[205px] w-full max-w-[400px] bg-slate-500 relative ">
              <img src="/pro1.png" className="group-hover:scale-105 duration-150 min-h-full object-cover rounded-lg" alt="Figma design system" decoding="async" />
            </div>
            <div className=" px-4 py-2">
              <span className="opacity: 0; right: 10px;"></span>
              <h4 className="text-white">My Figma design system</h4>
              <p className="text-gray-500">Design system</p>
            </div>
            <div className="flex justify-start items-center gap-6 py-3">
              <button className="sm:hover:scale-105 duration-200 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3">
                <a className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link mr-2 h-4 w-4">
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6">
                    </path>
                  </svg> Live
                </a>
              </button>
              <button className="border-[1px] sm:hover:scale-105 duration-200 border-[#b3b3b3] inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-black text-white hover:bg-[#1a1a1a] h-9 rounded-md px-3">
                <a className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=" mr-2 h-4 w-4">
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6">
                    </path>
                  </svg> Github
                </a>
              </button>
            </div>
          </li>

          {/* project - 2 */}
          <li id="project2" className="group p-3 rounded-lg border border-white/20 bg-[#ffffff00] shadow-lg ">
            <div className="overflow-hidden rounded-lg h-[205px] w-full max-w-[400px] bg-slate-500 relative">
              <img src="/pro2.png" className="group-hover:scale-105 duration-150 min-h-full object-cover rounded-lg" alt="UI design book" decoding="async" />
            </div>
            <div className=" px-4 py-2">
              <span className="opacity: 0; right: 10px;"></span>
              <h4 className="text-white">My UI design book</h4>
              <p className="text-gray-500">Book</p>
            </div>
            <div className="flex justify-start items-center gap-6 py-3">
              <button className="sm:hover:scale-105 duration-200 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3">
                <a className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link mr-2 h-4 w-4">
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6">
                    </path>
                  </svg> Live
                </a>
              </button>
              <button className="border-[1px] sm:hover:scale-105 duration-200 border-[#b3b3b3] inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-black text-white hover:bg-[#1a1a1a] h-9 rounded-md px-3">
                <a className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=" mr-2 h-4 w-4">
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6">
                    </path>
                  </svg> Github
                </a>
              </button>
            </div>
          </li>

          {/* project - 3 */}
          <li id="project3" className="group p-3 rounded-lg border border-white/20 bg-[#ffffff00] shadow-lg ">
            <div className="overflow-hidden rounded-lg h-[205px] w-full max-w-[400px] bg-slate-500 relative">
              <img src="/pro3.png" className="group-hover:scale-105 duration-150 min-h-full object-cover rounded-lg" alt="Image" decoding="async" />
            </div>
            <div className=" px-4 py-2">
              <span className="opacity: 0; right: 10px;"></span>
              <h4 className="text-white">Creating a lean design system</h4>
              <p className="text-gray-500">Design system</p>
            </div>
            <div className="flex justify-start items-center gap-6 py-3">
              <button className="sm:hover:scale-105 duration-200 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3">
                <a className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link mr-2 h-4 w-4">
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6">
                    </path>
                  </svg> Live
                </a>
              </button>
              <button className="border-[1px] sm:hover:scale-105 duration-200 border-[#b3b3b3] inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-black text-white hover:bg-[#1a1a1a] h-9 rounded-md px-3">
                <a className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=" mr-2 h-4 w-4">
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6">
                    </path>
                  </svg> Github
                </a>
              </button>
            </div>
          </li>
          {/* project - 4 */}
          <li id="project4" className="group p-3 rounded-lg border border-white/20 bg-[#ffffff00] shadow-lg">
            <div className="overflow-hidden rounded-lg h-[205px] w-full max-w-[400px] bg-slate-500 relative">
              <img src="/pro4.png" className="group-hover:scale-105 duration-150 min-h-full object-cover rounded-lg" alt="Figma design system" decoding="async" />
            </div>
            <div className=" px-4 py-2">
              <span className="opacity: 0; right: 10px;"></span>
              <h4 className="text-white">Nike Store</h4>
              <p className="text-gray-500">Shoe store</p>
            </div>
            <div className="flex justify-start items-center gap-6 py-3">
              <button className="sm:hover:scale-105 duration-200 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3">
                <a className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link mr-2 h-4 w-4">
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6">
                    </path>
                  </svg> Live
                </a>
              </button>
              <button className="border-[1px] sm:hover:scale-105 duration-200 border-[#b3b3b3] inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-black text-white hover:bg-[#1a1a1a] h-9 rounded-md px-3">
                <a className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=" mr-2 h-4 w-4">
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6">
                    </path>
                  </svg> Github
                </a>
              </button>
            </div>
          </li>

          {/* project - 5 */}
          <li id="project5" className="group p-3 rounded-lg border border-white/20 bg-[#ffffff00] shadow-lg">
            <div className="overflow-hidden rounded-lg h-[205px] w-full max-w-[400px] bg-slate-500 relative">
              <img src="/pro5.png" className="group-hover:scale-105 duration-150 min-h-full object-cover rounded-lg" alt="UI design book" decoding="async" />
            </div>
            <div className=" px-4 py-2">
              <span className="opacity: 0; right: 10px;"></span>
              <h4 className="text-white">Coffe House</h4>
              <p className="text-gray-500">Coffe store</p>
            </div>
            <div className="flex justify-start items-center gap-6 py-3">
              <button className="sm:hover:scale-105 duration-200 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3">
                <a className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link mr-2 h-4 w-4">
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6">
                    </path>
                  </svg> Live
                </a>
              </button>
              <button className="border-[1px] sm:hover:scale-105 duration-200 border-[#b3b3b3] inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-black text-white hover:bg-[#1a1a1a] h-9 rounded-md px-3">
                <a className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=" mr-2 h-4 w-4">
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6">
                    </path>
                  </svg> Github
                </a>
              </button>
            </div>
          </li>

          {/* project - 6 */}
          <li id="project6" className="group p-3 rounded-lg border border-white/20 bg-[#ffffff00] shadow-lg">
            <div className="overflow-hidden rounded-lg h-[205px] w-full max-w-[400px] bg-slate-500 relative">
              <img src="/pro6.png" className="group-hover:scale-105 duration-150 min-h-full object-cover rounded-lg" alt="Image" decoding="async" />
            </div>
            <div className=" px-4 py-2">
              <span className="opacity: 0; right: 10px;"></span>
              <h4 className="text-white">Fast Food</h4>
              <p className="text-gray-500">Food website</p>
            </div>
            <div className="flex justify-start items-center gap-6 py-3">
              <button className="sm:hover:scale-105 duration-200 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3">
                <a className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link mr-2 h-4 w-4">
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6">
                    </path>
                  </svg> Live
                </a>
              </button>
              <button className="border-[1px] sm:hover:scale-105 duration-200 border-[#b3b3b3] inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-black text-white hover:bg-[#1a1a1a] h-9 rounded-md px-3">
                <a className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=" mr-2 h-4 w-4">
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6">
                    </path>
                  </svg> Github
                </a>
              </button>
            </div>
          </li>

        </ul>
      </div>
    </section>
  );
};

export default Projects;
