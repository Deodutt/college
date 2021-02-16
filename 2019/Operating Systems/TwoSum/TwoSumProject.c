// Ricardo Deodutt
// CS 451 - SV - Dr. D’Alotto
#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#define LIMIT 10000 // CHANGE THIS # BASED OFF HOW MANY NUMBERS ARE IN YOUR .dat file

int main()
{
	double POST_CLOCKS_PER_SEC = 1000000; // Declared own clocks_per_sec because windows has a different clocks per second from Linux.
	double start, end, difference;
	start = clock();
	
    int preDetereminedValue = 0;
    
    FILE *myFile;
    myFile = fopen("BatchOfRNG.dat", "r");

	// This is used in case the File could not be found 
    if (myFile == NULL) { 
        printf("Could not open file.\n", myFile); 
        return 0; 
    } 
	
	//read file into array
    int numberArray[LIMIT];
    int i;

	// stores numbers in file into an array
    for (i = 0; i < LIMIT; i++)
    {
		fscanf(myFile, "%d", &numberArray[i]);
    }

	// prints out all the numbers in the array
    for (i = 0; i < LIMIT; i++)
    {
        printf("%d\n", numberArray[i]);
    }
    
    printf("\n");  
    printf("\n");
    printf("\n");
    
    
    
    int a;
    int b;
    
    // A is the first number.
    for(a = 0; a < i; a++)
    {
    	// B is the second number.
        for(b = a + 1; b < i; b++)
        {
            //printf("a: %d | b: %d\n", a,b);	//This is a test to see what A and b is.
			printf("%d + %d = %d", numberArray[a],numberArray[b],numberArray[a]+numberArray[b]);
            
			// checks if two numbers being added equals a pre deteremined value which is 0
			if(numberArray[b]+numberArray[a] == preDetereminedValue)
            {
                printf(" The sum met a pre-determined value.");
            }
            printf("\n");
        }
        
        printf("\n\n");
        
    }


    fclose(myFile);
    
    end = clock();
    difference = (end - start) / POST_CLOCKS_PER_SEC;
    printf("\nThe number of entries was %d", LIMIT);
    printf("\nThe execution time was: %2.15lf seconds.",difference);
	printf("\n\n");
	return 0;
}

