const template = (title, description, image, url) => {
    return `<div class="project-box"><div class="project-box-grid"><div class="project-box-grid-title">${title}</div><div class="project-box-grid-image"><img src="${image}" alt="${title}"></div><div class="project-box-grid-text">${description}</div></div></div>`
}


const loadData = (data) => {
    let string = ""
    Object.keys(data).forEach(function(key) {
        string = string + (template(key, data[key].description, data[key].image, data[key].url))
    });
    console.log(string)
    document.getElementById("projects").innerHTML = string
}

fetch('./projects.json')
.then((response) => response.json())
.then((data) => {
  loadData(data)
});