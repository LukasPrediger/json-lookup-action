/**
 *
 * @param {string} jsonString
 * @param {string} key
 * @returns {string}
 */
export default function lookup (jsonString, key) {
  if (!jsonString) throw new Error('Empty JSON')

  if (!key) throw new Error('Empty key')

  const value = JSON.parse(jsonString)[key]

  if (typeof value === 'object') {
    return JSON.stringify(value)
  }

  return value?.toString() ?? ''
}