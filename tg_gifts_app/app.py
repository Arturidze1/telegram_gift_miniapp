from flask import Flask, render_template, request
import random

app = Flask(__name__)

# Примитивная база пользователей
users = {
    'test_user': {'stars': 10}
}

# Призы
prizes = ['🐻', '💖', '🍬', '😢', '🎉', '💣', '🧸', '💎', '📦']

# Главная страница
@app.route('/')
def home():
    return render_template('index.html')

# Открытие кейса
@app.route('/open_case', methods=['POST'])
def open_case():
    prize = random.choice(prizes)
    return {'status': 'success', 'prize': prize}

# Пополнение звёзд
@app.route('/add_stars', methods=['POST'])
def add_stars():
    users['test_user']['stars'] += 5
    return {'status': 'success', 'stars': users['test_user']['stars']}

if __name__ == '__main__':
    app.run(debug=True)
