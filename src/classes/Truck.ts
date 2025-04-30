// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {
  // TODO: Declare properties of the Truck class
  // TODO: The properties should include vin, color, make, model, year, weight, top speed, wheels, and towing capacity
  // TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[]), towingCapacity (number)
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number
  ) {
    super();
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year
    this.weight = weight
    this.topSpeed = topSpeed
    this.towingCapacity = towingCapacity

    this.wheels = wheels.length === 4 ? wheels : Array(4).fill(new Wheel())
  }
    

  // TODO: Implement the tow method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | Car): void {
    // TODO: Get the make an model of the vehicle if it exists
    const vehicleMake = 'make' in vehicle ? vehicle.make : 'Unknown';
    const vehicleModel = 'model' in vehicle ? vehicle.model : 'Unknown';
    console.log(`Attempting to tow ${vehicleMake} ${vehicleModel}...`);

    // TODO: Check if the vehicle's weight is less than or equal to the truck's towing capacity
    if ('weight' in vehicle && vehicle.weight <= this.towingCapacity) {
      // TODO: If it is, log that the vehicle is being towed
      console.log(`Towing ${vehicleMake} ${vehicleModel}...`);
    } else {
      // TODO: If it is not, log that the vehicle is too heavy to be towed
      console.log(`The vehicle is too heavy to be towed.`);
    }

  }

  // TODO: Override the printDetails method from the Vehicle class
    // TODO: The method should call the printDetails method of the parent class
    // TODO: The method should log the details of the Truck
    // TODO: The details should include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels
  override printDetails(): void {
    super.printDetails();
    console.log(`Truck VIN: ${this.vin}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
    console.log(`Color: ${this.color}`);
    console.log(`Towing Capacity: ${this.towingCapacity} lbs`);
    console.log(`Wheels: ${this.wheels.map(wheel => `a ${wheel.getDiameter} inch, ${wheel.getTireBrand} wheel`).join(', ')}`);
  }
}

// Export the Truck class as the default export
export default Truck;
