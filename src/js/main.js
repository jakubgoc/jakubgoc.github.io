"use strict";

console.log(`Hello world!`);

const list = document.querySelector('.project-list--js');

fetch('https://api.github.com/users/jakubgoc/repos?sort=updated&direction=desc')
  .then(resp => resp.json())
  .then(resp => {
    const repos = resp;
    for (const repo of repos) {
      const { description, homepage, html_url, name } = repo;
      list.innerHTML += `
    
        <li class="project">
        <div class="project__container">
          <img class="project__logo" src="assets/img/github.svg" alt="">
          <h3 class="project__title">${name}</h3>
          ${
            description ? `<p class="project__description">${description}</p>` : `No description`
          }
        </div>
        <div class="project__footer">
          ${
            homepage ? `<a class="project__link project__link--demo" href="${homepage}" target="_blank" rel="nofollow norefferer" title="Demo: ${name}">Demo</a>` : ``
          }
          <a class="project__link project__link--code" href=""${html_url}" target="_blank" rel="nofollow norefferer" title="Source code: ${name}">GitHub</a>
        </div>
      </li>
    
    `;
    }
  })

  .catch(err => {
    console.log(err);
  })