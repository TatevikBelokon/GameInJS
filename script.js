const easy = "easy"; 
const middle = "middle";
const hard = "hard";
let checked = easy;
const mainPage = document.querySelector('.main');
const easyLevelPage = document.querySelector('.easy-level');
const middleLevelPage = document.querySelector('.middle-level');
const hardLevelPage = document.querySelector('.hard-level');
const button = document.querySelector('.main__btn');

document.getElementById(easy).classList.add("active");	
hideAllLevels();

function hideAllLevels(){
	easyLevelPage.classList.add('hide');
	middleLevelPage.classList.add('hide');
	hardLevelPage.classList.add('hide');
}

document.getElementById(easy).addEventListener('click', level => {	
	document.getElementById(middle).classList.remove("active");
	document.getElementById(hard).classList.remove("active");
	level.target.className = "active";	
	checked = easy;
});
document.getElementById(middle).addEventListener('click', level => {		
	document.getElementById(easy).classList.remove("active");
	document.getElementById(hard).classList.remove("active");
	level.target.className = "active";	
	checked = middle;
});
document.getElementById(hard).addEventListener('click', level => {
	document.getElementById(easy).classList.remove("active");
	document.getElementById(middle).classList.remove("active");	
	level.target.className = "active";	
	checked = hard;
});

button.addEventListener('click', () => {		
	mainPage.classList.add('hide');
	if(checked === easy)  {easyLevelPage.classList.remove('hide')}
	if(checked === middle){middleLevelPage.classList.remove('hide')}
	if(checked === hard)  {hardLevelPage.classList.remove('hide')}		
});


const cardBugSrc = "img/Карта с багом.png";
const cardGameOverSrc = "img/Конец игры.png";
const cards = document.querySelectorAll(".flip-card");

cards.forEach( function(card){
	card.addEventListener('click', () => {
		if (card.classList.contains('flip')) {	
			cards.forEach(card => card.classList.remove('non-clickable'));		
			card.classList.remove('flip');			
			hideAllLevels();
			checked = easy;
			mainPage.classList.remove('hide');
		} 
		else {
			const cardImg = card.lastElementChild.lastElementChild;
			if (Math.floor(Math.random() * 2) === 0){		
				cardImg.src = cardBugSrc;
			}
			else{
				cardImg.src = cardGameOverSrc;
			}
		    card.classList.add('flip');

		    cards.forEach((card) => {
		    	if (!card.classList.contains('flip')) {
		    		card.classList.add('non-clickable')
		    	}
		    });
		}
	});       
});




