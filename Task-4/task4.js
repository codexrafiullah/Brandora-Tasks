//// Task 4

function AddCars(cars) {
    const name = prompt("Enter the name of car");
    const model = prompt("Enter the model of car");
    const year = prompt("Enter the year of car");
    const color = prompt("Enter the color of car");
    const price = prompt("Enter the price of car");

   let car = {
    name : name,
    model : model,
    year : year,
    color : color,
    price : price
    };

    cars.push(car);
    alert(`${car.name} is added`);
}

function removeCar (cars){
    const name = prompt(" Enter the name of the car to remove");
    const carIndex = cars.findIndex(car => car.name === name);
    if (carIndex >= 0){
        cars.splice(carIndex,1)
        alert(`${name} is deleted successfully`)
    }else{
        alert("car is not found")
    }
}

function searchCar (cars){
    const name = prompt("Enter the name of car");
    const car = cars.find(c => c.name === name);
    if (car){
        alert(`car specification \n ${car.name}\n model : ${car.model}\n year : ${car.year}\n color : ${car.color}\n price : ${car.price}`)
    }else{
        alert(`${name} not found`)
    }
}

function displayCar (cars){
    if(cars.length === 0){
        alert(`No car in the showroom`)
    }else{
        let carlist = "Cars in the showroom \n";
        cars.forEach((car,index) =>{
            carlist += `${index + 1}. Name: ${car.name} \n Year: ${car.year} \n Model: ${car.model} \n Price: ${car.price} \n Color: ${car.color}`
        })
        alert(carlist);
    }
}

let cars = [];

while(true){
    const choice = prompt(
        `Car showromm \n1 : Add Car \n 2 : Remove Car \n3 : Search Car \n4 : DisplyAll Cars \n0 : To quit`
    )

    if (choice == 1){
        AddCars(cars);
    }else if (choice == 2){
        removeCar (cars)
    }else if(choice == 3){
        searchCar (cars)
    }else if(choice == 4){
        displayCar(cars)
    }else if(choice == 0){
        alert("Do you want to exit the program")
        break;
    }else{
        alert("Please enter a valid choice ")
    }
}