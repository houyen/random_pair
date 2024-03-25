from flask import Flask, render_template
import random
from flask import request


app = Flask(__name__)

@app.route("/", methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        lottery_type = request.form.get('lottery_type')
        if lottery_type == 'mega':
            pairs = generate_random_mega()
        elif lottery_type == 'power':
            pairs = generate_random_power()
        return render_template('index.html', pairs=pairs)
    return render_template('index.html')

def generate_random_mega():
    pairs = set() 
    while len(pairs) < 6:
        num1 = random.randint(0, 45)
        num1_str = str(num1).zfill(2)
        pair = num1_str
        pairs.add(pair)
    return pairs

def generate_random_power():
    pairs = set() 
    while len(pairs) < 6:
        num1 = random.randint(0, 55)
        num1_str = str(num1).zfill(2)
        pair = num1_str
        pairs.add(pair)
    return pairs

if __name__ == '__main__':
    app.run(debug=True)