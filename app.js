const humburger = document.querySelector('.humburger');
const mobMenu = document.querySelector('.desk_top');
const li2 = document.querySelector('.nem2');
const li3 = document.querySelector('.nem3');
const li4 = document.querySelector('.nem4');
const li5 = document.querySelector('.nem5');

li2.addEventListener('click', () => {
  humburger.classList.remove('activ');
});
li3.addEventListener('click', () => {
  humburger.classList.remove('activ');
  mobMenu.classList.toggle('activ');
});
li4.addEventListener('click', () => {
  humburger.classList.remove('activ');
  mobMenu.classList.toggle('activ');
});
li5.addEventListener('click', () => {
  humburger.classList.remove('activ');
  mobMenu.classList.toggle('activ');
});

humburger.addEventListener('click', () => {
  humburger.classList.toggle('activ');
  mobMenu.classList.toggle('activ');
});

const speaker1 = {
  imageSrc: './assets/barack-obama.jpeg',
  name: 'Ghislain Mitahi',
  rank: 'Cheif Executive Officer (CEO)',
  id: 'firstSPeaker',
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
};

const speaker2 = {
  imageSrc: './assets/barack-obama.jpeg',
  name: 'ZUZU zazu',
  rank: 'Cheif Marketing',
  id: 'secondarySPeaker',
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
};

const speaker3 = {
  imageSrc: './assets/barack-obama.jpeg',
  name: 'Blaise Blaise',
  rank: 'IT',
  id: 'thirdSPeaker',
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
};

const speaker4 = {
  imageSrc: './assets/barack-obama.jpeg',
  name: 'TRESOR TRESOR',
  rank: 'GRENERAL DIRECTOR',
  id: 'fourthSPeaker',
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
};

const speaker5 = {
  imageSrc: './assets/barack-obama.jpeg',
  name: 'Nick NICK',
  rank: 'TECH RECUITERS',
  id: 'fithSPeaker',
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
};

const speaker6 = {
  imageSrc: './assets/barack-obama.jpeg',
  name: 'Dan DAN',
  rank: 'MANAGER',
  id: 'sixthSPeaker',
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
};

const Speakers = [speaker1, speaker2, speaker3, speaker4, speaker5, speaker6];

for (let i = 0; i < Speakers.length; i += 1) {
  const speaker = document.createElement('div');
  speaker.classList.add('mb-3', 'col-md-6');
  speaker.innerHTML = `
    <div class="row speaker">
    <div class="col-4 sp_img">
    <img src="${Speakers[i].imageSrc}" class="img-fluid" alt="...">
  </div>
  <div class="col-8">
    <div class="cardbody">
      <h2 class="cardtitle">${Speakers[i].name}</h2>
      <p class="rank">${Speakers[i].rank}.</p>
      <p class="cardtext">${Speakers[i].text}
      </p>
    </div>
  </div>
  `;
  document.querySelector('.speaker_cont').appendChild(speaker);
}


const qs = function(selector = '*', element = document) {
  return element.querySelector(selector);
}