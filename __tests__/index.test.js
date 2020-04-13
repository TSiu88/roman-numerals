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
    const n7 = "40";
    const n8 = "50";
    expect(ConvertToRomanNumerals(n1)).toEqual("X");
    expect(ConvertToRomanNumerals(n2)).toEqual("XI");
    expect(ConvertToRomanNumerals(n3)).toEqual("XIV");
    expect(ConvertToRomanNumerals(n4)).toEqual("XV");
    expect(ConvertToRomanNumerals(n5)).toEqual("XVII");
    expect(ConvertToRomanNumerals(n6)).toEqual("XXIX");
    expect(ConvertToRomanNumerals(n7)).toEqual("XL");
    expect(ConvertToRomanNumerals(n8)).toEqual("L");
  });

  test("Should return hundreds place in Roman Numerals", () => {
    const n1 = "101";
    const n2 = "114";
    const n3 = "115";
    const n4 = "117";
    const n5 = "150";
    const n6 = "209";
    const n7 = "346";
    const n8 = "893";
    expect(ConvertToRomanNumerals(n1)).toEqual("CI");
    expect(ConvertToRomanNumerals(n2)).toEqual("CXIV");
    expect(ConvertToRomanNumerals(n3)).toEqual("CXV");
    expect(ConvertToRomanNumerals(n4)).toEqual("CXVII");
    expect(ConvertToRomanNumerals(n5)).toEqual("CL");
    expect(ConvertToRomanNumerals(n6)).toEqual("CCIX");
    expect(ConvertToRomanNumerals(n7)).toEqual("CCCXLVI");
    expect(ConvertToRomanNumerals(n8)).toEqual("DCCCXCIII");
  });

  test("Should return thousands place in Roman Numerals", () => {
    const n1 = "1111";
    const n2 = "1123";
    const n3 = "2345";
    const n4 = "3456";
    const n5 = "3999";
    expect(ConvertToRomanNumerals(n1)).toEqual("MCXI");
    expect(ConvertToRomanNumerals(n2)).toEqual("MCXXIII");
    expect(ConvertToRomanNumerals(n3)).toEqual("MMCCCXLV");
    expect(ConvertToRomanNumerals(n4)).toEqual("MMMCDLVI");
    expect(ConvertToRomanNumerals(n5)).toEqual("MMMCMXCIX");
  });
});
