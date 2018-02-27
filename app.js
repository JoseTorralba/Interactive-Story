// JOSE'S CONST
const leftButton = document.getElementById('leftBtn');
const rightButton = document.getElementById('rightBtn');

const leftButton2 = document.getElementById('leftBtn2');
const rightButton2 = document.getElementById('rightBtn2');

const leftButton3 = document.getElementById('leftBtn3');
const rightButton3 = document.getElementById('rightBtn3');

const leftButton4 = document.getElementById('leftBtn4');
const rightButton4 = document.getElementById('rightBtn4');

const leftButton5 = document.getElementById('leftBtn5');
const rightButton5 = document.getElementById('rightBtn5');

// JONATHAN'S CONST
const leftButton6 = document.getElementById('leftBtn6');
const rightButton6 = document.getElementById('rightBtn6');

const leftButton7 = document.getElementById('leftBtn7');
const rightButton7 = document.getElementById('rightBtn7');

const leftButton8 = document.getElementById('leftBtn8');
const rightButton8 = document.getElementById('rightBtn8');

const leftButton9 = document.getElementById('leftBtn9');
const rightButton9 = document.getElementById('rightBtn9');

const leftButton10 = document.getElementById('leftBtn10');
const rightButton10 = document.getElementById('rightBtn10');

// JOSE'S SET OF CHOICES

// CHOICES 1
leftButton.onclick = function () {
    const answer = document.getElementById('buttons').value;

    document.getElementById('questionTwo').style.display = "block";
	document.getElementById('questionOne').style.display = "none";
};

rightButton.onclick = function () {
    const answer = document.getElementById('buttons').value;

    document.getElementById('deathOne').style.display = "block";
	document.getElementById('questionOne').style.display = "none";
};


// CHOICES 2
leftButton2.onclick = function () {
    const answer = document.getElementById('buttons').value;

    document.getElementById('questionThree').style.display = "block";
	document.getElementById('questionTwo').style.display = "none";
};

rightButton2.onclick = function () {
    const answer = document.getElementById('buttons').value;

    document.getElementById('deathTwo').style.display = "block";
	document.getElementById('questionTwo').style.display = "none";
};


// CHOICES 3
leftButton3.onclick = function () {
    const answer = document.getElementById('buttons').value;

    document.getElementById('questionFour').style.display = "block";
	document.getElementById('questionThree').style.display = "none";
};

rightButton3.onclick = function () {
    const answer = document.getElementById('buttons').value;

    document.getElementById('deathThree').style.display = "block";
	document.getElementById('questionThree').style.display = "none";
};


// CHOICES 4
leftButton4.onclick = function () {
    const answer = document.getElementById('buttons').value;

    document.getElementById('questionFive').style.display = "block";
	document.getElementById('questionFour').style.display = "none";
};

rightButton4.onclick = function () {
    const answer = document.getElementById('buttons').value;

    document.getElementById('deathFour').style.display = "block";
	document.getElementById('questionFour').style.display = "none";
};


// CHOICES 5
leftButton5.onclick = function () {
    const answer = document.getElementById('buttons').value;

    document.getElementById('questionSix').style.display = "block";
	document.getElementById('questionFive').style.display = "none";
};

rightButton5.onclick = function () {
    const answer = document.getElementById('buttons').value;

    document.getElementById('deathFive').style.display = "block";
	document.getElementById('questionFive').style.display = "none";
};


// JONATHAN'S SET OF CHOICES

// CHOICES 6
leftButton6.onclick = function () {
    const answer = document.getElementById('buttons').value;

    document.getElementById('questionSeven').style.display = "block";
	document.getElementById('questionSix').style.display = "none";
};

rightButton6.onclick = function () {
    const answer = document.getElementById('buttons').value;

    document.getElementById('deathSix').style.display = "block";
	document.getElementById('questionSix').style.display = "none";
};


// CHOICES 7
leftButton7.onclick = function () {
    const answer = document.getElementById('buttons').value;

    document.getElementById('questionEight').style.display = "block";
	document.getElementById('questionSeven').style.display = "none";
};

rightButton7.onclick = function () {
    const answer = document.getElementById('buttons').value;

    document.getElementById('deathSeven').style.display = "block";
	document.getElementById('questionSeven').style.display = "none";
};


// CHOICES 8
leftButton8.onclick = function () {
    const answer = document.getElementById('buttons').value;

    document.getElementById('questionNine').style.display = "block";
	document.getElementById('questionEight').style.display = "none";
};

rightButton8.onclick = function () {
    const answer = document.getElementById('buttons').value;

    document.getElementById('deathEight').style.display = "block";
	document.getElementById('questionEight').style.display = "none";
};


// CHOICES 9
leftButton9.onclick = function () {
    const answer = document.getElementById('buttons').value;

    document.getElementById('questionTen').style.display = "block";
	document.getElementById('questionNine').style.display = "none";
};

rightButton9.onclick = function () {
    const answer = document.getElementById('buttons').value;

    document.getElementById('deathNine').style.display = "block";
	document.getElementById('questionNine').style.display = "none";
};


// CHOICES 10
leftButton10.onclick = function () {
    const answer = document.getElementById('buttons').value;

    document.getElementById('ending').style.display = "block";
	document.getElementById('questionTen').style.display = "none";
};

rightButton10.onclick = function () {
    const answer = document.getElementById('buttons').value;

    document.getElementById('deathTen').style.display = "block";
	document.getElementById('questionTen').style.display = "none";
};




