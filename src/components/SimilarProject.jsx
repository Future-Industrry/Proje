
import React from "react";

const ProjectCard = ({ imageUrl }) => {
  return (
   
   <div className="w-[250px] h-[286px] rounded-[15px] flex flex-col  items-center justify-between p-2 sm:w-[220px] sm:h-[260px] xs:w-full xs:h-auto">
    
 <div
      className="w-[208px] h-[246px]   bg-cover bg-center outline-[#F5F5F5] dark:outline-[#1B202C] outline-16 rounded-[10px] sm:w-[180px] sm:h-[210px] xs:w-full xs:h-[200px]"
      style={{
         backgroundImage: `url(${imageUrl})` }}
    ></div>
   
    <button className="w-full h-[48px] bg-[#F5F5F5] dark:bg-[#1B202C] rounded-[10px] mt-10 flex items-center justify-center">
      <span className="text-[#373D37] dark:text-[#F1FFED] text-[24px] leading-[41px] font-medium  sm:text-[20px] xs:text-[18px]">
        مشاهده
      </span>
    </button>
  </div>
  );
};

export default ProjectCard;
