import React from "react";

export enum ImageGridType {
  Standard,
}

export interface ImagesGridProps {
  Type: ImageGridType;
  Items: Array<string>;
}

const ImagesGrid = (props: ImagesGridProps) => {
  return (
    <div className="images-grid">
      {props.Type === ImageGridType.Standard && (
        <div className="images-grid-content type-standard">
          {props.Items.filter((_, i) => i < 4).map((val, i) => {
            return (
              <img
                src={val}
                alt=""
                key={i}
                className="images-grid-item"
                data-aos="fade-right"
                data-aos-duration="800"
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ImagesGrid;
