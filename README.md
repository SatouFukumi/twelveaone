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
- Naming conventions : 
  - `CONSTANT` : constant-case should only be used on non-calculated or somewhat considered hard coded. The convention also recommend that from the depth of constant-case use, everything is constant.
    ```ts
    // example
    const date = new Date()
    const DATE = new Date('20-11-2005 00:00')

    const env = {
      SOMETHING: 'something',
      FOO: {
        bar: 'baz'
      }
    }
    env.newKey = 'new other value' // yes (read the convention carefully if you didn't get this)
    env.SOMETHING = 'other things' // no
    env.FOO = {} // no
    env.FOO.bar = 'foo' // no

    const CONSTANT = {
      foo: 'bar'
    }
    CONSTANT.foo = 'baz' // no
    ```

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

- ✅ The implementation for basic template level 2 of `tRpc` and `tailwindcss` is [here](https://github.com/SatouFukumi/twelveaone/tree/fbd9800f59ee3a38235534c565ba7795b39695c4).

<h2></h2> <!-- put the heading2 here just for the border -->

<div align="center" style="display: flex; width: 100%;">
  <span align="center" style="margin-inline: auto;">

  `With all my ❤️.`

  </span>
</div>
