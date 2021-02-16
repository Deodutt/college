// Ricardo Deodutt

#include <iostream>
using namespace std;

int LSearch(int Array[], int i, int M, int s_value) //  i is index. M is maximum.  s_value is the search value.
{
	if (i > M)
	{			   // if i is greater than M then that means there is nowhere left to search in -the array.
		return -1; // return -1 means not found
	}

	if (Array[i] == s_value)
	{				  // If array of i is equal to the S_value then the value is found.
		return i + 1; // you are returning the position which you need to add one since the array starts at zero.
	}

	else
	{									   //execute this if none of the criteria is met
		LSearch(Array, i + 1, M, s_value); // call the function again recursively. You do i+1 because you want to search the next index.
	}
}

int main()
{
	int Array[10]; // declare where you will store the integers/elements. 10 is the size of the array.
	int N = 10;	   // N is the maximum number of integers to get from the user.
	int s_value;   // The integer to search for.
	int position;  // Where the search element is found in the array. If not found -1.

	cout << "Please enter 10 array elements (NUMBERS ONLY)" << endl; // tells users to  input array values
	for (int i = 0; i < N; i++)
	{ // loop through getting the input N times (10 times)

		cin >> Array[i]; // this stores the user inputed integer in Array index i
	}

	cout << endl
		 << "Please enter the search element(NUMBER ONLY)" << endl; //tells the users to input the search value

	cin >> s_value; // stores the user inputed search value.

	position = LSearch(Array, 0, N - 1, s_value); // It assigns position to where the search function finds the search value. If not found -1..... Starting index is 0. N-1 because the array starts at 0. 10 elements will take 9 spaces.

	if (position == -1)
	{ // This is if the element is not found.
		cout << endl
			 << "The search value is not in the array" << endl; // its tells user integer is not found
	}

	else
	{
		cout << endl
			 << "The search value " << s_value << " is found first at position " << position << " in the array. " << endl; // It tells user where the element is found FIRST.
	}

	return 0; // end of program.
}

// This algorithm is better because it specifies the array size. This algorithm also tells you what the maximum array size by the search function argument.