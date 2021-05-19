import data from "./data";

// from: http://stackoverflow.com/questions/3446170/escape-string-for-use-in-javascript-regex
function escapeRegExp(str) {
  return str.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
}

export default function (str) {
  if (!str) {
    return [];
  }
  const expr = RegExp(".*" + escapeRegExp(str) + ".*", "i");

  return data.filter(function (item) {
    return expr.test(item.name);
  });
}
