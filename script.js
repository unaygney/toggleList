
let buttons = document.querySelectorAll('button')




buttons.forEach(button => {
    button.addEventListener('click' ,  () => {
      button.parentNode.classList.toggle('active')  // Here, using ParentNode, we added an ".active" class to the parent element "container-item".
    })

    
});


