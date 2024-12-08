class MyArray {

    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    set(index ,value) {
        this.data[index] = value
    }

    splice(startIndex, deleteCount = 0, item) {
        for (let i = startIndex; i < this.length; i++) {
            this.data[i + 1] = this.data[i];
        }
        this.data[startIndex] = item;
        this.length++;
    }

    shiftRightItems(index){

    }

    push(item) {
        this.data[this.length] = item;
        this.length++;

        return this.length;
    }

    pop() {
        const lastItem = this.data[this.length - 1];

        delete this.data[this.length - 1];
        this.length--;

        return lastItem;
    }

    delete(index) {
        const item = this.data[index];

        this.shiftItems(index);

        return item;
    }

    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }

        delete this.data[this.length - 1];
        this.length--;
    }
}

const newArray = new MyArray();

newArray.push("hi");
newArray.push("you");
newArray.push("!");

newArray.pop();

newArray.delete(1);

console.log(newArray);
