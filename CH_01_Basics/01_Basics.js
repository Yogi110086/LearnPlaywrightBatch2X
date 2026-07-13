console.log("Hello World");

let x=10;
console.log(x);




/*
How Javascript Engine Works?
Step 1: Lexical Analysis - Tokanizing
let(Keyword) 
x(Identifier)
=(Operator)
10(Numeric Literal)
;(Punctuation)
Console(Identifier)
.  (punctuation)
log(Identifier)
(  (punctuation)
a  (Identifier)
)  (punctuation)


Step 2: Parsing(Syntax Analysis) - AST(Abstract Syntax Tree)
Tokens are organizing in a managerial structure called AST(Abstract Syntax Tree). 
The AST is a tree representation of the syntactic structure of the source code. 
Each node of the tree denotes a construct occurring in the source code.

Step 3: Create AST(Abstract Syntax Tree) - Code Generation
The Tokens are converted into a structured tree representation the logic.

Step 4: Interpreter (Igination) Convert AST to Bytecode
Igniation create lightweight Bytecode from AST and starts executin immediately.

Step 5: Execution - Run the Bytecode

Step 6: Profilier + JIT Optimization - Hot Code Detection
Since this code is very small and not repeated, the profier sees no benefit, so TurboFan (JIT Compiler) does not optimize.
Profiler is a tool which detects the hot code in the program.
JIT-> Just In Time Compiler is a compiler which compiles the code at runtime.
Hot Code- A code which is need optimization.
TurboFan is a JIT Compiler which optimizes the code which is repeated and hot code.
Compiler convert or optimize the code of the hotcode into the Bytecode.

Step 7: Garbage Collection - Memory Management
Automatically frees memory by removing unused or unreachable objects. Prevents memory leaks and keeps performance efficient.

Step 8: Machine Code Execution - Final Execution
The Final optimized code is executed directly by the CPU. This gives the best performance at runtime.


*/