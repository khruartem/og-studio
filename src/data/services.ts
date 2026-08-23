import type { SvgComponent } from "astro/types";

import IdentityIcon from "../assets/icons/services/identity_graph.svg";
import UxIcon from "../assets/icons/services/ux_graph.svg";
import PrIcon from "../assets/icons/services/pr_graph.svg";
import SmmIcon from "../assets/icons/services/smm_graph.svg";
import ProdIcon from "../assets/icons/services/prod_graph.svg";
import DevIcon from "../assets/icons/services/dev_graph.svg";

import IdentityBadge from "../assets/icons/badges/identity.svg";
import UxBadge from "../assets/icons/badges/ux.svg";
import PrBadge from "../assets/icons/badges/pr.svg";
import SmmBadge from "../assets/icons/badges/smm.svg";
import ProdBadge from "../assets/icons/badges/prod.svg";
import DevBadge from "../assets/icons/badges/dev.svg";

type ServiceIcon = SvgComponent & ImageMetadata;

export type ServiceId = "identity" | "ux" | "smm" | "pr" | "prod" | "dev";

export type ServiceItem = {
  id: ServiceId;
  title: string;
  description: string;
  icon: ServiceIcon;
  badgeIcon: ServiceIcon;
};

export const services: ServiceItem[] = [
  {
    id: "identity",
    title: "Айдентика",
    description:
      "Придумываем уникальные логотипы и фирменные стили, пишем руководства по их использованию",
    icon: IdentityIcon,
    badgeIcon: IdentityBadge,
  },
  {
    id: "ux",
    title: "Сайты и интерфейсы",
    description:
      "Проектируем удобные лендинги и многостраничные ресурсы, оборачивая их в современную эстетику",
    icon: UxIcon,
    badgeIcon: UxBadge,
  },
  {
    id: "smm",
    title: "Маркетинг социальных сетей",
    description:
      "Оформляем и ведем социальные сети в соответствии с вашими целями, фирменным стилем и философией бренда",
    icon: SmmIcon,
    badgeIcon: SmmBadge,
  },
  {
    id: "pr",
    title: "Общественные связи",
    description:
      "Разрабатываем стратегии долгосрочного сотрудничества со СМИ, управляем репутацией и отрабатываем иновоподы так, чтобы доверие стало спутником роста",
    icon: PrIcon,
    badgeIcon: PrBadge,
  },
  {
    id: "prod",
    title: "Контент и производство",
    description:
      "Организуем фото- и видеосъемки от идеи до реализации, производим рекламные ролики, актерские визитки, кино и сериалы по вашему запросу",
    icon: ProdIcon,
    badgeIcon: ProdBadge,
  },
  {
    id: "dev",
    title: "Разработка",
    description:
      "Разрабатываем быстрые и удобные цифровые продукты — от лендингов и корпоративных сайтов до сложных веб-сервисов и внутренних систем",
    icon: DevIcon,
    badgeIcon: DevBadge,
  },
];
