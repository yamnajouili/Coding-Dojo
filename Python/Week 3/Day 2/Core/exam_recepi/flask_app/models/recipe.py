from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
from flask_app.models import user
from flask_app import DATABASE

class Recipe:
    def __init__(self,data):
        self.id=data["id"]
        self.name=data["name"]
        self.description=data["description"]
        self.instruction=data["instruction"]
        self.date_cooked=data['date_cooked']
        self.time=data['time']
        self.created_at=data["created_at"]
        self.updated_at=data["updated_at"]
        self.user_id=data["user_id"]
        self.creater=None

    @classmethod
    def create(cls, data):
        query = """
                INSERT INTO recipes (name,description,instruction,date_cooked,time,user_id)
                VALUES (%(name)s,%(description)s,%(instruction)s,%(date_cooked)s,%(time)s,%(user_id)s);
                """

        return connectToMySQL(DATABASE).query_db(query, data)  
    

    @classmethod
    def get_all_recipes(cls):
        query = """
                     
                     
                    select * from recipes join users on users.id=recipes.user_id
                    
                """
        result = connectToMySQL(DATABASE).query_db(query)
        recipes=[]
        for row in result:
            one_recipe= cls(row)
            recipes.append(one_recipe)

            data={
                
                **row,
                "id":row["users.id"],
                "created_at":row["users.created_at"],
                "updated_at":row["users.created_at"]}
            


            one_recipe.creater=user.User(data)
        return recipes
    
    @classmethod
    def get_recipe_id(cls,data):
        query = """
                     
                     
                    select * from recipes join users on users.id=recipes.user_id where recipes.id =%(id)s
                    
                """
        result = connectToMySQL(DATABASE).query_db(query,data)
        one_recipe=cls(result[0])
        this_user={ **result[0],
                   "id":result[0]["users.id"],
                   "created_at":result[0]["users.created_at"],
                   "updated_at":result[0]["users.updated_at"]
                   }
        one_recipe.creater=user.User(this_user)

        return one_recipe
        
    @classmethod
    def update(cls,data):
        query = """
                UPDATE recipes
                SET name = %(name)s,description = %(description)s,instruction=%(instruction)s,date_cooked=%(date_cooked)s,
                 time=%(time)s   WHERE id=%(id)s;"""

        return connectToMySQL(DATABASE).query_db(query, data)

    @classmethod
    def delete(cls,data):
        query = """

                    delete from recipes where id =%(id)s;
                """

        return connectToMySQL(DATABASE).query_db(query, data)

        





    @staticmethod
    def validate(data):
        is_valid = True

        if len(data["name"]) < 1:
            is_valid = False
            flash("name must not be blank")
        if len(data["description"]) < 1:
            is_valid = False
            flash("description must not be blank")

        if len(data["instruction"]) < 1:
            is_valid = False
            flash("instruction must not be blank")

        
        if len(data["date_cooked"]) < 1:
            is_valid = False
            flash("date cooked must not be blank")

        
        if len(data["time"]) < 1:
            is_valid = False
            flash("time must not be blank")
        
        
        
        return is_valid
