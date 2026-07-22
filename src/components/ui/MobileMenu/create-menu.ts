export const createMobileMenu = (menu: HTMLElement) => {
  const trigger = menu.querySelector("[data-trigger]");
  const panel = menu.querySelector("[data-panel]");

  if (
    !(trigger instanceof HTMLButtonElement) ||
    !(panel instanceof HTMLElement)
  ) {
    throw new Error("Invalid MobileMenu markup");
  }

  function open() {
    menu.dataset.state = "open";
    trigger?.setAttribute("aria-expanded", "true");
  }

  function close() {
    menu.dataset.state = "close";
    trigger?.setAttribute("aria-expanded", "false");
  }

  function toggle() {
    menu.dataset.state === "open" ? close() : open();
  }

  return {
    open,
    close,
    toggle,
  };
};
