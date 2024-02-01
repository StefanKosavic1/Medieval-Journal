//CREDIT TO: https://www.freecodecamp.org/news/javascript-debounce-example/
function debounce<T extends (...args: Parameters<T>) => void>(
  mainFunction: T,
  delay: number = 500
): (...args: Parameters<T>) => void {
  let timer: NodeJS.Timeout | null = null;

  return function (...args: Parameters<T>) {
    if (timer !== null) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => mainFunction(...args), delay);
  };
}
export default debounce;
