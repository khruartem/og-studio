import { createMobileMenu } from "./mobile-menu-controller";

export function initMobileMenu() {
  document
    .querySelectorAll<HTMLElement>("[data-mobile-menu]")
    .forEach((menu) => {
      createMobileMenu(menu).init();
    });
}
