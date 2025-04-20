function generateArray(n) {
    // jika n kurang dari 0, maka berhenti
    if (n < 0) {
        return [];
    }

    return [...generateArray(n - 1), n]
}

console.log(generateArray(5))