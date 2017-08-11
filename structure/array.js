function containsAll(haystack, ...needles) {
    console.log(needles);
  for (var needle of needles) {
    if (haystack.indexOf(needle) === -1) {
      return false;
    }
  }
  return true;
}

let d = containsAll(['a', 'b', 'c'], ['a', 'b']);
console.log(d);
