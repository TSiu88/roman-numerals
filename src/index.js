//pass in a number to convert to roman numerals
export function ConvertToRomanNumerals(num) {
  //Create a result string that will return the converted number
  let result = "";
  //
  if (isNaN(parseInt(num))) {
    return "Not a number";
  }

  if (num <= 0 || num >= 4000) {
    return "Number out of range";
  }
  // I can't read the terminal
  // me too )))
  return checkValues(num, result);

  function checkValues(num, roman) {
    const numLength = num.length;
    const n = parseInt(num.charAt(0));

    const constants = getRomanConstants(numLength);
    if (numLength != 4) {
      if (n <= 3 && n > 0) {
        result += constants[0].repeat(n);
      } else if (n === 4) {
        result += constants[0] + constants[1];
      } else if (n === 5) {
        result += constants[1];
      } else if (n >= 6 && n <= 8) {
        result += constants[1] + constants[0].repeat(n - 5);
      } else if (n === 9) {
        result += constants[0] + constants[2];
      }
    } else {
      result = constants[0].repeat(n);
    }
    if (numLength === 1) {
      return result;
    }
    const m = num.substring(1);
    return checkValues(m, roman);
  }
  function getRomanConstants(length) {
    if (length === 4) {
      return ["M"];
    } else if (length === 3) {
      return ["C", "D", "M"];
    } else if (length === 2) {
      return ["X", "L", "C"];
    } else if (length === 1) {
      return ["I", "V", "X"];
    }
  }
}
