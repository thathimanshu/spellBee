from flask import Flask, jsonify
from flask_cors import CORS
import random
import json
import pickle

with open('wordList/properWords.pkl', 'rb') as file:
    word_set = pickle.load(file)
    
app = Flask(__name__)
CORS(app) 

def check_word(word):
    return word.lower() in word_set


@app.route('/start', methods=['GET'])
def start():
    return jsonify({'started': True})

@app.route('/findWord', methods=['GET'])
def find_word():
    idx = str(random.randint(0,19284))
    path = './wordList/unq1.json'
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
    centerLetter = word[0].lower()  
    total = 0
    totalPoints = 0
    for w in word_set:
        lenWord = len(w)
        if lenWord > 3 and centerLetter in w and set(w).issubset(word_alphabets):
            total += 1
            totalPoints += (lenWord-3)
            
    
    return jsonify({'totalPossible': total,'totalPointsPossible':totalPoints ,'word': word})

@app.route('/getAllWords/<word>', methods=['GET'])
def getAllWords(word):
    word_alphabets = set(word.lower())
    centerLetter = word[0].lower()  
    allW = []
    for w in word_set:
        lenWord = len(w)
        if lenWord > 3 and centerLetter in w and set(w).issubset(word_alphabets):
            allW.append(w)

    return jsonify({'allWords': allW})

if __name__ == '__main__':
    app.run(debug=True)