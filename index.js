
const toggleButton = document.querySelector('.toggle-bar')
const navigation= document.querySelector('.navigation')

toggleButton.addEventListener('click',()=>{
    navigation.classList.toggle('active')
})