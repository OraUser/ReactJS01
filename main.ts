import { isNumber,
         ParseStrType,
         opers,
         opPriorities,
         ordOperPriorities
} from "./parser";

const [a, b] = opPriorities;

// Первый приоритет
export const prior1 = (stack: ParseStrType): ParseStrType =>
  stack.reduce<ParseStrType>((result, nextItem) => {
    const prevItem = result[result.length - 2];
    const item = result[result.length - 1];

    // Если первый итем не число и не знак первого приоритета
    if (!isNumber(String(item)) && opPriorities[item] === a) {
      // Если не среди операций
      if (!opers[item]) {
        throw new TypeError("Ошибка в первом приоритете");
      }
      result = [
        ...result.slice(0, -2),
        opers[item](Number(prevItem), Number(nextItem)),
      ];
    } else {
      result.push(nextItem);
    }

    return result;

  }, []);

  // Второй приоритет
export const prior2 = (stack: ParseStrType): number =>
  stack.reduce<number>((result, nextItem, key) => {
    const item = stack[key - 1];

    // Если знак первого приоритета
    if (opPriorities[item] === a) {
      throw new TypeError("Ошибка во втором приоритете");
    }

    // Если второй итем не число и не знак второго приоритета
    if (!isNumber(String(item)) && opPriorities[item] === b) {
      result = opers[item](Number(result), Number(nextItem));
    }

    return result;

  }, Number(stack[0]));