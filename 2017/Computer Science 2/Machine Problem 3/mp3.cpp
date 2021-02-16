//Ricardo Deodutt
//Machine Problem 3

#include <iostream>
using namespace std;

int const asize = 10;
void initialize(int[], int, int);
void print(int[], int, int);
int find_min_index(int[], int, int);
void select_sort(int[], int, int);
int main()
{
	int list[asize];
	initialize(list, 0, asize - 1);
	select_sort(list, 0, asize - 1);
	print(list, 0, asize - 1);
	return 0;
}

void initialize(int array[], int start, int end)
{
	if (start <= end)
	{
		cout << '[' << start << "] > " << flush;
		cin >> array[start];
		initialize(array, ++start, end);
	}
}

void select_sort(int array[], int start, int end) // recursive selection sorting function
{
	int temp;									 // temporary variable used for swapping so we don't lose a value.
	int min = find_min_index(array, start, end); // gets the minimuim value in the array
	temp = array[min];							 // Sets temp to the minimum value in the array.
	array[min] = array[start];					 // This sets the minimum value in the array to the start position we are at.
	array[start] = temp;						 // This sets the start positon we are at to temp, which is the minimum value in the array.

	if (start < end)
	{
		select_sort(array, start + 1, end); // recursively calling itself until it goes through the whole array.
	}
}

void print(int array[], int start, int end) // Function to print the array recursively.
{
	if (start <= end)
	{ // if you put < then it won't print the last value
		cout << array[start] << " ";
		print(array, start + 1, end); // recursively printing elements of array
	}
	if (start > end)
	{
		cout << endl;
	}
}

int find_min_index(int array[], int start, int end) // Recursively returns the minimum of the array.
{

	if (start == end) // if start is equals to end than the end of the array is met.
	{
		return start;
	}

	if (array[start] < array[end])
	{
		return find_min_index(array, start, end - 1); // Recursively calls itself without the last element in the array.
	}

	return find_min_index(array, start + 1, end); // Recurseively calls itself incrementing the start position.
}
