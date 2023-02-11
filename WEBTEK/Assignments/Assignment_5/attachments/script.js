/* Part 2 */
for(let n = 1; n < 21; n++) {
    console.log(n);
}
/* Part 3 */
console.log('PART 3')

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

for(num in numbers) {   
    if(numbers[num] % 3 == 0 & numbers[num] % 5 == 0) {
        console.log("eplekake");
    }
    else if(numbers[num] % 3 == 0) {
        console.log("eple");
    }
    else if(numbers[num] % 5 == 0) {
        console.log("kake");
    }
    else {
        console.log(numbers[num]);
    }
}

/* Part 4 */

document.getElementById('title').innerText = 'Hello, JavaScript';

/* Part 5 */

function changeDisplay () {
    document.getElementById('magic').style.display = "none";
}

function changeVisibility () {
    document.getElementById('magic').style.visibility = "hidden";
    document.getElementById('magic').style.display = "block";

}

function reset () {
    document.getElementById('magic').style.visibility = "visible"
    document.getElementById('magic').style.display = "block";
}

/* Part 6 */
let list = document.getElementById('tech');

const technologies = [
        'HTML5',
    'CSS3',
    'JavaScript',
    'Python',
    'Java',
    'AJAX',
    'JSON',
    'React',
    'Angular',
    'Bootstrap',    
    'Node.js'
];

for(tech in technologies){
    let elementType = document.createElement("li");
    let elementText = document.createTextNode(technologies[tech]);
    elementType.appendChild(elementText);
    document.getElementById("tech").appendChild(elementType);
}
