const emo = ["💣","💣","💵","💵","💵","💵","💵","💵","💵","💵","💵","💵","💵","💵","💵","💵",];
var shuffle = emo.sort(() => (Math.random() > .5) ? 1:-1);


for (let i = 0; i < emo.length; i++){
    let box = document.createElement('div');
    box.className = "content";
    box. innerHTML = shuffle[i];


    box.addEventListener('click', event =>{
        box.classList.add('boxOpen');

        if(box.innerHTML == "💣"){
            setTimeout(() =>{
                alert("Game Over");
            }, 200)
        }
    })

    document.querySelector('.inside').appendChild(box);
}
