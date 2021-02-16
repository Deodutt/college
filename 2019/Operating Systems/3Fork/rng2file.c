// Ricardo Deodutt
// CS 451 - SV - Dr. D’Alotto
#include <stdio.h>
#include <stdlib.h>
#include<time.h> 
#define LIMIT 1000

int main() {
  FILE * fp;
  int c, n;
  srand(time(0));
  fp = fopen ("BatchOfRNG.dat","w");
 
  printf("Generating %d random numbers.... \n\n", LIMIT);
 
  for (c = 1; c <= LIMIT; c++) {
    //n = rand() % 201 - 100; // [-100 to 100]
    n = rand() % 2001 - 1000; // [-1,000 to 1,000]
    //n = rand() % 20001 - 10000; // [-10,000 to 10,000]
    printf("%d\n", n);
    fprintf (fp, "%d\n", n);
  }
  fprintf (fp, "\nThere is a total number of %d randomly generated numbers.", LIMIT);
  fclose (fp);
  printf("\n%d random numbers were successfully generated in [-1000 to 1000]\n", LIMIT);
  return 0;
}
