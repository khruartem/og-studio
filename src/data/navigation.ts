export type MenuItem = {
  label: string;
  href: string;

  target?: HTMLAttributeAnchorTarget;
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
