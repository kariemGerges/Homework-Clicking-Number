
function NumberClicking(color) {
    this.number = 0;
    let that = this;
    this.ele = document.createElement("div");
    this.eleNum = document.createElement("div");
    this.eleNum.innerHTML = this.number;

    this.button = document.createElement("button");
    this.button.innerHTML= "";
    this.button.classList.add(color);
    this.button.addEventListener("click", function () {
        that.numberUp(1);
    })

    this.ele.appendChild(this.button);
    this.ele.appendChild(this.eleNum);
    this.button.appendChild(this.eleNum)
    document.body.appendChild(this.ele);

}


NumberClicking.prototype.numberUp = function (nm) {
    this.number = this.number+nm;
    this.eleNum.innerHTML=this.number;
}

//Creating array for the 3 instance
//creating array to save the 3 instance
//creating array to save the styling

let list = ["", "", ""];
let ele = [];
let colorList = ["box1", "box2", "box3"];

for (let obj  in list) {
    ele.push(new NumberClicking(colorList[obj]));
}
