import type { HTMLLinkTarget } from "../shared/types/html";

export type MenuItem = {
  label: string;
  href: string;

  target?: HTMLLinkTarget;
};

export const headerNavigation: MenuItem[] = [
  {
    label: "Что мы умеем",
    href: "#services",
  },
  {
    label: "Кейсы",
    href: "#cases",
  },
  {
    label: "Клиенты",
    href: "#clients",
  },
];

export const casesNavigation: MenuItem[] = [
  {
    label: "Открытая Территория",
    href: "/otkter",
  },
];

export const servicesNavigation: MenuItem[] = [
  {
    label: "Айдентика",
    href: "/identity",
  },
  {
    label: "Сайты и интерфейсы",
    href: "/ux",
  },
  {
    label: "SMM",
    href: "/smm",
  },
  {
    label: "PR",
    href: "/pr",
  },
  {
    label: "Продакшн",
    href: "/prod",
  },
  {
    label: "Разработка",
    href: "/dev",
  },
];
