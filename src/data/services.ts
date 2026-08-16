import identityIcon from "../assets/icons/services/identity_graph.svg";
import uxIcon from "../assets/icons/services/ux_graph.svg";
import prIcon from "../assets/icons/services/pr_graph.svg";
import smmIcon from "../assets/icons/services/smm_graph.svg";
import prodIcon from "../assets/icons/services/prod_graph.svg";
import devIcon from "../assets/icons/services/dev_graph.svg";

type ServiceItem = {
  title: string;
  description: string;
  icon: string;
};

export const services: ServiceItem[] = [
  {
    title: "Айдентика",
    description:
      "Придумываем уникальные логотипы и фирменные стили, пишем руководства по их использованию",
    icon: identityIcon.src,
  },
  {
    title: "Сайты и интерфейсы",
    description:
      "Проектируем удобные лендинги и многостраничные ресурсы, оборачивая их в современную эстетику",
    icon: uxIcon.src,
  },
  {
    title: "Маркетинг социальных сетей",
    description:
      "Оформляем и ведем социальные сети в соответствии с вашими целями, фирменным стилем и философией бренда",
    icon: smmIcon.src,
  },
  {
    title: "Общественные связи",
    description:
      "Разрабатываем стратегии долгосрочного сотрудничества со СМИ, управляем репутацией и отрабатываем иновоподы так, чтобы доверие стало спутником роста",
    icon: prIcon.src,
  },
  {
    title: "Контент и производство",
    description:
      "Организуем фото- и видеосъемки от идеи до реализации, производим рекламные ролики, актерские визитки, кино и сериалы по вашему запросу",
    icon: prodIcon.src,
  },
  {
    title: "Разработка",
    description:
      "Разрабатываем быстрые и удобные цифровые продукты — от лендингов и корпоративных сайтов до сложных веб-сервисов и внутренних систем",
    icon: devIcon.src,
  },
];
