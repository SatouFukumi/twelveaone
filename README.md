<div align="center">
  <h1 align="center">

    Twelve A One 🌟

  </h1>
</div>

`twelveaone` is a made-with-love fanpage for students of class 12A1. <br>
The class is located in [Vietnam, Gia Lai, Mang Yang, Kon Dong](https://www.google.com/maps/place/Tr%C6%B0%E1%BB%9Dng+THPT+Tr%E1%BA%A7n+H%C6%B0ng+%C4%90%E1%BA%A1o/@14.0451727,108.2570115,16z/data=!4m5!3m4!1s0x316ebb5a2745dd4d:0xbc885a29ebdd6c99!8m2!3d14.0454509!4d108.2525118?hl=vi-VN), and belongs to
[Tran Hung Dao high school](http://thpttranhungdao.gialai.edu.vn/).

<h2>🏗️ Developing conventions</h2>

- I don't use any kind of safe parse for environment variables, as I think they are essential.
- Use of `interface` and `type` :
  - `type` :
    - When defining an alias for **primitive** types (`string`, `boolean`, `number`, `...`).
      ```ts
      // example
      type MilliSec = number
      ```
    - When defining **tuple** types.
      ```ts
      // example
      type CustomHook<T> = [T, (value: T | ((prevVal: T) => T)) => void]
      ```
    - When defining **function** types.
      ```ts
      // example
      type Fn = () => void
      ```
    - When defining **union** types.
      ```ts
      // example
      type Union = 'foo' | 'bar'
      ```
    - When trying to overload **function(s)** in **object** types via **composition**.
    - When needing to take advantage of **mapped** types.
    - When defining **object**/**class** types.

  - `interface` : every other use that is not `type`'s.
    - When taking advantage of declaration merging
.
- Prefer to use `const function` instead of `traditional function`.
  ```ts
  // example
  const fn = () => { /** do something */ }
  ```

<h2>🪨 Milestones</h2>

- ✅ The implementation for basic template level 2 of `tRpc` and `tailwindcss` is [here](https://github.com/SatouFukumi/twelveaone/tree/21894532b9af2d649e5c042f9b1b80c8693dea1c).

<h2></h2> <!-- put the heading2 here just for the border -->

<div align="center" style="display: flex; width: 100%;">
  <span align="center" style="margin-inline: auto;">

  `With all my ❤️.`

  </span>
</div>
