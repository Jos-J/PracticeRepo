# PracticeRepo
Repo i use for Practicing my Coding Skills, and tips 

## Notes

 <code>Var</code>: Used in older JavaScript code, but generally discouraged in modern development due to its function-scoped nature, which can lead to unexpected behavior

<code>Const</code>:
for variables that should not be reassigned. providing clarity and preventing accidental modifications.</li>

```
function example() {
  if (true) {
    var x = 10; // x is accessible throughout the function
    const y = 20; // y is only accessible within this if block
  }

  console.log(x); // Outputs 10
  console.log(y); // Error: y is not defined
}

```
