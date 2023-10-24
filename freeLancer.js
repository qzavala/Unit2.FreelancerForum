const  names = ["bob", "chris", "evan"];
const occupations = ["artist", "driver", "bartender"];

const freeLanceWriters = [
  {
    name: "alice",
    occupation: "Writer",
    startingPrice: 30,
  },
  {
    name: "Bob",
    occupation: "Teacher",
    startingPrice: 50,
  },
  {
    name: "Carol",
    occupation: "Programmer",
    startingPrice: 70,
  },
]
const addFreeLancerIntervalId = setInterval(addFreeLancer, 1000);

render();
function render() {
//   function render() {
    // Render the squares
    const freeLancer = document.querySelector("tbody");
    const template = freeLanceWriters.map((writer) => {
      const tr = document.createElement("tr");
      const td1 = document.createElement("td");
      td1.textContent = writer.name;
      const td2 = document.createElement("td");
      td2.textContent = writer.occupation;
      const td3 = document.createElement("td");
      td3.textContent = `$${writer.startingPrice}`;
      tr.append(td1, td2, td3);
      return tr;
      //   element.classList.add(shape.color, shape.size);
    //   return element;
    });
    freeLancer.replaceChildren(...template);
    
    const average = document.querySelector("#averageCost");
average.innerText = getAveragePrice()
    // TODO: Render the circles
  }


  function addFreeLancer() {
    const name = names[Math.floor(Math.random() * names.length)];
    const occupation = occupations[Math.floor(Math.random() * occupations.length)];
    const price = Math.floor(Math.random() * 100);
  
    // TODO: Randomize the size of the shape
  
    freeLanceWriters.push({ name, occupation, startingPrice:price });
  
    render();

  if (freeLanceWriters.length === 10){
    clearInterval(addFreeLancerIntervalId);
  }
    // TODO: Stop adding shapes if we've reached the maximum number of shapes
  }
   function getAveragePrice()
{
    const initialValue = 0;
    const totalPrice = freeLanceWriters.reduce(
      (accumulator, freeLancer) => accumulator + freeLancer.startingPrice
      ,
      initialValue
    );
    return (totalPrice/freeLanceWriters.length).toFixed(2);
    
}  