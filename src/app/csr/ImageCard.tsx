import React from 'react';

interface ImageCardProps {
  imageUrl: string;
  altText: string;
  style: object;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageUrl, altText ,style}) => {
  return (
    <div
      className="relative"
      style={style}
    >
      <img
        src={imageUrl}
        alt={altText}
        className="w-full h-full rounded-tl-[15.82px]"
      />
    </div>
  );
};

export default ImageCard;
