//document.getElementById("count-el").innerText



let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0  
//let countHistory = []

function increment () {
    count = count +1
    countEl.textContent = count
}

// function save(){
//     countHistory.push(count)
//     console.log(count)
//     saveEl.innerText= "Previous saves: " + countHistory.join('- ')
//     count =0
//     countEl.innerText = count
// }

// function save(){
//     let countStr = count + " - "
//     saveEl.textContent += countStr
//      let currentDatetime = new Date().toLocaleString()
//      let saveData = currentDatetime + ": " + count + "\n";
//      saveEl.textContent += saveData;
    
//      count = 0
//      countEl.textContent = 0
//  }

function save(){

    let currentDatetime = new Date().toLocaleString()

     saveData = currentDatetime + ": " + count;
      // Create a new <p> element
      let saveEntry = document.createElement("p");
      saveEntry.innerHTML = saveData;
  
      // Append the new <p> element to the save element
      saveEl.appendChild(saveEntry);
    count = 0
    countEl.textContent = 0
}
function deleteEntries() {
  
    var confirmed = window.confirm("Are you sure you want to delete all entries?");
    if (confirmed) {
        // Remove all child elements (entries) from the save element
        while (saveEl.firstChild) {
            saveEl.removeChild(saveEl.firstChild);
        }
    } else {
        
        console.log("Deletion canceled");
    }
            saveEl.removeChild(saveEl.firstChild);
    while (saveEl.firstChild) 
    {
        saveEl.removeChild(saveEl.firstChild)
    }
}


document.addEventListener('keydown', function (event) {
    switch (event.key) {
        case 'a':
            increment()
            break
        case 's':
            save()
            break
        case'd':
            deleteEntries()
            break
    }
})
