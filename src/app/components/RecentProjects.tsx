import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";

const RecentProjects = () => {
  return (
    // <div className="py-20">
    //   <h1 className="heading">
    //     A small of selection of{" "}
    //     <span className="text-purple">recent projects</span>
    //   </h1>
    //   <div className="flex justify-center items-center p-4 flex-wrap mt-10 gap-x-24 gap-y-8">
    //     {projects.map((project) => (
    //       <div
    //         key={project.id}
    //         className="m:h-[41rem] lg:min-h-[32.5rem] h-[32rem] flex justify-center items-center  sm:w-[570px] w-[80vw]"
    //       >
    //         <PinContainer title={"visit"} href={project.link}>
    //           <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh]  mb-10">
    //             <div className="w-full overflow-hidden lg:rounded-3xl relative h-full bg-[#13162d]">
    //               <img src="/bg.png" alt="bg-img" />
    //             </div>
    //             <img src={project.img} alt={project.title} />
    //           </div>
    //           <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
    //             {project.title}
    //           </h1>
    //           <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-1">
    //             {project.des}
    //           </p>
    //           <div className="flex items-center justify-between mt-7 mb-3">
    //             <div className="flex items-center">
    //               {project.iconLists.map((icon, index) => (
    //                 <div
    //                   key={icon}
    //                   className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
    //                   style={{ transform: `translateX(-${5 * index * 2}px)` }}
    //                 >
    //                   <img src={icon} alt={icon} />
    //                 </div>
    //               ))}
    //             </div>
    //             <div className="flex justify-center items-center gap-2">
    //               <p className="lg:text-xl md:text-xs text-sm text-purple">
    //                 Check Live Site
    //               </p>
    //               <FaLocationArrow />
    //             </div>
    //           </div>
    //         </PinContainer>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex justify-center items-center p-4 flex-wrap mt-10 gap-x-24 gap-y-8">
        {projects.map((item) => (
          <div
            className="sm:h-[41rem] lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
            key={item.id}
          >
            <PinContainer
              title="visit"
              href={item.link}
            >
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;