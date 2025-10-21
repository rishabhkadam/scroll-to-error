/**
 * Scrolls smoothly to the first input field that has a validation error.
 *
 * @param errors - An object whose keys are field names with validation errors.
 *
 * Example:
 * scrollToFirstError({ email: 'Required', password: 'Too short' })
 */
export declare function scrollToFirstError(errors: Record<string, any>): void;
