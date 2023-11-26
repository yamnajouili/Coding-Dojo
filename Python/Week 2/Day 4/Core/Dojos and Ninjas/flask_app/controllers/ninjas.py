from flask_app import app
from flask import render_template,redirect,request
from flask_app.models.ninja import Ninja
from flask_app.models.dojo import Dojo



@app.route('/ninja/new')         
def ninja():
        dojo_all=Dojo.get_all()
        return render_template("ninja.html",dojo_all=dojo_all)  



@app.route('/ninja',methods=['POST'])         
def add_ninja():
        data={
                "dojo_id": request.form["dojo_id"],
                "first_name": request.form["first_name"],
        "last_name": request.form["last_name"],
        "age": request.form["age"],
        }
        Ninja.save(data)
      
        return redirect('/ninja/new')  

