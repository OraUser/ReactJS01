const { parser,
        opSum,
        opMinus,
        opMultiply,
        opDevide
} = jest.requireActual("./parser");



describe("Проверка разбора строки и операторов (true)", () => {
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

describe("Проверка разбора строки и операторов (false)", () => {
  it("1 + 1", () => {
    expect(parser('1 + 1')).toEqual(11);
  });

  it("1 - 1", () => {
    expect(parser("1 - 1")).toEqual(1);
  });

  it("1 + 1 - 1 + 11", () => {
    expect(parser("1 + 1 - 1 + 11")).toEqual(11);
  });
});



describe("Тесты работы операторов (true)", () => {

  it("2 + 1 = 3", () => {
    expect(opSum(2, 1)).toEqual(3);
  });

  it("2 - 1 = 1", () => {
    expect(opMinus(2, 1)).toEqual(1);
  });

  it("2 * 2 = 4", () => {
    expect(opMultiply(2, 2)).toEqual(4);
  });

  it("6 / 3 = 2", () => {
    expect(opDevide(6, 3)).toEqual(2);
  });

});

describe("Тесты работы операторов (false)", () => {

  it("1 + 1 = 11", () => {
    expect(opSum(1, 1)).toEqual(11);
  });

  it("1 - 1 = 1", () => {
    expect(opMinus(1, 1)).toEqual(1);
  });

  it("2 * 2 = 1", () => {
    expect(opMultiply(2, 2)).toEqual(1);
  });

  it("6 / 3 = 18", () => {
    expect(opDevide(6, 3)).toEqual(18);
  });

});