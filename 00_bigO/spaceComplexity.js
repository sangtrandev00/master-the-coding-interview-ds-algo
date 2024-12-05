//#5 Space complexity O(1)
// Tại sao là O(1) => Bởi vì chúng ta chỉ gán cho i một giá trị mỗi 1 lần lặp
function boooo(n) {
    for (let i = 0; i < n; i++) {
      console.log("booooo");
    }
  }
  
  // #6 Space complexity O(n)
  // Chúng ta gán cho một mảng một giá trị môi lần lặp O(n) + 1 => O(n)
  // Mảng cuối cùng sẽ chứa các danh sách chuỗi "hi" ở các vị trí trong bộ nhớ của mảng chiếm trong máy tính!
  function arrayOfHiNTimes(n) {
    var hiArray = [];
    for (let i = 0; i < n; i++) {
      hiArray[i] = "hi";
    }
    return hiArray;
  }
  
  arrayOfHiNTimes(6);