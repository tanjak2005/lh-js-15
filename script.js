
function LongLend(name, capital, population, area) {
    this.name = name;
    this.capital = capital; 
    this.population = population;
    this.area = area;
    
    
    this.long = function() {
      console.log(this.name + ' ' + this.capital + ' ' + this.population + ' млн. ' + this.area + 'тыс.кв.км.');
    };
  };

  let city1 = new LongLend('Германия', 'Берлин', 83, 357.4);
  let city2 = new LongLend('Беларусь', 'Минск', 9.4, 207.6);
  let city3 = new LongLend('Польша', 'Варшава', 37.9, 312,6);
  let city4 = new LongLend('Франция', 'Париж', 67.8, 643.8);
  let city5 = new LongLend('Нидерланды', 'Амстердам', 17.4, 41.5);
  let city6 = new LongLend('Испания', 'Мадрид', 44.3, 505.9);
  let city7 = new LongLend('Бельгия', 'Брюссель', 11.4, 30.5);
 


  city1.long();
  city2.long();
  city3.long();
  city4.long();
  city5.long();
  city6.long();
  city7.long();


let arr = [];
arr.push(city1, city2, city3, city4, city5, city6, city7);
console.log(arr);
