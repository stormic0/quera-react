export const PersianDigits = (number) =>
  number.toLocaleString("fa-IR", {
    style: "currency",
    currency: "IRR",
    maximumSignificantDigits: 1,
  });
