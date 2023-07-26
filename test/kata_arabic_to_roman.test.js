import {
  convertUnitsArabicToRoman,
  convertTensArabicToRoman,
  convertHundredsArabicToRoman,
  convertThousandsArabicToRoman,
  convertArabicToRoman,
} from "../src/kata_arabic_to_roman";

describe("convertUnitsArabicToRoman", () => {
  test("returns roman number for units", () => {
    expect(convertUnitsArabicToRoman(0)).toBe("");
    expect(convertUnitsArabicToRoman(1)).toBe("I");
    expect(convertUnitsArabicToRoman(2)).toBe("II");
    expect(convertUnitsArabicToRoman(3)).toBe("III");
    expect(convertUnitsArabicToRoman(4)).toBe("IV");
    expect(convertUnitsArabicToRoman(5)).toBe("V");
    expect(convertUnitsArabicToRoman(6)).toBe("VI");
    expect(convertUnitsArabicToRoman(7)).toBe("VII");
    expect(convertUnitsArabicToRoman(8)).toBe("VIII");
    expect(convertUnitsArabicToRoman(9)).toBe("IX");
  });
});

describe("convertTensArabicToRoman", () => {
  test("returns roman number for tens", () => {
    expect(convertTensArabicToRoman(0)).toBe("");
    expect(convertTensArabicToRoman(1)).toBe("X");
    expect(convertTensArabicToRoman(2)).toBe("XX");
    expect(convertTensArabicToRoman(3)).toBe("XXX");
    expect(convertTensArabicToRoman(4)).toBe("XL");
    expect(convertTensArabicToRoman(5)).toBe("L");
    expect(convertTensArabicToRoman(6)).toBe("LX");
    expect(convertTensArabicToRoman(7)).toBe("LXX");
    expect(convertTensArabicToRoman(8)).toBe("LXXX");
    expect(convertTensArabicToRoman(9)).toBe("XC");
  });
});

describe("convertHundredsArabicToRoman", () => {
  test("returns roman number for hundreds", () => {
    expect(convertHundredsArabicToRoman(0)).toBe("");
    expect(convertHundredsArabicToRoman(1)).toBe("C");
    expect(convertHundredsArabicToRoman(2)).toBe("CC");
    expect(convertHundredsArabicToRoman(3)).toBe("CCC");
    expect(convertHundredsArabicToRoman(4)).toBe("CD");
    expect(convertHundredsArabicToRoman(5)).toBe("D");
    expect(convertHundredsArabicToRoman(6)).toBe("DC");
    expect(convertHundredsArabicToRoman(7)).toBe("DCC");
    expect(convertHundredsArabicToRoman(8)).toBe("DCCC");
    expect(convertHundredsArabicToRoman(9)).toBe("CM");
  });
});

describe("convertThousandsArabicToRoman", () => {
  test("returns roman number for thousands", () => {
    expect(convertThousandsArabicToRoman(0)).toBe("");
    expect(convertThousandsArabicToRoman(1)).toBe("M");
    expect(convertThousandsArabicToRoman(2)).toBe("MM");
    expect(convertThousandsArabicToRoman(3)).toBe("MMM");
    expect(convertThousandsArabicToRoman(4)).toBe("MMMM");
  });
});

describe("convertArabicToRoman", () => {
  test("it throws an error if not passed a number", () => {
    expect(() => {
      convertArabicToRoman();
    }).toThrow("Incorrect input");
    expect(() => {
      convertArabicToRoman("17");
    }).toThrow("Incorrect input");
  });
  test("it throws an error if a number is not in range 1:4999", () => {
    expect(() => {
      convertArabicToRoman(-1);
    }).toThrow("A number must be in the range 1:4999");
    expect(() => {
      convertArabicToRoman(5000);
    }).toThrow("A number must be in the range 1:4999");
  });
  test("returns roman number for any number < 5000", () => {
    expect(convertArabicToRoman(8)).toBe("VIII");
    expect(convertArabicToRoman(23)).toBe("XXIII");
    expect(convertArabicToRoman(420)).toBe("CDXX");
    expect(convertArabicToRoman(356)).toBe("CCCLVI");
    expect(convertArabicToRoman(3006)).toBe("MMMVI");
    expect(convertArabicToRoman(4999)).toBe("MMMMCMXCIX");
  });
});
