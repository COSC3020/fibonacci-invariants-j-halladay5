[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/rzkZS2Jf)
# Fibonacci Invariants

Recall the definition of the Fibonacci series: the first number is 0, the second
1, and each subsequent number is the sum of the two numbers preceding it.
Implement a function that computes the Fibonacci numbers recursively, storing
the results in an array.

For example, the return value of `fib(7)` is the following array:

| index |  0  |  1  |  2  |  3  |  4  |  5  |  6  |  7  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- |
| value |  0  |  1  |  1  |  2  |  3  |  5  |  8  |  13 |

Add your code in `code.js`. Test your new function; I've provided some basic
testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

## Invariant

What is a good invariant for your recursive implementation of `fib()`
i.e. something that is always true at the beginning of the recursive call?

Hint: Think about what the "state of the world" is here and what you can say
about it at the start of each recursive call. Your invariant must say something
about the current recursive call.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. You do not need to prove that the invariant is correct. Add
your answer to this markdown file.

Invariant:
A good invarient for fib() that is true at the beginning of every recursive call is that fibNums has n-1 fibonacci numbers. At recursive call where n = 2, fibNums has all the elements up to [n-1]. The length of the array
is n. So at n = 3, fibNums[n] has not been calculated yet, but fibNums[n-1] or fibNums[2] has. When the recursion finishes, fibNums will now have the fibonacci numbers up to n. The last element before it finishes and returns
to the previous call, is fibNums[n]. For example for n = 4, fibNums = [0,1,1,2]. fibNums[n-1] (fibNums[3]) is 2. The 4th index has not yet been calculated.  
