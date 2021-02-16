//Ricardo

#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <sys/types.h>
#include <unistd.h>

int factorial(int n)
{
   //base case
   if (n == 0)
   {
      return 1;
   }
   else
   {
      return n * factorial(n - 1);
   }
}

int fibbonacci(int n)
{
   if (n == 0)
   {
      return 0;
   }
   else if (n == 1)
   {
      return 1;
   }
   else
   {
      return (fibbonacci(n - 1) + fibbonacci(n - 2));
   }
}

int main()
{
   int pid;
   int n = 5; // change this based off number
   int i;

   double start, end, timing;

   start = clock();
   pid = fork(); //the child is created
   if (pid == 0)
   {

      //        printf("\n*****************************");
      //        printf("\nPlease enter the fib number you would like to know:\n");
      //        scanf("%d", &n);

      printf("Factorial of %d: %d\n", n, factorial(n));
      printf("Fibbonacci of %d: ", n);

      for (i = 0; i < n; i++)
      {
         printf("%d ", fibbonacci(i));
      }
   }

   else if (pid < 0)
   {
      printf("The fork was not created");
      return 1;
   }

   end = clock();
   timing = (end - start) / CLOCKS_PER_SEC;

   printf("It  took me%20.15lf secounds to figure this out o_o\n", timing);
   printf("***************************\n");

   return 0;
}
