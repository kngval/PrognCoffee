const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.main-container');
const info = document.querySelectorAll('.content');


about.addEventListener('click', function(e){
   const id = e.target.dataset.id;

   if(id) {
        btns.forEach(function(btn){
            btn.classList.remove('active');
            e.target.classList.add('active');
        });

        info.forEach(function(infos) {
            infos.classList.remove('active');
        })
        const element = document.getElementById(id);
        element.classList.add('active');
      }
   
});