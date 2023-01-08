const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const header = document.querySelector('header')

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'black';

       /* header.style.background = 'lightBlue';
          header.style.color = 'grey'; */

        body.style.transition = '1s';
    }else{
        body.style.background = 'black';
        body.style.color = 'white';
    /* header.style.background = 'grey';
        header.style.color = 'darkblue'; */

         body.style.transition = '1s' ;
    }
});
