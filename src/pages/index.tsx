/**
 * Scrolls smoothly to the first input field that has a validation error.
 *
 * @param errors - An object whose keys are field names with validation errors.
 *
 * Example:
 * scrollToFirstError({ email: 'Required', password: 'Too short' })
 */
export function scrollToFirstError(errors: Record<string, any>): void {
  if (!errors || Object.keys(errors).length === 0) return;

  const firstErrorField = Object.keys(errors)[0];
  const element = document.querySelector(`[name="${firstErrorField}"]`) as HTMLElement | null;

  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "center" });
    if (typeof element.focus === "function") {
      element.focus();
    }
  }
}
