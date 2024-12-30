def segunda_ley(gen1, fenotipogen1,  gen2,fenotipogen2,  gen3,fenotipogen3,  gen4,fenotipogen4):
    
    
    #este for loop dira si es el numero dominante o recesivo
    # list_values = [gen1,gen2,gen3,gen4]
    # for value in list_values:
    #     num  =  0
        
        
    #     match value:
            
    #         case value if value.isupper() and num==0:
    #             L1 = gen1
    #             num =+ 1
    #         case value if value.islower() and num==0: 
    #             l1 = gen1
    #             num =+ 1

    #         case value if value.isupper() and num==1:
    #             L2 = gen2
    #             num =+ 1
    #         case value if value.islower() and num==1: 
    #             l2 = gen2
    #             num =+ 1

            
    #         case value if value.isupper() and num==2:
    #             K1 = gen3
    #             num =+ 1
    #         case value if value.islower() and num==2: 
    #             k1 = gen3
    #             num =+ 1

    #         case value if value.isupper() and num==3:
    #             K2 = gen4
    #             num =+ 1
    #         case value if value.islower() and num==3: 
    #             k2 = gen4
    #             num =+ 1
            
    val1 = gen1 + gen3
    val2 = gen1 + gen4

    val3 = gen2 + gen3
    val4 = gen2 + gen4

    
    match gen1:
        case gen1 if gen1.isupper() and gen3.islower():
            val1 = gen1+gen3
            
        case gen1 if gen1.islower() and gen3.isupper():
            val1 = gen3+gen1

        # case gen1 if gen1.issupper() and gen3.isupper():
        #     val1 = gen1+gen3
        # case gen1 if gen1.islower() and gen3.islower():
        #     val1 = gen1+gen3


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
    


   


    print(f'''
        {val1}  |  {val2}
        ---------
        {val3}  |  {val4}
          ''')
    





segunda_ley(   
    gen1= input('Escriba la primera letra del primer individuo: '),
    fenotipogen1='alto',
    gen2= input('Escriba la segunda letra del primer individuo: '),
    fenotipogen2='bajo',
    
    gen3= input('Escriba la primera letra del segundo individuo: '),
    fenotipogen3='largo',
    
    gen4= input('Escriba la segunda letra del segundo individuo: '),
    fenotipogen4= 'corto'
)