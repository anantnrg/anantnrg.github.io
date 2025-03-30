---
title: "Using Cargo"
desc: "<p>We'll see what Cargo is and how to use it. We'll also see why its so useful and powerful.</p>"
date: "2024-03-26"
category: "rust-for-noobs"
slug: "02-using-cargo"
author: "Anant Narayan"
---

In the last part of this series, we created a hello world program. But we had to manually create the file, compile it and then run it. This can become really cumbersome when working on bigger projects. Fortunately, Cargo exists just for that, to make our lives easier.

## Using Cargo!

First we need to create a new Cargo project. `cd` into the directory where you want to create your project and then run the following command:
```sh
cargo new hello_world
```

Here `hello_world` is the name of your project. Rust uses the `snake_case` for project names. You could theoretically use other cases but Cargo will warn you and its generally a good idea to stick to the standards of the language. Now `cd` into the newly created directory and open it up in your favorite text editor. I use Zed but you could use VS Code. The folder will have this structure:
```text
.
├── Cargo.toml
└── src
   └── main.rs
```
Now you can compile and run your program using:
```sh
cargo run
```

If everything went according to plan, then it should give the same output as last time. See how much easier it is!?


## Decoding 'Hello World!'
If you've been following so far, you should be in a folder named `hello_world` (or whatever else you named it). It should have the following structure:
```blah
.
├── Cargo.toml
└── src
   └── main.rs
```
Now open up `src/main.rs` in your favorite text editor. It should look like this:
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
