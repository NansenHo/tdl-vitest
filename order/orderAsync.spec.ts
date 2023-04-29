// Set breakpoints for every `console.log()`.
// Then, you can tell the order of the functions calling.

import {
  beforeAll,
  beforeEach,
  afterAll,
  afterEach,
  describe,
  it,
} from "vitest";

beforeAll(async () => {
  await console.log("beforeAll");
});

beforeEach(async () => {
  await console.log("beforeEach");
});

it("", () => {
  console.log("it");
});

describe("nested", () => {
  beforeEach(async () => {
    await console.log("nested beforeEach");
  });
  it("nested it", () => {
    console.log("nested it");
  });
  afterEach(async () => {
    await console.log("nested afterEach");
  });
});

afterEach(async () => {
  await console.log("afterEach");
});

afterAll(async () => {
  await console.log("afterAll");
});
