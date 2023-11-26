from flask import Flask,render_template,redirect,request 
from users import User
app = Flask(__name__)  
@app.route('/')          
def form():
        
        return render_template("create.html")  



@app.route('/read')          
def get_all_users():
        all_users = User.get_all()
        
        print(all_users)
        return render_template("read.html", users=all_users)  


@app.route('/create', methods=["POST"])          
def create():
    user_dict = {
        "first_name": request.form["first_name"],
        "last_name": request.form["last_name"],
        "email": request.form["email"],
    }
    User.save(user_dict)
    return redirect("/read")

     
if __name__=="__main__":      
    app.run(debug=True)    
