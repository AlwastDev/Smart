const cuisines = [
  {name: 'Italian', recipes: 327, image: './images/cuisines/Italian.webp'},
  {name: 'Indian', recipes: 856, image: './images/cuisines/Indian.webp'},
  {name: 'French', recipes: 27, image: './images/cuisines/French.webp'},
  {name: 'Steakhouse', recipes: 174, image: './images/cuisines/SteakHouse.webp'},
  {name: 'Seafood', recipes: 731, image: './images/cuisines/SeaFood.webp'},
  {name: 'Sushi', recipes: 327, image: './images/cuisines/Sushi.webp'},
  {name: 'Mexican', recipes: 529, image: './images/cuisines/Mexican.webp'},
  {name: 'Chinese', recipes: 145, image: './images/cuisines/Chinese.webp'},
  {name: 'Pizza', recipes: 327, image: './images/cuisines/Pizza.webp'},
  {name: 'American', recipes: 327, image: './images/cuisines/America.webp'},
];

const secondCuisines = [...cuisines];

const cuisinesBlock = document.querySelector('.cuisines__container');
let sorted = false;
const SortButton = document.getElementById('sort');

cuisines.map(cuisine => {
  cuisinesBlock.innerHTML += `
    <div class="cuisines__cuisine" style="
      background: url('${cuisine.image}');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    ">
      <span class="cuisines__amount-of-recipes">${cuisine.recipes} Recipes</span>
      <span class="cuisines__name-of-cuisine">${cuisine.name}</span>
    </div>
  `
})

SortButton.addEventListener('click', () => {
  sorted = !sorted;
  cuisinesBlock.innerHTML = '';
  console.log(123)

  if (sorted) {
    cuisines.sort((a, b) => a.recipes - b.recipes).map(cuisine => {
      cuisinesBlock.innerHTML += `
        <div class="cuisines__cuisine" style="
          background: url('${cuisine.image}');
          background-size: cover;
          background-repeat: no-repeat;
        ">
          <span class="cuisines__amount-of-recipes">${cuisine.recipes} Recipes</span>
          <span class="cuisines__name-of-cuisine">${cuisine.name}</span>
        </div>
      `
    })
  } else {
    secondCuisines.map(cuisine => {
      cuisinesBlock.innerHTML += `
        <div class="cuisines__cuisine" style="
          background: url('${cuisine.image}');
          background-size: cover;
          background-repeat: no-repeat;
        ">
          <span class="cuisines__amount-of-recipes">${cuisine.recipes} Recipes</span>
          <span class="cuisines__name-of-cuisine">${cuisine.name}</span>
        </div>
      `
    })
  }
})

const recipesAvailable = document.getElementById('recipes-available');
const activeUsers = document.getElementById('active-users');
const positiveReviews = document.getElementById('positive-reviews');
const photosVideos = document.getElementById('photos-and-videos');
const spicesHerbs = document.getElementById('spices-and-herbs');

const minTime = 3182;

function setCount(element, number) {
  let count = 0;

  const interval = window.setInterval(() => {
    if (number < 10000) {
      if (count + 100 <= number) {
        count += 100;
      } else if (count + 10 <= number)  {
        count += 10;
      } else {
        count++;
      }
    } else {
      if (count + 100000 <= number) {
        count += 100000;
      } else if(count + 1000 <= number) {
        count += 1000;
      } else if (count + 100 <= number) {
        count += 100;
      } else if (count + 10 <= number)  {
        count += 10;
      } else {
        count++;
      }
    }
    
    if (spicesHerbs.innerHTML === '3,182' && number !== minTime) {
      element.innerHTML = `${number}`;
      const resultCount = (number / 1000) + '';
      element.innerHTML = resultCount.replace('.', ',');
      clearInterval(interval);
    } else {
      element.innerHTML = `${count}`;
    }

    if (count >= number) {
      const resultCount = (count / 1000) + '';
      element.innerHTML = resultCount.replace('.', ',');
      clearInterval(interval);
    }
  }, 30);
}

setCount(recipesAvailable, 23567);
setCount(activeUsers, 431729);
setCount(positiveReviews, 892173);
setCount(photosVideos, 56581);
setCount(spicesHerbs, minTime);

const nav = document.querySelector('.page__nav');
const togglerOpen = document.querySelector('.buttons__toggler-open');
const togglerClose = document.querySelector('.buttons__toggler-close');
const logoCloseNav = document.getElementById('close-nav');

const targetToAboutUs = document.querySelector('a[href="#about-us"]');
const targetToApp = document.querySelector('a[href="#App"]');
const targetToCuisines = document.querySelector('a[href="#cuisines"]')

togglerOpen.onclick = (() => {
  nav.style.cssText = `
    transform: translateX(0);

    transition: 0.3s;
  `;
});



togglerClose.onclick = ('click', () => {
  nav.style.cssText = `
    transform: translateX(100%);

    transition: 0.3s;
  `;
});

logoCloseNav.addEventListener('click', () => {
  nav.style.cssText = `
    transform: translateX(100%);

    transition: 0.3s;
  `;
})

targetToAboutUs.onclick = () => {
  nav.style.cssText = `
    transform: translateX(100%);

    transition: 0.3s;
  `;
};

targetToApp.onclick = () => {
  nav.style.cssText = `
    transform: translateX(100%);

    transition: 0.3s;
  `;
}

targetToCuisines.onclick = () => {
  nav.style.cssText = `
    transform: translateX(100%);

    transition: 0.3s;
  `
}

const signUpBlock = document.querySelector('#sign-up');
const signUpButton = document.getElementById('sign-up-button');
let signUpLeaveButton = document.getElementById('leave-sign-up');
const logInBlock = document.querySelector('#log-in');
const LogInButton = document.getElementById('log-in-button');
let LogInLeaveButton = document.getElementById('leave-log-in');

const targetLogIn = document.getElementById('target-to-log-in');
const targetSignUp = document.getElementById('target-to-sign-up');

signUpButton.addEventListener('click', () => {
  signUpBlock.style.cssText = `
    display: block;
  `;
})

signUpLeaveButton.addEventListener('click', () => {
  signUpBlock.style.cssText = `
    display: none;
  `;
})

LogInButton.addEventListener('click', () => {
  logInBlock.style.cssText = `
    display: block;
  `;
})

LogInLeaveButton.addEventListener('click', () => {
  logInBlock.style.cssText = `
    display: none;
  `;
})

targetLogIn.onclick = () => {
  signUpBlock.style.cssText = `
    display: none;
  `;
  logInBlock.style.cssText = `
    display: block;
  `;
};

targetSignUp.onclick = () => {
  signUpBlock.style.cssText = `
    display: block;
  `;
  logInBlock.style.cssText = `
    display: none;
  `;
}
