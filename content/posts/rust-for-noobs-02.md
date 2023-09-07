---
title: "Rust For Noobs - 02"
date: 2023-09-05T4:30:00+05:30
author: "Anant Narayan"
showToc: true
TocOpen: false
draft: false
hidemeta: false
disableHLJS: false
disableShare: true
hideSummary: false
searchHidden: false
ShowBreadCrumbs: false
ShowPostNavLinks: true
ShowWordCount: true
UseHugoToc: true
ShowReadingTime: true
---

A complete guide to get started with Rust - Part 2

<!--more-->

In the last part of this guide, we saw how to install Rust and create a Hello World program. In this part we'll find out how it actually works and also learn about the syntax of Rust.

## Decoding 'Hello World!'
If you've followed the last part of this guide, you should be in a folder name `hello_world` (or whatever else you named it). It should have the following structure:
```blah
.
├── Cargo.toml
└── src
   └── main.rs
```
Now open up `main.rs` in your favourite text editor. It should look like this:
```rust
fn main() {
    println!("Hello World!");
}
```

Here we're declaring a function called `main` using the `fn` keyword. The `main` function MUST be present for the program to compile. Although if you're writing a library, you could have a `libs.rs` file with different functions inside. I'll get to that later. Now inside the `main` function, we can see a line that says:
```rust
println!("Hello World!")
```

Now if you already know other languages, then you'll think that this is a function call. But you'd be wrong, because this a **macro** call. Essentially, a **macro** in Rust, is a piece of code that generates another piece of code. It might seem complicated at first but when you're knee deep in a project, **macros** just might save you. I'll explain this in detail in the coming sections. 

We can change the text from "Hello World!" to something like "Hello, I'm a Rustacean!". Then save the file and run the program again using `cargo run`. It should print "Hello, I'm a Rustacean!" in the terminal! I'll explain how to manipulate and print more strings in the coming sections as we learn about the Rust syntax.

Now that we've decoded the "Hello World!" program, we can move on to the details of the Rust syntax. If you didn't understand what I've been saying, don't worry, 'cause I'll explain all the different keywords and what they do in detail. Starting with **variables**!

## Variables
Be it math or programming, one of the first things you learn is to declare a variable and that's exactly what we're going to do! Variables, in Rust, can be defined using the `let` keyword. For example, if you want to create a variable named `x` and initialize it to `0`, then you do:
```
let x = 0;
```
Now lets try printing this variable. To do that in Rust, we can use the same `println!` macro with a few changes:
```rust
println!("{}", x);
``` 
Here, we can see that we've put a pair of curly braces inside the double quotes and then passed the variable as an argument. What we're doing here is **formatting** the string. If you modify the code like this and then run it, it should print `0` in the terminal. Here's the whole code for reference:
```
fn main() {
    let x = 0;
    println!("{}", 0);
}
```
Now, its great we can declare a variable, but it'd be greate if we could change it, right? Well, lets try doing that. After you declare the variable, put `x = 1;` and then try running the code. It won't compile and will give this output:
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
```
let mut x = 0;
```
Now try running the code again. It should work this time and it'll print `1` to the terminal.