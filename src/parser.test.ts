import { parser } from "./parser";

describe("Parser correct cases", () => {
  it("1 + 11", () => {
    expect(parser("1 + 11")).toEqual([1, "+", 11]);
  });


});