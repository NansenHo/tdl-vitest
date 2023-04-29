// Set breakpoints for every `console.log()`.
// Then, you can tell the order of the functions calling.

// beforeAll and beforeEach return a cleanup function.
import {
  beforeAll,
  beforeEach,
  describe,
  it,
} from "vitest";

beforeAll(() => {
  console.log("beforeAll");
  return () => {
    console.log("afterAll");
  };
});

beforeEach(() => {
  console.log("beforeEach");
  return () => {
    console.log("afterEach");
  };
});

it("it", () => {
  // 3
  console.log("it");
});

describe("nested", () => {
  beforeEach(() => {
    console.log("nested beforeEach");
    return () => {
      console.log("nested afterEach");
    };
  });
  it("nested it", () => {
    console.log("nested it");
  });
});
