function printPyramid(levels) {
  for (let i = 1; i <= levels; i++) {
    let spaces = ' '.repeat(levels - i);
    let stars = '*'.repeat(2 * i - 1);
    console.log(spaces + stars);
  }
}

printPyramid(15);
