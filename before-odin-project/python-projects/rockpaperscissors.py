import random

def play_again(input1):
    match input1:
        
        case 'piedra':
            match pc_play:
                case 'piedra':
                    print('Empate')
                case 'papel':
                    print('Perdiste')
                case 'tijeras':
                    print('Ganaste')
                    
        case 'papel':
            match pc_play:
                case 'piedra':
                    print('Ganaste')
                case 'papel':
                    print('Empate')
                case 'tijeras':
                    print('Perdiste')
                    
        case 'tijera':
            match pc_play:
                case 'piedra':
                    print('Perdiste')
                case 'papel':
                    print('Ganaste')
                case 'tijeras':
                    print('Empate')
    print(f'{input1} contra {pc_play}')

play_yn = 'y'

while play_yn == 'y':

    random_number = random.randint(1,3)

    match random_number:
        case 1:
            pc_play = 'piedra'
        case 2:
            pc_play = 'papel'
        case 3:
            pc_play = 'tijeras'

    input1 = input('escribe piedra, papel o tijera: ') 
    
    if input1 == 'piedra' or input1 == 'papel' or input1 == 'tijera':
        play_again(input1)
        play_yn = input('quieres jugar de nuevo(y / n): ')
        
        if play_yn == 'n':
            break
    else:
        print('Escriba una jugada valida')