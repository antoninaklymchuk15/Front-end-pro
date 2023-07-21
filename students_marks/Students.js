class Student {
  constructor(name, marks = []) {
    this.name = name;
    this.marks = marks;
  }

  getAverageMark() {
    return this.getMarksSum() / this.marks.length;
  }

  getMarksSum() {
    return this.marks.reduce((acc, mark) => acc + mark, 0);
  }
}
