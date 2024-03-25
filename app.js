function generateRandomMega() {
    let pairs = new Set();
    while (pairs.size < 6) {
        let num = Math.floor(Math.random() * 46).toString().padStart(2, '0');
        pairs.add(num);
    }
    return Array.from(pairs);
}

function generateRandomPower() {
    let pairs = new Set();
    while (pairs.size < 6) {
        let num = Math.floor(Math.random() * 56).toString().padStart(2, '0');
        pairs.add(num);
    }
    return Array.from(pairs);
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