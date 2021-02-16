#include <iostream>
#include <stdio.h>      /* printf, scanf, puts, NULL */
#include <stdlib.h>     /* srand, rand */
#include <time.h> 
#include <string>
using namespace std;

int main(){
	
	string typerequest;
	srand (time(NULL));
	
	int tempWeather = (rand() % 3) + 1;
	string tempWeatherREAL;
	
	
	if (tempWeather == 1)
		{
		tempWeatherREAL = "sunny";
		}
	else if (tempWeather == 2)
		{
		tempWeatherREAL = "rainy";
		}
	else if (tempWeather == 3)
		{
		tempWeatherREAL = "snowy";
		}
	else if (tempWeather == 4)
		{
		tempWeatherREAL = "foggy";
		}
	else if (tempWeather == 5)
		{
		tempWeatherREAL = "windy";
		}

	
	
	
	cout <<"Welecome to healthy lifestyle worldwide!" << endl;
	
	cout << endl <<"What would you like to know?\n \n1 = Blood pressure \n2 = Accelerometer(Foot step tracker) \n3 = Heart-rate monitor \n4 = Weather (GPS needed) \n5 = Thermometer \n6 = UV Radaition" << endl;
			cout << endl << "Selection: " ;
			getline (cin, typerequest);
	
	if (typerequest == "1")
		{
            	cout << "Your blood pressure is " << rand() % 100 + 92 << endl;
		}
	else if (typerequest == "2")
		{
            	cout << "You have walked about " << rand() % 5000 + 2000 << " steps today"<<endl;
		}	
	else if (typerequest == "3")
		{
            	cout << "Your heart rate is " << rand()%40+60 << " beats per minute"<<endl;
		}		
	else if (typerequest == "4")
		{

            	cout << "The weather today is " << tempWeatherREAL <<endl;
		}
	else if (typerequest == "5")
		{
            	cout << "Your body temperature is " << rand()%4+97 << "." << rand()%10 -1 << " degrees fahrenheit"<<endl;
		}
	else if (typerequest == "6")
		{
            	cout << "Your UV level is " << rand()%10 << " UV index"<<endl;
		}
	
}
