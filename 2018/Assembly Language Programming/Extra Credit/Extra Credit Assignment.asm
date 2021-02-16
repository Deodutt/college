; Program to check if the value in an array is divisible by 10
; Program should count the number of values that is divisible by 10.

INCLUDE Irvine32.inc
.386
.model flat,stdcall
.stack 4096
ExitProcess proto,dwExitCode:dword

.data
MyOne WORD 1100h, 2202h, 3F30h, 4A05h, 5C20h, 0F370h, 0A9Ah
prompt BYTE "The number of values divisible by 10 in MyOne is: ", 0
DivisibleCounter DWORD ?

.code
main proc

	mov eax, 0 ;clear eax register
	mov ecx, LENGTHOF MyOne ;set loop counter to how many values are in MyOne
	mov esi, 0 ; sets esi to 0 so the first digit pushed will be 1100h

L1:
	push MyOne[esi]	;pushes first digit on to stack.
	add esi, 2	;increments esi to next value in MyOne because word (2).
	loop L1	;loops until the last value 0A9AH is on the top of the stack


	mov ebx, 0 ;clears ebx register. This will be used as the divisor counter
	mov ecx, LENGTHOF MyOne	;sets loop counter to how many valeus in MyOne
	mov esi, 0

L2:
	mov edx,0	;clears edx register because when you divide the remainder is stored in DX
	pop ax		;pops the first value on stack into EAX.
	mov ebx, 0Ah
	div ebx


	cmp dx,0
	jne next
	inc esi ; this register is used to count how many values are divisible by 10.

next:
	loop L2


	mov DivisibleCounter, esi ; this moves the number of values divisible by 10 into an varible called DivisibleCounter

	mov edx, OFFSET prompt ; this outputs the prompt in windows console. The number of values divisible by 10 in MyOne is:
	call WriteString


	mov eax, DivisibleCounter	;This moves the number of values divisible by 10 into EAX
	call WriteDec	;This writes the value in eax(number of values divisible by 10 in MyOne) into the windows console.
	call Crlf ;line break
	call Crlf ;line break

	Invoke ExitProcess,0
main endp
end main
