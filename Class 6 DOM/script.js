import getCountries from "./fetchData.js";
// getCountries("India").then(function(res) {
//     console.log(res);
// })

const inputBox = document.getElementById("search_input");
const suggestionBox = document.getElementById("suggestion_box");

function debounce(fn, delay= 1000) {
    let timerId;
    return function(...args) {
        if(timerId){
            console.log("I am resetting now wait again from he start");
            clearTimeout(timerId);
        }

        timerId = setTimeout(function() {
            fn(...args);
        }, delay);
    }
}

const handleSearch = async (keyword) => {
    const countriesArr = await getCountries(keyword);
    const countryNameArr = countriesArr.map((country) => country.name.common);
    return countryNameArr;
}

// handleSearch("India");
const handleSuggestions = async (e) => {
    console.log(e.target.value);
    const keyword = e.target.value;
    // if(keyword.length < 3) return;
    const countryNameArr = await handleSearch(keyword);

    populateSuggestionBox(countryNameArr);
}

const populateSuggestionBox = (countryNameArr) => {
    // console.log(countryNameArr);

    if(!countryNameArr.length) {
        suggestionBox.classList.remove("visible");
         return;
    } 
    suggestionBox.classList.add("visible");

    suggestionBox.innerHTML = "";
    const fragment = document.createElement("li");

    countryNameArr.forEach(countryName => {
        const li = document.createElement("li");
        li.innerText = countryName;
        fragment.appendChild(li);
    })

    suggestionBox.appendChild(fragment);
};

inputBox.addEventListener("input", debounce(handleSuggestions));