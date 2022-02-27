//Add Default Local Storage Class In Body
document.body.classList.add(localStorage.getItem('pageColor') || 'DarkViolet');

let myList = document.querySelectorAll('.color-switch li');

let myArr = [];

for (let index = 0; index < myList.length; index++) {
    
    //Fill Array data-color of List
    myArr.push(myList[index].getAttribute('data-color'));

    //Every List Add Event Click 
    myList[index].addEventListener('click', function () {

        //Remove Old Class List In Body
        document.body.classList.remove(...myArr);

        //Add New Class List In Body
        document.body.classList.add(this.getAttribute('data-color'));

        //Add Data To Local Storage
        localStorage.setItem('pageColor', this.getAttribute('data-color'));

    })
}
