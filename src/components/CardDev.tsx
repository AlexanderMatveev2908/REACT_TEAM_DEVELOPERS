import type { FC } from "react";
import type { PersonType } from "../config/fieldsData";

type PropsType = {
  el: PersonType;
};

const CardDev: FC<PropsType> = ({ el }) => {
  return (
    <div className="w-full grid grid-cols-1 gap-[32px]">
      {/* IMG */}
      <div className="w-full rounded-[12px] overflow-hidden h-[350px]">
        <img
          src={el.img}
          alt={`img of ${el.name}`}
          className="object-cover w-full h-full object-top"
        />
      </div>
      {/* NAME */}
      <div className="w-full flex justify-center">
        <p className="txt__b_md"></p>
      </div>
    </div>
  );
};

export default CardDev;
