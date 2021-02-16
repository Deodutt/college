#include <iostream>
#include <cstdlib>
#include <ctime>
using namespace std;

int *function(int A[], int y)
{
	int *B = new int[y];
	cout << endl
		 << endl;
	cout << "The size of the new array is " << (sizeof(B) / sizeof(*B)) << "." << endl;
	int random;
	for (int i = 0; i < y; i++)
	{

		if (i < 10)
		{
			cout << endl;
			random =
				rand() % 100 + 20;
			cout << "The random number is " << random << "." << endl;
			B[i] = i + random;
			cout << "The content of element " << i << " is " << B[i] << "." << endl;
		}

		else
		{
			B[i] = A[i - 10];
			cout << endl;
			cout << "The content of element " << i - 10 << " copied from the original array to element " << i << " is " << B[i] << "." << endl;
		}
	}
	int i, key;
	for (int j = 1; j < y; j++)
	{
		key = B[j];
		i = j - 1;
		while (i >= 0 && B[i] > key)
		{
			B[i + 1] = B[i];
			i = i - 1;
		}
		B[i + 1] = key;
	}
	return B;
}

int main()
{
	int x;
	unsigned seed = time(0);
	srand(seed);

	cout << "Please enter the array size ";
	cin >> x;
	cout << "You entered " << x << "." << endl;

	int A[x];

	cout << "The size of the array is " << (sizeof(A) / sizeof(*A)) << "." << endl;

	int random;
	for (int i = 0; i < x; i++)
	{
		cout << endl;
		random =
			rand() % 99 + 1;
		cout << "The random number is " << random << "." << endl;
		A[i] = i + random;
		cout << "The content of element " << i << " is " << A[i] << "." << endl;
	}

	cout << endl
		 << "-------------------------------------" << endl;
	int y = x + 10;
	int *B = function(A, y);
	cout << endl
		 << "The sorted new array is " << endl;
	for (int i = 0; i < y; i++)
	{
		cout << "The content of element " << i << " is " << B[i] << "." << endl;
	}

	return 0;
}
