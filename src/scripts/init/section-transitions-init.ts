import { SectionTransitionController } from "../controllers/section-transition-controller";

export function initSectionTransitions(): void {
  document
    .querySelectorAll<HTMLElement>("[data-section-transition]")
    .forEach((root) => {
      new SectionTransitionController(root).init();
    });
}
