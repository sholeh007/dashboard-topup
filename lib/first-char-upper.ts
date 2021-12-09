export default function Transform(char: string) {
  const firstChar = char.charAt(0);
  return char.replace(firstChar, firstChar.toUpperCase());
}
