// Ricardo Deodutt
// CS 451 - SV - Dr. D’Alotto
#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include<sys/types.h>
#include <unistd.h>
#define LIMIT 1000 // CHANGE THIS # BASED OFF HOW MANY NUMBERS ARE IN YOUR .dat file

int main()
{
	int pid;
 	int state;
	double POST_CLOCKS_PER_SEC = 1000000; // Declared own clocks_per_sec because windows has a different clocks per second from Linux.
	double start, end, difference;
	
	start = clock();
	pid = fork();//Spawning the child here.
	
	if (pid == 0){ //This is for the child code.
		
    int preDetereminedValue = 0;
    
    FILE *myFileREAD;
    myFileREAD = fopen("BatchOfRNG.dat", "r");

	// This is used in case the File could not be found 
    if (myFileREAD == NULL) { 
        printf("Could not open file.\n", myFileREAD); 
        return 0; 
    } 
    
    
    FILE *myFileWRITE; // This is where the results will be stored. The program will *NOT* print out values onto shell.
    myFileWRITE = fopen("results.dat", "w");

	// This is used in case the File could not be found .
    if (myFileWRITE == NULL) { 
        printf("Results File does not exist.\n", myFileWRITE); 
        return 0; 
    } 
    

	//read file into array
    int numberArray[LIMIT];
    int i;

	// stores numbers in file into an array
    for (i = 0; i < LIMIT; i++)
    {
		fscanf(myFileREAD, "%d", &numberArray[i]);
    }

	// prints out all the numbers in the array
    fprintf (myFileWRITE, "The random generated numbers are... \n", numberArray[i]);
    
	for (i = 0; i < LIMIT; i++)
    {
   	fprintf (myFileWRITE, "%d\n", numberArray[i]); // This is used to print out all RNG results in a file.
    //   printf("%d\n", numberArray[i]); // This was used to print out to shell.
    }
    
    fprintf (myFileWRITE, "\n");
    fprintf (myFileWRITE, "Total numbers generated: %d numbers... \n", LIMIT);
    fprintf (myFileWRITE, "\n");
    fprintf (myFileWRITE, "\n");
    
    fprintf (myFileWRITE, "These are the first 100 pre-determined values found. \n");
    int a;
    int b;
    int c;
    // double computation = 0;
    
    int w = 0; // This is a counter for how many pre-determined numbers were met.
    //int y = 0; // This counts how many computations were done. 
    
    // A is the first number.
    for(a = 0; a < i; a++)
    {
    	// B is the second number.
        for(b = a + 1; b < i; b++)
        {
        	
    	// C is the second number.
        for(c = b + 1; c < i; c++)
       {
        	

        //printf("a: %d | b: %d | c: %d\n", a,b,c);	//This is a test to see what A and b is.
		//computation = numberArray[a]+numberArray[b]+numberArray[c];
		//printf("%d + %d + %d = %d", numberArray[a],numberArray[b],numberArray[c],numberArray[a]+numberArray[b]+numberArray[c]);
		//y++;
		
		
		//Remove this or else the file size will be extremely BIG.	
    	//fprintf (myFileWRITE, "%d + %d + %d = %d", numberArray[a],numberArray[b],numberArray[c],numberArray[a]+numberArray[b]+numberArray[c]); //used to print to file. 


			// checks if two numbers being added equals a pre deteremined value which is 0

			if(numberArray[c]+numberArray[b]+numberArray[a] == preDetereminedValue)
            {
				//printf(" The sum met a pre-determined value.");
				
				w++;
				
				if( w < 101){
					fprintf (myFileWRITE, "%d + %d + %d = %d", numberArray[a],numberArray[b],numberArray[c],numberArray[a]+numberArray[b]+numberArray[c]);
					fprintf (myFileWRITE, "  ---------> The sum has met a pre-determined value.\n");
				}
				
            }
            //	fprintf (myFileWRITE, "\n");
            
			}
			//	fprintf (myFileWRITE, "\n");
        }
        
			//	fprintf (myFileWRITE, "\n");
        
    }
    
    fprintf (myFileWRITE, "\n");
    fprintf (myFileWRITE, "\nThere is a total number of %d randomly generated numbers.", LIMIT);
    fprintf (myFileWRITE, "\nThere was a total of %d pre-determined sums met.", w);
    //fprintf (myFileWRITE, "\nThe number of computations was %d.", y);


    fclose(myFileREAD);
	fclose(myFileWRITE);
    
	end = clock(); // child end clock
    difference = (end - start) / POST_CLOCKS_PER_SEC;
	printf("\n");
	printf("--------------------------------------------------------------------------------------------------------------------");
    printf("\nPlease open the file named results.dat for all numbers generated and the first 100 pre-determined values found.");

    printf("\n\nThe number of entries is %d.", LIMIT);
    printf("\nOverall, there is a total of %d pre-determined sums met.", w);
    //printf("\nThe number of computations was %d.", y);
    printf("\nThe execution time of the child process was: %2.15lf seconds.",difference);
    printf("\n--------------------------------------------------------------------------------------------------------------------");
	printf("\n\n");
	return 0;
	
	
} //pid ending bracket

	else if (pid < 0){ // Negative Value: creation of a child process was unsuccessful.
		printf("The fork creation has failed.");
		return 1;
	}
	
	    
    end = clock(); // parent end clock.
    difference = (end - start) / POST_CLOCKS_PER_SEC;
    printf("\nThe execution time of the parent process was: %2.15lf seconds.",difference);
	printf("\n\n");
	return 0;
	
	
}

