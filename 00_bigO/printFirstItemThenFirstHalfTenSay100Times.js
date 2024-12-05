function printFirstItemThenFirstHalfThenSayHi100Times(items) {
    console.log(items[0]);

    var middleIndex = Math.floor(items.length / 2);
    var index = 0;

    while (index < middleIndex) {
        console.log(items[index]);
        index++;
    }
    

    for (var i = 0; i < 100; i++) {
        console.log('hi');
    }
}

// BigO => n/2 + 100 + 1 => Simplified Big O = O(n/2)  => Big O = O(n).
// Giải thích: Khi n đạt gần tiệm cận lim của vô cực thì các giá trị hằng số /2, /3, *2, *2 xấp xỉ bằng 1. (Giải thích bằng toán học cấp 3!)
