// Ricardo Deodutt
#include <iostream>
#include <stack>

using namespace std;

int main()
{
	char x;
	stack<int> s;
	s.push(0); // basic initlize. The stack starts with a 0 in it.

	cout << "Please enter a character: "; // it can either be a or b.
	cin >> x;

	//pushdown part
	if (x == 'a')
	{
		s.push(1); // Whenever a user enters 'a' then 1 will be pushed onto the stack.

		while (x == 'a')
		{ // Simple loop to allow the user to enter multiple 'a's
			cout << "Please enter a character: ";
			cin >> x;

			if (x == 'a')
			{
				s.push(1);
			}

		} // while statement

		if (x == 'b')
		{			 // whenever a user enters 'b' after the user enters'a'
			s.pop(); // whenever a user enters 'b' then the top number in the stack will be popped.
		}

		while (x == 'b')
		{ // Simple loop to allow the user to enter multiple 'b's
			cout << "Please enter a character: ";
			cin >> x;

			if (x == 'b')
			{

				if (s.empty())
				{																 // this is put here because there is too many 'b's then the stack will be empty and the string will fail.
					cout << "Error Stack Empty. String is empty. Too Many 'b'."; // if the starting stack number is popped, then the program cant check if there is an even amount of a's and b's.
					return 0;
				}

				s.pop();
			}

			else if (x == 'a')
			{ // cannot have a string such as 'aba'. Once a b has been entered, if an A is enetered it will be sent to trap state.
				cout << "String does not follow the language and has been denied.\n";
				return 0;
			}
		}

		if (x == '*')
		{ // 1st b

			if (s.empty())
			{ // If the stack is empty, this means there was too many b's.
				cout << "Error Stack Empty. String is empty. Too Many 'b'.";
				return 0;
			}

			if (s.top() == 0)
			{ // This check if the top of the stack is 0.If its 0, then there is an even amount of a's and b's.
				cout << "String has been accepted...\n";
				return 0;
			}

			else
			{
				cout << "String does not follow the language and has been denied.\n";
				return 0;
			}
		}
	}

	// This follows a regular DFA. This accepts b or bb.
	// BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB

	else if (x == 'b')
	{ // 1st b

		cout << "Please enter a character: ";
		cin >> x;

		if (x == '*')
		{ // 1st b
			cout << "String has been accepted...\n";
			return 0;
		}

		else if (x == 'b')
		{ // 2nd b
			cout << "Please enter a character: ";
			cin >> x;

			if (x == '*')
			{ // 2nd b
				cout << "String has been accepted...\n";
				return 0;
			}

			if (x == 'b')
			{ // 3rd b (String Denied)
				cout << "String Denied. 3 'b's are not accepted.'";
				return 0;
			}
		}
		else
		{
			cout << "String does not follow the language and has been denied.\n";
			return 0;
		}

		// BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB

		cout << endl;
		return 0;
	}
}
