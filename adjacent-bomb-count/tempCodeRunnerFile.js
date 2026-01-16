
}

function runTest(testNum, grid, expected) {
  const gridCopy = grid.map((row) => [...row]);

  let result;
  try {
    result = countAdjacentBombs(gridCopy);
  } catch (error) {
    console.log(`Test ${testNum}: ✗ FAIL (Error: ${error.message})`);
    return false;
  }

  // Check if result is undefined or null
  if (!result) {
    console.log(`Test ${testNum}: ✗ FAIL (Function returned ${result})`);
    console.log("  Hint: Make sure your function returns a grid!");
    return false;
  }

  const passed = arraysEqual(result, expected);

  console.log(`Test ${testNum}: ${passed ? "✓ PASS" : "✗ FAIL"}`);
  if (!passed) {
    console.log("  Input:");
    grid.forEach((row) => console.log("   ", row));
    console.log("  Expected:");
    expected.forEach((row) => console.log("   ", row));
    console.log("  Got:");
    if (result) {