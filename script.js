const userInput = document.getElementById('search');
const resultList = document.getElementById('List');


async function loadList() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        const list = await response.json();
        displayList(list);
    } catch (err) {
        console.error('Error fetching data:', err);
    }
}

function displayList(list) {
    resultList.innerHTML = '';
    list.forEach(list => {
        const listItem = document.createElement('li');
        listItem.textContent = list.title;
        resultList.appendChild(listItem);
    });
}

userInput.addEventListener('input', () => {
    const searchTerm = userInput.value.toLowerCase();
    const allList = Array.from(resultList.getElementsByTagName('li'));

    allList.forEach(list => {
        const title = list.textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            list.style.display = 'list';
        } else {
            list.style.display = 'none';
        }
    });
});

loadList();

