import ProjectSlider from "@/components/ProjectSlider";
import React from "react";

const page = () => {
  return (
    <div className="flex items-center justify-center gap-5 flex-col md:flex-row h-screen bg-[#0C011A]">
      <div className="flex flex-col gap-3">
        <h1 className="text-[50px] text-white font-semibold">
          My Work<span className="text-red-500">.</span>
        </h1>
        <p className="max-w-[400px] text-[16px] text-gray-200 md:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          minima quod magni sequi quam tempore deserunt odit vitae.
        </p>
      </div>

      <ProjectSlider />
    </div>
  );
};

export default page;
