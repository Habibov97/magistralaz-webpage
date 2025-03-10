"use client"
import AOS from "aos";
import { useState } from "react";
import { FaYoutube } from "react-icons/fa";
import Image from "next/image";
import { BlogVideosTypes } from "../_types/blogVideos.types";

interface BlogMaterialsProps {
  title: string;
  videos: BlogVideosTypes[];
}

export default function BlogMaterials({ title, videos }: BlogMaterialsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);

  AOS.refresh();

  const handleClick = (videoId: string) => {
    setSelectedVideoId(videoId);
    setIsModalOpen(true); 
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOutsideClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal(); 
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <h4 className="text-white font-bold text-2xl md:text-3xl">{title}</h4>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <div key={video.id} className="relative max-w-[550px] min-h-[270px] p-4 backdrop-blur-2xl bg-white/10 rounded-xl border border-stone-400/50 shadow-2xl shadow-black/50">
            <button
              className="relative w-full h-full z-30 cursor-pointer"
              onClick={() => handleClick(video.link.split("v=")[1])}
            >
              <Image
                className="rounded-xl object-cover w-full h-full"
                src="/stockImg1.jpg" 
                alt="Video thumbnail"
                width={550}  
                height={270}  
              />
              {/* Play button centered on image */}
              <span className="absolute z-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-5xl bg-white rounded-lg text-red-600">
                <FaYoutube />
              </span>
            </button>
          </div>
        ))}
      </div>

      {/* Modal for Video */}
      {isModalOpen && selectedVideoId && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4" 
          onClick={handleOutsideClick} 
        >
          <div className="relative w-full max-w-[800px] bg-white p-6 rounded-xl shadow-lg">
            <button
              onClick={closeModal}
              className="absolute w-[40px] h-[40px] flex justify-center items-center top-2 right-2 text-white font-bold text-xl cursor-pointer bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-all duration-300"
            >
              X
            </button>
            <iframe
              className="w-full h-[450px] rounded-xl"
              src={`https://www.youtube.com/embed/${selectedVideoId}`}
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
