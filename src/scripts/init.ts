import { createMobileMenu } from "./controllers/mobile-menu-controller";

const init = (): void => {
  document
    .querySelectorAll<HTMLElement>("[data-mobile-menu]")
    .forEach((menu) => {
      createMobileMenu(menu).init();
    });
};

init();
