//Ricardo Deodutt
//Machine Problem #5

#include <iostream>
using namespace std;

struct Link //Linked list struct
{
	int ValueEntered; // The value of the link.
	Link *NextLink;	  // The next link in the list
};

void PrintLinkList(Link *ListStart) //Prints out the linked list from the start link
{
	cout << endl
		 << "This is the sorted Link List." << endl;
	while (ListStart != NULL) // Runs until null is reached. Which means it stops at the end of the linked list.
	{
		cout << (*ListStart).ValueEntered << " ";
		ListStart = (*ListStart).NextLink; // Sets the start Link to its next link.
	}
	cout << endl;
}

Link *InsertLinkListSorted(Link *StartLink, int InsertValue) // Inserts into the linked list so its sorted.
{
	Link *TempLink; // This is used to travel through the linked list and read the varible.
	Link *LastLink; // This is used to store the last temp link visited.
	Link *NewLink;	// This is used to store the new link.

	TempLink = StartLink; // This copies start link to temporary link.
	LastLink = NULL;	  // This sets the last temp link to NULL.

	NewLink = new Link;					   // Allocating stored space/memory for the new link.
	(*NewLink).ValueEntered = InsertValue; // Setting the value for the new link.

	while (true) // Sorting and inserting into the linked list.
	{
		if (LastLink == NULL)
		{
			if (TempLink == NULL) // Case where linked list is empty
			{
				(*NewLink).NextLink = NULL; // Setting the next link to NULL.
				StartLink = NewLink;		// Setting the start link to new link.
				break;						// Link was inserted, stops loop
			}
			else if (InsertValue <= (*TempLink).ValueEntered)
			// Case where a value is less than or equal to the least number(first) in the linked list
			{
				(*NewLink).NextLink = TempLink; // Setting the next link to the old start link.
				StartLink = NewLink;			// Setting the start link to new link.
				break;							// Link was inserted, stops loop
			}
		}
		else if (TempLink == NULL)
		// Case where end of linked list is reached without finding a place to add the new link so add it to the end
		{
			(*NewLink).NextLink = NULL;		// Setting the next link to NULL.
			(*LastLink).NextLink = NewLink; // Setting the last link to the new link
			break;							// Link was inserted, stops loop
		}
		else if (InsertValue <= (*TempLink).ValueEntered)
		// Case where a value is less than or equal to linked list value but not the least number(first) in the linked list
		{
			(*NewLink).NextLink = TempLink; // Setting the new next link to the temp link.
			(*LastLink).NextLink = NewLink; // Setting the last link to the new link
			break;							// Link was inserted, stops loop
		}
		LastLink = TempLink;			 // Sets the last link to the temporary link before it changes.
		TempLink = (*TempLink).NextLink; // Sets temporary Link to the next link is pointing to.
	}
	return StartLink;
}

int main()
{
	Link *StartLink = NULL; // This link is the start of the linked list.
	int CVE;				//Current Value Entered;
	int Counter = 1;		// This counts how many non-negative integers you enter.

	cout << "Input the first integer value (Input -1 when you are done entering values)." << endl;
	cout << "Any non-negative integer will be ignored." << endl;

	while (true) // infinite loop.
	{
		cout << "[" << Counter << "]> ";
		cin >> CVE; // gets inputed values

		if (CVE == -1) // Condition to break the loop. (stop values from being inputed.)
		{
			break;
		}

		else if (CVE < -1) // Condition to ignore inputs less than -1.
		{
			cout << "Input of " << CVE << " is not accepted. Value is not a non-negative integer." << endl;
			continue; // this starts the loop over again.
		}

		else // This is the condition of non-negative integers.
		{
			StartLink = InsertLinkListSorted(StartLink, CVE); // This inserts the CVE into the linked list in a sorted manner.
			Counter++;										  // This increments the counter when the integer is accepted.
		}
	}
	PrintLinkList(StartLink); // Prints out the linked list
}
