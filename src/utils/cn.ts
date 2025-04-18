
export function cn(...inputs: any[]): string {
    const classes = [];

    for (let i = 0; i < inputs.length; i++) {
        const arg = inputs[i];
        if (arg) { 
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
           
        }
    }
    return classes.join(' ');
}
