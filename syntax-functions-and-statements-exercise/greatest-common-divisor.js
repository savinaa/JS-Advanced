function GCD(n1, n2) {
    while (n2) {
        let t = n2;
        n2 = n1 % n2;
        n1 = t;
    }
    console.log(n1);
}

GCD(4,8)
