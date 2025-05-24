// Exercise 1: Find the longest common prefix and suffix among two strings.
function findLongestCommonPrefixAndSuffix(str1: string, str2: string): string {
    let maxLen = Math.max(str1.length, str2.length);
    let minLen = Math.min(str1.length, str2.length);

    for (let i = 0; i < maxLen; i++) {
        if (str1[i] === str2[i]) {
            continue;
        } else {
            return str1.slice(0, i + 1);
        }
    }

    return "";
}
