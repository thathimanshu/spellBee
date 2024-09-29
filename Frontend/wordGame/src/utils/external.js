export function triggerNotification(text,exists,point) {
    const event = new CustomEvent("showNotification", {
      detail: {
        text: text,
        exists: exists,
        point:point
      },
    });
  
    // Dispatch the custom event
    window.dispatchEvent(event);
  }
  