INCLUDE Irvine32.inc
.386
.model flat,stdcall
.stack 4096
ExitProcess proto,dwExitCode:dword


.data
buffer BYTE 1000 DUP('0')
byteCount DWORD ?
prompt1 BYTE "Input a string: ", 0
prompt2 BYTE "Uppercase string: ", 0
myString DWORD ?


.code
main proc

	mov edx, OFFSET prompt1
	call WriteString					; prompt: ask user to input a string


	mov edx, OFFSET buffer				; you input ur string in this part
	mov ecx, SIZEOF buffer
	call ReadString
	mov byteCount, eax



	mov edx, OFFSET prompt2
	call WriteString					; prompt: setting up to display the user's string in uppercase form.



	INVOKE Str_ucase, ADDR buffer		;Information obtained from page 363. This basically converts a string to all uppercase characters.
	mov edx, OFFSET buffer
	call WriteString



	invoke ExitProcess,0
main endp
end main