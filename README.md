# js-commons

Personal collection of common javascript utilities.

# Documentation

## Functions

### js-commons.functions.not(predicate-fn)
invert predicates

```javascript
function isNumber(value) { return typeof value === 'number' };
isNumber(5);      // true
not(isNumber)(5);  // false
```
## Predicates

### js-commons.predicates.existent(value)

True if value is not null and not undefined.

### js-commons-predicates.nonexistent(value)

True if value is null or undefined.
