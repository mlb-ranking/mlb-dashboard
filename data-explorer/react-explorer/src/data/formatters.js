
export function lowerCaseFirstLetter(origObject) {
  return Object.keys(origObject).reduce((obj, currentKey) => {
    const key = currentKey.charAt(0).toLowerCase() + currentKey.slice(1);

    obj[key] = origObject[currentKey];
    return obj;
  }, {});
}

export function snakeToCamel(origObject) {
  return Object.keys(origObject).reduce((obj, currentKey) => {
    const key = currentKey.replace(/_\w/g, function(m) {
      return m[1].toUpperCase();
    });

    obj[key] = origObject[currentKey];
    return obj;
  }, {});
}

export function snakeToCamelAndLowerCaseFirst(origObject) {
  return Object.keys(origObject).reduce((obj, currentKey) => {
    let key = currentKey.charAt(0).toLowerCase() + currentKey.slice(1);
    key = key.replace(/_\w/g, m => m[1].toUpperCase());

    obj[key] = origObject[currentKey];
    return obj;
  }, {});
}


