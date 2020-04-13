//Get
export class RomanNumerals {
  ConvertToRomanNumerals(num) {
    let result = "";

    return checkValues(num, result);

    function checkValues(num, roman) {
      const numLength = num.length;
      const n = num.charAt(0);
      const m = num.substring(1);
      const constants = getRomanConstants(numLength);
      let result = "";
      if (numLength != 4) {
        if (n <= 3 && n > 0) {
          result = constants[0].repeat(n);
        } else if (n === 4) {
          result = constants[0] + constants[1];
        } else if (n === 5) {
          result = constants[1];
        } else if (n >= 6 && n <= 8) {
          result = constants[1] + constants[0].repeat(n - 5);
        } else if (n === 9) {
          result = constants[0] + constants[2];
        }
      } else {
        result = constants[0].repeat(n);
      }

      return checkValues(m, roman);
    }
    function getRomanConstants(length) {
      if (length === 4) {
        return (thousands = ["M"]);
      } else if (length === 3) {
        return (hundreds = ["C", "D", "M"]);
      } else if (length === 2) {
        return (tens = ["X", "L", "C"]);
      } else if (length === 1) {
        return (ones = ["I", "V", "X"]);
      }
    }
  }
}

// if (numLength === 4) {
//   //add M*n
// } else if (numLength === 3) {
//   //add C 's
//   if (n <= 3) {
//     ones[0];
//   } else if (n === 4) {
//     //add CD
//   } else if (n === 5) {
//     //add D
//   } else if (n >= 6 && n <= 8) {
//     //add D plus C's
//   } else if (n === 9) {
//     //add CM
//   }
//   return checkValues(m);
// } else if (numLength === 2) {
//   //Add X*n
//   if (n <= 3) {
//     //add XL
//   } else if (n === 4) {
//     //add L
//   } else if (n === 5) {
//     //add L plus X's
//   } else if (n >= 6 && n <= 8) {
//     //add XC
//   } else if (n === 9) {
//   }
//   return checkValues(m);
// } else if (numLength === 1) {
//   // add I*n
//   if (n <= 3) {
//     //add IV
//   } else if (n === 4) {
//     //add V
//   } else if (n === 5) {
//     //add V plus I's
//   } else if (n >= 6 && n <= 8) {
//     //add IX
//   } else if (n === 9) {
//   }
