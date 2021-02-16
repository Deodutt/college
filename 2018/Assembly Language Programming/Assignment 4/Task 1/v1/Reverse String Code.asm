; Reversing a String (RevStr.asm)
; This program reverses a string.
INCLUDE Irvine32.inc
.386
.model flat,stdcall
.stack 4096
ExitProcess proto,dwExitCode:dword

.data
myString BYTE 20 DUP('0')
byteCount DWORD '?'
prompt BYTE "Enter your string here:", 0

.code
main proc

	mov edx, OFFSET prompt
	call WriteString

	mov edx, OFFSET myString
	mov ecx, SIZEOF myString + 1
	call ReadString

	mov byteCount, eax

	
; Push the name on the stack.

	mov	 ecx, byteCount
	mov	 esi, 0

L1:	movzx eax, myString[esi]	; get character
	push eax				; push on stack
	inc	 esi
	loop L1

; Pop the name from the stack in reverse
; and store it in the aName array.

	mov	 ecx, byteCount
	mov	 esi,0

L2:	pop  eax				; get character
	mov	 myString[esi], al		; store in string
	inc	 esi
	loop L2


	call WriteString
	
	Invoke ExitProcess,0
main endp
end main