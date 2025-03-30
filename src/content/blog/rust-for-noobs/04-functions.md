---
title: "Functions"
desc: "<p>This tutorial goes in depth about functions in Rust</p>"
date: "2024-03-26"
category: "rust-for-noobs"
slug: "04-functions"
author: "Anant Narayan"
---

In Part - 2 of this guide, we saw how to create variables, make them mutable, and then mutate them. We also saw how shadowing works in Rust. In this part we'll look at function definitions and how to call them.

## Functions
In the first part, I showed you how a function is declared. To declare a function, we use the `fn` keyword, followed by the function name and a pair of brackets inside which we can pass arguments. At the end, we also need to add a pair of curly braces inside which we'll define the code that needs to run when the function is called.

Let's write a function to find the area of a rectangle given its length and breadth. First we'll create a function named `get_area` like this:
```rust
fn get_area() {
    // get area
}
```

Now we know that the area of a rectangle is `l x b` where `l` is the length and `b` is the breadth. Lets implement this in our code. Modify it like so:
```rust
fn get_area() {
    let length = 14;
    let breadth = 6;
    let area = length * breadth;
    println!("{}", area);
}
```
Now if we run our code, it won't print anything. That's 'cause we haven't called this function, we've only defined it. To call it, we can just put the function name and then pair of brackets. So lets call this function from our `main` function like this:
```rust
fn main() {
    get_area();
}
```

Now if we run this code, then it'll print the area of our rectangle. Before moving forward, we need to look at something quite important in programming, **comments**. In a previous code block, I had written what the function should do before writing the actual logic. This is the code I'm talking about:
```rust
fn get_area() {
    // get area
}
```
In Rust, you can create comments by adding `//` (two forward slashes) before your text, like in the above code block. You can also add block comments by putting `/*`, then writing your text and at the end putting `*/`, like this:
```rust
fn get_area() {
    /*
        Function to get the area of a rectangle.
    */
}
```

Enough mucking around, lets get back to writing functions! So now we wrote the logic to get the area of rectangle and put it in a function which we can reuse. But this function, right now is pretty useless, because we have defined the length and breadth in our function, which we cannot change without changing the code in our function. What we ideally want is that we have to be able to pass the values which we want and the function should return the area of those values.

We can do this using **function arguments**, which we pass to the function when we call it. We can define the arugments inside the pair of brackets in our function definition, next to the function name. For our `get_area` function, we need to pass a `length` argument of type `i32` and also a `breadth` argument of the same type. Lets modify our function:
```rust
fn get_area(length: i32, breadth: i32) {
    let area = length * breadth;
    println!("{}", area);
}
```
Now we can pass these arguments to the function when we call it from the `main` function, like this:
```rust
fn main() {
    get_area(12, 4);
}
```

Great! Now we can pass in our required dimensions and the function will correctly print the area. But most of the time, we don't want to print the output of our function. Instead, we probably want to return that output so that we can use it later. To do that we can ***return*** that output from our function. To return the output, we need to define the type of the output when we define the function. The ideology is mostly the same but there are some syntax differences. In C/C++, for instance, you would define the return type like this:
```c
int get_area(...) {}
```
In Rust, we can do the same thing by using the `->` operator after the brackets, and then defining the output type. This is how we would modify out `get_area` function:
```rust
fn get_area(length: i32, breadth: i32) -> i32 {
    let area = length * breadth;
}
```
This tells the Rust compiler that the function will return a value of type `i32`. Now this alone won't return anything. We need to use the `return` keyword to actually return the value. So put this at the end of our function:
```rust
return area
```
Another nifty trick is that, you can just do the calculation and **not** put a semicolon at the end, like this:
```rust
fn get_area(length: i32, breadth: i32) -> i32 {
    length * breadth
}
```
This will automatically return the result. Now we can use this function to set the value of a variable to the area of a given rectangle. Modify the `main` function like so:
```rust
fn main() {
    let area = get_area(24, 12);
    println!("{}", area);
}
```
That's the basics of functions in Rust. There are a lot more stuff to learn but we'll learn about them extensively in the coming parts of this guide. In the next part, I'll talk about control flow statements. `:wq`
