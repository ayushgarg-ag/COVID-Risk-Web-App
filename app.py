import time
import json
from flask import Flask, request, render_template, jsonify
app = Flask(__name__)

@app.route('/api/classroombasic', methods=['POST', 'GET'])
def formdata():
    if request.method == 'POST':
        content = request.data.decode()
        content = json.loads(content)
        print(content)
        return {'result': "received"}

if __name__ == '__main__':
    app.run(host="localhost", port=5000, debug=True)