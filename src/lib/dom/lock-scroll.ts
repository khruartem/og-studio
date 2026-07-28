class ScrollLock {
  private static readonly CLASS_NAME = "is-scroll-locked";
  private lockCount = 0;

  // Применяется блокировка скролла только в случае перехода 0 -> 1
  lock(): void {
    this.lockCount += 1;

    if (this.lockCount !== 1) {
      return;
    }

    this.addClass();
  }

  // Применяется снятие блокировки скролла только в случае перехода 0 -> 1
  unlock(): void {
    if (this.lockCount === 0) {
      return;
    }

    this.lockCount -= 1;

    if (this.lockCount !== 0) {
      return;
    }

    this.removeClass();
  }

  clear(): void {
    this.lockCount = 1;
    this.unlock();
  }

  isLocked(): boolean {
    return this.lockCount > 0;
  }

  private addClass(): void {
    document.documentElement.classList.add(ScrollLock.CLASS_NAME);
  }

  private removeClass(): void {
    document.documentElement.classList.remove(ScrollLock.CLASS_NAME);
  }
}

export const scrollLock = new ScrollLock();
