class Car {
  constructor(rpm) {
    this.revsPerMinute = rpm;
  }
  getRevs() {
    return new Promise((resolve, reject) => {
      return resolve(this.revsPerMinute);
    })
  }
}



const setupCar = async () => {
  const car = new Car(4000);
  const rpms = await car.getRevs();
  console.log(rpms);
}

setupCar();

