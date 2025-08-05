import { useState } from "react";
import { ExpandedPictures } from "./ExpandedPictures";

interface Props {
  urls: string[];
  productName: string;
}

export const ProductPictures = ({ urls, productName }: Props) => {
  const [expandPictures, setExpandPictures] = useState(false);

  return (
    <>
      <button onClick={() => setExpandPictures(true)} className="cursor-pointer hover:opacity-80">
        <img src={urls[0]} alt={productName} className="size-28 object-cover border border-sky-500" />
      </button>
      {expandPictures && <ExpandedPictures urls={urls} productName={productName} close={()=> setExpandPictures(false)}/>}
    </>
  );
};
