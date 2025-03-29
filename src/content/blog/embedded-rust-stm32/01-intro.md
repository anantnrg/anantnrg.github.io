---
title: "Introduction to Embedded Rust & Bare-Metal Programming"
desc: "<p>How we code microcontrollers with Rust, why <code>no_std</code> exists, and how we tell the STM32 what to do.</p>"
date: "2024-03-26"
category: "embedded-rust-stm32"
slug: "01-intro"
author: "Anant Narayan"
---

In this tutorial, we'll see why **Rust** is a good choice for embedded programming, why `no_std` exists, and how we talk to the hardware without an OS using **Hardware Abstraction Layers (HALs)** and **Peripheral Access Crates (PACs).**

## Why Rust?

Before we start, this series assumes you have some basic Rust experience. If not, check out my other Rust tutorial series: [link here].

Now that that’s out of the way, why should we even consider Rust for embedded programming?
In fact, Rust's strengths in user-level apps also make it a killer choice for embedded programming:

  1. **Memory-safety**: On a PC, memory leaks are annoying. On a microcontroller tho? They're **deadly**! In mission critical scenarios like in aircraft and military equipment, memory-leaks can be catastrophic. Garbage collection can work, but it's resource intensive. Rust solves both these problems with its **borrow-checker**, providing both **memory-safety** *and* **performance**.
  2. **Zero-cost abstractions**: Writing embedded code doesn't always have to be manually assigning and re-assigning each bit. In Rust, high-level features like **function calls, iterators, and smart-pointers** don't have *any* additional over-head. Thus, it gives us **Python-like readability** with **C-like performance**
  3. **No data-races**: **Data-races** are one of the biggest nightmares in mission critical systems. In C/C++, you gotta remember to manually lock resources before modifying them. One mistake, and your program is **toast!** Rust enforces these rules at compile time, meaning, once compiled, you're practically guaranteed to be free of data races.

For starters, Rust is **memory-safe**. Unlike a PC — where a bloated Electron app can hog memory and still have gigabytes to spare — microcontrollers survive on just a few dozen kilobytes of RAM. Memory leaks at this level can be catastrophic. Just imagine the software in an airplane crashing in-flight. Rust makes it easy to avoid exactly that scenario.

Second, Rust provides **zero-cost abstractions**. Sounds fancy, right? But what does it mean? Normally in other languages (*cough, cough* like Python), high-level features such as **function calls, iterators, smart pointers, dynamically-sized arrays, etc...** slow stuff down. But that ain't the case with Rust, because Rust **compiles away** unnecessary overhead, so you get the **readability** of Python, with the performance of raw C. It's like having a **dual-clutch automatic** — all the ease of an auto, but still shifts as fast as a pro with a manual.

Rust also prevents **data races**, which are one of the biggest nightmares in mission-critical C/C++ systems. For example, in C, you gotta manually lock variables (`mutex`, `volatile`, `semaphores`, etc...). One mistake, and your program is toast! In Rust, though, the borrow checker enforces these rules at compile time, so once your code compiles, you’re practically guaranteed to be free of data races.. In Rust, you can have only **one writer** at a time, but you can any number of **readers**.
