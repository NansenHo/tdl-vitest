// Set breakpoints for every `console.log()`.
// Then, you can tell the order of the functions calling.

// beforeAll and beforeEach return a async cleanup function.
import {
  beforeAll,
  beforeEach,
  describe,
  it,
} from "vitest";

beforeAll(async () => {
  await console.log("beforeAll");
  return async () => {
    await console.log("afterAll");
  };
});

beforeEach(async () => {
  await console.log("beforeEach");
  return async () => {
    await console.log("afterEach");
  };
});

it("it", () => {
  console.log("it");
});

describe("nested", () => {
  beforeEach(async () => {
    await console.log("nested beforeEach");
    return async () => {
      await console.log("nested afterEach");
    };
  });
  it("nested it", () => {
    console.log("nested it");
  });
});
