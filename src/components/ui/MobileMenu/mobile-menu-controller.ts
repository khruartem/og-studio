export const createMobileMenu = (menu: HTMLElement) => {
  const trigger = menu.querySelector<HTMLButtonElement>("[data-trigger]");

  function open() {
    menu.dataset.state = "open";
    trigger?.setAttribute("aria-expanded", "true");
  }

  function close() {
    menu.dataset.state = "closed";
    trigger?.setAttribute("aria-expanded", "false");
  }

  function toggle() {
    menu.dataset.state === "open" ? close() : open();
  }

  function bindEvents() {
    trigger?.addEventListener("click", toggle);
  }

  function unbindEvents() {
    trigger?.removeEventListener("click", toggle);
  }

  function init() {
    bindEvents();
  }

  function destroy() {
    unbindEvents();
  }

  return {
    init,
    destroy,
  };
};
