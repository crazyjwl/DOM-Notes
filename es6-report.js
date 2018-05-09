class Buildings {
  constructor(name, buildYear){
    this.name = name;
    this.buildYear = buildYear;
  }
}

class Street extends Buildings {
  constructor(name, buildYear, length, size = 3){
    super(name, buildYear);
    this.length = length;
    this.size = size;
  }
  classifyStreet() {
    const classification = new Map();
    classification.set(1, 'tiny');
    classification.set(2, 'small');
    classification.set(3, 'normal');
    classification.set(4, 'big');
    classification.set(5, 'huge');
    console.log(`${this.name}, built in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
  }
}

class Park extends Buildings {
  constructor(name, buildYear, trees, area){
    super(name, buildYear);
    this.trees = trees;
    this.area = area;
  }
  treeDensity() {
    const density = this.trees / this.area;
    console.log(`${this.name} has a tree density of ${density} trees per square km.`);
  }
}

const allParks = [
  new Park('Green Park', 1987, 215, 0.2),
  new Park('National Park', 1894, 3541, 2.9),
  new Park('Oak Park', 1953, 949, 0.4)
];

const allStreets = [
  new Street('Ocean Avenue', 1999, 1.1, 4),
  new Street('Evergreen Street', 2008, 2.7, 2),
  new Street('4th Street', 2015, 0.8),
  new Street('Sunset Boulevard', 1982, 2.5, 5)
];

function calc(arr) {
  const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
  return [sum, sum / arr.length];
}
function reportPark(p){
  console.log('--------PARKS REPORT-------');

  //density
  p.forEach(el => el.treeDensity());

  //average average
  const ages = p.map(el => new Date().getFullYear() - el.buildYear);
  const [totalAge, avgAge] = calc(ages);
  console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);

  // Which more than 1000 trees
  const i = p.map(el => el.trees).findIndex(el => el >= 1000);
  console.log(`${p[i].name} has more than 1000 trees.`);
}

function reportStreets(s){
  console.log('--------STREET REPORT-------');

  //Total and average length of the town's allStreets
  const [totalLength, avglength] = calc(s.map(el => el.length));

  console.log(`Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${avglength} km.`);

  //classifyStreet
  s.forEach(el => el.classifyStreet());
}

reportPark(allParks);
reportStreets(allStreets);
