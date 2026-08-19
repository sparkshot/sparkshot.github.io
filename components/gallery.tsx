import styles from "@styles/components/Gallery.module.scss";
import ExportedImage from "next-image-export-optimizer";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useInView } from "@utils/hooks/useInView";

const photos = [
  { src: "/portfolio-pic3.jpeg", width: 1080, height: 1360 },
  { src: "/portfolio-pic4.jpeg", width: 1080, height: 1260 },
  { src: "/portfolio-pic5.jpeg", width: 1000, height: 1300 },
  { src: "/portfolio-pic6.jpeg", width: 1080, height: 1360 },
  { src: "/portfolio-pic7.jpeg", width: 1080, height: 1620 },
  { src: "/portfolio-pic8.jpeg", width: 1080, height: 1160 },
  { src: "/portfolio-pic9.jpeg", width: 1080, height: 1360 },
  { src: "/portfolio-pic10.jpeg", width: 1080, height: 1620 },
  { src: "/portfolio-pic11.jpeg", width: 1080, height: 1360 },
  { src: "/portfolio-pic12.jpeg", width: 1080, height: 1300 },
  { src: "/portfolio-pic13.jpeg", width: 1080, height: 1620 },
  { src: "/portfolio-pic14.jpeg", width: 1080, height: 1360 },
  { src: "/portfolio-pic15.jpeg", width: 1080, height: 1360 },
  { src: "/portfolio-pic16.jpeg", width: 980, height: 1220 },
  { src: "/portfolio-pic17.jpeg", width: 1040, height: 1440 },
];

interface PhotoCardProps {
  photo: (typeof photos)[0];
  index: number;
  onClick: () => void;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ photo, index, onClick }) => {
  const { ref, isInView } = useInView(0.1);

  return (
    <div
      ref={ref}
      className={`${styles.photoCard} ${isInView ? styles.visible : ""}`}
      style={{ transitionDelay: `${(index % 3) * 0.1}s` }}
      onClick={onClick}
    >
      <ExportedImage
        src={photo.src}
        alt={`Photo ${index + 1}`}
        width={photo.width}
        height={photo.height}
        className={styles.photo}
      />
      <div className={styles.photoOverlay}>
        <span className={styles.viewIcon}>View</span>
      </div>
    </div>
  );
};

interface GalleryProps {
  className?: string;
}

const Gallery: React.FC<GalleryProps> = ({ className }) => {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const slides = photos.map((photo) => ({
    src: photo.src,
    width: photo.width,
    height: photo.height,
  }));

  return (
    <section className={`${styles.gallerySection} ${className || ""}`}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Portfolio</h2>
        <div className={styles.sectionLine} />
      </div>
      <div className={styles.galleryContainer}>
        {photos.map((photo, index) => (
          <PhotoCard
            key={index}
            photo={photo}
            index={index}
            onClick={() => setLightboxIndex(index)}
          />
        ))}
      </div>
      <Lightbox
        slides={slides}
        index={lightboxIndex}
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
      />
    </section>
  );
};

export default Gallery;
