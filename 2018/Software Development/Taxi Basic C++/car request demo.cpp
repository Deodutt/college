#include <iostream>
#include <string> 
using namespace std;


int	requestride(){
int requestdriver;	
string typevehicle;

cout << endl <<"Which type of vehicle would you like?\n \n1 = SUV ($30) \n2 = Car Pool ($10) \n3 = Luxury ($1,000,000)" << endl;
			getline (cin, typevehicle);
            if (typevehicle == "1"){
            	cout << "You have chosen a SUV" << endl;
            				cout << endl <<"Thank you for using Ruber! Your card will be charged $30. You'r ride at your location soon.";
            	return 0;
			}
			
            else if (typevehicle == "2"){
            	cout << "You have chosen a Car Pool "<< endl;
            		cout << endl <<"Thank you for using Ruber! Your card will be charged $10. You'r ride at your location soon.";
            	return 0;
			}
			
            else if (typevehicle == "3"){
            	cout << "You have chosen a Luxury "<< endl;
            	cout << endl <<"Thank you for using Ruber! Your card will be charged $1,000,000. You'r ride at your location soon.";
            	return 0;
			}
			else {
				cout << "Invalid selection. Try again" << endl << endl;
				requestride();
				return 0;
			}
			
		
}

	int main(){
		requestride();
}
