export function getDescription(item) {
  return item.comment_plain.replace(/'/g, "\\'").replace(/[\r\n]/g, ' ')
}
