import React from "react";
import Marquee from "react-fast-marquee";

export interface ImagesGalleryProps {
  Images: Array<string>;
  Direction?: "left" | "right";
}

const ImagesGallery = (props: ImagesGalleryProps) => {
  let images = props.Images;

  return (
    <div className="images-gallery">
      <Marquee
        gradient={false}
        className="section-band-marquee"
        direction={props.Direction}
        speed={25}
      >
        {images.map((img) => {
          return (
            <img
              src={img}
              alt=""
              className="image-item"
              data-aos="fade-up"
              data-aos-duration="1000"
            />
          );
        })}
      </Marquee>
    </div>
  );
};

export default ImagesGallery;
