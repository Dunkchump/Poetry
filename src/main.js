import './style.css'

const anotherBtn = document.querySelector(".next"),
      app = document.querySelector('#app'),
      plusBtn = document.querySelector(".plus")

let addedPoems = JSON.parse(localStorage.getItem('savedPoems')) || [];
let currentPoem = null; 
anotherBtn.addEventListener("click", fetchPoem)

async function fetchPoem() {
    const spinner = document.querySelector('.spinner');
    app.innerHTML = "";
    spinner.style.display = "block"; 
    anotherBtn.style.display = "none"; 
    plusBtn.style.display = "none";
    try {
        const response = await fetch("https://poetrydb.org/random/1");
        const data = await response.json();
        
        if (!data.length) throw new Error("No data received");

        let poem = data[0];

        if (poem.lines.length > 50) {
            console.warn("Poem has too many lines, fetching another...");
            return fetchPoem(); 
        }

        currentPoem = poem; 
        render(poem);
        return poem;
    } catch (error) {
        console.error("Error fetching poem:", error);
        currentPoem = null;
    } finally {
        spinner.style.display = "none"; 
        anotherBtn.style.display = "block"; 
        plusBtn.style.display = "block";
    }
}
function render(data) {
    let html = data.lines.map(i => {
        return `<li>${i}</li>`
    }).join("")
    app.innerHTML = `
        <h2>${data.title}</h2>
        <h3>${data.author}</h3>
        <h4>linecount: ${data.linecount}</h4>
        <ul>${html}</ul>`
}


plusBtn.addEventListener("click", () => {
    if (currentPoem && !addedPoems.some(poem => poem.title === currentPoem.title)) {
        addedPoems.push(currentPoem);
		localStorage.setItem('savedPoems', JSON.stringify(addedPoems));
		console.log(addedPoems)
    } 
})


fetchPoem();