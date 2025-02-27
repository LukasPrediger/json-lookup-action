# Github json-lookup-action

This is a simple action that retrieves a single value from a flat json string for example for mapping an input value to
an output via a lookup table.

## Inputs

| Name | Description               | Type   | Required |
|------|---------------------------|--------|----------|
| json | The json object to search | string | true     |
| key  | The key to search for     | string | true     |

## Outputs

| Name  | Description         | Type   |
|-------|---------------------|--------|
| value | The extracted value | string |

## Example usage

```yaml
    steps:
      - name: Get Value from Json
        id: getValue
        uses: LukasPrediger/json-lookup-action@v1
        with:
          json: '{"key": "value"}'
          key: "key"

      - name: Output value
        run: |
          echo "Value: ${{ steps.getValue.outputs.value }}"
```

## Value returns

The action returns the value of the key as a string. If the value is a complex object (e.g object or array) it will be
returned as a json string.

| Input json              | Input key        | Output value     | Notes                                                     |
|-------------------------|------------------|------------------|-----------------------------------------------------------|
| {"key": "value"}        | key              | "value"          |                                                           |
| {"key": 15}             | key              | "15"             | Non-string values are converted to string                 |
| {"key": true}           | key              | "true"           | Non-string values are converted to string                 |
| {"key": {"foo": "bar"}} | key              | "{"foo": "bar"}" | Complex values are returned as json-strings               |
| {"key": ["foo", "bar"]} | key              | "["foo", "bar"]" | Complex values are returned as json-strings               |
| {"key": "value"}        | non-existing key | ""               | :warning: non-existing keys return an empty string        |
| {"key": "value"}        |                  |                  | :heavy_exclamation_mark: an empty key fails the action    |
|                         | key              | ""               | :heavy_exclamation_mark: an empty json fails the action   |
| my-"invalid"-json       | key              | ""               | :heavy_exclamation_mark: an invalid json fails the action |


