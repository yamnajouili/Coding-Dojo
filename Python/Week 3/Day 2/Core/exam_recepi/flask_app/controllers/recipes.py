from flask_app import app
from flask import render_template, redirect, request, flash, session
from flask_app.models.recipe import Recipe
from flask_app.models.user import User




@app.route("/create",methods=["POST"])
def recip_form():

    if not Recipe.validate(request.form):
        return redirect("/recipes/new")
    data={**request.form,"user_id":session["user_id"]}
    Recipe.create(data)
    return redirect("/recipes")

@app.route("/recipes/new")
def diply_recipes():
    if "user_id" not in session:
        return redirect("/")
   
    return render_template("create_recipes.html")


@app.route("/recipes/<int:id>")
def display_book_one(id):
   
   if "user_id" not in session:
        return redirect("/")
   data={"id":id}
   recipe_one=Recipe.get_recipe_id(data)
   dic={"id":session["user_id"]}
   one_user=User.get_user_by_id(dic)
   
   return render_template("showone.html",recipe_one=recipe_one,one_user=one_user)

@app.route("/recipes/<int:id>/edit")
def book_render(id):
   if "user_id" not in session:
        return redirect("/")
   
   data={"id":id}
   recipe_one=Recipe.get_recipe_id(data)
   return render_template("update_recipes.html",recipe_one=recipe_one)

@app.route("/recipes/<int:id>",methods=['POST'])
def edit_recipes(id):
   

    if not Recipe.validate(request.form):
        return redirect(f"/recipes/{id}")
    data={ "id":id,
         
         **request.form}
    Recipe.update(data)

    return redirect('/recipes')

# **********delete**********
@app.route("/delete/<int:id>",methods=['POST'])
def remove(id):
   data={ "id":id}
   Recipe.delete(data)

   return redirect('/recipes')