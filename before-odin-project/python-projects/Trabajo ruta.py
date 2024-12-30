import math

#calcular expresion algebraica de una funcion lineal

def funcion_lineal (valor_y, valor_x):
    pendiente_funcion_lineal = valor_y / valor_x
    print(f'La expresion algebraica de la funcion lineal es: {pendiente_funcion_lineal}x')
    
#expresion algebraica de la parabola
def funcion_parabolica (raiz1, raiz2):
    b = -raiz1 + -raiz2
    c = -raiz1 * -raiz2
    if c > 0:
        signo = '+'
    elif c < 0:
        signo = '-'
    elif c == 0:
        signo = ''

    if b > 0:
        signo_b = '+'
    elif b < 0:
        signo_b = '-'
    elif b == 0:
        signo_b = ''
    print(f'La expresion caudratica de la funcion cuadratica es: x**2  {signo_b}{b}x  {signo}{c} ')

#expersion funcion afin
def funcion_afin (x2,x1,y2,y1):
    m = (y2-y1) / (x2-x1)
    
    # print(f'm={m}')
    # print(y2-y1)
    ordenada_en_el_origen = y2 - (x2*m) 
    
    print(f'La expresion afin de la funcion afin es: {m}x  {ordenada_en_el_origen}')
    
funcion_lineal(
    valor_y = 2,
    valor_x = 1
)
funcion_parabolica(
    raiz1 = -8,
    raiz2 = -10
)
funcion_afin(
    x2 = -10,
    x1 = -11,
    y2 = 0,
    y1 = -1
)