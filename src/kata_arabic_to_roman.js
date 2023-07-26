export function convertUnitsArabicToRoman(num) {
  switch (num) {
    case 1:
      return "I";
    case 2:
      return "II";
    case 3:
      return "III";
    case 4:
      return "IV";
    case 5:
      return "V";
    case 6:
      return "VI";
    case 7:
      return "VII";
    case 8:
      return "VIII";
    case 9:
      return "IX";
    default:
      return "";
  }
}

export function convertTensArabicToRoman(num) {
  switch (num) {
    case 1:
      return "X";
    case 2:
      return "XX";
    case 3:
      return "XXX";
    case 4:
      return "XL";
    case 5:
      return "L";
    case 6:
      return "LX";
    case 7:
      return "LXX";
    case 8:
      return "LXXX";
    case 9:
      return "XC";
    default:
      return "";
  }
}

export function convertHundredsArabicToRoman(num) {
  switch (num) {
    case 1:
      return "C";
    case 2:
      return "CC";
    case 3:
      return "CCC";
    case 4:
      return "CD";
    case 5:
      return "D";
    case 6:
      return "DC";
    case 7:
      return "DCC";
    case 8:
      return "DCCC";
    case 9:
      return "CM";
    default:
      return "";
  }
}

export function convertThousandsArabicToRoman(num) {
  switch (num) {
    case 1:
      return "M";
    case 2:
      return "MM";
    case 3:
      return "MMM";
    case 4:
      return "MMMM";
    default:
      return "";
  }
}

export function convertArabicToRoman(num) {
  if (typeof num !== "number" || num === "undefined")
    throw new Error("Incorrect input");
  if (num < 1 || num > 4999)
    throw new Error("A number must be in the range 1:4999");
  return (
    convertThousandsArabicToRoman(Math.floor(num / 1000) % 10) +
    convertHundredsArabicToRoman(Math.floor(num / 100) % 10) +
    convertTensArabicToRoman(Math.floor(num / 10) % 10) +
    convertUnitsArabicToRoman(num % 10)
  );
}
