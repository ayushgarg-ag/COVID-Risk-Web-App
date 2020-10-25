import json
from flask import Flask, request, render_template, jsonify
app = Flask(__name__)

results={}

@app.route('/api/classroombasic', methods=['POST', 'GET'])
def formdata():
    if request.method == 'POST':
        content = request.data.decode()
        content = json.loads(content)
        print(content)
        # results = [insert python function that calculates result](content)
    else:
        # replace this results with the results from the correct back-end function
        results = {
            'percentFaculty': 0.68,
            'percentStudent': 0.83,
            'probFaculty5': 0.01,
            'probFaculty25': 0.06,
            'probFaculty50': 0.18,
            'probFaculty75': 0.54,
            'probFaculty95': 2.81,
            'probStudent5': 0.04,
            'probStudent25': 0.14,
            'probStudent50': 0.34,
            'probStudent75': 0.82,
            'probStudent95': 3.17,
        }
        return jsonify(results)

if __name__ == '__main__':
    app.run(host="localhost", port=5000, debug=True)
