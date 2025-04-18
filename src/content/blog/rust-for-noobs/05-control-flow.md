---
title: "Control Flow"
desc: "<p>This tutorial is about control flow statements in Rust, which include <code>if/else</code> statements, <code>for</code> & <code>while</code> loops, etc...</p>"
date: "2024-03-26"
category: "rust-for-noobs"
slug: "05-control-flow"
author: "Anant Narayan"
---

So far we've looked at variables and functions. In this part, we're going to be looking at a fundamental topic in programming, control flow statements!

## Control Flow Statements
Control flow statements in Rust allow you to control the execution flow of your code, making decisions, handling multiple cases, and creating loops.

### `if` statements
The `if` statement is used for conditional execution. It evaluates a boolean condition and executes a block of code if the condition is true. Here's an example:
```rust
let number = 5;

if number == 5 {
    println!("The number is 5!");
}
```

You could also add an `else` statement to do something if the condition is false:
```rust
let number = 5;

if number == 5 {
    println!("The number is 5!");
} else {
    println!("The number is not 5!");
}
```
If you want to check for multiple conditions, you can use `else if`:
```rust
let number = 5;

if number == 5 {
    println!("The number is 5!");
} else if number == 3 {
    println!("The number is 3!");
} else {
    println!("The number is not 5!");
}
```

> You can also use a `!=` to check if a value is **not equal**

### Infinite Loops
You can add an infinite loop by using the `loop` keyword, like this:
```rust
loop {
    println!("This prints forever!");
}
```
> To exit this loop, you need to kill your program by pressing <kbd>Ctrl</kbd> + <kbd>C</kbd>

If you want to break out of this loop, you can use the `break` keyword. You can also nest loops inside other loops. Infinite loops are useful for things like capturing user input, where you need to continously check if the user has provided any input.

### While Loops
While loops will perform a function until a certain condition is met. Take a look at this example:
```rust
let mut x = 0;

while x <= 10 {
    println!("{x}!");
    x += 1;
}
```

In this example, we declare a variable `x`, then we use a `while` loop to check it `x` is less that or equal to 10, and if satisfies this condition, we print the current number. Finally we add 1 to `x` so that this doesn't become an infinite loop. Like in for loops, we can use `!=` to execute a code until a value is not equal to another value. For example,
```rust
let mut x = 10;

while x != 0 {
    println!("{x}!");
    x -= 1;
}
```
This will print the numbers from 10 to 1 in descending order.

### For Loops
For loops are pretty self-explanatory. They iterate over items in a collection, a range or any iterable sequence. Take a look at this code:
```rust
let fruits = ["mango", "kiwi", "pear", "plum", "grapefruit", "banana"]

for fruit in fruits {
    println!("I ate a {fruit}!");
}
```

This will output:
```text
I ate a mango!
I ate a kiwi!
I ate a pear!
I ate a plum!
I ate a grapefruit!
I ate a banana!
```

You can also define a range using the `..` operator, like so:
```rust
for x in 1..5 {
    println!("The number is {x}");
}
```

That's pretty much everything about control flow statements in Rust. This was one of the more shorter parts of this guide so far. Of course there are many more concepts we need to cover, but I'll talk about them step-by-step. In the next part, we'll look at how to structure our project. `:wq`
