import { initMobileMenu } from "./init/mobile-menu-init";
import { initSectionTransitions } from "./init/section-transitions-init";
import { initServiceItem } from "./init/service-item-init";

const init = (): void => {
  initMobileMenu();
  initServiceItem();
  initSectionTransitions();
};

init();
