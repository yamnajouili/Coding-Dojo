from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE
from flask_app.models.ninja import Ninja
from pprint import pprint
class Dojo:
    def __init__(self,data):
        self.id=data['id']
        self.name=data['name']
        self.created_at=data['created_at']
        self.updated_at=data['updated_at']


    @classmethod
    def get_all(cls):

        query="SELECT * FROM dojos;"
        results = connectToMySQL(DATABASE).query_db(query)
        all_dojos=[]
        for row in results:
          dic=cls(row)
          all_dojos.append(dic)
        return all_dojos

    @classmethod
    def save(cls,data):
      
      query="insert into dojos (name) values(%(name)s);"
      results=connectToMySQL(DATABASE).query_db(query,data)

      return results
    

    @classmethod
    def get_all_N_D(cls,data):
       
       query="""  
           SELECT * FROM dojos  join ninjas on ninjas.dojo_id=dojos.id  where dojos.id =%(id)s;
        
                """
       results=connectToMySQL(DATABASE).query_db(query,data)

       
       one_dojo =cls(results[0])
       ninjas = []
       for row in results:
                
            #! format the data here for the quote
            #! preapre the dict for the quote constructor

                ninja_dict = {
                "id": row["ninjas.id"],
                "first_name": row["first_name"],
                "last_name": row["last_name"],
                "age": row["age"],
                "created_at": row["ninjas.created_at"],
                "updated_at": row["ninjas.updated_at"],
                "dojo_id": row["dojo_id"],
                }
            #! now we need to import our Quote model to init it
                this_ninjas = Ninja(ninja_dict)

                ninjas.append(this_ninjas)

       one_dojo.all_Ninja =ninjas

       return one_dojo
