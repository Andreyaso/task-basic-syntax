export function romanToInteger(str) {
    let result = 0;
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */
    const romanValues = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let i = 0;

    while (i < str.length) {
        const current = romanValues[str[i]];
        const next = romanValues[str[i + 1]] || 0;

        if (current < next) {
            result += next - current;
            i += 2;
        } else {
            result += current;
            i += 1;
        }
    }

    return result;
}
