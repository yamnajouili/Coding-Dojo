from flask import Flask,render_template ,session 
app = Flask(__name__)
app.secret_key = 'keep it secret, keep it safe' 


@app.route('/')         
def hello():
    # if not session["count"]:
       
       session["count"]=1
       return render_template('index.html')

@app.route('/count')         
def count():
    session["count"]+=1
    return render_template('index.html')




if __name__=="__main__":      
    app.run(debug=True)    
