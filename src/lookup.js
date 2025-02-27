/**
 *
 * @param {string} jsonString
 * @param {string} key
 * @returns {string}
 */
export default function lookup (jsonString, key) {
  if (!jsonString) throw new Error('Empty JSON')

  if (!key) throw new Error('Empty key')

  const parsedObject = JSON.parse(jsonString);

  if (parsedObject?.constructor !== Object) throw new Error("JSON is not an object")

  const value = parsedObject[key]

  if (typeof value === 'object') {
    return JSON.stringify(value)
  }

  return value?.toString() ?? ''
}