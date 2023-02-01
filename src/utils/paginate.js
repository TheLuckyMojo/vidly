import _ from "lodash";

export function paginate(items, pagesNumber, pageSize) {
  const startIndex = (pagesNumber - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
}
