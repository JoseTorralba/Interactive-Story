// JOSE'S CONST
const leftButton = document.getElementById('leftBtn');
const rightButton = document.getElementById('rightBtn');

const leftButton2 = document.getElementById('leftBtn2');
const rightButton2 = document.getElementById('rightBtn2');

const leftButton3 = document.getElementById('leftBtn3');
const rightButton3 = document.getElementById('rightBtn3');



// JONATHAN'S CONST




// Jose's set of choices

// Question 1
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


// Question 2
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


// Question 3
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




// Question 4
leftButton4.onclick = function () {

    const answer = document.getElementById('buttons').value;

    document.getElementById('questionFour').style.display = "block";
	document.getElementById('questionThree').style.display = "none";
};

rightButton4.onclick = function () {

    const answer = document.getElementById('buttons').value;

    document.getElementById('deathFour').style.display = "block";
	document.getElementById('questionFour').style.display = "none";
};




// Jonathans's set of choices









































