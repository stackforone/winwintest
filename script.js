function winNumber() {
    const input = document.getElementById('input-number').value;
    const excludeDouble = document.getElementById('exclude-checkbox').checked;
    let results = generateCombinations(input, excludeDouble);
    displayResults(results);
}

function reverseWinNumber() {
    const input = document.getElementById('input-number').value;
    const excludeDouble = document.getElementById('exclude-checkbox').checked;
    let results = generateCombinations(input.split('').reverse().join(''), excludeDouble);
    displayResults(results);
}

function generateCombinations(input, excludeDouble) {
    if (input.length < 3) {
        return ['ป้อนเลขอย่างน้อย 3 ตัว'];
    }

    let results = [];
    let length = input.length;

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            for (let k = 0; k < length; k++) {
                let combination = input[i] + input[j] + input[k];
                if (!excludeDouble || (combination[0] !== combination[1] && combination[1] !== combination[2] && combination[0] !== combination[2])) {
                    results.push(combination);
                }
            }
        }
    }
    return results;
}

function displayResults(results) {
    const output = document.getElementById('output');
    output.value = results.join('\n');
}

function resetForm() {
    document.getElementById('input-number').value = '';
    document.getElementById('exclude-checkbox').checked = false;
    document.getElementById('output').value = '';
}