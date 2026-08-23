import type { ImageMetadata } from "astro";

import otkterImg from "../assets/cases/otkter.png";
import phenomenaImg from "../assets/cases/phenomena.png";

import { type ServiceId } from "./services";

type CaseColor = "nephritis" | "badge";

export type CaseItem = {
  image: ImageMetadata;
  title: string;
  text: string;
  color: CaseColor;
  href: string;
  serviceIds: ServiceId[];
};

export const cases: CaseItem[] = [
  {
    image: otkterImg,
    title: "Открытая Территория",
    text: "Экосистема творческих возможностей",
    color: "nephritis",
    href: "/cases/otkter",
    serviceIds: ["identity", "ux", "dev"],
  },
  {
    image: phenomenaImg,
    title: "Феномены",
    text: "Комедийная драма о силе таланта и настоящем даре",
    color: "badge",
    href: "/cases/phenomena",
    serviceIds: ["identity", "prod", "pr", "smm", "dev"],
  },
];
