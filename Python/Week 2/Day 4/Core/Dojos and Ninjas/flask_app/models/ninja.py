from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE

class Ninja:
    def __init__(self,data):
        self.id=data['id']
        self.first_name=data['first_name']
        self.last_name=data['last_name']
        self.age=data['age']
        self.created_at=data['created_at']
        self.updated_at=['updated_at']
        self.dojo_id=data['dojo_id']


    @classmethod
    def save(cls,data):
        query="""insert into ninjas (first_name,last_name,age,dojo_id)
        values(%(first_name)s,%(last_name)s,%(age)s,%(dojo_id)s);"""
        results=connectToMySQL(DATABASE).query_db(query,data)

        return results
