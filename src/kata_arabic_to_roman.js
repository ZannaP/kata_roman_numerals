export function convertUnitsArabicToRoman(num) {
  const UNITS = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  return UNITS[num];
}

export function convertTensArabicToRoman(num) {
  const TENS = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  return TENS[num];
}

export function convertHundredsArabicToRoman(num) {
  const HUNDREDS = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  return HUNDREDS[num];
}

export function convertThousandsArabicToRoman(num) {
  const THOUSANDS = ["", "M", "MM", "MMM", "MMMM"];
  return THOUSANDS[num];
}

export function convertArabicToRoman(num) {
  if (typeof num !== "number" || num === "undefined")
    throw new Error("Incorrect input");
  if (num < 1 || num > 4999 || !Number.isInteger(num))
    throw new Error("A number must be an integer in the range 1:4999");
  return (
    convertThousandsArabicToRoman(Math.floor(num / 1000) % 10) +
    convertHundredsArabicToRoman(Math.floor(num / 100) % 10) +
    convertTensArabicToRoman(Math.floor(num / 10) % 10) +
    convertUnitsArabicToRoman(num % 10)
  );
}
