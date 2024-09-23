from flask import Flask

app = Flask(__name__)

@app.route('/findWord', methods=['GET'])
def find_word():
    return "This is the findWord endpoint!"

if __name__ == '__main__':
    app.run(debug=True)
