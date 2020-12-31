import json
import os
from calculation import calculate
from calculationAdvanced import calculateAdvanced
from flask import Flask, request, jsonify, send_from_directory, render_template
app = Flask(__name__)
# app = Flask(__name__, template_folder="./build")
# app = Flask(__name__, static_folder='./build')
# app = Flask(__name__, static_folder='./build', static_url_path='/')
app = Flask(__name__, static_url_path='', static_folder='build/static', template_folder='build/templates')
# app = Flask(__name__, static_folder='./build', static_url_path='')
# app = Flask(__name__, static_url_path='', static_folder='build', template_folder='build')

studentInfectious = None
facultyInfectious = None
studentNum = None
facultyNum = None
studentResults = None
facultyResults = None


# @app.route('/', defaults={'path': ''})
# @app.route('/<path:path>')
# def serve(path):
#     if path != "" and os.path.exists(app.static_folder + '/' + path):
#         return send_from_directory(app.static_folder, path)
#     else:
#         return send_from_directory(app.static_folder, 'index.html')

# @app.errorhandler(404)
# def not_found(e):
#     return app.send_static_file('index.html')

@app.route('/')
def index():
    return render_template('main.html')

# @app.route('/')
# def index():
#     return send_from_directory(app.static_folder, 'index.html')
    # return render_template('main.html')

@app.route('/api/classroombasic', methods=['POST', 'GET'])
def formdata():
    global studentNum
    global facultyNum
    global studentResults
    global facultyResults
    global studentInfectious
    global facultyInfectious

    if request.method == 'POST':
        studentNum = None
        facultyNum = None
        studentResults = None
        facultyResults = None
        studentInfectious = None
        facultyInfectious = None

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
        infectionRate = content['infectionRate']

        studentNum, facultyNum, studentResults, facultyResults, facultyInfectious, studentInfectious = calculate(
            numFaculty, numStudents, numSessions, durationSessions, classFloorArea, classHeight, county, state, infectionRate)
        # while studentResults is None or facultyResults is None or studentNum is None or facultyNum is None:
        #     pass

        return jsonify({})
    else:
        while studentResults is None or facultyResults is None or studentNum is None or facultyNum is None:
            pass

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
            'probStudent95': studentResults['student_quants_95'],
            'facultyInfectious': facultyInfectious,
            'studentInfectious': studentInfectious
        }
        return jsonify(results)
    

@app.route('/api/classroomadvanced', methods=['POST', 'GET'])
def formdataadvanced():
    global studentNum
    global facultyNum
    global studentResults
    global facultyResults
    global studentInfectious
    global facultyInfectious

    if request.method == 'POST':
        studentNum = None
        facultyNum = None
        studentResults = None
        facultyResults = None
        studentInfectious = None
        facultyInfectious = None

        content = request.data.decode()
        content = json.loads(content)

        numFaculty = int(content['numFaculty'])
        numStudents = int(content['numStudents'])
        numSessions = int(content['numSessions'])
        durationSessions = int(content['durationSessions'])
        classFloorArea = int(content['classFloorArea'])
        classHeight = int(content['classHeight'])
        county = content['county']
        state = content['state']
        masks = content['masks']
        facultyInfectious = content['facultyInfectious']
        studentInfectious = content['studentInfectious']
        maskEffExhalation = content['maskEffExhalation']
        maskEffInhalation = content['maskEffInhalation']
        ventilationRate = content['ventilationRate']
        addlControl = content['addlControl']
        decayRate = content['decayRate']
        depositionRate = content['depositionRate']
        facultyInhalation = content['facultyInhalation']
        studentInhalation = content['studentInhalation']
        meanFacultyQuantaE = content['meanFacultyQuantaE']
        sdFacultyQuantaE = content['sdFacultyQuantaE']
        meanStudentQuantaE = content['meanStudentQuantaE']
        sdStudentQuantaE = content['sdStudentQuantaE']

        studentNum, facultyNum, studentResults, facultyResults, facultyInfectious, studentInfectious = calculateAdvanced(
            numFaculty, numStudents, numSessions, durationSessions, classFloorArea, classHeight, county, state, masks, facultyInfectious, studentInfectious, maskEffExhalation, maskEffInhalation, ventilationRate, addlControl, decayRate, depositionRate, facultyInhalation, studentInhalation, meanFacultyQuantaE, sdFacultyQuantaE, meanStudentQuantaE, sdStudentQuantaE)

        while studentResults is None or facultyResults is None or studentNum is None or facultyNum is None:
            pass

        return jsonify({})
    else:
        while studentResults is None or facultyResults is None or studentNum is None or facultyNum is None:
            pass

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
            'probStudent95': studentResults['student_quants_95'],
            'facultyInfectious': facultyInfectious,
            'studentInfectious': studentInfectious
        }
        return jsonify(results)


# if __name__ == '__main__':
#     app.run(host="localhost", port=5000, debug=True)
if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))
