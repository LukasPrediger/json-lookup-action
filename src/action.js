import {getInput, error, setOutput} from "@actions/core";
import lookup from "./lookup.js";

const jsonString = getInput("json")
const key = getInput("key")

try {
  const value = lookup(jsonString, key)
  setOutput("value", value)
} catch (e) {
  error(e.message)
}