const emo = ["💣","💵","💵","💵","💵","💵","💵","💵","💵","💵","💵","💵","💵","💵","💵","💵","💵","💵","💵","💵","💵","💵","💵","💵","💵",];
var shuffle = emo.sort(() => (Math.random() > .5) ? 1:-1);
const restart = document.querySelector('#restart');
const modal = document.querySelector('.modal');
const play = document.querySelector('#play');
const points = document.querySelector('#points');
const result = document.querySelector('#win-or-lose');
const hidden = document.querySelector('#hidden');
const modalPoints = document.querySelector('#modalPoints');

let num = 0;

for (let i = 0; i < emo.length; i++){
    let box = document.createElement('div');
    box.className = "content";
    box. innerHTML = shuffle[i];


    box.addEventListener('click', event =>{

        if(box.classList.contains('boxOpen')){ // if the box contains the boxOpen list, nothing will happen. It fixes the clickable box even tho it's open already
            return;
        }

        box.classList.add('boxOpen'); // makes the ::after rotate180 deg when click


        if(box.innerHTML == "💣"){
            setTimeout(() =>{
                modalPoints.textContent = points.textContent;
                modal.style.display = "flex";
            }, 400); 
        } else if(box.innerHTML == "💵"){
            num +=  100;
            console.log("Current points: " + num);
        }

        if(document.querySelectorAll('.boxOpen').length == emo.length - 1) {
            setTimeout(()=>{
                result.innerHTML = "You Win!!";
                modalPoints.innerHTML = points.textContent;
                modal.style.display = 'flex';
            }, 400);
        }

        points.textContent = "Points: " + new Intl.NumberFormat().format(num); //  new Intl.NumberFormat().format(num) | this code is to add commo to numbers
    })

    document.querySelector('.inside').appendChild(box);

    hidden.addEventListener('click', ()=>{
    box.classList.toggle('hidden');
    })
}

play.addEventListener('click', ()=>{ // reload the window when clicked
    window.location.reload();
})


