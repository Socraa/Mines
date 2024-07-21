const emo = [];
// var shuffle = emo.sort(() => (Math.random() > .5) ? 1:-1);
const modal = document.querySelector('.modal');
const play = document.querySelector('#play'); // modal button "play again"
const points = document.querySelector('#points'); // points
const result = document.querySelector('#win-or-lose'); // modal result. win or lose
const hidden = document.querySelector('#hidden'); //secret
const modalPoints = document.querySelector('#modalPoints'); // modal points
const inside = document.querySelector('.inside'); // where the created div will be
const bombInput = document.querySelector('#bombs input'); // the number of bombs you choose

let num = 0;

function generateEmo(bombCount){
    emo.length = 0; // reset the lenght of the emo so that it will not add up

    // it will create an Array with the an empty slots(depends on how many is in the parameter) ex:Array(3) | ["","",""];
    // then it will fill it up by what's in the fill parameter. ex: [💣,💣,💣];
    // then it will be push to the emo.push | You need to use the spread parameter becuase if not, 
    // it will add it's own created arraay. ex: [💵,💵,[💣,💣,💣]];
    emo.push(...Array(bombCount).fill('💣'));  
    emo.push(...Array(25 - bombCount).fill('💵')); // if you understand the first one, you'll understand this too
}

function shuffle(){
    return emo.sort(() => (Math.random() > .5) ? 1:-1); // it will shuffle what is in the emo Array
}

function rederBoxes(){
    inside.innerHTML = '';
    const shuffleEmo = shuffle();


    for (let i = 0; i < shuffleEmo.length; i++){
        let box = document.createElement('div');
        box.className = "content";
        box. innerHTML = shuffleEmo[i];

        box.addEventListener('click', event =>{

            if(box.classList.contains('boxOpen')){ // if the box contains the boxOpen list, nothing will happen. It fixes the clickable box even tho it's open already
                return;
            }

            box.classList.add('boxOpen'); // makes the ::after rotate180 deg when click


            if(box.innerHTML == "💣"){
                setTimeout(() =>{
                    modalPoints.textContent = points.textContent;
                    modal.style.display = "flex";
                }, 200); 
            } else if(box.innerHTML == "💵"){
                num +=  100;
                console.log("Current points: " + num);
            }

            if(document.querySelectorAll('.boxOpen').length == emo.length - bombInput.value) {
                setTimeout(()=>{
                    result.innerHTML = "You Win!!";
                    modalPoints.innerHTML = points.textContent;
                    modal.style.display = 'flex';
                }, 400);
            }

            points.textContent = "Points: " + new Intl.NumberFormat().format(num); //  new Intl.NumberFormat().format(num) | this code is to add commo to numbers
        })

        inside.appendChild(box);

        }
    }
// When the bombInput is changed, it will turn into a integer using "parseInt(bombInput.value)"
// the reason for the 10 is because it's a radix base.
// example:
// 2 for binary (0 and 1)
// 8 for octal (0-7)
// 10 for decimal (0-9)
// 16 for hexadecimal (0-9 and A-F) 
// and the bombInput will became the bombCount and the bombCount will serve as a paramater in generateEmo
// so if you input "4" an array will be Array(4) creating it 4 slots
bombInput.addEventListener('change',()=>{ 
    const bombCount = parseInt(bombInput.value, 10);
    generateEmo(bombCount);
    rederBoxes();
})


hidden.addEventListener('click', ()=>{ // hides the boxes. you fucking know how this bru
    document.querySelectorAll('.content').forEach(box =>{
        box.classList.toggle('hidden');
    });
});

play.addEventListener('click', ()=>{ // reload the window when clicked
    window.location.reload();
})

generateEmo(parseInt(bombInput.value, 10));
rederBoxes();


