function prime(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

for (let j = 2; j < 10000; j++) {
    if (prime(j)) {
        document.write(j+"<br>");
    }
}


