from flask_app import app
from flask import render_template,redirect,request
from flask_app.models.dojo import Dojo
from flask_app.models.ninja import Ninja
from pprint import pprint

@app.route('/')         
def dojo():
        dojo_all=Dojo.get_all()
        return render_template("dojo.html",dojo_all=dojo_all)  

@app.route('/create',methods=['POST'])          
def add_dojo():
        data={ "name": request.form["name"]}
        Dojo.save(data)  
        return redirect("/") 


@app.route('/new/<int:id>')          
def get_all_n(id):
        data={
                "id":id
        }
        all_ninjas=Dojo.get_all_N_D(data)
        pprint(all_ninjas)
        return render_template("show.html",all_ninjas=all_ninjas)


     