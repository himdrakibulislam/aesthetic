"use client";
import React, { useState, useEffect } from "react";

const HeroSection = ({ projects }) => {
  const [bgImageIndex, setBgImageIndex] = useState(0);
  const bgImages = [];
  projects.forEach((project) => {
    bgImages.push(project.project_images[0].image);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setBgImageIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [bgImages.length]);

  const bgImageUrl = bgImages[bgImageIndex];

  return (
    <div className="relative w-full h-screen transition-background">
      <div
        className="relative w-full h-screen"
        style={{
          backgroundImage: `url(${
            process.env.NEXT_PUBLIC_BACKEND_URL  +
            bgImageUrl
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(2px) brightness(0.3)",
          opacity: 1,
          transition: "opacity 1s",
        }}
      ></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-xl lg:text-4xl font-bold">
          Next Step Of Decoration
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
