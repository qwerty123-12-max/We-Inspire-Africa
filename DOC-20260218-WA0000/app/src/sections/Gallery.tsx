import React, { useState } from "react";
import "./Gallery.css";

interface MediaItem {
  id: number;
  type: "image" | "video";
  src: string;
  alt: string;
  title: string;
}

const mediaItems: MediaItem[] = [
  {
    id: 1,
    type: "image",
    src: "/images/scarly.jpg",
    alt: "Mental health talks with MSF",
    title: "Mental health talks with MSF",
  },
  {
    id: 2,
    type: "image",
    src: "/images/msf1.jpg",
    alt: "mental health talks with MSF",
    title: "Mental health talks with MSF",
  },
  {
    id: 3,
    type: "image",
    src: "/images/scarly1.jpg",
    alt: "Employment opportunitys talks with Swahilipot Hub Foundation",
    title: "Employment opportunitys talks with Swahilipot Hub Foundation",
  },
  {
    id: 4,
    type: "image",
    src: "/images/employ1.jpg",
    alt: "Employability support talks with Swahilipot Hub Foundation",
    title: "Employability support talks with Swahilipot Hub Foundation",
  },
  {
    id: 5,
    type: "image",
    src: "/images/under.jpg",
    alt: "Mental health for under 16 years girls in our community",
    title: "Mental Health for Under 16 years girls in our community",
  },
  {
    id: 6,
    type: "image",
    src: "/images/under1.jpg",
    alt: "Mental health for under 16 years girls in our community",
    title: "Mental Health for Under 16 years girls in our community",
  },
  {
    id: 7,
    type: "image",
    src: "/images/case.jpg",
    alt: "Case management training",
    title: "Case Management training",
  },
  { id: 8,
    type: "image",
    src: "/images/case1.jpg",
    alt: "Case management training", 
    title: "Case Management training" 
  },
    { id: 9,
    type: "image",
    src: "/images/ajira.jpeg",
    alt: "Ajira Digital training", 
    title: "Ajira Digital training" 
  },
    { id: 10,
    type: "image",
    src: "/images/ajira1.jpeg",
    alt: "Ajira Digital training", 
    title: "Ajira Digital training" 
  },
  {
    id: 11,
    type: "image",
    src: "/images/comp.jpg",
    alt: "Youth program video 1",
    title: "Program Highlights Video",
  }, 
  {
    id: 12,
    type: "image",
    src: "/images/comp1.jpg",
    alt: "Youth program video 2",
    title: "Youth Impact Video",
  },
  {    id: 13,
    type: "image",
    src: "/images/comp2.jpg",
    alt: "Youth program video 2",
    title: "Youth Impact Video",
  },
  {
    id: 14,
    type: "image",
    src: "/images/beauty.jpeg",
    alt: "Youth program video 2",
    title: "Youth Impact Video",
  },
  {
    id: 15,
    type: "image",
    src: "/images/beauty1.jpeg",
    alt: "Youth program video 2",
    title: "Youth Impact Video",  
  }, 
  {
    id: 15,
    type: "image",
    src: "/images/beauty2.jpeg",
    alt: "Youth program video 2",
    title: "Youth Impact Video",  
  }, 
  // {
  //   id: 11,
  //   type: "video",
  //   src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
  //   alt: "Youth program video 1",
  //   title: "Program Highlights Video",
  // },
  // {
  //   id: 12,
  //   type: "video",
  //   src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/river.mp4",
  //   alt: "Youth program video 2",
  //   title: "Youth Impact Video",
  // },
];

const Gallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);

  const openModal = (item: MediaItem) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div id="Gallery" className="gallery-container">
      <h2 className="gallery-title">Youth Media Gallery</h2>

      <div className="gallery-grid">
        {mediaItems.map((item) => (
          <div
            key={item.id}
            className="gallery-item"
            onClick={() => openModal(item)}
          >
            {item.type === "image" ? (
              <img src={item.src} alt={item.alt} />
            ) : (
              <div className="video-card">
                <video
                  src={item.src}
                  muted
                  preload="metadata"
                  className="gallery-video"
                />
              </div>
            )}
            <div className="overlay">
              <span>{item.type === "image" ? "View" : "Play"}</span>
            </div>
            <div className="gallery-caption">{item.title}</div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className="modal" onClick={closeModal}>
          <span className="close">&times;</span>
          {selectedItem.type === "image" ? (
            <img
              className="modal-content"
              src={selectedItem.src}
              alt={selectedItem.alt}
            />
          ) : (
            <video
              className="modal-content"
              controls
              autoPlay
              src={selectedItem.src}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Gallery;

