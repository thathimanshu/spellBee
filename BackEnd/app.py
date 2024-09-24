from flask import Flask, jsonify
import random
import json
import nltk
from nltk.corpus import words
nltk.download('words')

app = Flask(__name__)

def check_word(word):
    return word.lower() in words.words()


@app.route('/findWord', methods=['GET'])
def find_word():
    idx = str(random.randint(0,7953))
    path = './wordList/uniquelist.json'
    with open(path, 'r') as file:
        data = json.load(file)
    value = data.get(idx)
    print(value+" sa")
    return jsonify({'word': value})


@app.route('/checkWord/<word>', methods=['GET'])
def checkWord(word):
    exists = check_word(word)
    return jsonify({'word': word, 'exists': exists})

if __name__ == '__main__':
    app.run(debug=True)