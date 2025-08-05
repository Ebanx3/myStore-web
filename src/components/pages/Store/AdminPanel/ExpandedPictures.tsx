import { useState } from "react";
import { LeftArrowSVG } from "../../../../assets/LeftArrowSVG";
import { RightArrowSVG } from "../../../../assets/RightArrowSVG";
import { CrossSVG } from "../../../../assets/CrossSVG";

interface Props {
  urls: string[];
  productName: string;
  close: VoidFunction;
}

export const ExpandedPictures = ({ urls, productName, close }: Props) => {
  const [photoNumber, setPhotoNumber] = useState(0);
  const photosLength = urls.length;
  console.log(photosLength);

  const handleLeftButton = () => {
    if (photoNumber === 0) return;
    setPhotoNumber((value) => value - 1);
  };
  const handleRightButton = () => {
    if (photoNumber === photosLength - 1) return;
    setPhotoNumber((value) => value + 1);
  };

  return (
    <div className="h-screen w-screen fixed top-0 left-0 flex justify-center items-center backdrop-blur-sm">
      <div className="relative h-[80%]">
        <button
          onClick={close}
          className="bg-white absolute top-2 right-2 rounded-full p-1 hover:bg-stone-100 cursor-pointer font-bold"
        >
          <CrossSVG />
        </button>
        <img src={urls[photoNumber]} alt={productName} className="h-full" />
      </div>
     {photosLength != 1 && <div className="absolute border bottom-16 rounded-full flex">
        <button
          className={
            photoNumber === 0
              ? "bg-white size-12 flex justify-center items-center text-stone-400"
              : "bg-white size-12 flex justify-center items-center hover:bg-stone-100 cursor-pointer"
          }
          onClick={handleLeftButton}
          disabled={photoNumber === 0}
        >
          <LeftArrowSVG />
        </button>
        <button
          className={
            photoNumber === photosLength - 1
              ? "bg-white size-12 flex justify-center items-center text-stone-400 border-l"
              : "bg-white size-12 flex justify-center items-center hover:bg-stone-100 cursor-pointer border-l"
          }
          onClick={handleRightButton}
          disabled={photoNumber === photosLength - 1}
        >
          <RightArrowSVG />
        </button>
      </div>}
    </div>
  );
};
