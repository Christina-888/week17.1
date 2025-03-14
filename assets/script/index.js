const data = [
  {
    id: 1,
    type: 'car',
    brand: 'Audi',
    doors: 4,
    price: 4300000,
    image: '<https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg>'
  },
  {
    id: 2,
    type: 'car',
    brand: 'Mercedes-Benz',
    doors: 4,
    price: 2800000,
    image: '<https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg>'
  },
	{
    id: 3,
    type: 'bike',
    brand: 'Harley-Davidson',
    maxSpeed: 210,
    price: 1300000,
    image: '<https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg>'
  },
  {
    id: 4,
    type: 'bike',
    brand: 'Harley-Davidson',
    maxSpeed: 220,
    price: 1400000,
    image: '<https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png>'
  }
];

class Transport {
  constructor(type, price, brand) {
    this.type = type;
    this.price = price;
    this.brand = brand;
  }
  getInfo() {
    return {
      type: this.type,
      brand: this.brand,
    };
  }

  getPrice() {
    return {
      price: this.price
    };
  }
}

class Car extends Transport {
  constructor(price, brand, doors) {
    super(price, brand);
    this.doors = doors;
    //Вот так можно вообще делать?
    this.type = 'car';
  }
  getDoorsCount() {
    return {
      doors: this.doors
    };
  }
}

class Bike extends Transport {
  constructor(price, brand, maxSpeed) {
    super(price, brand);
    this.maxSpeed = maxSpeed;
    this.type = 'bike';
  }
  getMaxSpeed() {
    return {
      'max. speed': this.maxSpeed
    };
  };
};

//Выводим инфу на экран:
const paragraph = document.querySelector('.info');

data.forEach((item) => {
  let transportInfo = ` <br> Вид транспорта: ${item.type}. <br> Бренд: ${item.brand}. <br> Цена: ${item.price} рублей`;

  //Про количество дверей у авто:
  if (item.type === 'car') {
    transportInfo = transportInfo + ` <br> Количество дверей: ${item.doors} <br>`;
  }

  //Про скорость у байков:
  if (item.type === 'bike') {
    transportInfo = transportInfo + ` <br> Максимальная скорость: ${item.maxSpeed} км/ч <br>`;
  } 
  
  paragraph.innerHTML = paragraph.innerHTML + transportInfo; 
});