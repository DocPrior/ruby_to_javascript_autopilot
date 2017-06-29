function getNewCar() {
  return { city: 'Toronto',
  passengers: 0,
  gas: 100
  }
}

var honda = getNewCar()

var cars = []

function addCar(cars, newCar) {
  cars.push(newCar)
  return 'Adding new car to fleat. Fleet size is now ' + cars.length;
}

function pickUpPassenger(car) {
  car.passengers += 1
  car.gas -= 10
  return 'Picked up passenger. Car now has ' + car.passengers + ' passengers.';
}
