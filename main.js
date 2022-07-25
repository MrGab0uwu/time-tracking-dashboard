import './index.scss';
import userPicture from './assets/images/image-jeremy.png';
import ellipsis from './assets/images/icon-ellipsis.svg';
import userData from './data.json';

const dashboard = document.querySelector('.dashboard');

function loadUserTime(date = 'weekly') {

	let componentList = '';
	const calendary = {
		daily: 'Day',
		weekly: 'Week',
		monthly: 'Month',
	};

	for (let i = 0; i < 6; i++) {
		const { title } = userData[i];

		const { current, previous } = userData[i].timeframes[date];

		componentList += `<div class="card card--${title.split(' ').join('')}">
        <article class="card__info">
          <header class="card__header">
            <h2 class="card__title">${title}</h2>
            <img class="card__dots" src="${ellipsis}" alt="User picture">
          </header>
          <div class="card__time-wrapper">
            <p class="card__time-current">${current}hrs</p>
            <p class="card__time-previous">Last ${
							calendary[date]
						} - ${previous}hrs</p>
          </div>
        </article>
      </div>`;
	}

	dashboard.innerHTML = `
  <section class="time-tracking">

    <div class="card card--user">
      <header class="card__user-info">
        <picture class="card__user-picture">
          <source srcset="${userPicture}" width="100px">
          <img src="${userPicture}" alt="User picture">
        </picture>
        <div class="card__user-title-wrapper">
          <h1 class="card__user-title">Report for</h1>
          <span class="card__user-name">Jeremy Robson</span> 
        </div>
      </header>
      <nav class="time">
        <ul class="time__selection">
          <li id="daily">Daily</li>
          <li id="weekly" class="active">Weekly</li>
          <li id="monthly">Monthly</li>
        </ul>
      </nav>
    </div>

    ${componentList}

  </section>
  `;

	const dateBtn = document.querySelectorAll('.time__selection li');

	const timeSelection = (date) => {
		const currentTags = document.querySelectorAll('.card__time-current');
		const previousTags = document.querySelectorAll('.card__time-previous');

		for (let i = 0; i < 6; i++) {
			const { current, previous } = userData[i].timeframes[date];

			currentTags[i].textContent = `${current}hrs`;

			previousTags[i].textContent = `Last ${calendary[date]} - ${previous}hrs`;
		}
	};

	dateBtn.forEach((elm) => {
		elm.addEventListener('click', () => {
			resetStatus(dateBtn);
			elm.classList.add('active');
			timeSelection(elm.id);
		});
	});
}

loadUserTime();

const resetStatus = (btns) =>
	btns.forEach((elm) => elm.classList.remove('active'));

{
	/* <article class="card card--Work">
<section class="card__info">
  <header class="card__header">
    <h2 class="card__title">Work</h2>
    <img class="card__dots" src="${ellipsis}" alt="User picture">
  </header>
  <div class="card__time-wrapper">
    <p class="card__time-current">32hrs</p>
    <p class="card__time-previous">Last Week - 36hrs</p>
  </div>
</section>
</article>

<article class="card card--Play">
<section class="card__info">
  <header class="card__header">
    <h2 class="card__title">Play</h2>
    <img class="card__dots" src="${ellipsis}" alt="User picture">
  </header>
  <div class="card__time-wrapper">
    <p class="card__time-current">32hrs</p>
    <p class="card__time-previous">Last Week - 36hrs</p>
  </div>
</section>
</article>

<article class="card card--Study">
<section class="card__info">
  <header class="card__header">
    <h2 class="card__title">Study</h2>
    <img class="card__dots" src="${ellipsis}" alt="User picture">
  </header>
  <div class="card__time-wrapper">
    <p class="card__time-current">32hrs</p>
    <p class="card__time-previous">Last Week - 36hrs</p>
  </div>
</section>
</article>

<article class="card card--Exercise">
<section class="card__info">
  <header class="card__header">
    <h2 class="card__title">Exercise</h2>
    <img class="card__dots" src="${ellipsis}" alt="User picture">
  </header>
  <div class="card__time-wrapper">
    <p class="card__time-current">32hrs</p>
    <p class="card__time-previous">Last Week - 36hrs</p>
  </div>
</section>
</article>

<article class="card card--Social">
<section class="card__info">
  <header class="card__header">
    <h2 class="card__title">Social</h2>
    <img class="card__dots" src="${ellipsis}" alt="User picture">
  </header>
  <div class="card__time-wrapper">
    <p class="card__time-current">32hrs</p>
    <p class="card__time-previous">Last Week - 36hrs</p>
  </div>
</section>
</article>

<article class="card card--SelfCare">
<section class="card__info">
  <header class="card__header">
    <h2 class="card__title">Self Care</h2>
    <img class="card__dots" src="${ellipsis}" alt="User picture">
  </header>
  <div class="card__time-wrapper">
    <p class="card__time-current">32hrs</p>
    <p class="card__time-previous">Last Week - 36hrs</p>
  </div>
</section>
</article> */
}
