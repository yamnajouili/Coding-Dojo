x = [ [5,2,3], [10,8,9] ] 
students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'}
]
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
z = [ {'x': 10, 'y': 20} ]

x[1][0]=15
print(x)
students[0]['last_name']="Bryant"
print(students)
sports_directory['soccer'][0]="Andres"
print(sports_directory)

z[0]['y']=30
print(z)

students = [
         {'first_name':  'Michael', 'last_name' : 'Jordan'},
         {'first_name' : 'John', 'last_name' : 'Rosales'},
         {'first_name' : 'Mark', 'last_name' : 'Guillen'},
         {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]
def iterateDictionary(students):
    for i in  range(0,len(students),1):
        for key, val in students[i].items():
          print(key ," = ", val)
          
print(iterateDictionary(students))

def iterateDictionary2(students,key):
    for i in range(0,len(students),1) :
        for val in students[i]['key'].values():
         print(val)

iterateDictionary2(students)

dojo = {
'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}


def PrintInfo(dic):
   for val in dic.values():
     for  i in range(0,len(dic['value'])):
      print(len(dic['value']) ,dic['key'])


PrintInfo(dojo)
