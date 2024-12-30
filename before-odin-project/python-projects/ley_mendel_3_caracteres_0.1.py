def tercera_ley(gen1,gen2,gen3,gen4,  gen5,gen6,gen7,gen8):
    
    val1 = gen1 + gen3
    val2 = gen1 + gen4
    val3 = gen2 + gen3
    val4 = gen2 + gen4


    val5 = gen5 + gen7
    val6 = gen5 + gen7
    val7 = gen6 + gen8
    val8 = gen6 + gen8


    #
    match gen1:
        case gen1 if gen1.isupper() and gen3.islower():
            val1 = gen1+gen3
            
        case gen1 if gen1.islower() and gen3.isupper():
            val1 = gen3+gen1

        


        case gen1 if gen1.isupper() and gen4.islower():
            val2 = gen1+gen4
        case gen1 if gen1.islower() and gen4.isupper():
            val2 = gen4+gen1

    match gen2:

        case gen2 if gen2.isupper() and gen3.islower():
            val3 = gen2+gen3

        case gen1 if gen1.islower() and gen3.isupper():
            val3 = gen3+gen2

        case gen2 if gen2.isupper() and gen4.islower():
            val4 = gen2+gen4
        case gen1 if gen2.islower() and gen4.isupper():
            val4 = gen4+gen2

    match gen5:
        case gen5 if gen5.isupper() and gen7.islower():
            val5 = gen5+gen7
            
        case gen5 if gen5.islower() and gen7.isupper():
            val5 = gen7+gen5

        case gen5 if gen5.isupper() and gen8.islower():
            val6 = gen5+gen8

        case gen5 if gen5.islower() and gen8.isupper():
            val6 = gen8+gen5

    match gen6:

        case gen6 if gen6.isupper() and gen7.islower():
            val7 = gen6+gen7

        case gen6 if gen6.islower() and gen7.isupper():
            val7 = gen7+gen6

        case gen6 if gen6.isupper() and gen8.islower():
            val8 = gen6+gen7

        case gen6 if gen6.islower() and gen8.isupper():
            val8 = gen7+gen6

   
   #Intento de ordenarlos de manera XxZz (gone wrong)
    # match gen1:
    #     case gen1 if gen1.isupper() and gen3.islower():
    #         val1 = gen1+gen5
            
    #     case gen1 if gen1.islower() and gen3.isupper():
    #         val1 = gen5+gen1

        


    #     case gen1 if gen1.isupper() and gen4.islower():
    #         val2 = gen1+gen8
    #     case gen1 if gen1.islower() and gen4.isupper():
    #         val2 = gen8+gen1

    # match gen2:

    #     case gen2 if gen2.isupper() and gen3.islower():
    #         val3 = gen2+gen6

    #     case gen1 if gen1.islower() and gen3.isupper():
    #         val3 = gen6+gen2

    #     case gen2 if gen2.isupper() and gen4.islower():
    #         val4 = gen6+gen4
    #     case gen1 if gen2.islower() and gen4.isupper():
    #         val4 = gen4+gen6

    # match gen5:
    #     case gen5 if gen5.isupper() and gen7.islower():
    #         val5 = gen3+gen7
            
    #     case gen5 if gen5.islower() and gen7.isupper():
    #         val5 = gen7+gen3

    #     case gen5 if gen5.isupper() and gen8.islower():
    #         val6 = gen5+gen4

    #     case gen5 if gen5.islower() and gen8.isupper():
    #         val6 = gen4+gen5

    # match gen6:

    #     case gen6 if gen6.isupper() and gen7.islower():
    #         val7 = gen3+gen7

    #     case gen6 if gen6.islower() and gen7.isupper():
    #         val7 = gen7+gen3

    #     case gen6 if gen6.isupper() and gen8.islower():
    #         val8 = gen2+gen7

    #     case gen6 if gen6.islower() and gen8.isupper():
    #         val8 = gen7+gen2

    
    #creacion de rows usando una funcion
    
    list_val1 = [val1, val2, val3, val4]
    # list_val5 = [val5, val6, val7, val8]
    
    def row_calc(value, list):
        return   f'{list[0]+value} | {list[1]+value} | {list[2]+value} | {list[3]+value}'
    
    row1 = row_calc(val5, list_val1)
    row2 = row_calc(val6, list_val1)
    row3 = row_calc(val7, list_val1)
    row4 = row_calc(val8, list_val1)

    print(f'''
        
        -------------------------
        {row1}
        -------------------------
        {row2}
        -------------------------
        {row3}
        -------------------------
        {row4}
        -------------------------
          
          ''')

    





tercera_ley(
    

    gen1= input('Escriba la primera letra del primer individuo: '),
    gen2= input('Escriba la segunda letra del primer individuo: '),
    gen3= input('Escriba la tercera letra del primer individuo: '),
    gen4= input('Escriba la cuarta letra del primer individuo: '),

    gen5= input('\nEscriba la primera letra del segundo individuo: '),
    gen6= input('Escriba la segunda letra del segundo individuo: '),
    gen7= input('Escriba la tercera letra del segundo individuo: '),
    gen8= input('Escriba la cuarta letra del segundo individuo: '),
    
    )