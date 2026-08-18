import { ServicesController } from "../controllers/service-item-controller";

export function initServiceItem(): void {
  document
    .querySelectorAll<HTMLElement>("[data-services]")
    .forEach((services) => {
      new ServicesController(services).init();
    });
}
