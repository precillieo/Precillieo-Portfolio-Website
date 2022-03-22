function openNav() {
    document.getElementById("Nav").style.width = "100%";
}
        
function closeNav() {
    document.getElementById("Nav").style.width = "0%";
}

const accordion = document.getElementsByClassName('pcontainer');
    for (i=0; i<accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active')
    })
}