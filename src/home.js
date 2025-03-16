
const homePage = document.querySelector('#homePage');


const savedPoems = JSON.parse(localStorage.getItem('savedPoems')) || [];


function renderSavedPoems(poems) {
    if (poems.length === 0) {
        homePage.innerHTML = '<p>Your collection is empty. Add some poems!</p>';
        return;
    }
    
    let html = '';
    poems.forEach((poem, index) => {
        html += `
            <div class="saved-poem">
                <h2>${poem.title}</h2>
                <h3>${poem.author}</h3>
                <button class="view-poem" data-index="${index}">View</button>
                <button class="remove-poem" data-index="${index}">Remove</button>
            </div>
        `;
    });
    
    homePage.innerHTML = html;
    
    
    const viewButtons = document.querySelectorAll('.view-poem');
    const removeButtons = document.querySelectorAll('.remove-poem');
    
    viewButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            displayFullPoem(savedPoems[index]);
        });
    });
    
    removeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            savedPoems.splice(index, 1);
            localStorage.setItem('savedPoems', JSON.stringify(savedPoems));
            renderSavedPoems(savedPoems);
        });
    });
}


function displayFullPoem(poem) {
    let linesHtml = poem.lines.map(line => `<li>${line}</li>`).join('');
    
    homePage.innerHTML = `
        <div class="full-poem">
            <h2>${poem.title}</h2>
            <h3>${poem.author}</h3>
            <h4>linecount: ${poem.linecount}</h4>
            <ul>${linesHtml}</ul>
            <button class="back-button">Back to Collection</button>
        </div>
    `;
    
    document.querySelector('.back-button').addEventListener('click', () => {
        renderSavedPoems(savedPoems);
    });
}


renderSavedPoems(savedPoems);