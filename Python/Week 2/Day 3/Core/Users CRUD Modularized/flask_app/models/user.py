from flask_app.config.mysqlconnection import connectToMySQL



DATABASE="users_schema"
class User:
    def __init__(self,data):
        self.id = data["id"]
        self.first_name = data["first_name"]
        self.last_name = data["last_name"]
        self.email = data["email"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]


    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users;"
        results = connectToMySQL(DATABASE).query_db(query)
        users = []
        for row in results:
            one_user = cls(row)
            users.append(one_user)

        return users
    @classmethod
    def save(cls, data):
        query = """
                    INSERT INTO users(first_name, last_name, email)
                    VALUES (%(first_name)s,%(last_name)s,%(email)s);
                """

        result = connectToMySQL(DATABASE).query_db(query, data)
        # print(result)
        return result


    
    @classmethod
    def get_one(cls,data):
        query = "SELECT * FROM users where id=%(id)s"
        results = connectToMySQL(DATABASE).query_db(query,data)
        one_user=User(results[0])

        return one_user
    

    @classmethod
    def update(cls,data):
        query = """
            UPDATE users
               SET first_name = %(first_name)s, last_name=%(last_name)s, email=%(email)s
                    WHERE id = %(id)s;"""
        results = connectToMySQL(DATABASE).query_db(query,data)

        
    @classmethod
    def delete(cls,data):
        query = """
            Delete from users
             
                      WHERE id = %(id)s;"""
    
        results = connectToMySQL(DATABASE).query_db(query,data)
        

        return results