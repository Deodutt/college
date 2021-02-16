//Ricardo Deodutt
//Machine Problem 4

#include <iostream>
#include <string>
using namespace std;

const int digitlimit = 81; // Its 81 to account for integer overflow on a 80 limit. So you can handle summands with up to 80 digits each.

class summandInteger // Class for the integer array.
{
public:
	int summandStore[digitlimit]; // Stores the summands into integer array.

	summandInteger() // This is the constructor.
	{
		for (int i = 0; i < digitlimit; i++) // initializes the array to zeros.
		{
			summandStore[i] = 0;
		}
	}
	bool stringConvert(string summand) // This converts a string input to an integer array.
	{
		int x = digitlimit - 1;		   // This is the last position in the array.
		int length = summand.length(); // This is the string length.
		if (length > digitlimit)	   // if length is greater than the digitlimit, it is over the limit and returns false.
		{
			return false;
		}
		for (int i = length - 1; i >= 0; i--) // This converts each character of the string to a integer and stores it into the array.
		{
			summandStore[x] = summand[i] - '0'; // '0' or 48. Converting character to int. '0' is 49 and '9' is 57.
			x--;
		}
		return true;
	}
	void printinteger() // Function to print the array.
	{
		bool notzero = false;				 // notzero means we encountered a non zero number.
		for (int i = 0; i < digitlimit; i++) // Prints out every number but skips the trailing zeros.
		{
			if (summandStore[i] == 0 && notzero == false) //if you get a zero and notzero is false, then it skips.
			{
				continue;
			}

			else if (summandStore[i] != 0 && notzero == false) // it means that we encountered out first nonzero number.
			{
				cout << summandStore[i];
				notzero = true;
			}

			else // It means that we have a Non zero number and notzero is true.
			{
				cout << summandStore[i];
			}
		}
	}
};

void findSummand(summandInteger summand1, summandInteger summand2) // Adds two summandsInteger.
{
	summandInteger summandSum; // This is where the new summandInteger sum is stored.
	int SumCurrentDigit = 0;   // SumCurrentDigit is the sum of the two digits we are adding.
	int carry = 0;			   // defines and initializes the carry to zero.

	for (int i = digitlimit - 1; i >= 0; i--) // This has the digit starting from the right to the left
	{
		SumCurrentDigit = summand1.summandStore[i] + summand2.summandStore[i] + carry; // This is the sum of the current digits.
		if (SumCurrentDigit > 9)													   // sum is greater than 9, that means we have a carry.
		{
			SumCurrentDigit -= 10; // You are subtracting 10 and assigning the new value.
			carry = 1;
		}

		else // sum is less than 10 then no carry.
		{
			carry = 0;
		}
		summandSum.summandStore[i] = SumCurrentDigit; // Saves the sum of the two digits to the new array.
	}

	if (carry == 1) // If there is carry but no digit space left, then we have an integer overflow.
	{
		cout << "Interger Overflow" << endl;
		return;
	}

	cout << "The sum of the two numbers is ";
	summandSum.printinteger(); // prints the sum.
	cout << "." << endl;
	return;
}

int main()
{
	string input1, input2;			   // user input as a string.
	summandInteger summand1, summand2; // user input converted to an integer array.

	cout << "Enter the first number please." << endl;
	cin >> input1;
	if (!summand1.stringConvert(input1)) // if this is false then..
	{
		cout << "Over the limit." << endl; // it is over the limit which is 80 digits.
		return 0;
	}
	cout << "Enter the second number please. " << endl;
	cin >> input2;
	if (!summand2.stringConvert(input2)) // if this is false then..
	{
		cout << "Over the limit." << endl; // it is over the limit which is 80 digits.
		return 0;
	}
	findSummand(summand1, summand2); //Function to add the two summands.
	return 0;
}
