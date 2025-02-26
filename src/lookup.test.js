import lookup from "./lookup.js";

describe("lookup should return correct value of type", () => {
  test('string', () => {
    const jsonString = '{"key": "value"}';
    expect(lookup(jsonString, 'key')).toBe('value');
  })

  test('number', () => {
    const jsonString = '{"key": 15}';
    expect(lookup(jsonString, 'key')).toBe('15');
  })

  test('boolean', () => {
    const jsonString = '{"key": true}';
    expect(lookup(jsonString, 'key')).toBe('true');
  })
})

describe('lookup should throw an error if', () => {
  test('the json is empty', () => {
    const jsonString = '';
    expect(() => lookup(jsonString, 'key')).toThrow();
  })
  test('the json is invalid', () => {
    const jsonString = 'invalid';
    expect(() => lookup(jsonString, 'key')).toThrow();
  })
  test('the key is empty', () => {
    const jsonString = '{"key": "value"}';
    expect(() => lookup(jsonString, '')).toThrow();
  })
});

test('lookup should return and empty string for a missing key', () => {
  const jsonString = '{"key": "value"}';

  expect(lookup(jsonString, 'missing')).toBe('');
})

test('lookup should return a nested json as a string', () => {
  const jsonString = '{"key": {"nested": "value"}}';
  expect(lookup(jsonString, 'key')).toBe('{"nested":"value"}');
})