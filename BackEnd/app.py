from flask import Flask, jsonify
import random
import json
import nltk
from nltk.corpus import words

nltk.data.path.append('./nltk_data')

app = Flask(__name__)

def check_word(word):
    return word.lower() in words.words()


@app.route('/start', methods=['GET'])
def start():
    return jsonify({'started': True})

@app.route('/findWord', methods=['GET'])
def find_word():
    idx = str(random.randint(0,7953))
    path = './wordList/uniquelist.json'
    with open(path, 'r') as file:
        data = json.load(file)
    value = data.get(idx)
    return jsonify({'word': value})


@app.route('/checkWord/<word>', methods=['GET'])
def checkWord(word):
    exists = check_word(word)
    return jsonify({'word': word, 'exists': exists})

@app.route('/getNumOfPossibleWords/<word>', methods=['GET'])
def getNumOfPossibleWords(word):
    word_alphabets = set(word.lower())
    total = sum(1 for w in words.words() if len(w) > 3 and set(w).issubset(word_alphabets))
    return jsonify({'totalPossible': total, 'word': word})


if __name__ == '__main__':
    app.run(debug=True)