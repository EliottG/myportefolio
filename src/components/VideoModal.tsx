import { FC } from "react"
import { X } from "lucide-react"

interface VideoModalProps {
    videoUrl?: string;
    isOpen: boolean;
    onClose: () => void;
    title: string;
}
const VideoModal : FC<VideoModalProps> = ({ videoUrl, isOpen, onClose, title }) => {
    if (!isOpen) return null;
    const handleBackdropClick = (e) => {
      if (e.target === e.currentTarget) {
          onClose();
      }
  };
    return (
      <div onClick={handleBackdropClick} className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
        <div className="relative bg-secondary rounded-lg w-full max-w-4xl">
          <div className="flex justify-between items-center p-4 border-b border-gray-700">
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <button 
              onClick={onClose}
              className="text-white hover:text-gray-200 cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="aspect-video w-full">
            <iframe 
              src={videoUrl} 
              className="w-full h-full" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
          
         
        </div>
      </div>
    );
  };
  
  export default VideoModal