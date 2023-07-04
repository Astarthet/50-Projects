const buttomSubtract = document.getElementById("subtract");
const buttomReset = document.getElementById("reset");
const buttomAdd = document.getElementById("add");
const countDiv = document.getElementById("count");
let count = 0;

buttomReset.onclick = () => {
  count = 0;
  countDiv.innerText = count;
};

buttomSubtract.onclick = () => {
  count--;
  countDiv.innerText = count;
    if(count === -5){
    Swal.fire({
        title: 'Counts Clicks',
        text: 'Made by Asthartet',
        confirmButtonText: 'Cool'
      })
  }
};

buttomAdd.onclick = () => {
  count++;
  countDiv.innerText = count;
  if(count === 5){
    Swal.fire({
        title: 'Counts Clicks',
        text: 'Made by Asthartet',
        confirmButtonText: 'Cool'
      })
  }
};

