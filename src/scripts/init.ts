import { createMobileMenu } from "./controllers/mobile-menu-controller";
import { ServicesController } from "./controllers/service-item-controller";

const init = (): void => {
  document
    .querySelectorAll<HTMLElement>("[data-mobile-menu]")
    .forEach((menu) => {
      createMobileMenu(menu).init();
    });

  document
    .querySelectorAll<HTMLElement>("[data-services]")
    .forEach((services) => {
      new ServicesController(services).init();
    });
};

init();
