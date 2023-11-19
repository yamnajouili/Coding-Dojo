from flask import Flask,render_template,redirect,session,request
import random

app = Flask(__name__) 
app.secret_key = 'keep it secret, keep it safe'   
@app.route('/')          
def games():
  if 'rand' not in session: 
    session['rand']=random.randint(1,100)


  return render_template('index.html')

@app.route('/guess',methods=['POST'])          
def games1():
  print(request.form['number'])
  session['num']=int(request.form['number'])
  return redirect('/')


@app.route('/clear')          
def clear():
  session.clear()

  return redirect('/')



if __name__=="__main__":     
    app.run(debug=True)    

