import type { HTMLLinkTarget } from "../shared/types/html";

export type MenuItem = {
  label: string;
  href: string;

  target?: HTMLLinkTarget;
};

export const navigation: MenuItem[] = [
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
