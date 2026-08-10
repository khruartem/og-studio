import type { Category } from "../components/ui/CategoryCard.astro";

import theatre from "../assets/categories-bg/theatre.jpg";
import music from "../assets/categories-bg/music.jpg";
import designers from "../assets/categories-bg/designers.jpg";
import blogers from "../assets/categories-bg/blogers.jpg";

export const categories: Category[] = [
  {
    variant: "theatre",
    image: theatre.src,
    title: "Театр и кино",
  },
  {
    variant: "music",
    image: music.src,
    title: "Музыкальные бренды",
  },
  {
    variant: "designers",
    image: designers.src,
    title: ["Дизайнеры", "и художники"],
  },
  {
    variant: "blogers",
    image: blogers.src,
    title: ["Блоггеры", "и подкасты"],
  },
];
