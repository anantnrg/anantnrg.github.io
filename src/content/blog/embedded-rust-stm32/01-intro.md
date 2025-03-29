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

  1. **Memory-safety**: On a PC, memory leaks are annoying. On a microcontroller tho? They're **fatal**! Rust’s **borrow checker prevents** leaks without **garbage collection**, keeping performance tight for mission-critical systems.
  2. **Zero-cost abstractions**: Writing embedded code doesn't always have to be manual bit-fiddling. Rust’s high-level features (**iterators, smart pointers**, etc.) add **zero overhead**, giving **Python-like readability** with **C-like performance**.
  3. **No data-races**: Concurrency in embedded systems is a minefield. In C/C++, forget a lock? **Boom!** — your system crashes. Rust enforces safety **at compile time**, so you **can’t** mess it up.
