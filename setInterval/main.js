let square = document.querySelector('.square')
let square2 = document.querySelector('.square2')
let square3 = document.querySelector('.square3')
let car = document.querySelector('.car')



setTimeout(function () {
    square.style.backgroundColor = "red"
    square2.style.backgroundColor = "#3d3d3d"
    square3.style.backgroundColor = "#3d3d3d"
})

if (square.style.backgroundColor = "red") {
    setTimeout(function () {
        square2.style.backgroundColor = "yellow"
        square.style.backgroundColor = "#3d3d3d"
        setTimeout(function () {
            car.style.transition = "2s"
            car.style.left = "100px"
        }, 1000)
    }, 3000)
} if (square2.style.backgroundColor = "yellow") {
    setTimeout(function () {
        square.style.backgroundColor = "#3d3d3d"
        square2.style.backgroundColor = "#3d3d3d"
        square3.style.backgroundColor = "#18f24b"
        setTimeout(function () {
            car.style.transition = "1s"
            car.style.left = "2000px"
            setTimeout(function () {
                car.style.display = "none"
            }, 1000)
        }, 1000)
    }, 6000)
}
square.style.backgroundColor = "gray"
square2.style.backgroundColor = "gray"
square3.style.backgroundColor = "gray"

function reload() {
    alert("Saifa qayta yuklanoqada")
    location.reload();
}