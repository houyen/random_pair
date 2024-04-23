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