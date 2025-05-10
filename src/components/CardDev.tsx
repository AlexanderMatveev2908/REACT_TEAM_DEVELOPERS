import type { FC } from "react";
import type { PersonType } from "../config/fieldsData";

type PropsType = {
  el: PersonType;
};

const CardDev: FC<PropsType> = ({ el }) => {
  return (
    <div className="w-full grid grid-cols-1 justify-items-center gap-[32px]">
      {/* IMG */}
      <div className="w-full max-w-[300px] rounded-[12px] overflow-hidden h-[350px]">
        <img
          src={el.img}
          alt={`img of ${el.name}`}
          className="object-cover w-full h-full object-top"
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
