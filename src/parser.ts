// Проверка на число
export const isNumber = (str: string): boolean => !isNaN(Number(str));

// export const isNumber: ((str: string) => boolean) = (str) => !isNaN(Number(str));

// Операции
export type operType = (a: number, b: number) => number;

export const opSum: operType = (a, b) => a + b;

export const opMinus: operType = (a: number, b: number): number => a - b;

export const opMultiply: operType = (a: number, b: number): number => a * b;

export const opDevide: operType = (a: number, b: number): number => a / b;

// Операторы
export const opers: { [key: string]: operType } = {
  "+": opSum,
  "-": opMinus,
  "*": opMultiply,
  "/": opDevide
};


// Разбор строки
export type ParseStrType = (number | string)[];

export const parser = (str: string): ParseStrType | null => {
  const part = str.split(" ");

  return part.reduce<ParseStrType>((result, item, key) => {
    const prevItem = part[key - 1];

    // если оба числа
    if (!isNumber(prevItem) && isNumber(item)) {
      result.push(Number(item));
    } else // или число + знак
    if (isNumber(prevItem) && !isNumber(item) && opers.hasOwnProperty(item)) {
      result.push(item);
    } else {
      // иначе ошибка
      throw new TypeError("Ошибка разбора строки");
    }
    return result;
  }, []);
};