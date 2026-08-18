export class SectionTransitionController {
  private readonly root: HTMLElement;
  private readonly lower: HTMLElement;

  private frameId: number | null = null;

  constructor(root: HTMLElement) {
    this.root = root;

    const lower = root.querySelector<HTMLElement>(
      "[data-section-transition-lower]",
    );

    if (!lower) {
      throw new Error("SectionTransition: lower element not found");
    }

    this.lower = lower;
  }

  init(): void {
    this.update();

    window.addEventListener("scroll", this.handleScroll, { passive: true });

    window.addEventListener("resize", this.handleResize);
  }

  destroy(): void {
    window.removeEventListener("scroll", this.handleScroll);

    window.removeEventListener("resize", this.handleResize);

    if (this.frameId !== null) {
      cancelAnimationFrame(this.frameId);
    }
  }

  private handleScroll = (): void => {
    this.scheduleUpdate();
  };

  private handleResize = (): void => {
    this.scheduleUpdate();
  };

  private scheduleUpdate(): void {
    if (this.frameId !== null) return;

    this.frameId = requestAnimationFrame(() => {
      this.update();
      this.frameId = null;
    });
  }

  private update(): void {
    const rect = this.lower.getBoundingClientRect();

    const viewportHeight = window.innerHeight;

    const progress = (viewportHeight - rect.top) / viewportHeight;

    const clampedProgress = Math.min(Math.max(progress, 0), 1);

    this.root.style.setProperty(
      "--transition-progress",
      clampedProgress.toString(),
    );
  }
}
