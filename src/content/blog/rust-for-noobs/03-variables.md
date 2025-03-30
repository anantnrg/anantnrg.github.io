---
title: "Variables"
desc: "<p>In this tutorial, we'll learn about variables in Rust!</p>"
date: "2024-03-26"
category: "rust-for-noobs"
slug: "03-variables"
author: "Anant Narayan"
---

In the last part, we decoded our hello world program. In this tutorial, we'll learn a bit about **variables**.

## Variables

Be it math or programming, one of the first things you learn is to declare a variable and that's exactly what we're going to do! Variables, in Rust, can be defined using the `let` keyword. For example, if you want to create a variable named `x` and initialize it to `0`, then you do:
```rust
let x = 0;
```
Now lets try printing this variable. To do that in Rust, we can use the same `println!` macro with a few changes:
```rust
println!("{}", x);
```
Here, we can see that we've put a pair of curly braces inside the double quotes and then passed the variable as an argument. What we're doing here is **formatting** the string. This is pretty similar to what you do in Python, so if you've ever written a program in Python, you'll be familiar with this. We'll learn about this in detail but for now, just modify the code like this and then run it. It should print `0` in the terminal. Here's the whole code for reference:
```rust
fn main() {
    let x = 0;
    println!("{}", 0);
}
```
Now, we can declare a variable, but it'd be great if we could change it, right? Well, lets try doing that. After you declare the variable, put `x = 1;` and then try running the code. It won't compile and will give this output:
```
error[E0384]: cannot assign twice to immutable variable `x`
 --> src/main.rs:3:2
  |
2 |     let x = 0;
  |         -
  |         |
  |         first assignment to `x`
  |         help: consider making this binding mutable: `mut x`
3 |     x = 1;
  |     ^^^^^ cannot assign twice to immutable variable
```

This error occurs because any variable in Rust is **immutable** by default, meaning that they are constants and they're value cannot be changed after they've been assigned. If we want to change the value of this variable, i.e, **mutate** the variable, then we need to use the `mut` keyword. This basically tells the Rust compiler that this variable is **mutable**. So to make the `x` variable mutable, put `mut` after the `let` keyword, like so:
```rust
let mut x = 0;
```
Now try running the code again. It should work this time and it'll print `1` to the terminal.

Sometimes we don't know what value to initialize the variable to or we don't want to initialize it to a default value. Well, thats simple enough, just remove the `= 0` part, right? Well not quite. As I said before, Rust has a strict type system, meaning you can't just make a variable like you could in Python. You need to tell the Rust compiler what type of variable you want it to be. But then, you might ask, *"we didn't set any specific type when we declared `x` the first time, did we?"*, and you'd be partially right.

Yes, we didn't set a hard coded type, but since we initialized it to a value, i.e, `0` the Rust compiler inferred the type to be an integer. When we removed the initial value, the Rust compiler doesn't know the type of the `x` variable. It could be a string, or an array of strings, or an integer, a float, it could be *anything*! That's why we need to specify the type when we create the variable. Some basic types you should know in Rust are:

1. **Integers**: In Rust, there are two primary categories of integers: ***signed*** and ***unsigned***. ***Signed*** integers can represent both positive and negative numbers, whereas ***unsigned*** integers can only represent non-negative (positive) numbers. These integer types come in various sizes, measured in **bits**, such as `i8`, `i16`, `i32`, `i64`, and so on for signed integers, and `u8`, `u16`, `u32`, `u64`, and so forth for unsigned integers.

2. **Floats**: Floats are used for representing decimal values, including numbers with a decimal point. Similar to integers, floats also come in various sizes, measured in **bits**. Rust provides float types like `f32` and `f64` to handle different levels of precision, where `f32` is a 32-bit floating-point number and `f64` is a 64-bit floating-point number.

3. **Strings**: There are two types of strings in Rust, `String` and `&str`. `String` is a dynamic and mutable data type used to store sequences of characters. It can grow or shrink as needed, allowing you to modify its content by adding or removing characters. On the other hand, `&str` represents a string slice, essentially a reference to a sequence of characters, often stored in another data structure like a `String` or a static string. Unlike `String`, `&str` is static and immutable, primarily used for reading and processing text without altering the original data. So, `String` is for flexible, mutable text, while `&str` is for efficient and unchanging text references.

4. **Booleans**: Booleans are one of the primitive types that are found in any language. A boolean represents either ***`true`*** or ***`false`***. In Rust, booleans have the `bool` type.

5. **Vectors**: Vectors in Rust are akin to **arrays** in other programming languages. A vector is a dynamic data structure capable of storing a list of elements of the same type, such as a vector of integers or a vector of strings. They are declared using the `Vec` keyword. For instance, to create a vector of integers, you can write `Vec<i32>`, which generates a vector containing 32-bit signed integers. Vectors are mutable, allowing you to add, remove, or modify values within them.


Okay, that was a lot of info. Now lets see how we can set the type of a variable. This is almost the same as in other languages, you put a colon next to the variable name and then put the type you want. For example,
```rust
let x: i32;
```

If you modify our old code like this and then run it, it should compile without any errors. This is the whole code up until now, for reference:
```rust
fn main() {
    let x: i32;
    x = 1;
    println!("{}", x);
}
```

We can also perform numerical operations on these variables. For instance, we can multiply `x` by 4 and then print the value. Take a look at this code:
```rust
fn main() {
    let x: i32 = 4;
    let x = x * 4;
    println!("{}", x);
}
```

If you try running it, you'll see that it returns `16`. You can also try adding two numbers, like this:
```rust
fn main() {
    let x: i32 = 16;
    let x = x + 4;
    println!("{}", x);
}
```

or subtracting them:
```rust
fn main() {
    let x: i32 = 14;
    let x = x - 4;
    println!("{}", x);
}
```

But you maybe wondering, *"we're declaring `x` two times, how does the compiler return the correct value each time?"*. This happens due something know as ***shadowing***. In Rust, if you declare a new variable with the same name as a previous variable, then the old variable becomes ***shadowed*** by the new variable. It means that the second variable is what the compiler sees when you use the name of the variable. In effect, the second variable overshadows the first, taking any uses of the variable name to itself until either it itself is shadowed or the scope ends.

That should be everything you need to know to get started with using variables in Rust. In the next section we'll look at functions. `:wq`
