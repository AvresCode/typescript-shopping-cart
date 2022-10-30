const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});

//Undefined: locale , automatically determine how to print out number based on where you live

export function FormatCurrency(number: number) {
  return CURRENCY_FORMATTER.format(number);
}
