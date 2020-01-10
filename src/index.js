function isNull(value) {
  return value === null;
}
exports.isNull = isNull;
function isUndefined(value) {
  return typeof value === "undefined";
}
exports.isUndefined = isUndefined;
function isString(value) {
  return typeof value === "string" || value instanceof String;
}
exports.isString = isString;

function isNumber(value) {
  return typeof value === "number" && isFinite(value);
}
exports.isNumber = isNumber;

function isBoolean(value) {
  return typeof value === "boolean";
}
exports.isBoolean = isBoolean;

function isRegExp(value) {
  return value && typeof value === "object" && value.constructor === RegExp;
}
exports.isRegExp = isRegExp;

function isDate(value) {
  return value instanceof Date;
}
exports.isDate = isDate;

function isSymbol(value) {
  return typeof value === "symbol";
}
exports.isSymbol = isSymbol;

function isObject(value) {
  return value && typeof value === "object" && value.constructor === Object;
}
exports.isObject = isObject;

function isArray(value) {
  return value && typeof value === "object" && value.constructor === Array;
}
exports.isObject = isObject;

function isFunction(value) {
  return typeof value === "function";
}
exports.isFunction = isFunction;

function isError(value) {
  return value instanceof Error && typeof value.message !== "undefined";
}
exports.isError = isError;

function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}
exports.isEmpty = isEmpty;

function isValidObject(object) {
  return !(isEmpty(object) || isUndefined(object) || isNull(object));
}
exports.isValidObject = isValidObject;

function toCamelCase(str) {
  return str
    .replace(/[-_]+(.)/g, function($1) {
      return $1.toUpperCase();
    })
    .replace(/\s/g, "")
    .replace(/^(.)/, function($1) {
      return $1.toLowerCase();
    })
    .replace(/-/g, "")
    .replace(/_/g, "")
    .replace(/\s+/g, "");
}
exports.toCamelCase = toCamelCase;

function toSnakeCase(string) {
  return string
    .replace(/([a-z])([A-Z])/g, "$1_$2")
    .replace(/\s+/g, "_")
    .toLowerCase();
}
exports.toSnakeCase = toSnakeCase;

function toKebabCase(string) {
  return string
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/\s+/g, "-")
    .toLowerCase();
}
exports.toKebabCase = toKebabCase;

function toPlainLowercase(string) {
  return string
    .replace(/([a-z])([A-Z])/g, "$1$2")
    .replace(/\s+/g, "-")
    .replace(/-/g, "")
    .replace(/\s+/g, "")
    .toLowerCase();
}
exports.toPlainLowercase = toPlainLowercase;

function objectToPlainLowercase(obj) {
  Object.keys(obj).map(key => {
    //check if object
    if (isObject(obj[key])) {
      objectToCamelCase(obj[key]);
    }
    let new_key = toPlainLowercase(key);
    if (key !== new_key) {
      Object.defineProperty(
        obj,
        new_key,
        Object.getOwnPropertyDescriptor(obj, key)
      );
      delete obj[key];
    }
  });

  return obj;
}
exports.objectToPlainLowercase = objectToPlainLowercase;

function objectToCamelCase(obj) {
  Object.keys(obj).map(key => {
    //check if object
    if (isObject(obj[key])) {
      objectToCamelCase(obj[key]);
    }
    let new_key = toCamelCase(key);
    if (key !== new_key) {
      Object.defineProperty(
        obj,
        new_key,
        Object.getOwnPropertyDescriptor(obj, key)
      );
      delete obj[key];
    }
  });

  return obj;
}
exports.objectToCamelCase = objectToCamelCase;
