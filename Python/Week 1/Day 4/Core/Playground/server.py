from flask import Flask, render_template  
app = Flask(__name__) 


@app.route('/play')          
def hello1():
    
    
    return render_template("index.html",x=3)

@app.route('/play/<int:x>')       
def hello2(x):
    
    
    return render_template("index.html",x=x)

@app.route('/play/<x>/<color>')       
def hello(x,color):
    w = int(x)
    print()
    return render_template("index.html",x=w,color=color)  



if __name__=="__main__":       
    app.run(debug=True)    

