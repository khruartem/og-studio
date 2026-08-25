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

export const servicesNavigation: MenuItem[] = [
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

