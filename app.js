function generateRandomMega() {
    let pairs = new Set();
    while (pairs.size < 6) {
        let num = Math.floor(Math.random() * 45 + 1).toString().padStart(2, '0');
        pairs.add(num);
    }
    return Array.from(pairs).sort((a, b) => a - b);
}

function generateRandomPower() {
    let pairs = new Set();
    while (pairs.size < 6) {
        let num = Math.floor(Math.random() * 55 + 1).toString().padStart(2, '0');
        pairs.add(num);
    }
    return Array.from(pairs).sort((a, b) => a - b);
}

function generateNumbers() {
    let lotteryType = document.getElementById('lottery_type').value;
    let pairs;
    if (lotteryType === 'mega') {
        pairs = generateRandomMega();
    } else if (lotteryType === 'power') {
        pairs = generateRandomPower();
    }
    document.getElementById('result').innerText = pairs.join(', ');
}

function splitNumbers(numbers) {
    const result = [];
    numbers.forEach(num => {
        if (num >= 100) {
            const strNum = num.toString();
            const firstPair = strNum.slice(0, 2);
            const secondPair = strNum.slice(1);
            result.push(firstPair, secondPair);
        } else {
            result.push(num.toString());
        }
    });
    return result;
}

function randomSlip(lists) {
    
    var randomNumbers = [];
    while (randomNumbers.length < 6) {
        var randomIndex = Math.floor(Math.random() * lists.length);
        var randomNumber = lists[randomIndex];
        if (!randomNumbers.includes(randomNumber)) {
            randomNumbers.push(randomNumber);
        }
    }
    return randomNumbers;
}

function toggleCustomInput() {
    const customInput = document.getElementById('custom_input');
    const lotteryType = document.getElementById('lottery_type').value;
}
function generateCustomNumbers() {
    const customInput = document.getElementById('custom_input').value;
    const numbers = customInput.split(',').map(num => num.trim());
    let pairs = [];
    lists = splitNumbers(numbers);
    pairs = randomSlip(lists);
    document.getElementById('result').innerText = pairs.join(', ');
}
    