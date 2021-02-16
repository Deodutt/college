#Ricardo Deodutt
import sys

def ReadFile(FileName):	#This function reads a file using an inputed file name.
	Input = ''
	File = open(FileName, "r")
	for Line in File:
		Input += Line
	return Input

def GetInput():#Gets input through whatever method and returns a string type
	if len(sys.argv) == 2:	#In the case the user passes a command line argument.
		if sys.argv[1].endswith('.txt'): #Checks if a file name was passes.
			try:
				return ReadFile(sys.argv[1])
			except:
				print('Can not open file','Exiting')
				input("Press Enter to continue...")
				raise SystemExit()
		else:
			return sys.argv[1]	#This reads the argument as a postfix expression.
	else:
		print('\n\nNo string or file argument passed')
		FileChoice = input('Do you want to enter a file name? Y/N ')
		if len(FileChoice) > 0 and FileChoice[0].lower() == 'y':
			try:
				return ReadFile(input('Enter file name(has to be a .txt file): '))
			except:
				print('Failed to open file','Exiting')
				input("Press Enter to continue...")
				raise SystemExit()
		elif len(FileChoice) > 0 and FileChoice[0].lower() == 'n':
			ExpChoice = input('\n\nDo you want to enter a postfix expression? Y/N ')
			if len(ExpChoice) > 0 and ExpChoice[0].lower() == 'y':
				return input('Enter expression: ')
			elif len(ExpChoice) > 0 and ExpChoice[0].lower() == 'n':
				input("Program is exiting, press enter to continue...")
				raise SystemExit()
			else:
				input("Invalid input program is exiting, press enter to continue...")
				raise SystemExit()
		else:
			input("Invalid input program is exiting, press enter to continue...")
			raise SystemExit()

class Is():#Character identification class. Identies the inputed characters.
	CharacterSets = []
	Letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M',
			   'N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
			   'a','b','c','d','e','f','g','h','i','j','k','l','m',
			   'n','o','p','q','r','s','t','u','v','w','x','y','z']
	Digits = ['0','1','2','3','4','5','6','7','8','9']
	Operators = ['+','-','*','/']
	Decpts = ['.']
	Delims = ['_']

	def __init__(self):	#Initiilizes the character set list.
		self.CharacterSets = self.Letters+self.Digits+self.Operators+self.Decpts+self.Delims

	def IsIn(self,Set,Input):#Checks if inputed character is in a character set
		if Input in Set:
			return True
		return False

	def Letter(self,Input):#Checks if Input is a letter
		return self.IsIn(self.Letters,Input)

	def Digit(self,Input):#Checks if Input is a digit
		return self.IsIn(self.Digits,Input)

	def Operator(self,Input):#Checks if Input is a operators
		return self.IsIn(self.Operators,Input)

	def Decpt(self,Input):#Checks if Input is a decimal point
		return self.IsIn(self.Decpts,Input)

	def Delim(self,Input):#Checks if Input is a delimiter
		return self.IsIn(self.Delims,Input)

	def CharacterSet(self,Input):#Checks if Input is in character set
		return self.IsIn(self.CharacterSets,Input)

class StatsTracker():	#Keeps track of all lexemes and tokens
	Lexemes = []
	Tokens = []
	Is = None

	def __init__(self):	#initilizes the "is" class.
		self.Is = Is()
		
	def Add(self,Lexeme,Token): #Pairs the lexeme and token using indexes of the lists.
		self.Lexemes.append(Lexeme)
		self.Tokens.append(Token)

	def AddConst(self,Input): #Adds a constant
		self.Add(Input,'Constant')

	def AddVariable(self,Input): #Adds a variable
		self.Add(Input,'Variable')

	def AddDecpt(self,Input): #Adds a decimal point
		if self.Is.Decpt(Input):
			self.Add(Input,'Decimal Point')

	def AddOperator(self,Input): #Adds a operator. Specifies the type of operator.
		if self.Is.Operator(Input):
			if Input == '+':
				self.Add(Input,'Addition Operator')
			elif Input == '-':
				self.Add(Input,'Subtraction Operator')
			elif Input == '*':
				self.Add(Input,'Multiplication Operator')
			elif Input == '/':
				self.Add(Input,'Division Operator')
			else:
				self.Add(Input,'Operator')

	def AddDelim(self,Input): #Adds a delimiter
		if self.Is.Delim(Input):
			self.Add(Input,'Delimiter')

	def Print(self): # Prints the lexemes and tokens pair into a table.
		Break = '-------------------------------------------------'
		print(Break)
		print('|    Lexemes\t|\tTokens\t\t\t|')
		print(Break)
		Offset = ''
		for i in range(0,len(self.Lexemes)):
			if len(str(self.Tokens[i])) > 14:
				Offset = '\t'
			else:
				Offset = '\t\t'
			print('|\t'+str(self.Lexemes[i])+'\t|\t'+str(self.Tokens[i])+Offset+'|')
			print(Break)

