const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
    question.addEventListener('click', (e) => {
        const active = document.querySelector('.question--active');
        if(active){
            active.classList.remove('question--active');
        }
        if(active !== question){
            question.classList.add('question--active');
        }
    })
});