import json
from calculation import calculate
from flask import Flask, request, render_template, jsonify
app = Flask(__name__)

studentNum = None
facultyNum = None
studentResults = None
facultyResults = None

@app.route('/api/classroombasic', methods=['POST', 'GET'])
def formdata():
    global studentNum
    global facultyNum
    global studentResults
    global facultyResults

    if request.method == 'POST':
        content = request.data.decode()
        content = json.loads(content)
        numFaculty = content['numFaculty']
        numStudents = content['numStudents']
        numSessions = content['numSessions']
        durationSessions = content['durationSessions']
        classFloorArea = content['classFloorArea']
        classHeight = content['classHeight']
        county = content['county']
        state = content['state']

        studentNum, facultyNum, studentResults, facultyResults = calculate(
            numFaculty, numStudents, numSessions, durationSessions)
        # while studentResults is None or facultyResults is None or studentNum is None or facultyNum is None:
        #     pass

        return jsonify({})
    else:
        # while studentResults is None or facultyResults is None or studentNum is None or facultyNum is None:
        #     pass
        results = {
            'percentFaculty': facultyNum,
            'percentStudent': studentNum,
            'probFaculty5': facultyResults['fac_quants_05'],
            'probFaculty25': facultyResults['fac_quants_25'],
            'probFaculty50': facultyResults['fac_quants_50'],
            'probFaculty75': facultyResults['fac_quants_75'],
            'probFaculty95': facultyResults['fac_quants_95'],
            'probStudent5': studentResults['student_quants_05'],
            'probStudent25': studentResults['student_quants_25'],
            'probStudent50': studentResults['student_quants_50'],
            'probStudent75': studentResults['student_quants_75'],
            'probStudent95': studentResults['student_quants_95']
        }
        return jsonify(results)


if __name__ == '__main__':
    app.run(host="localhost", port=5000, debug=True)
