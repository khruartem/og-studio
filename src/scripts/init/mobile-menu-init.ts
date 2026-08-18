import { createMobileMenu } from "../controllers/mobile-menu-controller";

export function initMobileMenu(): void {
  document
    .querySelectorAll<HTMLElement>("[data-mobile-menu]")
    .forEach((menu) => {
      createMobileMenu(menu).init();
    });
}
