//Ricardo Deodutt
#include <iostream>
#include <string>

using namespace std;

int main()
{
	char x;

	cout << "Please enter a letter: "; // user is prompted to enter the first letter
	cin >> x;						   // user enters the first letter here

	if (x == 'r' || x == 'R')
	{											 // the first letter is checked if it matches the accepted letters.
		cout << "Please enter another letter: "; // The user is prompted to enter the second letter.
		cin >> x;								 // user enters second letter.

		if (x == 'i' || x == 'I')
		{											 // the second letter is checked.
			cout << "Please enter another letter: "; // user prompted to enter 3rd letter
			cin >> x;								 // enters 3rd letter

			if (x == 'c' || x == 'C')
			{											 // 3rd checked
				cout << "Please enter another letter: "; // 4th letter
				cin >> x;								 // 4th letter

				if (x == 'a' || x == 'A')
				{											 // 4th checked
					cout << "Please enter another letter: "; // 5th letter
					cin >> x;								 // 5th letter

					if (x == 'r' || x == 'R')
					{											 // 5th letter checked.
						cout << "Please enter another letter: "; // 6th letter
						cin >> x;								 //6th letter

						if (x == 'd' || x == 'D')
						{											 // 6th letter checked
							cout << "Please enter another letter: "; //7th letter
							cin >> x;								 // 7th letter entered

							if (x == 'o' || x == 'O')
							{											 //7th checked
							loopy:										 //A loop location is set
								cout << "Please enter another letter: "; // the looped letter is asked after "Ricardo" is entered.
								cin >> x;								 // user enters any letter.

								if (x == 'o' || x == 'O')
								{				// letter user entered is checked.
									goto loopy; // if the user enters 'o', then the program sends the next location to the loop location which is in line 41.
									return 0;
								}

								if (x == '*')
								{ //this is set here so the code can finally end. If a user wishes to stop they will enter '*'.
									cout << endl;
									cout << "String has been accepted..." << endl; // once the program recongizes the user enters * at this point, will print out string accepted.
								}

								else
								{ // This else statement is for the * character.
									cout << "String has been denied";
									return 0;
								}
							}
							else
							{ // for the 7th letter, which is o/O
								cout << "String is denied. Invalid 7th letter";
								return 0;
							}
						}
						else
						{ // for the 6th letter, which is d/D
							cout << "String is denied. Invalid 6th letter";
							return 0;
						}
					}
					else
					{ // for the fifth letter, which is r/R
						cout << "String is denied. Invalid 5th letter";
						return 0;
					}
				}
				else
				{ // for the fourth letter, which is a/A
					cout << "String is denied. Invalid 4th letter";
					return 0;
				}
			}
			else
			{ // for the 3rd letter, which is c/C
				cout << "String is denied. Invalid 3rd letter";
				return 0;
			}
		}
		else
		{ // for the second letter, which is i/I
			cout << "String is denied. Invalid 2nd letter";
			return 0;
		}
	}
	else
	{ // for the 1st letter, which is r/R
		cout << "String is denied. Invalid 1st letter";
		return 0;
	}

	return 0;
}
