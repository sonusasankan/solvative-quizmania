/**
 * Utility function to combine class names.
 * Safely handles multiple arguments and filters out falsy values.
 */
export function cn(...inputs: any[]): string {
    const classes = [];

    for (let i = 0; i < inputs.length; i++) {
        const arg = inputs[i];
        if (arg) { // Check for truthiness (null, undefined, false, '', 0 are all falsy)
            if (typeof arg === 'string') {
                classes.push(arg);
            } else if (typeof arg === 'object') {
                if (Array.isArray(arg)) {
                    // If it's an array, recursively call cn with its elements
                    classes.push(cn(...arg));
                } else {
                    // If it's a plain object, iterate over its keys
                    for (const key in arg) {
                        if (arg[key]) { // If the value is truthy, include the key as a class
                            classes.push(key);
                        }
                    }
                }
            }
            // other types are ignored
        }
    }
    return classes.join(' ');
}
