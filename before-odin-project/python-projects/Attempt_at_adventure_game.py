#imports
from time import sleep

#classes
class Character:
    def __init__(self,name,health,damage,defense):
        self.name = name
        self.max_health = health
        self.health = health
        self.damage = damage
        self.defense = defense

    def attack(self, target):
        target.health -= (self.damage - target.defense)
        target.health = max(target.health, 0)
        

    def remove_hp(self, target, amount):
        damage_dealt = min(amount, target.health)
        target.health -= damage_dealt
        target.health = max(target.health, 0)

    def heal(self, heal_amount):
        self.health =  min(self.health + heal_amount, self.max_health)

class Monster(Character):
    def __init__(self, name, health, damage, defense):
        super().__init__(name=name,health=health, damage=damage, defense=defense)


class Hero(Character):
    def __init__(self, name, health, damage, defense):
        super().__init__(name=name,health=health, damage=damage, defense=defense)


#functions
def hero_dead():
    """This function gets called by dead_check()  to change room_check value to 'dead' if player health is 0

    """     

    global room_check
    room_check='dead'

def dead_check(hero_health, room, room_value:int, printed_text):
    """This function will be used after a fight to make sure that the hero didn't die.
    If he died, room_check == 'dead' - this means the game ends.
    If not, the room changes and the game continues.

    Args:
        hero_health (int): hero health
        room (variable): here goes the room that the hero is in
        room_value (int): if the hero didn't die, the value changes to match the next room
        printed_text (str): this prints what happens after the fight is over is you win
    """

    if hero_health == 0:
        hero_dead()
        return room
    elif hero_health !=0:
        room = room_value
        print(str(printed_text))
        return room




#objects
hero = Hero(name='you', health=100, damage=10, defense=0)

slime = Monster(name='slime', health=20, damage=10, defense=0)
bear = Monster(name='bear', health=50, damage=10, defense=0)
goblin = Monster(name='goblin', health=30, damage=12, defense=0)


monster = Monster(name='monster', health=None, damage=None, defense=None)
monster = Monster(name='monster', health=None, damage=None, defense=None)
#This variable is used to determine where is the player
room_check = 0






if room_check == 0:
    print(f'\n-Your health is: {hero.health}  \n-Your attack is: {hero.damage}  \n-Your defense is: {hero.defense} ')
    
    input_conditional_room_0 = input('\nYou found a slime, enter: 1 para entrar a la sala, 2 para ir a otra:  ')
    while True:
        if input_conditional_room_0 == '1':
            while slime.health != 0:
                hero.attack(slime)
                slime.attack(hero)
                
            room_check = 1
            print(f'\nyour health after the fight is {hero.health}')
            break
        elif input_conditional_room_0 == '2':
            print('\nyou tried to escape to another room but fell and hit your head (you are dumb)')
            room_check = 'dead'
            break
        else:
            print(f'{input_conditional_room_0} is neither 1 or 2')
            input_conditional_room_0 = input('1 para entrar a la sala, 2 para ir a otra  ')
            

#sleep(2)
if room_check == 1:
    print(f'\n-Your health is: {hero.health}  \n-Your attack is: {hero.damage}  \n-Your defense is: {hero.defense}')
    
    input_conditional_room_1 = input('You were astonished by three different doors, you must choose between room 1,2,3: ')
    #sleep(2)
    while True:
        match input_conditional_room_1:
            case '1':
                print('You found +4 defense')
                hero.defense +=4
                room_check = 2
                break

            case '2':
                print('You found nothing lol(minus one health cause you are dumb)')
                hero.remove_hp(hero,1)
                room_check = 2
                break
            
            case '3':
                print('You found +4 damage')
                hero.damage +=4
                room_check = 2
                break

            case _:
                input_conditional_room_1 = input('That is not one of the 3 rooms, please enter - 1,2,3:  ')

#sleep(3)
if room_check ==2:
    print(f'\n-Your health is: {hero.health}  \n-Your attack is: {hero.damage}  \n-Your defense is: {hero.defense}')
    
    print('\nTo the left, there is a secret door that leads you to a place with some kind of animal(1),')
    print('\nTo the right there is also a potion with a peculiar coloring(2)')

    #sleep(2)
    input_conditional_room_2 = input('\nEnter number: ')
    while True:
        #sleep(3)
        match input_conditional_room_2:
            case '1':  
            
                print('\nshit you found a bear')
                #sleep(3)
                bear_escape_input =input('Write 1 if you dare to fight it and 2 if you wish to escape: ')
                while True:
                    match bear_escape_input:
                        case '1':
                                while bear.health != 0:
                                    hero.attack(bear)
                                    bear.attack(hero)
                                #sleep(5)
                                print(f'You almost fucking died by that choice. You did a smart thing for once and used his skin as a coat(+7 defense)')
                                hero.defense += 7
                                room_check = 3
                                break
                                
                            
                        case '2':
                            #sleep(2)
                            print('You got lucky and did not die, Lets hope you dont make dumb decisions anymore...')
                            room_check = 3
                            break
                        case 'chicken':
                            #sleep(2)
                            bear_escape_input =input('I just told you are standing in front of a not a chicken, do not be this silly, write 1 or 2: ')

                        case 'pigeon':
                            #sleep(2)
                            bear_escape_input =input('I just told you are standing in front of a bear not a pigeon, do not be this silly, write 1 or 2: ')

                        case _:
                            bear_escape_input =input('Write a 1 or 2: ')
                break

            
                
            case '2':
                print('You heal 50 hp')
                hero.heal(50)
                room_check = 3
                break

            case 'pigeon':
                print('No bro, that doesnt look like a pigeon')
                input_conditional_room_2 = input('Enter a 1 or 2: ')

            case 'chicken':
                print('No bro, that doesnt look like a chicken')
                input_conditional_room_2 = input('Enter a 1 or 2: ')

            case _:
                input_conditional_room_2 = input('Enter a 1 or 2: ')

