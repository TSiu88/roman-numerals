import { ConvertToRomanNumerals } from "../src/index.js";

describe("RomanNumerals", () => {
  test("Should return 'Not a number' if not a number", () => {
    const number = "Test";
    expect(ConvertToRomanNumerals(number)).toEqual("Not a number");
  });

  test("Should return 'Out of range' if number out of range", () => {
    const number = "9000";
    expect(ConvertToRomanNumerals(number)).toEqual("Number out of range");
  });

  test("Should return one digits place in Roman Numerals", () => {
    const n1 = "1";
    const n2 = "4";
    const n3 = "7";
    const n4 = "9";
    expect(ConvertToRomanNumerals(n1)).toEqual("I");
    expect(ConvertToRomanNumerals(n2)).toEqual("IV");
    expect(ConvertToRomanNumerals(n3)).toEqual("VII");
    expect(ConvertToRomanNumerals(n4)).toEqual("IX");
  });

  test("Should return tens place in Roman Numerals", () => {
    const n1 = "10";
    const n2 = "11";
    const n3 = "14";
    const n4 = "15";
    const n5 = "17";
    const n6 = "29";
    expect(ConvertToRomanNumerals(n1)).toEqual("X");
    expect(ConvertToRomanNumerals(n2)).toEqual("XI");
    expect(ConvertToRomanNumerals(n3)).toEqual("XIV");
    expect(ConvertToRomanNumerals(n4)).toEqual("XV");
    expect(ConvertToRomanNumerals(n5)).toEqual("XVII");
    expect(ConvertToRomanNumerals(n6)).toEqual("XXIX");
  });

  // test("Should return the Roman Numeral IV", () => {
  //   const number = 4;
  //   expect(romanNumeral.ConvertToRomanNumerals(number)).toEqual("I");
  // });

  // test("Should return the letter I", () => {
  //   const number = 1;
  //   expect(romanNumeral.ConvertToRomanNumerals(number)).toEqual("I");
  // });
});
