import random
# 20 clean dishes in the dishwasher
dishwasher = [ 'plate', 'bowl','cup', 'knife', 'fork',
                'spoon', 'plate', 'spoon', 'bowl', 'cup',
                'knife', 'cup', 'cup', 'fork', 'bowl',
                'fork', 'plate', 'cup', 'spoon', 'knife']

for dish in list (dishwasher):
    #check space left in cabinet
    if not random.randint (0,19):
        print('Out of space!')
        break
    else:
        print('Putting {} in the Cabinet'.format(dish))
        dishwasher.remove(dish)

        def gcd(a, b):
            while (b != 0):
                t = a
                a = b
                b = t % b

            return a
        

        print(gcd(60, 96))
        print(gcd(20, 8))