import type { FC } from "react";

const Header: FC = () => {
  return (
    <div className="w-full grid grid-cols-1 justify-items-center gap-[24px] max-w-[650px]">
      {/* TITLE */}
      <div className="w-full flex justify-center">
        <h1 className="txt__h_lg text-center">Meet the team</h1>
      </div>
      {/* SUB_TITLE */}
      <div className="w-full flex justify-center">
        <h2 className="txt__b_md text-center">
          The minds behind the magic — passionate, creative and always pushing
          forward
        </h2>
      </div>
    </div>
  );
};

export default Header;
