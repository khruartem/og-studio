export class ServicesController {
  private readonly root: HTMLElement;
  private readonly items: HTMLElement[];
  private readonly hoverMedia: MediaQueryList;

  constructor(root: HTMLElement) {
    this.root = root;

    this.items = Array.from(
      this.root.querySelectorAll<HTMLElement>("[data-service-item]"),
    );

    this.hoverMedia = window.matchMedia("(hover: hover)");
  }

  init(): void {
    if (this.hoverMedia.matches) return;

    this.items.forEach((item) => {
      item.addEventListener("click", this.handleItemClick);
    });

    document.addEventListener("click", this.handleDocumentClick);
  }

  destroy(): void {
    this.items.forEach((item) => {
      item.removeEventListener("click", this.handleItemClick);
    });

    document.removeEventListener("click", this.handleDocumentClick);
  }

  private handleItemClick = (event: MouseEvent): void => {
    event.stopPropagation();

    const item = event.currentTarget;

    if (!(item instanceof HTMLElement)) return;

    const isActive = item.dataset.state === "active";

    this.clear();

    if (!isActive) {
      this.activate(item);
    }
  };

  private handleDocumentClick = (): void => {
    this.clear();
  };

  private activate(item: HTMLElement): void {
    item.dataset.state = "active";
  }

  private deactivate(item: HTMLElement): void {
    item.dataset.state = "idle";
  }

  private clear(): void {
    this.items.forEach((item) => {
      this.deactivate(item);
    });
  }
}
