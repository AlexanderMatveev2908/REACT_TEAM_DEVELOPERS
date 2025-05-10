import type { FC } from "react";
import Header from "./components/Header";

const App: FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center px-[120px] py-[80px]">
      <div className="w-full flex flex-col gap-[60px] items-center">
        {/* HEADER */}
        <Header />
        {/* CONTENT */}
      </div>
    </div>
  );
};

export default App;
