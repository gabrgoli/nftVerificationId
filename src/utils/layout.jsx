export function scrollToElement(elementId) {
    document.getElementById(elementId)?.scrollIntoView({
      behavior: "smooth",
      inline: "nearest",
    });
  }