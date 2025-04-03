
searchbtn = document.querySelector('.searchbtn')
searchbox = document.querySelector('.searchbox')
menu = document.querySelector('.menu')
menubox = document.querySelector('.menubox')

header = document.querySelector('header')

searchbtn.addEventListener('click', () => {
    searchbox.classList.toggle('searchboxenable')


})

menu.addEventListener('click', () => {

    menubox.classList.toggle('menuboxenable')



})
const images = [
    "/images/121213.jpg",
    "/images/121214.jpg",
    "/images/1.jpg"
]
index = 0;
const slideimage = () => {
    duration = header.querySelector('.duration')
    genre = header.querySelector('.genre')
    title = header.querySelector('.title')
    description = header.querySelector('.description')
    alldot=document.querySelectorAll('.dot')

    header.style.background = `url('${images[index]}') no-repeat center`;
    header.style.backgroundSize = "cover";
    if (index == 1) {
        duration.innerHTML = `<h2>Duration:1h 57min`
        genre.innerHTML = `
        <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
        7.3 Action/Sci-Fi/Comedy
        `
        title.innerHTML = `
          Ant-Man
        `
        description.innerHTML = `
        Ant-Man (2015) is a Marvel superhero film about Scott Lang, a skilled thief who is given a second chance when scientist Dr. Hank Pym recruits him to don the Ant-Man suit.
         Using Pym’s shrinking technology.
        
        `
        alldot[1].style.backgroundColor="white"
        alldot[0].style.backgroundColor="rgba(156, 156, 150, 0.5)"



    }
    else if (index == 2) {
        duration.innerHTML = `<h2>Duration:2h 09min`
        genre.innerHTML = `
        <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
        9.2 Comedy/Adventure/Crime
        `
        title.innerHTML = `
         Caribbean 5

        `
        description.innerHTML = `
        Pirates of the Caribbean: Dead Men Tell No Tales (2017) is the fifth installment in the Pirates of the Caribbean series. It follows Captain Jack Sparrow, who is hunted by the ghostly Captain Salazar and 
        his crew, who have escaped from the Devil’s Triangle. 
        `
        alldot[2].style.backgroundColor="white"
        alldot[1].style.backgroundColor="rgba(156, 156, 150, 0.5)"
    }
    else {
        duration.innerHTML = `<h2>Duration:1h 47min`
        genre.innerHTML = `
        <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
        6.5 Action/Adventure/Sci-Fi
        `
        title.innerHTML = `
         Rampage
        `
        description.innerHTML = `
          Rampage (2018) is a sci-fi action film starring Dwayne Johnson as Davis Okoye, a
        primatologist who shares a
        deep bond with a rare albino gorilla named George. When a rogue genetic experiment mutates George and two other
        animals into monstrous creatures.
        `
        alldot[0].style.backgroundColor="white"
        alldot[2].style.backgroundColor="rgba(156, 156, 150, 0.5)"
    }
    index = (index + 1) % images.length;




}
slideimage();
setInterval(slideimage, 3500)


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    
    spaceBetween: 10,
    breakpoints:{
        980:{
            slidesPerView:8
        },
        1460:{
            slidesPerView:10    
        },

    },
   
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  });
var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    
    spaceBetween: 15,
    breakpoints:{
        550:{
            slidesPerView:4
        },
        650:{
            slidesPerView:5
        },
        1000:{
            slidesPerView:6
        },
        1200:{
            slidesPerView:9
        }


    },
    loop:true,
   
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  });

 

//     genrebuttons=document.querySelectorAll('.mySwiper button');
//   genrebuttons.forEach(button => {
    
//     button.style.backgroundColor=""
    
//   });
    
genrebuttons=document.querySelectorAll('.mySwiper button')
genrebuttons.forEach(button => {
    button.addEventListener('click',()=>{
        console.log(button)
        button.classList.toggle('red');
    })
    
});

volumeicon=document.querySelector('.volume')
volumerange=document.querySelector('.volumerange')
volumeicon.addEventListener('click',()=>{
    volumerange.classList.toggle('visible')
   
    
})




