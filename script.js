const sections = document.querySelector('.sections')

sections.addEventListener('click', e => {
    if(!e.target.matches('.question')) return

    const selectedSection = e.target.closest('.section')

    const sectionsArray = [...sections.querySelectorAll('.section')]
    sectionsArray.forEach(section => {
        const answer = section.querySelector('.answer')
        const icon = section.querySelector('.arrow')
        const question = section.querySelector('.question')

        answer.classList.add('hidden')
        icon.classList.remove('rotated')
        question.classList.remove('selected')
        
        if(section === selectedSection) {
            answer.classList.remove('hidden')
            icon.classList.add('rotated')
            question.classList.add('selected')

        }
    })

})