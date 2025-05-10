import { v4 } from "uuid";
import { assets } from "../assets/imgs/assets";

export type PersonType = {
  id: string;
  name: string;
  job: string;
  img: string;
};

export const people = [
  {
    name: "Maria Ionescu",
    job: "Frontend Developer",
    img: assets.img_0,
  },
  {
    name: "Derek Obama",
    job: "Backend Developer",
    img: assets.img_3,
  },
  {
    name: "Ioana Dobre",
    job: "Product Designer",
    img: assets.img_1,
  },
  {
    name: "Alex Radu",
    job: "Tech Lead",
    img: assets.img_2,
  },
].map((el) => ({
  ...el,
  id: v4(),
}));
