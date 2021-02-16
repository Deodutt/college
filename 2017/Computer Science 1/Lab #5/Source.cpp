#include <iostream>
#include <limits>
using namespace std;

double getJudgeData(int judge)
{
	double score;

	cout << "Judge " << judge << " enter your score: ";
	cin >> score;

	while (score < 0.0 || score > 10.0)
	{
		cout << "The score must be between 0 and 10. Try again." << endl;
		cout << "\nJudge " << judge << " enter your score: ";
		if (!cin)
		{
			cin.clear();
			cin.ignore(numeric_limits<streamsize>::max(), '\n');
		}
		cin >> score;
	}
	return score;
}

double findHighest(double score1, double score2, double score3, double score4, double score5)
{

	double highest = score1;

	if (score2 > highest)
		highest = score2;
	if (score3 > highest)
		highest = score3;
	if (score4 > highest)
		highest = score4;
	if (score5 > highest)
		highest = score5;

	return highest;
}

double findLowest(double score1, double score2, double score3, double score4, double score5)
{

	double lowest = score1;

	if (score2 < lowest)
		lowest = score2;
	if (score3 < lowest)
		lowest = score3;
	if (score4 < lowest)
		lowest = score4;
	if (score5 < lowest)
		lowest = score5;
	return lowest;
}

double calcScore(double score1, double score2, double score3, double score4, double score5, double highest, double lowest)
{

	double total = score1 + score2 + score3 + score4 + score5;
	double average = (total - highest - lowest) / 3;
	return average;
}

int main()
{

	double score1, score2, score3, score4, score5;
	double lowest, highest;
	double average;

	score1 = getJudgeData(1);
	score2 = getJudgeData(2);
	score3 = getJudgeData(3);
	score4 = getJudgeData(4);
	score5 = getJudgeData(5);
	lowest = findLowest(score1, score2, score3, score4, score5);
	highest = findHighest(score1, score2, score3, score4, score5);
	average = calcScore(score1, score2, score3, score4, score5, highest, lowest);

	cout << "\nThe lowest is " << lowest << "." << endl;
	cout << "The highest is " << highest << "." << endl;
	cout << "\nThe average score is " << average << "." << endl;

	system("PAUSE");

	return 0;
}