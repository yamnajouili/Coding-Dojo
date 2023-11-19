from flask import Flask,render_template,redirect,session,request

app = Flask(__name__)
app.secret_key = 'keep it secret, keep it safe' 

@app.route('/')          
def home():
  
  return render_template('index.html')

@app.route('/result')         
def resultat():
    return render_template('result.html')

@app.route('/form',methods=['POST'])          
def form():
    session['name']=request.form['Name']
    session['location']=request.form['location']
    session['language']=request.form['language']
    session['comments']=request.form['comments']
    print(f"hello:{session['name']}")
    return redirect('/result')

@app.route('/clear')         
def clear():
    session.clear()
    return redirect('/')

if __name__=="__main__":     
    app.run(debug=True)    
