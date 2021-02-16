; Reversing a String (RevStr.asm)
; This program reverses a string.
INCLUDE Irvine32.inc
.386
.model flat,stdcall
.stack 4096
ExitProcess proto,dwExitCode:dword

.data
myString BYTE 1000 DUP('0')	;the string you enter can be longer
byteCount DWORD '?'
promptYourString BYTE "Enter your string here: ", 0

.code
main proc

	mov eax,white  (blue * 16) ; white on blue
	call SetTextColor					;testing how to change colors

	;prompts user to enter the string
	mov edx, OFFSET promptYourString
	call WriteString
	
	;reads the user string from keyboard
	mov edx, OFFSET myString
	mov ecx, SIZEOF myString + 1
	call ReadString
	mov byteCount, eax

	;push the name on the stack.
	mov	 ecx, byteCount
	mov	 esi, 0

L1:	
	movzx eax, myString[esi]	; get character
	push eax				; push on stack
	inc	 esi
	loop L1

	; Pop the name from the stack in reverse
	; and store it in the aName array.
	mov	 ecx, byteCount
	mov	 esi,0

L2:	
	pop  eax				; get character
	mov	 myString[esi], al		; store in string
	inc	 esi
	loop L2



	call WriteString
	
	call Crlf ;displays a newline for aesthetic purposes. Info obtained from page 172 in textbook.

	mov eax,white (blue * 0) ; white on blue 
	call SetTextColor							;sets color back to default
	Invoke ExitProcess,0
main endp
end main