class Scanner(): #Scanner class
	InputAlphabet = []#Defined during init and is all accepted characters
	Is = None#Defined during init and is the class for input character checking
	Stats = None#Defined during int and is thec class for tracking lexemes and tokens
	Buffer = ''
	Type = None
	Decpt = False

	def __init__(self,Input): #Initiilizes the is class, stat tracking class, and starts the scanner.
		self.Is = Is()
		self.Stats = StatsTracker()
		self.Scan(Input)

	def IsOutofInput(self,Input):#Checks if input is empty
		if len(Input) == 0:
			return True
		return False

	def SliceFirstOff(self,Input): #Takes in a string and removes first character and retruns the rest.
		return Input[1:]

	def Scan(self,Input): #This scans the expression and recursivesly calls itself until it runs out of inputs.
		#This function reads the expression character by character
		if self.IsOutofInput(Input): #This checks if input is empty
			if self.Type == 'Digit': #checks if any digitis is in the buffer
				self.Stats.AddConst(self.Buffer)
			elif self.Type == 'Letter': #checks if any letters is in the buffer
				self.Stats.AddVariable(self.Buffer)
			self.Buffer = ''	
			self.Type = None	
			self.Decpt == False
			return	#exits the recurision
		elif not self.Is.CharacterSet(Input[0]): #checks if its not in a valid character.
			print('Invalid Character:',Input[0]) 
			self.Scan(self.SliceFirstOff(Input)) #recursively calls itself again and skips invalid.
		CurrentInput = Input[0] 
		if self.Is.Digit(CurrentInput): #checks if current input is a digit
			Type = 'Digit'
			if self.Type == None:
				self.Type = Type
				self.Buffer += CurrentInput
			elif self.Type == Type:
				self.Buffer += CurrentInput
			elif self.Type != Type:
				print('A delim is probably missing skiping:',CurrentInput)
		elif self.Is.Decpt(CurrentInput): #checks if current input is a decimal point
			if not self.Decpt:
				self.Buffer += CurrentInput
				self.Decpt = True
			else:
				print('Multiple decpt is found skiping:',CurrentInput)
		elif self.Is.Letter(CurrentInput): #checks if current input is a letter
			Type = 'Letter'
			if self.Type == None:
				self.Type = Type
				self.Buffer += CurrentInput
			elif self.Type == Type:
				self.Buffer += CurrentInput
			elif self.Type != Type:
				print('A delim is probably missing skiping:',CurrentInput)
		elif self.Is.Delim(CurrentInput): #checks if current input is a delimiter
			if self.Type == 'Digit':
				self.Stats.AddConst(self.Buffer)
			elif self.Type == 'Letter':
				self.Stats.AddVariable(self.Buffer)
			elif self.Decpt: #checks for single decimal points
				self.Stats.AddDecpt(self.Buffer)
			self.Buffer = ''
			self.Type = None
			self.Decpt = False
			self.Stats.AddDelim(CurrentInput)
		elif self.Is.Operator(CurrentInput): #checks if current input is a operator
			self.Stats.AddOperator(CurrentInput) 
		self.Scan(self.SliceFirstOff(Input)) #recursively calls itself after removing the current input.

def main():#main
	Input = GetInput() #Gets the input.
	ScannerObject = Scanner(Input) #creates the scanner object and passes the input.
	ScannerObject.Stats.Print() #calls the stat object in the scanner object to print its output.

if __name__ == "__main__":#runs main
	main()
