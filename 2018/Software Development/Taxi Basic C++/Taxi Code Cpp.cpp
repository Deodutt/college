// Ruber application demo c++
// Ricardo Deodutt

#include <iostream>
#include <string> 
using namespace std;


int logindemo(){
	string login;
	string username;
	string password;
	int loginAttempt = 0;
	

	cout << endl <<"Would you like to sign in? (Yes or No)" << endl;
    getline (cin, login);
	cout << endl;
		if (login[0] == 'y'|| login[0] == 'Y')
    {
		while (loginAttempt < 5)
   		 {
        	cout << "Please enter your user name: ";
			getline (cin, username);
			cout << "Please enter your user password: ";
			getline (cin, password);

        if (username == "test" && password == "test123")
        {
            cout << "Welcome to Ruger! You have successfully logged in.\n";
            break;
        }
        
        /*else if (username == "patrick" && password == "dunn")			// this is for other options. Need server to add.
        {
            cout << "Welcome Patrick!\n";
            break;
        }
        */
        
        else
        {
            cout << endl << "Invalid login attempt. Please try again.\n" << '\n';
            loginAttempt++;
        }
       

   		 }

    if (loginAttempt == 5)
    {
            cout << "Too many login attempts! The program will now terminate.";
            return 0;
    }

		cout << endl <<"Thanks for being a member!";
		cout << string(15, '\n');
		return 1; 
}
			else if (login[0] == 'n'|| login[0] == 'N'){
				cout << "If you can't sign in please go online at www.Ruber.com for troubleshooting" << endl;
				cout << "Otherwise thank you for using our app!" << endl;
				return 0;
			}
			
		else {
			cout << "Invalid request. Please try again"<< endl;
			return logindemo();
			
		}	
			
return 0;

}

	int	requestride(){
	int requestdriver;
	string typevehicle;
	string str; 
      
    cout << "Would you like to request a ride? (Yes or no)" << endl;
    getline (cin, str); 


	if (str[0] == 'y'|| str[0] == 'Y')
    {
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
		
			if (str[0] == 'n'|| str[0] == 'N'){
				return 0;
			}
			
	}	

//driver side of app
            /*cout << "Searching for avaialbe vehicles ";
            break;*/

int main (){
	
	cout << "Hello! Welcome to Ruber." << endl;
	cout << "Ruber is a transporation company that strives for customer satisfaction." << endl << endl;
	
	if (logindemo() != 0){
		requestride();
	}
	
}

