import random

random_number = random.randint(0,10)

user_number = -1

while user_number != random_number:

	user_number = input('Escriba su numero: ')
	
	if user_number.isdigit():
		user_number = int(user_number)
		if user_number > random_number:
				print('El numero es mas pequeño') 
				
		elif user_number < random_number:
				print('El numero es mas grande')
				
		else: 
			print('Correcto')
	else:
		print('Escriba un numero')