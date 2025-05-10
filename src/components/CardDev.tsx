import { useState, type FC } from "react";
import type { PersonType } from "../config/fieldsData";
import SkeletonImg from "./SkeletonImg/SkeletonImg";

type PropsType = {
  el: PersonType;
};

const CardDev: FC<PropsType> = ({ el }) => {
  const [isImg, setIsImg] = useState(false);

  return (
    <div className="w-full grid grid-cols-1 justify-items-center gap-[32px] relative">
      {/* IMG */}
      <div className="w-full max-w-[300px] rounded-[12px] overflow-hidden h-[350px]">
        {isImg ? (
          <img
            src={el.img}
            alt={`img of ${el.name}`}
            className="object-cover w-full h-full object-top"
          />
        ) : (
          <SkeletonImg />
        )}
        <img
          src={el.img}
          alt=""
          className="absolute opacity-0"
          onLoad={() => setIsImg(true)}
        />
      </div>
      {/* NAME */}
      <div className="w-full flex flex-col items-center">
        <p className="txt__h_sm text-center">{el.name}</p>
        <span className="txt__b_sm text-center">{el.job}</span>
      </div>
    </div>
  );
};

export default CardDev;
