# Print all integers from 0 to 150.

for i in range(0,150,1):
    print(i)

#Print all the multiples of 5 from 5 to 1,000
for i in range(5,1000,1):
    if i % 5==0:
        print(i)


# Print integers 1 to 100. If divisible by 5, print "Coding" ,If divisible by 10, print "Coding Dojo".
for index in  range(1,101,1):
    if index % 5==0:
        print("coding")

    elif index % 10==0:
        print("coding dojo")

# Add odd integers from 0 to 500,000, and print the final sum.

sum=0
for i in  range(500,000):
    if i % 2 !=0:
    sum=sum+i
# Countdown by Fours 
    for index in range(2018,0,-4):
        print(index)

# Flexible Counter 
lowNum=4
highNum=14
mult=2
for i in range(lowNum,highNum,1):
    if i%mult==0:
        print(i)




