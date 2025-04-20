function fibonacci(n) {
  if (n === 0) return [0];
  if (n === 1) return [0, 1];

  const fib = fibonacci(n - 1);
  const nextValue = fib[fib.length - 1] + fib[fib.length - 2];
  return [...fib, nextValue];
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