#sleep(4)
if room_check ==3:

    #sleep(1)
    print('\nYou spot two sets of stairs, number 1 going upstairs and number 2 going downstairs.')
    print('\nYou can see a shine of sunlight from stairs number 1,')
    print('\nFrom stairs number 2, all that comes from the stairs is darkness and a weird feeling.')
    input_conditional_room_3 = input('\nChoose wisely which set of stair you are going to go to: 1,2:  ')

    while True:
        match input_conditional_room_3:
            case '1':
                #sleep(1)
                print('You start walking upstairs...')
                #sleep(2)
                print('You found yourself in a beatiful garden.')
                room_check_garden = 0
                room_check_basement = 'none'
                break

            case '2':
                #sleep(1)
                print('You start walking downstairs...')
                #sleep(2)
                print('You found yourself in a dark, mysterious and creepy basement.')
                room_check_garden = 'none'
                room_check_basement = 0
                break

            case _:
                input_conditional_room_3 = input('Write a 1 or a 2:  ')

        


#sleep
#the story changes to either of these paths
if room_check_garden == 0:
    print(f'\n-Your health is: {hero.health}  \n-Your attack is: {hero.damage}  \n-Your defense is: {hero.defense}')
    #sleep(1)

    print('INPIUTHER')
    input_conditional_room_garden_0 = input('\n Choose between them: ')














elif room_check_basement == 0:
    print(f'\n-Your health is: {hero.health}  \n-Your attack is: {hero.damage}  \n-Your defense is: {hero.defense}')
    
    #sleep(1)
    
    print('\nA wall slides in and puts an end to any means to escape  ')
    print('\nAfter finding yourself trapped, you proceed to light up a torch.  ')
    print('\nUsing the light to see your path you encounter three things  \n ')
    print('\nA wizard willing to give you 2 potions(1) ')
    print('\nA room with the silhouette of a dragon and fire inside(2)')
    print('\nAn armed goblin staring at you with bad intentions(3) ')
    input_conditional_room_basement_0 = input('\nChoose between them: ')

    while True:
        match input_conditional_room_basement_0:
            
            #wizard
            case '1': 
                #sleep(1)
                print('\nAfter agreeing to the terms of the wizard, He offers you to choose between the potion of power(1) or the potion of health(2). ')
                potion_wizard_choice = input('''\nChoose 1 or 2:  ''')
                
                while True:
                    if potion_wizard_choice == '1':
                        #sleep(1)
                        print('\nYou gain +2 defense and damage')
                        hero.damage += 2
                        hero.defense += 2
                        break

                    elif potion_wizard_choice == '2':
                        #sleep(1)
                        print('\nYou gain +15 health')
                        hero.heal(15)
                        break

                    else:
                        potion_wizard_choice = input('enter 1 or 2:  ')
                
                room_check_basement = 1
                break

            #dragon 
            case '2': 
                #sleep(1)
                print('\nYour torch magically goes dark and you think wether the dragon has to do with it.')
                print('\nWhile you panic, you think about going to the next door as fast as possible.')
                print(f'\nYour health is {hero.health}.')
                #sleep(1)
                print('\nWill you run away(1) or try to fight this ancient dragon(2).')
                

                dragon_fight_or_run = input('\nChoose between running(1) or fighting it(2): ')
                while True:
                    if dragon_fight_or_run == '1':
                        #sleep(1)
                        print('\nYou were fast and nothing seemed to happen.')
                        
                        break

                    elif dragon_fight_or_run == '2':
                        #sleep(1)
                        print('\nFor some reason, after trying to find the dragon, all you find is nothing. Did it run away?')
                        print('\nAfter a while, the room lights turn on and you are blinded for a few seconds...')
                        #sleep(2)

                        print('\nYou stumble upon a magic mirror and and sword with a dragon head in its guard. ')
                        print('\nYou laugh at how silly you feel and proceed to pick up the sword. +3 damage')
                        hero.damage += 3
                        
                        break

                    else:
                        dragon_fight_or_run = input('enter 1 or 2:  ')
                
                
                room_check_basement = 1
                break


            #goblin
            case '3': 
                #sleep(1)
                print('\nAfter entering the room, the goblin jumps at you with a knife.')
                
                while hero.health != 0  and goblin.health != 0:
                    hero.attack(goblin)
                    goblin.attack(hero)
                
                #sleep(2)
                
                room_check_basement = dead_check(hero.health,room_check_basement,1, 'You killed him and stole his armor. +3 defense')
                hero.defense += 3

                break

            case _:
                input_conditional_room_basement_0 = input('Write a 1, a 2 or a 3:  ')

if room_check_basement == 1:
    print(f'\n-Your health is: {hero.health}  \n-Your attack is: {hero.damage}  \n-Your defense is: {hero.defense}')
    #sleep(1)














#stats  test values(to determine the changes on stats)
#sleep(1)
print(f'''
      
    test stats:
-Your health is: {hero.health}
-Your attack is: {hero.damage}
-Your defense is: {hero.defense}
      
      ''')

# f'\n-Your health is: {hero.health}  \n-Your attack is: {hero.damage}  \n-Your defense is: {hero.defense}'
#keep at last position
if room_check == 'dead':
    print('\nYou have died! :(\n')
    