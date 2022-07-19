const { parser } = jest.requireActual('./parser');

import {   opSum,
           opMinus,
           opMultiply,
           opDevide
} from "./parser";



describe("Проверка разбора строки и операторов", () => {
  it("1 + 11", () => {
    expect(parser('1 + 11')).toEqual([1, '+', 11]);
  });

  it("1 - 11", () => {
    expect(parser("1 - 11")).toEqual([1, "-", 11]);
  });

  it("1 + 11 - 1 + 11", () => {
    expect(parser("1 + 11 - 1 + 11")).toEqual([1, "+", 11, "-", 1, "+", 11]);
  });
});



describe("Тесты работы операторов", () => {

  it("2 + 1 = 3", () => {
    expect(opSum(2, 1)).toBe(3);
  });

  it("2 - 1 = 1", () => {
    expect(opMinus(2, 1)).toBe(1);
  });

  it("2 * 2 = 4", () => {
    expect(opMultiply(2, 2)).toBe(4);
  });

  it("6 / 3 = 2", () => {
    expect(opMultiply(6, 3)).toBe(2);
  });

});