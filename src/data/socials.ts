type SocialsIcon = "telegram" | "vk";

type SocialsItem = {
  label: string;
  href: string;
  icon: SocialsIcon;
};

export const socials: SocialsItem[] = [
  {
    label: "Telegram",
    href: "https://t.me/otkterr",
    icon: "telegram",
  },
  {
    label: "VK",
    href: "https://vk.com/otkter",
    icon: "vk",
  },
];
