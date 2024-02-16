from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__, template_folder=os.path.dirname(__file__), static_folder='images')

@app.route('/')
def index():
    api_key = os.getenv("API_KEY")
    return render_template('index.html', api_key=api_key)

@app.route('/script.js')
def script():
    return send_from_directory(os.path.dirname(__file__), 'script.js')

@app.route('/styles.css')
def styles():
    return send_from_directory(os.path.dirname(__file__), 'styles.css')

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)