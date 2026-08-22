import otkterImg from "../assets/cases/otkter.png";
import phenomenaImg from "../assets/cases/phenomena.png";
import Title from "../components/ui/Title.astro";

import { services } from "./services";

type BadgeItem = {
  icon: string;
  title: string;
};

type CaseItem = {
  image: string;
  title: string;
  text: string;
  badges: BadgeItem[];
};

const [identity, ux, smm, pr, prod, dev] = services;

export const cases: CaseItem[] = [
  {
    image: otkterImg.src,
    title: "Открытая Территория",
    text: "Экосистема творческих возможностей",
    badges: [identity, ux, dev],
  },
  {
    image: phenomenaImg.src,
    title: "Феномены",
    text: "Комедийная драма о силе таланта и настоящем даре",
    badges: [identity, prod, pr, smm, dev],
  },
];
