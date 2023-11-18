from flask import Flask   
app = Flask(__name__)    
@app.route('/')         
def hello_world():
    return 'Hello World!'


@app.route('/dojo')                 
def write():
    return 'dojo!'                  


@app.route('/say/<name>')
def affi(name):
    return f"Hi {name}"

@app.route('/repeat/<int:time>/<string:name>')
def affN_T(time,name):
    
    return f"  {name* time}"










if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.

