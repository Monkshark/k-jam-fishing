const FIRST_PARTS = "ㄱㄲㄴㄷㄸㄻㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ";
const MIDDLE_PARTS = "ㅏㅐㅑㅐㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ";
const LAST_PARTS = "ㄱㄲㄳㄴㄵㄶㄷㄹㄺㄻㄼㄽㄾㄿㅀㅁㅂㅄㅅㅆㅇㅈㅊㅋㅌㅍㅎ";
const FIRST_CHAR_OF_KOREAN = "가";

function 한글분해(char) {
    const numberOfParameter = char.charCodeAt(0) - FIRST_CHAR_OF_KOREAN.charCodeAt(0);

    const lengthOfMiddleParts = MIDDLE_PARTS.length;
    const lengthOfLastParts = LAST_PARTS.length;
    const indexOfLastParts = numberOfParameter % lengthOfLastParts;
    const indexOfMiddleParts = Math.floor((numberOfParameter / lengthOfLastParts) % lengthOfMiddleParts);
    const indexOfFirstChar = Math.floor((numberOfParameter / lengthOfLastParts) / lengthOfMiddleParts);

    return [FIRST_PARTS[indexOfFirstChar], MIDDLE_PARTS[indexOfMiddleParts], LAST_PARTS[indexOfLastParts]];
}

console.log(한글분해("괟")); // => returns: ㄱ ㅙ ㄷ 