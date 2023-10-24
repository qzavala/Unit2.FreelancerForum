const colors = ["red", "green", "blue"];
const sizes = ["small", "medium", "large"];

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

    // TODO: Render the circles
  }


  function addShape() {
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = sizes[Math.floor(Math.random())]
  
    // TODO: Randomize the size of the shape
  
    shapes.push({ color, size });
  
    render();
    
  if (shapes.length === maxShapes){
    clearInterval(addShapeIntervalId);
  }
    // TODO: Stop adding shapes if we've reached the maximum number of shapes
  }
  