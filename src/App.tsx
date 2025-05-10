import type { FC } from "react";
import Header from "./components/Header";
import { people } from "./config/fieldsData";
import CardDev from "./components/CardDev";

const App: FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center px-[20px] xl:px-[120px] py-[40px] xl:py-[80px]">
      <div className="w-full flex flex-col gap-[60px] items-center">
        {/* HEADER */}
        <Header />
        {/* CONTENT */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[25px]">
          {people.map((el) => (
            <CardDev key={el.id} {...{ el }} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
