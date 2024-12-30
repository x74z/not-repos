##funcion cuadratica
# It is called only on vs code since it uses matplot????????????????
from math import sqrt
import matplotlib.pyplot as plt
import numpy as np
def funcion_cuadratica(a:int,b:int,c:int):
	'''Esta funcion consigue las caracteristicas de una funcion cuadratica'''
	#convexa o concava
	
	if a > 0:
		print('\nConcava')
	elif a < 0:
		print('\nConvexa')
	elif a == 0:
		print('\nNo es una ecuacion de segundo grado')

		
	#si a=0 no se ejecuta nada de aqui abajo
	if a != 0:
		#puntos en el eje X e Y
		resultvert_x = -b / (2*a)
		# print(f'Punto en el eje 0X = {resultvert_x}')
		resulteje_y = a*resultvert_x**2 + b*resultvert_x + c
		# print(f'Punto en el eje 0Y = {resulteje_y}')

		print(f'Coordenada del vertice = ({resultvert_x}, {resulteje_y})')

	
	#puntos de interseccion con los ejes
		punto_interseccion_y = c
		print(f'Punto de interseccion con el eje 0Y = (0,{punto_interseccion_y})')



		if b != 0 and c != 0:
			square_root = ((b)**2 - 4*a*c )
			if square_root > 0:
				punto_interseccion_x_mas = ((-b + sqrt( square_root )) / 2*a)
				punto_interseccion_x_menos = ((-b - sqrt( square_root )) / 2*a)
				print(f'Puntos de interseccion con el eje 0X (x1) = ({punto_interseccion_x_mas},0) x2 =({punto_interseccion_x_menos},0)' )
		
			elif square_root < 0:
				print('No corta en el eje X')

			elif square_root == 0:
				punto_interseccion_x_zero = (-b ) / 2*a
				print(f'Corta solo en el punto ={punto_interseccion_x_zero}')
		elif b != 0 and c == 0:
			x1 = 0
			x2 = (-b / a)
			print(f'Puntos de corte con el eje 0X (x1) = ({x1},0) x2 =({x2},0)' )
		
		elif b == 0 and c != 0:
			if (-c / a) >= 0:
				x1_b0 = -sqrt(-c / a)
				x2_b0 = +sqrt(-c / a)
				print(f'Puntos de corte en el eje x: (x1)= ({x1_b0}, 0)   (x2)= ({x2_b0}, 0)')
			else:
				print('No corta en el eje x')
		
		elif b == 0 and c == 0:
			print(f'Corta en el punto = (0, 0) ')
    


		#tabla de valores
		lista_valores = [-3,-2,-1,0,1,2,3]
		valores_sustituidos = []
		
		for valor_sustituido in lista_valores:
			z = a*valor_sustituido**2 + b*valor_sustituido + c
			valores_sustituidos.append(z)
		
		print(f'x = {lista_valores}'	)
		print(f'y = {valores_sustituidos}')
		print('')
#calculadora de caracteristicas y valores funcion cuadratica


input_a = input('Introduzca valor de a: ')
input_b = input('Introduzca valor de b: ')
input_c = input('Introduzca valor de c: ')


# input_start_x = input('\npunto inicial en eje x de la representacion: ')
# input_end_x = input('punto final en eje x de la representacion: ')
# x1 = np.linspace(-10, 10, 1000)

funcion_cuadratica(

	a =  int(input_a),
	b =  int(input_b),
	c =  int(input_c)
)  

x = [i-50 for i in range(101)] # Array of x values
y = [(int(input_a))*(i**2)+int(input_b)*i+int(input_c) for i in x] # Array of corresponding y values
plt.plot(x, y)
plt.show()
