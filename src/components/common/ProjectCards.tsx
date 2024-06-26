import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  videoUrl: string;
  url: string;
}

const ProjectCards: React.FC<ProjectCardProps> = ({
  title,
  description,
  videoUrl,
  url,
}) => {
  const goTo = () => {
    window.open(url, "_blank");
  };

  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg bg-white transition duration-300 transform hover:cursor-pointer hover:scale-105 hover:shadow-xl"
      onClick={goTo}
    >
      {/* <img
        className="w-full h-48 object-cover transition duration-300 transform hover:scale-105"
        src={imageUrl}
        alt={title}
      /> */}
      <video
        autoPlay
        muted
        loop
        className="w-full h-48 object-cover transition duration-300 transform hover:scale-105"
      >
        <source src={videoUrl} type="video/mp4" />
        {title}
      </video>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className={"text-gray-700 text-base"}>{description}</p>
        {/* {!isHovered && <div className="h-16 bg-gray-200 mt-2 rounded"></div>} */}
      </div>
    </div>
  );
};

export default ProjectCards;
