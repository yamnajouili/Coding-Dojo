
from flask_app import app
from flask import render_template,redirect,request,session,flash
from flask_app.models.user import User

@app.route('/')          
def form():
        
        return render_template("create.html")  


@app.route('/show/<int:id>')          
def get_one_user(id):
        data={
              "id":id
        }
        one_user = User.get_one(data)
        
        
        return render_template("show.html",one_user=one_user)  



@app.route('/read')          
def get_all_users():
        all_users = User.get_all()
        
        print(all_users)
        return render_template("read.html", users=all_users)  


@app.route('/delete/<int:id>')          
def remove(id):
        
        data={
         "id":id
          }
        
        User.delete(data)
        return redirect("/read")  


@app.route('/create', methods=["POST"])          
def create():
    
    user_dict = {
        "first_name": request.form["first_name"],
        "last_name": request.form["last_name"],
        "email": request.form["email"],
    }
    User.save(user_dict)
    return redirect("/read")



@app.route('/edit/<int:id>')          
def update(id):
    user_dic={"id":id}
    user=User.get_one(user_dic)
    return render_template("edit.html",user=user)  

@app.route('/update/<int:id>',methods=["POST"])          
def modif(id):
    dic={
          "id":id,
          "first_name": request.form["first_name"],
          "last_name": request.form["last_name"],
          "email": request.form["email"],}
    
    User.update(dic)
    
    return redirect('/read') 
