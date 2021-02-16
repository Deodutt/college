#include <iostream>
#include <cmath>
using namespace std;

int roots(double a, double b, double c, //function prototype
		  double &d, double &e, double &f, double &g);

int main()
{
	double a, b, c, d, e, f, g;
	cout << "Put values of a Quadratic Equation to find the roots.\n";
	cout << "Please enter value A.\n";
	cin >> a;
	while (a == 0)
	{
		cout << "The equation is not quadratic... Please enter another one.\n";
		return 1;
	} //if A = 0 then there is no roots. It's not quadratic.
	cout << "Please Input value B.\n";
	cin >> b;
	cout << "Please Input value C.\n";
	cin >> c;
	roots(a, b, c, d, e, f, g);
	cout << "The roots of the Equation are " << d << " + " << e << "i (imaginary) and " << f << " - " << g << "i (imaginary) \n";
	return 0;
}

int roots(double a, double b, double c, double &d, double &e, double &f, double &g)
{
	double discriminant = pow(b, 2) - 4 * a * c; // same thing as b2-4ac

	if (discriminant > 0)
	{
		d = (-b + sqrt(discriminant)) / (2 * a); // same thing as -b � v(b2 - 4ac)2a
		f = (-b - sqrt(discriminant)) / (2 * a);
	}
	else if (discriminant == 0)
	{
		d = f = (-b + sqrt(discriminant)) / (2 * a);
	}
	else
	{
		d = f = -b / (2 * a);
		e = g = sqrt(-discriminant) / (2 * a);
		return (a, b, c, d, e, f, g);
	}
}
