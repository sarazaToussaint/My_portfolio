const openMenu = document.querySelector('#hamburger');
const closeButton = document.querySelector('.closeIcon');
const closeItems = document.querySelector('.items');

openMenu.onclick = function openMenu() {
  document.querySelector('.open').style = 'display: block';
  document.querySelector('#hamburger').style = 'display: none';
  document.querySelector('body').style = 'overflow: hidden';
  document.querySelector('section').style = 'filter: blur(6px)';
};

closeButton.onclick = function closeMenu() {
  document.querySelector('nav').style.display = 'none';
  document.querySelector('#hamburger').style = 'display: block';
  document.querySelector('body').style = 'overflow: scroll';
  document.querySelector('section').style = 'filter: none';
};

closeItems.onclick = function closeItem() {
  document.querySelector('nav').style.display = 'none';
  document.querySelector('#hamburger').style = 'display: block';
  document.querySelector('body').style = 'overflow: scroll';
  document.querySelector('section').style = 'filter: none';
};

const worksList = [{
  id: 1,
  imageLink: './images/SnapshootPortfolio.svg',
  title: 'Tonic',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  specifics: ['Canopy', 'Back End Dev', '2022'],
  languages: ['html', 'css', 'javascript'],
  liveLink: 'https://github.com/sarazaToussaint/My_portofolio',
  sourceLink: 'https://github.com/sarazaToussaint/My_portofolio',
  fullDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived notonly five centuries, but also the leap into electronic typesetting, remaining essent",
},

{
  id: 2,
  imageLink: './images/SnapshootPortfolio1.svg',
  title: 'Multi-Post Stories',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  specifics: ['Canopy', 'Back End Dev', '2022'],
  languages: ['html', 'css', 'javascript'],
  liveLink: 'https://github.com/sarazaToussaint/My_portofolio',
  sourceLink: 'https://github.com/sarazaToussaint/My_portofolio',
  fullDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived notonly five centuries, but also the leap into electronic typesetting, remaining essent",
},

{
  id: 3,
  imageLink: './images/SnapshootPortfolio2.svg',
  title: 'Tonic',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  specifics: ['Canopy', 'Back End Dev', '2022'],
  languages: ['html', 'css', 'javascript'],
  liveLink: 'https://github.com/sarazaToussaint/My_portofolio',
  sourceLink: 'https://github.com/sarazaToussaint/My_portofolio',
  fullDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived notonly five centuries, but also the leap into electronic typesetting, remaining essent",
},
{
  id: 4,
  imageLink: './images/SnapshootPortfolio3.svg',
  title: 'Multi-Post Stories',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  specifics: ['Canopy', 'Back End Dev', '2022'],
  languages: ['html', 'css', 'javascript'],
  liveLink: 'https://github.com/sarazaToussaint/My_portofolio',
  sourceLink: 'https://github.com/sarazaToussaint/My_portofolio',
  fullDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived notonly five centuries, but also the leap into electronic typesetting, remaining essent",
},
];

const worksSection = document.getElementById('section-works');
worksSection.innerHTML = worksList.map((work) => `
<section class="headline card card-1" >
                <img src="${work.imageLink}" ${work.id % 2 === 0 ? 'img-pos' : ''} alt="Snapshot of my first portfolio" />
                <div id="space">
                    <h2>${work.title}</h2>
                    <div class="l-1">
                        <p>${work.specifics[0]}</p>
                        <p>${work.specifics[1]}</p>
                        <p>${work.specifics[2]}</p>
                    </div>
                    <div>
                        <p class="par-overflow">
                            ${work.description}
                        </p>
                    </div>
                    <ul class="l-1 l-3">
                        <li>${work.languages[0]}</li>
                        <li>${work.languages[1]}</li>
                        <li>${work.languages[2]}</li>
                    </ul>
                    <button data-id=${work.id} id="modalBtn" class="btn-over modal__btn" type="button">See Project</button>
                </div>
            </section>
`).join('');

const modalBtn = document.querySelectorAll('.modal__btn');

const modalSection = document.getElementById('modal');

modalBtn.forEach((btn) => btn.addEventListener('click', (e) => {
  const id = e.target.getAttribute('data-id');
  const work = worksList.find((work) => work.id === +id);
  modalSection.innerHTML = `
 // <div id="overlay"></div>

    <article id="simpleModal" class="article2">
        <div class="pop-title">
            <h1>${work.title}</h1>
            <div>
             <img id="closeModal" src="./images/cross.svg" class="closeBtn" alt="close Button" />
            </div>
        </div>
        <div class="pop-span">
             <span>${work.specifics[0]}</span>
            <span>${work.specifics[1]}</span>
            <span>${work.specifics[2]}</span>
        </div>
        <div class="pop-img">
            
                <img src="${work.imageLink}" alt="Popup image">
            
        </div>

        <div class="desktop">
            <p>
                ${work.fullDescription}
            </p>

            <div>
                <div class="span">
                    <ul class="l-1 l-3">
                        <li>${work.languages[0]}</li>
                        <li>${work.languages[1]}</li>
                        <li>${work.languages[2]}</li>
                    </ul>
                </div>
                <div class="separater"></div>
                <div class="buttons">
                    <button> <a href="${work.liveLink}">See live</a> <img src="./images/Export.svg" alt=""></button>
                    <button> <a href="${work.sourceLink}">See source</a> <img src="./images/githubB.svg" alt=""></button>
                </div>

                </div>
            </div>

    </article>
    
  `;
  const modal = document.getElementById('simpleModal');
  const closeBtn = document.getElementById('closeModal');
  modal.style = 'display: block; position: fixed; overflow-y: scroll';
  const overlaycolor = document.getElementById('overlay');
  document.querySelector('body').style = 'z-index: -1';
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    overlaycolor.style.display = 'none';
  });
}));

function checkValidation(e) {
  if (!e) {
    document.getElementById('message-error').style.display = 'block';
    document.getElementById('message-error').innerHTML = 'Lower case required please';
    document.getElementById('email').style.border = '2px red solid';
  }
}

const contactForm = document.querySelector('form');
contactForm.addEventListener('submit', (elem) => {
  elem.preventDefault();
  const email = document.getElementById('email').value;
  if (email !== email.toLowerCase()) {
    checkValidation(false);
  } else {
    contactForm.submit();
    contactForm.reset();
    checkValidation(true);
  }
});

const inputs = document.querySelectorAll('.formInput');
inputs.forEach((input) => {
  input.addEventListener('change', (e) => {
    let userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (!userInfo) {
      userInfo = { name: '', email: '', message: '' };
    }
    userInfo[e.target.name] = e.target.value;
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  });
});
function getInfo() {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  if (userInfo) {
    document.getElementById('fullName').value = userInfo.name;
    document.getElementById('email').value = userInfo.email;
    document.getElementById('message').value = userInfo.message;
  }
}
getInfo();
