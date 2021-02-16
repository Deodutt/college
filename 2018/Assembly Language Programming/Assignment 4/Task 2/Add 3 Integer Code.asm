; Reversing a String (RevStr.asm)
; This program reverses a string.
INCLUDE Irvine32.inc
.386
.model flat,stdcall
.stack 4096
ExitProcess proto,dwExitCode:dword


.data

prompt1 BYTE "Input Integer 1:  ", 0
prompt2 BYTE "Input Integer 2:  ", 0
prompt3 BYTE "Input Integer 3:  ", 0
prompt4 BYTE "The Sum is: ", 0

int1 DWORD ?
int2 DWORD ?
int3 DWORD ?
sum DWORD ?


.code



findSum PROC

	mov eax, int1
	add eax, int2
	add eax, int3
	mov sum, eax


	ret
findSum ENDP 





main proc

	mov edx, OFFSET prompt1
	call WriteString
	call ReadInt
	mov int1, eax
	and eax, 0


	mov edx, OFFSET prompt2
	call WriteString
	call ReadInt
	mov int2, eax
	and eax, 0


	mov edx, OFFSET prompt3
	call WriteString
	call ReadInt
	mov int3, eax
	and eax, 0

	call findSum

	mov edx, OFFSET prompt4
	call WriteString

	mov eax, sum
	call WriteInt


	
	Invoke ExitProcess,0
main endp
end main