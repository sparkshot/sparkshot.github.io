import styles from "@styles/components/Gallery.module.scss";
import ExportedImage from "next-image-export-optimizer";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useInView } from "@utils/hooks/useInView";
import type { Photo } from "@components/../pages/index";

interface PhotoCardProps {
  photo: Photo;
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
  photos: Photo[];
  className?: string;
}

const Gallery: React.FC<GalleryProps> = ({ photos, className }) => {
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
