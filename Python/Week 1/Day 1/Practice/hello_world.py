# 1. TASK: print "Hello World"
print( "Hello world")
# 2. print "Hello Noelle!" with the name in a variable
name = "Noelle"
print( "hello ", name )	# with a comma
print( "hello " + name )	# with a +
# 3. print "Hello 42!" with the number in a variable
number = 42
print( "hello ",42,"!" )	# with a comma
print( "hello " +str(42)+"!" )	# with a +	-- this one should give us an error!
# 4. print "I love to eat sushi and pizza." with the foods in variables
fave_food1 = "sushi"
fave_food2 = "pizza"
print( "I love to eat {} and {}".format(fave_food1,fave_food2)) # with .format()
print(f"i love to eat{fave_food1}and{fave_food2}") # with an f string

my_name="yamna"
print(f"hello{my_name}")

my_num=9
print("hello",str(my_num),"!")

my_fnum=10

def write():
result=print("hello",my_fnum,"!")
return result


def print():
result1=print("hello "+my_fnum+"!")
return result


food_one="cake"
food_two="glace"
def favorite():
result2=print("I love to eat {} and {}".format(food_one,fave_food2))
return result2
 def favoritee():
 result3=print(f"I love eat {food_one} and{food_two}")
 return result3





