#include <iostream>
#include <ctime>
#include <cstdlib>
#include <fstream>
#include <string>
#include <sstream>

using namespace std;

void ClearFile()
{
	//Clears a already existing file
	ofstream OFile;
	OFile.open("Lab 4.txt", ios::out | ios::trunc);
	OFile.close();
}

void FileOutput(string Message)
{
	//Outputs to a file
	ofstream OFile;
	OFile.open("Lab 4.txt", ios::out | ios::app);
	OFile << Message << endl;
	OFile.close();
}

string InttoString(int Number)
{
	//Converts a integer to a string for ouputing to a file
	ostringstream Converter;
	Converter << Number;
	return Converter.str();
}

string DoubletoString(double Number)
{
	//Converts a double to a string for ouputing to a file
	ostringstream Converter;
	Converter << Number;
	return Converter.str();
}

void NumGenSeeder()
{
	// Seeds the Random Number Generator
	unsigned seed = time(0);
	srand(seed);
}

int RandomNumGen()
{
	//Returns a Random Number between -100 and 100
	return rand() % 201 - 100;
}

void RandomNumberGeneratorRangeTester(int Start, int End)
{
	//Tests the random generator to see the if the range of numbers is correct
	if (Start > End)
	{
		cout << "Range Tester Error" << endl;
		return;
	}
	int Rand = 0;
	int Trys = 1;
	for (int i = Start; i <= End; i++)
	{
		Rand = RandomNumGen();
		if (Rand == i)
		{
			cout << "Generated number: " << i << " on Try: " << Trys << endl;
			Trys = 1;
		}
		else if (Trys > 1000000)
		{
			cout << "Unable to generate: " << i << endl;
			Trys = 1;
		}
		else
		{
			Trys++;
			i--;
		}
	}
}

int StatisticS()
{
	int Random = 0;
	double sumN = 0;
	int CountN = 0;
	double StatN = 0;
	double sumP = 0;
	int CountP = 0;
	double StatP = 0;

	cout << "The Randomly generated numbers are" << endl
		 << endl;
	FileOutput("The Randomly generated numbers are");
	FileOutput("");
	for (int i = 0; i < 100; i++)
	{
		Random = RandomNumGen();
		cout << Random << endl;
		FileOutput(InttoString(Random));
		if (Random < 0)
		{
			sumN += Random;
			CountN++;
		}
		else if (Random > 0)
		{
			sumP += Random;
			CountP++;
		}
	}
	StatN = sumN / CountN;
	StatP = sumP / CountP;
	cout << endl;
	FileOutput("");
	cout << "The sum of all negative numbers is " << sumN << endl;
	FileOutput("The sum of all negative numbers is " + DoubletoString(sumN));
	cout << "There are " << CountN << " negative numbers" << endl;
	FileOutput("There are " + InttoString(CountN) + " negative numbers");
	cout << "The average of all negative numbers is " << StatN << endl;
	FileOutput("The average of all negative numbers is " + DoubletoString(StatN));
	cout << "The sum of all positive numbers is " << sumP << endl;
	FileOutput("The sum of all positive numbers is " + DoubletoString(sumP));
	cout << "There are " << CountP << " positive numbers" << endl;
	FileOutput("There are " + InttoString(CountP) + " positive numbers");
	cout << "The average of all positive numbers is " << StatP << endl;
	FileOutput("The average of all positive numbers is " + DoubletoString(StatP));
	cout << endl;
	return 0;
}

int main()
{
	//RandomNumberGeneratorRangeTester(-100, 100);
	ClearFile();
	NumGenSeeder();
	StatisticS();
	system("Pause");
}