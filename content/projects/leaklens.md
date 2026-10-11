---
title: "LeakLens"
weight: 60
---
**LeakLens** is a small desktop tool built with Rust and Slint that finds memory leaks in running .NET applications and explains them in plain language. Nothing has to be installed in the target app. It attaches through the same diagnostics channel that `dotnet-trace` and `dotnet-gcdump` use.

- **Is there a leak?** Watches the managed heap after each GC and gives a verdict (stable, growing or likely leak). It also tells managed leaks apart from native ones.
- **What is leaking?** Compares two heap snapshots and lists the types that piled up between them.
- **Why is it still alive?** Shows the reference chain that keeps an object in memory, e.g. `static field "All" → List<Order> → Order`.
- **Where is it created?** Samples allocations with call stacks and explains known pitfalls such as `Properties.Resources`, undisposed GDI+ objects, `HttpClient` per call, event handlers and `SystemEvents` subscriptions.
- **Investigate an action.** Repeat something like opening and closing a window, and LeakLens reports what survives every repetition.

Supports .NET Core 3.1+ / .NET 5+ on Linux and Windows, and .NET Framework 4.x on Windows via ETW.
