import DataSource from '../data/data-source.js'

const main = () =>{
    const searchElement = document.querySelector("#searchElement");
    const buttonSearchElement = document.querySelector("#searchButtonElement");
    const clubListElement = document.querySelector("#clubList");

    // menggunakan then atau call back
    // const onButtonSearchClicked = () => {
        // const dataSource = new DataSource(renderResult, fallbackResult);
        // dataSource.searchClub(searchElement.value);

        // const dataSource = new DataSource();
    //     DataSource.searchClub(searchElement.value).then(renderResult).catch(fallbackResult);
    // };

    // menggunakan async
    const onButtonSearchClicked = async () =>{
        try {
            const result = await DataSource.searchClub(searchElement.value);
            renderResult(result);
        } catch (error) {
            fallbackResult(error);
        }
    }

    const renderResult = (results) => {
        clubListElement.innerHTML = "";
        results.forEach((club) => {
            const {name, fanArt, description} = club;
            // const name = club.name;
            // const fanArt = club.fanArt;
            // const description = club.description;

            const clubElement = document.createElement("div");
            clubElement.setAttribute("class", "club");

            // basic
            // clubElement.innerHTML = '<img class="fan-art-club" src="' + fanArt + '" alt="Fan Art">\n' +
            //     '<div class="club-info">\n' +
            //     '<h2>' + name + '</h2>\n' +
            //     '<p>' + description + '</p>' +
            //     '</div>';

            // es6
            clubElement.innerHTML = `<img class="fan-art-club" src="${fanArt}"" alt="Fan Art">\n <div class="club-info">\n <h2>${name}</h2>\n <p>${description}</p> </div>`
            
            clubListElement.appendChild(clubElement);
        })
    };

    const fallbackResult = (message) => {
        clubListElement.innerHTML = "";
        
        clubListElement.innerHTML += `<h2 class="placeholder"> ${message}</h2>`
    };

    buttonSearchElement.addEventListener("click", onButtonSearchClicked);
};

export default main;