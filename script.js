const emo = ["💣","💵","💵","💵","💵","💵","💵","💵","💵","💵","💵","💵","💵","💵","💵","💵",];
var shuffle = emo.sort(() => (Math.random() > .5) ? 1:-1);
const restart = document.querySelector('#restart');
const modal = document.querySelector('.modal');
const play = document.querySelector('#play');
const points = document.querySelector('#points');

let num = 0;



for (let i = 0; i < emo.length; i++){
    let box = document.createElement('div');
    box.className = "content";
    box. innerHTML = shuffle[i];


    box.addEventListener('click', event =>{
        box.classList.add('boxOpen');

        if(box.innerHTML == "💣"){
            setTimeout(() =>{
                modal.style.display = "flex";
            }, 400); 
        } else if(box.innerHTML == "💵"){
            num +=  100;
            points.textContent = "Points: " + num; 
        }
    })

    document.querySelector('.inside').appendChild(box);
}

play.addEventListener('click', ()=>{
    window.location.reload();
})
