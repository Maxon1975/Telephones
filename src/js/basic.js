export default function phoneNumberValidator(number) {
  if (/[\s-()]/.test(number)) {
    number = number.replace(/[\s-()]/g, '');
  }
  if (/^8/.test(number)) {
    number = number.replace(/^8/g, '+7');
  }
  return number;
}
