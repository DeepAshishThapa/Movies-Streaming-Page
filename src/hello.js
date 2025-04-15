
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
    alldot = document.querySelectorAll('.dot')

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
        alldot[1].style.backgroundColor = "white"
        alldot[0].style.backgroundColor = "rgba(156, 156, 150, 0.5)"



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
        alldot[2].style.backgroundColor = "white"
        alldot[1].style.backgroundColor = "rgba(156, 156, 150, 0.5)"
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
        alldot[0].style.backgroundColor = "white"
        alldot[2].style.backgroundColor = "rgba(156, 156, 150, 0.5)"
    }
    index = (index + 1) % images.length;




}
slideimage();
setInterval(slideimage, 3500)


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,

    spaceBetween: 10,
    breakpoints: {
        980: {
            slidesPerView: 8
        },
        1460: {
            slidesPerView: 10
        },

    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});






genrebuttons = document.querySelectorAll('.mySwiper button')
actionbox = document.querySelector('.actionbox')
genrebuttons.forEach(button => {
    button.addEventListener('click', () => {
        
        button.classList.toggle('red');


    })

});

moviecarousal = document.querySelector('#moviecarousal')
leftarrow = document.querySelector('#leftarrow')
rightarrow = document.querySelector('#rightarrow')

leftarrow.addEventListener('click', () => {
    moviecarousal.scrollLeft -= 150;
})
rightarrow.addEventListener('click', () => {
    moviecarousal.scrollLeft += 150;
})

const movies = [{
    id: 36,
    img: "/mimg/the gazi attck.jpg",
    down_img: "img/the-ghazi-attack-poster.webp",
    title: "The Gazi Attack",
    letter: "t",
    genre1: "action",
    genre2: "none",
    genre3: "none",
    genre4: "biography",
    genre5: "animation",
    genre6: "none",
    genre7: "documentary",
    genre8: "none",
    genre9: "18+",
    genre10: "scifi",
    genre11: "horor",
    year: 2021,
    rate: 9.9,
    url: "the_gazi_attack.html",
    tppr: "trend",
    msot: "movie",
    screen1: "img/gazi1.jpg",
    screen2: "img/gazi2.jpg",
    screen3: "img/gazi3.jpg",
    ph420: "img/the-ghazi-attack-poster.webp",
    ph720: "mimg/comndo.jpg",
    ph1080: "img/the-ghazi-attack-poster.webp",
},
{
    id: 35,
    img: "/mimg/comndo.jpg",
    title: "Comndo",
    letter: "c",
    genre1: "action",
    genre2: "none",
    genre3: "none",
    genre4: "biography",
    genre5: "animation",
    genre6: "none",
    genre7: "documentary",
    genre8: "none",
    genre9: "18+",
    genre10: "scifi",
    genre11: "horor",
    year: 2022,
    rate: 9.3,
    url: "themanor.html",
    tppr: "trend",
    msot: "movie"
},
{
    id: 34,
    img: "/mimg/caption phillips.jpg",
    title: "Caption Phillips",
    letter: "c",
    genre1: "action",
    genre2: "none",
    genre3: "none",
    genre4: "biography",
    genre5: "animation",
    genre6: "none",
    genre7: "documentary",
    genre8: "none",
    genre9: "18+",
    genre10: "scifi",
    genre11: "horor",
    year: 2020,
    rate: 9.1,
    url: "themanor.html",
    tppr: "trend",
    msot: "movie"
},
{
    id: 33,
    img: "/mimg/bloodshoot.jpg",
    title: "Blood Shoot",
    letter: "b",
    genre1: "action",
    genre2: "none",
    genre3: "none",
    genre4: "biography",
    genre5: "animation",
    genre6: "none",
    genre7: "documentary",
    genre8: "none",
    genre9: "18+",
    genre10: "scifi",
    genre11: "horor",
    year: 2021,
    rate: 9.7,
    url: "themanor.html",
    tppr: "trend",
    msot: "movie"
},
{
    id: 32,
    img: "/mimg/blade.jpg",
    title: "Blade",
    letter: "b",
    genre1: "action",
    genre2: "none",
    genre3: "none",
    genre4: "biography",
    genre5: "animation",
    genre6: "none",
    genre7: "documentary",
    genre8: "none",
    genre9: "18+",
    genre10: "scifi",
    genre11: "horor",
    year: 2021,
    rate: 7.7,
    url: "themanor.html",
    tppr: "trend",
    msot: "movie"
},
{
    id: 31,
    img: "/mimg/takepoint.webp",
    title: "Take Point",
    letter: "t",
    genre1: "action",
    genre2: "none",
    genre3: "none",
    genre4: "biography",
    genre5: "animation",
    genre6: "none",
    genre7: "documentary",
    genre8: "none",
    genre9: "18+",
    genre10: "scifi",
    genre11: "horor",
    year: 2022,
    rate: 7.9,
    url: "themanor.html",
    tppr: "trend",
    msot: "movie"
},
{
    id: 30,
    img: "/mimg/battel drown.jpg",
    title: "Battel Drown",
    letter: "b",
    genre1: "action",
    genre2: "none",
    genre3: "none",
    genre4: "biography",
    genre5: "animation",
    genre6: "comady",
    genre7: "documentary",
    genre8: "none",
    genre9: "18+",
    genre10: "scifi",
    genre11: "horor",
    year: 2022,
    rate: 8.9,
    url: "themanor.html",
    tppr: "trend",
    msot: "movie"
},
{
    id: 29,
    img: "/mimg/bagi.jpg",
    title: "Bagi",
    letter: "b",
    genre1: "action",
    genre2: "none",
    genre3: "none",
    genre4: "biography",
    genre5: "animation",
    genre6: "comady",
    genre7: "documentary",
    genre8: "none",
    genre9: "18+",
    genre10: "scifi",
    genre11: "horor",
    year: 2022,
    rate: 8.8,
    url: "themanor.html",
    tppr: "trend",
    msot: "movie"
},
{
    id: 28,
    img: "/mimg/bad boys.jpg",
    title: "Bad Boys",
    letter: "b",
    genre1: "action",
    genre2: "none",
    genre3: "none",
    genre4: "biography",
    genre5: "animation",
    genre6: "comady",
    genre7: "documentary",
    genre8: "none",
    genre9: "18+",
    genre10: "scifi",
    genre11: "horor",
    year: 2021,
    rate: 6.8,
    url: "themanor.html",
    tppr: "trend",
    msot: "movie"
},
{
    id: 27,
    img: "/mimg/ateet.jpg",
    title: "Ateet",
    letter: "a",
    genre1: "action",
    genre2: "none",
    genre3: "none",
    genre4: "biography",
    genre5: "animation",
    genre6: "comady",
    genre7: "documentary",
    genre8: "none",
    genre9: "18+",
    genre10: "scifi",
    genre11: "horor",
    year: 2022,
    rate: 9.7,
    url: "themanor.html",
    tppr: "trend",
    msot: "movie"
},
{
    id: 26,
    img: "/mimg/aqwaman.jpg",
    title: "Aqwaman",
    letter: "a",
    genre1: "action",
    genre2: "crime",
    genre3: "adeventure",
    genre4: "biography",
    genre5: "animation",
    genre6: "comady",
    genre7: "documentary",
    genre8: "none",
    genre9: "18+",
    genre10: "scifi",
    genre11: "horor",
    year: 2020,
    rate: 9.6,
    url: "themanor.html",
    tppr: "trend",
    msot: "movie"
},
{
    id: 25,
    img: "/mimg/angel.jpg",
    title: "Angel",
    letter: "a",
    genre1: "action",
    genre2: "crime",
    genre3: "adeventure",
    genre4: "biography",
    genre5: "animation",
    genre6: "comady",
    genre7: "documentary",
    genre8: "none",
    genre9: "18+",
    genre10: "scifi",
    genre11: "horor",
    year: 2022,
    rate: 8.8,
    url: "themanor.html",
    tppr: "trend",
    msot: "movie"
},
{
    id: 24,
    img: "/mimg/allahdin.jpg",
    title: "Allahdin",
    letter: "a",
    genre1: "action",
    genre2: "crime",
    genre3: "adeventure",
    genre4: "biography",
    genre5: "animation",
    genre6: "comady",
    genre7: "documentary",
    genre8: "none",
    genre9: "18+",
    genre10: "scifi",
    genre11: "horor",
    year: 2021,
    rate: 8.2,
    url: "themanor.html",
    tppr: "trend",
    msot: "movie"
},
{
    id: 23,
    img: "/mimg/air.jpg",
    title: "Air",
    letter: "a",
    genre1: "none",
    genre2: "crime",
    genre3: "none",
    genre4: "biography",
    genre5: "animation",
    genre6: "comady",
    genre7: "documentary",
    genre8: "none",
    genre9: "18+",
    genre10: "scifi",
    genre11: "horor",
    year: 2021,
    rate: 9.1,
    url: "themanor.html",
    tppr: "trend",
    msot: "movie"
},
{
    id: 22,
    img: "/mimg/acceleration.jpg",
    title: "Acceler ration",
    letter: "a",
    genre1: "none",
    genre2: "crime",
    genre3: "adeventure",
    genre4: "biography",
    genre5: "animation",
    genre6: "comady",
    genre7: "documentary",
    genre8: "none",
    genre9: "18+",
    genre10: "scifi",
    genre11: "horor",
    year: 2020,
    rate: 9.9,
    url: "themanor.html",
    tppr: "trend",
    msot: "movie"
},
{
    id: 21,
    img: "/mimg/abcd.jpg",
    title: "ABCD",
    letter: "a",
    genre1: "none",
    genre2: "crime",
    genre3: "adeventure",
    genre4: "biography",
    genre5: "animation",
    genre6: "comady",
    genre7: "documentary",
    genre8: "none",
    genre9: "18+",
    genre10: "scifi",
    genre11: "horor",
    year: 2020,
    rate: 7.9,
    url: "themanor.html",
    tppr: "trend",
    msot: "movie"
},
{
    id: 20,
    img: "/mimg/a perfact.jpg",
    title: "A Pefact",
    letter: "a",
    genre1: "none",
    genre2: "crime",
    genre3: "adeventure",
    genre4: "biography",
    genre5: "animation",
    genre6: "comady",
    genre7: "documentary",
    genre8: "none",
    genre9: "18+",
    genre10: "scifi",
    genre11: "horor",
    year: 2021,
    rate: 6.9,
    url: "themanor.html",
    tppr: "trend",
    msot: "movie"
},
{
    id: 19,
    img: "/mimg/6under.jpg",
    title: "6 Underground",
    letter: "u",
    genre1: "none",
    genre2: "crime",
    genre3: "adeventure",
    genre4: "biography",
    genre5: "animation",
    genre6: "comady",
    genre7: "documentary",
    genre8: "none",
    genre9: "18+",
    genre10: "scifi",
    genre11: "horor",
    year: 2021,
    rate: 9.2,
    url: "themanor.html",
    tppr: "trend",
    msot: "movie"
},
{
    id: 18,
    img: "/mimg/noah.webp",
    title: "Noah",
    letter: "n",
    genre1: "none",
    genre2: "crime",
    genre3: "adeventure",
    genre4: "biography",
    genre5: "animation",
    genre6: "comady",
    genre7: "documentary",
    genre8: "none",
    genre9: "18+",
    genre10: "scifi",
    genre11: "horor",
    year: 2020,
    rate: 8.2,
    url: "themanor.html",
    tppr: "popular",
    msot: "movie"
},
{
    id: 17,
    img: "/mimg/notimethedie.webp",
    title: "No Time The Die",
    letter: "n",
    genre1: "none",
    genre2: "crime",
    genre3: "adeventure",
    genre4: "biography",
    genre5: "animation",
    genre6: "comady",
    genre7: "documentary",
    genre8: "none",
    genre9: "18+",
    genre10: "scifi",
    genre11: "horor",
    year: 2021,
    rate: 8.5,
    url: "themanor.html",
    tppr: "trend",
    msot: "movie",
    upload: "latest"
},
{
    id: 16,
    img: "/mimg/oz.webp",
    title: "OZ",
    letter: "o",
    genre1: "none",
    genre2: "crime",
    genre3: "adeventure",
    genre4: "biography",
    genre5: "animation",
    genre6: "comady",
    genre7: "documentary",
    genre8: "none",
    genre9: "18+",
    genre10: "scifi",
    genre11: "horor",
    year: 2021,
    rate: 8.6,
    url: "themanor.html",
    tppr: "trend",
    msot: "movie"
},
{
    id: 15,
    img: "/mimg/paul.webp",
    title: "Paul",
    letter: "p",
    genre1: "none",
    genre2: "crime",
    genre3: "adeventure",
    genre4: "biography",
    genre5: "animation",
    genre6: "comady",
    genre7: "documentary",
    genre8: "none",
    genre9: "18+",
    genre10: "scifi",
    genre11: "horor",
    year: 2021,
    rate: 9.3,
    url: "themanor.html",
    tppr: "recent",
    msot: "movie",
    upload: "latest"
},
{
    id: 14,
    img: "/mimg/pixels.webp",
    title: "Pixels",
    letter: "p",
    genre1: "none",
    genre2: "crime",
    genre3: "adeventure",
    genre4: "biography",
    genre5: "animation",
    genre6: "comady",
    genre7: "documentary",
    genre8: "none",
    genre9: "18+",
    genre10: "scifi",
    genre11: "horor",
    year: 2020,
    rate: 7.3,
    url: "themanor.html",
    tppr: "popluar",
    msot: "movie"
},
{
    id: 13,
    img: "/mimg/Qismat_2.webp",
    title: "Qismat 2",
    letter: "q",
    genre1: "none",
    genre2: "crime",
    genre3: "adeventure",
    genre4: "biography",
    genre5: "animation",
    genre6: "comady",
    genre7: "documentary",
    genre8: "none",
    genre9: "18+",
    genre10: "scifi",
    genre11: "horor",
    year: 2020,
    rate: 5.8,
    url: "themanor.html",
    tppr: "recent",
    msot: "movie",
    upload: "latest"
},
{
    id: 12,
    img: "/mimg/red_notice.jpg",
    title: "Red Notice",
    letter: "r",
    genre1: "none",
    genre2: "none",
    genre3: "adeventure",
    genre4: "biography",
    genre5: "animation",
    genre6: "comady",
    genre7: "documentary",
    genre8: "drama",
    genre9: "18+",
    genre10: "scifi",
    genre11: "horor",
    year: 2020,
    rate: 6.8,
    url: "themanor.html",
    tppr: "recent",
    msot: "movie"
},
{
    id: 11,
    img: "/mimg/shershaah.webp",
    title: "Shershaah",
    letter: "s",
    genre1: "none",
    genre2: "none",
    genre3: "adeventure",
    genre4: "biography",
    genre5: "animation",
    genre6: "comady",
    genre7: "documentary",
    genre8: "drama",
    genre9: "18+",
    genre10: "scifi",
    genre11: "horor",
    year: 2020,
    rate: 7.8,
    url: "themanor.html",
    tppr: "recent",
    msot: "series",
    upload: "latest"
},
{
    id: 10,
    img: "/mimg/shiddat.webp",
    title: "Shiddat",
    letter: "s",
    genre1: "none",
    genre2: "none",
    genre3: "adeventure",
    genre4: "biography",
    genre5: "animation",
    genre6: "comady",
    genre7: "documentary",
    genre8: "drama",
    genre9: "18+",
    genre10: "scifi",
    genre11: "horor",
    year: 2020,
    rate: 8.8,
    url: "themanor.html",
    tppr: "trend",
    msot: "movie"
},
{
    id: 9,
    img: "/mimg/snakeeyes.webp",
    title: "Snake Eyes",
    letter: "s",
    genre1: "none",
    genre2: "none",
    genre3: "adeventure",
    genre4: "biography",
    genre5: "animation",
    genre6: "comady",
    genre7: "documentary",
    genre8: "drama",
    genre9: "18+",
    genre10: "scifi",
    genre11: "horor",
    year: 2020,
    rate: 8.9,
    url: "themanor.html",
    tppr: "trend",
    msot: "movie",
    upload: "latest"
},
{
    id: 8,
    img: "/mimg/takepoint.webp",
    title: "Take Point",
    letter: "t",
    genre1: "none",
    genre2: "none",
    genre3: "adeventure",
    genre4: "biography",
    genre5: "animation",
    genre6: "comady",
    genre7: "documentary",
    genre8: "drama",
    genre9: "18+",
    genre10: "scifi",
    genre11: "horor",
    year: 2021,
    rate: 9.8,
    url: "themanor.html",
    tppr: "popular",
    msot: "movie"
},
{
    id: 7,
    img: "/mimg/The-Manor.webp",
    title: "The Manor",
    letter: "t",
    genre1: "none",
    genre2: "none",
    genre3: "adeventure",
    genre4: "biography",
    genre5: "animation",
    genre6: "comady",
    genre7: "documentary",
    genre8: "drama",
    genre9: "18+",
    genre10: "scifi",
    genre11: "horor",
    year: 2021,
    rate: 8.8,
    url: "themanor.html",
    tppr: "trend",
    msot: "movie",
    upload: "latest"
},
{
    id: 6,
    img: "/mimg/theblackwater.webp",
    title: "The Black Water",
    letter: "t",
    genre1: "none",
    genre2: "none",
    genre3: "adeventure",
    genre4: "biography",
    genre5: "animation",
    genre6: "comady",
    genre7: "documentary",
    genre8: "drama",
    genre9: "18+",
    genre10: "scifi",
    genre11: "horor",
    year: 2020,
    rate: 8.8,
    url: "theblackwater.html",
    tppr: "recent",
    msot: "series"
},
{
    id: 5,
    img: "/mimg/theoutpost.webp",
    title: "The Out Post",
    letter: "t",
    genre1: "none",
    genre2: "none",
    genre3: "adeventure",
    genre4: "biography",
    genre5: "animation",
    genre6: "comady",
    genre7: "documentary",
    genre8: "drama",
    genre9: "18+",
    genre10: "scifi",
    genre11: "horor",
    year: 2019,
    rate: 5.8,
    url: "venom2.html",
    tppr: "recent",
    msot: "series",
    upload: "latest"
},
{
    id: 4,
    img: "/mimg/thevault.webp",
    title: "The Vault",
    letter: "t",
    genre1: "none",
    genre2: "none",
    genre3: "adeventure",
    genre4: "biography",
    genre5: "animation",
    genre6: "comady",
    genre7: "documentary",
    genre8: "drama",
    genre9: "18+",
    genre10: "scifi",
    genre11: "horor",
    year: 2019,
    rate: 5.8,
    url: "venom2.html",
    tppr: "popular",
    msot: "movie"
},
{
    id: 3,
    img: "/mimg/venom2.webp",
    title: "Venom 2",
    letter: "v",
    genre1: "none",
    genre2: "",
    genre3: "adeventure",
    genre4: "biography",
    genre5: "animation",
    genre6: "comady",
    genre7: "documentary",
    genre8: "drama",
    genre9: "18+",
    genre10: "scifi",
    genre11: "horor",
    year: 2021,
    rate: 9.2,
    url: "venom2.html",
    tppr: "trend",
    msot: "movie",
    upload: "latest"
},
{
    id: 2,
    img: "/mimg/Warrior.webp",
    title: "Warrior",
    letter: "w",
    genre1: "none",
    genre2: "none",
    genre3: "adeventure",
    genre4: "biography",
    genre5: "animation",
    genre6: "comady",
    genre7: "documentary",
    genre8: "drama",
    genre9: "18+",
    genre10: "scifi",
    genre11: "horor",
    year: 2020,
    rate: 8.6,
    url: "bfg.html",
    tppr: "popular",
    msot: "movie"
},
{
    id: 1,
    img: "/mimg/xtreme.webp",
    title: "Xtreme",
    letter: "x",
    genre1: "none",
    genre2: "none",
    genre3: "adeventure",
    genre4: "biography",
    genre5: "animation",
    genre6: "comady",
    genre7: "documentary",
    genre8: "drama",
    genre9: "18+",
    genre10: "scifi",
    genre11: "horor",
    year: 2022,
    rate: 6.5,
    url: "bfg.html",
    tppr: "recent",
    msot: "movie",
    upload: "latest"
},
]
//
actionbtn = document.querySelector('#actionbtn')
actionbtn.addEventListener('click', () => {
    actionbox.classList.toggle('togglebox')
})
actionmovies = movies.filter(movie => movie.genre1 == 'action')
actionmovies.forEach((actionmovie) => {
    const { img, title, year, url, rate } = actionmovie;
    let card = document.createElement('div')
    card.classList.add('card');
    card.innerHTML = `
    <a href="${url}">
                <img src="${img}" alt="${title}">
                <h1>${title}</h1>
                <div class="flex text-[13px] justify-between ">
                   <div class="text-gray-600">${year}</div>
                   <div class="flex gap-1 items-center ">
                     <span class="text-gray-600"><i class="fa-solid fa-heart"></i></span>
                     <span class="text-gray-600"><i class="fa-solid fa-eye"></i></span>
                     <span class="text-amber-300"><i class="fa-solid fa-star"></i>${rate}</span>
                    </div>
                </div>

                  
                
            </a>
    `
    actionbox.appendChild(card);
})
crimebox=document.querySelector('.crimebox')
crimebtn = document.querySelector('#crimebtn')
crimebtn.addEventListener('click', () => {
    crimebox.classList.toggle('togglebox')
})
crimemovies = movies.filter(movie => movie.genre2 == 'crime')
crimemovies.forEach((crimemovie) => {
    const { img, title, year, url, rate } = crimemovie;
    let card = document.createElement('div')
    card.classList.add('card');
    card.innerHTML = `
    <a href="${url}">
                <img src="${img}" alt="${title}">
                <h1>${title}</h1>
                <div class="flex text-[13px] justify-between ">
                   <div class="text-gray-600">${year}</div>
                   <div class="flex gap-1 items-center ">
                     <span class="text-gray-600"><i class="fa-solid fa-heart"></i></span>
                     <span class="text-gray-600"><i class="fa-solid fa-eye"></i></span>
                     <span class="text-amber-300"><i class="fa-solid fa-star"></i>${rate}</span>
                    </div>
                </div>

                  
                
            </a>
    `
    crimebox.appendChild(card);
})
adventurebox=document.querySelector('.adventurebox')
adventurebtn = document.querySelector('#adventurebtn')
adventurebtn.addEventListener('click', () => {
    adventurebox.classList.toggle('togglebox')
    console.log(adventurebtn)
})
adventuremovies = movies.filter(movie => movie.genre3 == 'adeventure')
adventuremovies.forEach((adventuremovie) => {
    const { img, title, year, url, rate } = adventuremovie;
    let card = document.createElement('div')
    card.classList.add('card');
    card.innerHTML = `
    <a href="${url}">
                <img src="${img}" alt="${title}">
                <h1>${title}</h1>
                <div class="flex text-[13px] justify-between ">
                   <div class="text-gray-600">${year}</div>
                   <div class="flex gap-1 items-center ">
                     <span class="text-gray-600"><i class="fa-solid fa-heart"></i></span>
                     <span class="text-gray-600"><i class="fa-solid fa-eye"></i></span>
                     <span class="text-amber-300"><i class="fa-solid fa-star"></i>${rate}</span>
                    </div>
                </div>

                  
                
            </a>
    `
    adventurebox.appendChild(card);
})
biographybox=document.querySelector('.biographybox')
biographybtn = document.querySelector('#biographybtn')
biographybtn.addEventListener('click', () => {
    biographybox.classList.toggle('togglebox')
    console.log(biographybtn)
})
biographymovies = movies.filter(movie => movie.genre4 == 'biography')
biographymovies.forEach((biographymovie) => {
    const { img, title, year, url, rate } = biographymovie;
    let card = document.createElement('div')
    card.classList.add('card');
    card.innerHTML = `
    <a href="${url}">
                <img src="${img}" alt="${title}">
                <h1>${title}</h1>
                <div class="flex text-[13px] justify-between ">
                   <div class="text-gray-600">${year}</div>
                   <div class="flex gap-1 items-center ">
                     <span class="text-gray-600"><i class="fa-solid fa-heart"></i></span>
                     <span class="text-gray-600"><i class="fa-solid fa-eye"></i></span>
                     <span class="text-amber-300"><i class="fa-solid fa-star"></i>${rate}</span>
                    </div>
                </div>

                  
                
            </a>
    `
    biographybox.appendChild(card);
})
animationbox=document.querySelector('.animationbox')
animationbtn = document.querySelector('#animationbtn')
animationbtn.addEventListener('click', () => {
    animationbox.classList.toggle('togglebox')
    console.log(animationbtn)
})
animationmovies = movies.filter(movie => movie.genre5 == 'animation')
animationmovies.forEach((animationmovie) => {
    const { img, title, year, url, rate } = animationmovie;
    let card = document.createElement('div')
    card.classList.add('card');
    card.innerHTML = `
    <a href="${url}">
                <img src="${img}" alt="${title}">
                <h1>${title}</h1>
                <div class="flex text-[13px] justify-between ">
                   <div class="text-gray-600">${year}</div>
                   <div class="flex gap-1 items-center ">
                     <span class="text-gray-600"><i class="fa-solid fa-heart"></i></span>
                     <span class="text-gray-600"><i class="fa-solid fa-eye"></i></span>
                     <span class="text-amber-300"><i class="fa-solid fa-star"></i>${rate}</span>
                    </div>
                </div>

                  
                
            </a>
    `
    animationbox.appendChild(card);
})
comedybox=document.querySelector('.comedybox')
comedynbtn = document.querySelector('#comedybtn')
comedybtn.addEventListener('click', () => {
    comedybox.classList.toggle('togglebox')
    console.log(comedybtn)
})
comedymovies = movies.filter(movie => movie.genre6 == 'comady')
comedymovies.forEach((comedymovie) => {
    const { img, title, year, url, rate } = comedymovie;
    let card = document.createElement('div')
    card.classList.add('card');
    card.innerHTML = `
    <a href="${url}">
                <img src="${img}" alt="${title}">
                <h1>${title}</h1>
                <div class="flex text-[13px] justify-between ">
                   <div class="text-gray-600">${year}</div>
                   <div class="flex gap-1 items-center ">
                     <span class="text-gray-600"><i class="fa-solid fa-heart"></i></span>
                     <span class="text-gray-600"><i class="fa-solid fa-eye"></i></span>
                     <span class="text-amber-300"><i class="fa-solid fa-star"></i>${rate}</span>
                    </div>
                </div>

                  
                
            </a>
    `
    comedybox.appendChild(card);
})
documentarybox=document.querySelector('.documentarybox')
documentarybtn = document.querySelector('#documentarybtn')
documentarybtn.addEventListener('click', () => {
    documentarybox.classList.toggle('togglebox')
    console.log(documentarybtn)
})
documentarymovies = movies.filter(movie => movie.genre7 == 'documentary')
documentarymovies.forEach((documentarymovie) => {
    const { img, title, year, url, rate } = documentarymovie;
    let card = document.createElement('div')
    card.classList.add('card');
    card.innerHTML = `
    <a href="${url}">
                <img src="${img}" alt="${title}">
                <h1>${title}</h1>
                <div class="flex text-[13px] justify-between ">
                   <div class="text-gray-600">${year}</div>
                   <div class="flex gap-1 items-center ">
                     <span class="text-gray-600"><i class="fa-solid fa-heart"></i></span>
                     <span class="text-gray-600"><i class="fa-solid fa-eye"></i></span>
                     <span class="text-amber-300"><i class="fa-solid fa-star"></i>${rate}</span>
                    </div>
                </div>

                  
                
            </a>
    `
    documentarybox.appendChild(card);
})
dramasbox=document.querySelector('.dramasbox')
dramasbtn = document.querySelector('#dramabtn')
dramasbtn.addEventListener('click', () => {
    dramasbox.classList.toggle('togglebox')
    console.log(dramasbtn)
})
dramasmovies = movies.filter(movie => movie.genre8 == 'drama')
dramasmovies.forEach((dramasmovie) => {
    const { img, title, year, url, rate } = dramasmovie;
    let card = document.createElement('div')
    card.classList.add('card');
    card.innerHTML = `
    <a href="${url}">
                <img src="${img}" alt="${title}">
                <h1>${title}</h1>
                <div class="flex text-[13px] justify-between ">
                   <div class="text-gray-600">${year}</div>
                   <div class="flex gap-1 items-center ">
                     <span class="text-gray-600"><i class="fa-solid fa-heart"></i></span>
                     <span class="text-gray-600"><i class="fa-solid fa-eye"></i></span>
                     <span class="text-amber-300"><i class="fa-solid fa-star"></i>${rate}</span>
                    </div>
                </div>

                  
                
            </a>
    `
    dramasbox.appendChild(card);
})
plusbox=document.querySelector('.plusbox')
plusbtn = document.querySelector('#plusbtn')
plusbtn.addEventListener('click', () => {
    plusbox.classList.toggle('togglebox')
    console.log(plusbtn)
})
plusmovies = movies.filter(movie => movie.genre9 == '18+')
plusmovies.forEach((plusmovie) => {
    const { img, title, year, url, rate } = plusmovie;
    let card = document.createElement('div')
    card.classList.add('card');
    card.innerHTML = `
    <a href="${url}">
                <img src="${img}" alt="${title}">
                <h1>${title}</h1>
                <div class="flex text-[13px] justify-between ">
                   <div class="text-gray-600">${year}</div>
                   <div class="flex gap-1 items-center ">
                     <span class="text-gray-600"><i class="fa-solid fa-heart"></i></span>
                     <span class="text-gray-600"><i class="fa-solid fa-eye"></i></span>
                     <span class="text-amber-300"><i class="fa-solid fa-star"></i>${rate}</span>
                    </div>
                </div>

                  
                
            </a>
    `
    plusbox.appendChild(card);
})
scifibox=document.querySelector('.scifibox')
scifibtn = document.querySelector('#scifibtn')
scifibtn.addEventListener('click', () => {
    scifibox.classList.toggle('togglebox')
    console.log(scifibtn)
})
scifimovies = movies.filter(movie => movie.genre10 == 'scifi')
scifimovies.forEach((scifimovie) => {
    const { img, title, year, url, rate } = scifimovie;
    let card = document.createElement('div')
    card.classList.add('card');
    card.innerHTML = `
    <a href="${url}">
                <img src="${img}" alt="${title}">
                <h1>${title}</h1>
                <div class="flex text-[13px] justify-between ">
                   <div class="text-gray-600">${year}</div>
                   <div class="flex gap-1 items-center ">
                     <span class="text-gray-600"><i class="fa-solid fa-heart"></i></span>
                     <span class="text-gray-600"><i class="fa-solid fa-eye"></i></span>
                     <span class="text-amber-300"><i class="fa-solid fa-star"></i>${rate}</span>
                    </div>
                </div>

                  
                
            </a>
    `
    scifibox.appendChild(card);
})
horrorbox=document.querySelector('.horrorbox')
horrorbtn = document.querySelector('#horrorbtn')
horrorbtn.addEventListener('click', () => {
    horrorbox.classList.toggle('togglebox')
    console.log(horrorbtn)
})
horrormovies = movies.filter(movie => movie.genre11 == 'horor')
horrormovies.forEach((horrormovie) => {
    const { img, title, year, url, rate } = horrormovie;
    let card = document.createElement('div')
    card.classList.add('card');
    card.innerHTML = `
    <a href="${url}">
                <img src="${img}" alt="${title}">
                <h1>${title}</h1>
                <div class="flex text-[13px] justify-between ">
                   <div class="text-gray-600">${year}</div>
                   <div class="flex gap-1 items-center ">
                     <span class="text-gray-600"><i class="fa-solid fa-heart"></i></span>
                     <span class="text-gray-600"><i class="fa-solid fa-eye"></i></span>
                     <span class="text-amber-300"><i class="fa-solid fa-star"></i>${rate}</span>
                    </div>
                </div>

                  
                
            </a>
    `
    horrorbox.appendChild(card);
})


vid1 = document.querySelector('.vid1')
vid2 = document.querySelector('.vid2')
vid3 = document.querySelector('.vid3')
video = document.querySelector('#video')
console.log(vid1)


vid1.addEventListener('click', () => {
    video.src = '/src/john wick.webm'
    video.load();
    video.play();
})
vid2.addEventListener('click', () => {
    video.src = '/src/jurasic world.webm'
    video.load();
    video.play();
    console.log("nonono")


})
vid3.addEventListener('click', () => {
    video.src = '/src/theboys.webm'
    video.load();
    video.play();
})


slider=document.querySelector('#myrange')
valueofrange=document.querySelector('#valueofrange')

slider.addEventListener('input',()=>{
    valueofrange.textContent=slider.value
})


allbox=document.querySelector('.allbox')
movies.forEach((movie) => {
    const { img, title, year, url, rate } = movie;
    let card = document.createElement('div')
    card.classList.add('card2');
    card.innerHTML = `
    <a href="${url}">
                <img src="${img}" alt="${title}">
                <h1>${title}</h1>
                <div class="flex text-[13px] justify-between ">
                   <div class="text-gray-600">${year}</div>
                   <div class="flex gap-1 items-center ">
                     <span class="text-gray-600"><i class="fa-solid fa-heart"></i></span>
                     <span class="text-gray-600"><i class="fa-solid fa-eye"></i></span>
                     <span class="text-amber-300"><i class="fa-solid fa-star"></i>${rate}</span>
                    </div>
                </div>

                  
                
            </a>
    `
    allbox.appendChild(card);
})

latestmovies=movies.filter((movie)=>{
    return movie.upload=='latest'

})
latestbox=document.querySelector('.latestbox')
latestmovies.forEach(latestmovie=>{
    const { img, title, year, url, rate } = latestmovie;
    let card = document.createElement('div')
    card.classList.add('card2');
    card.innerHTML = `
    <a href="${url}">
                <img src="${img}" alt="${title}">
                <h1>${title}</h1>
                <div class="flex text-[13px] justify-between ">
                   <div class="text-gray-600">${year}</div>
                   <div class="flex gap-1 items-center ">
                     <span class="text-gray-600"><i class="fa-solid fa-heart"></i></span>
                     <span class="text-gray-600"><i class="fa-solid fa-eye"></i></span>
                     <span class="text-amber-300"><i class="fa-solid fa-star"></i>${rate}</span>
                    </div>
                </div>

                  
                
            </a>
    `
    latestbox.appendChild(card);



})
year2022box=document.querySelector('#year_2022')
year2022movies=movies.filter((movie)=>{
    return movie.year=="2022"
})
year2022movies.forEach((year2022movie)=>{
    const { img, title, year, url, rate } = year2022movie;
    let card = document.createElement('div')
    card.classList.add('card2');
    card.innerHTML = `
    <a href="${url}">
                <img src="${img}" alt="${title}">
                <h1>${title}</h1>
                <div class="flex text-[13px] justify-between ">
                   <div class="text-gray-600">${year}</div>
                   <div class="flex gap-1 items-center ">
                     <span class="text-gray-600"><i class="fa-solid fa-heart"></i></span>
                     <span class="text-gray-600"><i class="fa-solid fa-eye"></i></span>
                     <span class="text-amber-300"><i class="fa-solid fa-star"></i>${rate}</span>
                    </div>
                </div>

                  
                
            </a>
    `
    year2022box.appendChild(card);



})
year2021box=document.querySelector('#year_2021')
year2021movies=movies.filter((movie)=>{
    return movie.year=="2021"
})
year2021movies.forEach((year2021movie)=>{
    const { img, title, year, url, rate } = year2021movie;
    let card = document.createElement('div')
    card.classList.add('card2');
    card.innerHTML = `
    <a href="${url}">
                <img src="${img}" alt="${title}">
                <h1>${title}</h1>
                <div class="flex text-[13px] justify-between ">
                   <div class="text-gray-600">${year}</div>
                   <div class="flex gap-1 items-center ">
                     <span class="text-gray-600"><i class="fa-solid fa-heart"></i></span>
                     <span class="text-gray-600"><i class="fa-solid fa-eye"></i></span>
                     <span class="text-amber-300"><i class="fa-solid fa-star"></i>${rate}</span>
                    </div>
                </div>

                  
                
            </a>
    `
    year2021box.appendChild(card);



})
year2020box=document.querySelector('#year_2020')
year2020movies=movies.filter((movie)=>{
    return movie.year=="2020"
})
year2020movies.forEach((year2020movie)=>{
    const { img, title, year, url, rate } = year2020movie;
    let card = document.createElement('div')
    card.classList.add('card2');
    card.innerHTML = `
    <a href="${url}">
                <img src="${img}" alt="${title}">
                <h1>${title}</h1>
                <div class="flex text-[13px] justify-between ">
                   <div class="text-gray-600">${year}</div>
                   <div class="flex gap-1 items-center ">
                     <span class="text-gray-600"><i class="fa-solid fa-heart"></i></span>
                     <span class="text-gray-600"><i class="fa-solid fa-eye"></i></span>
                     <span class="text-amber-300"><i class="fa-solid fa-star"></i>${rate}</span>
                    </div>
                </div>

                  
                
            </a>
    `
    year2020box.appendChild(card);



})
letter_abox=document.querySelector('#letter_a')
letter_amovies=movies.filter((movie)=>{
    return movie.year=="2020"
})











allbtn=document.querySelector('.allbtn')
allbtn.addEventListener('click',()=>{
    allbtn.classList.toggle('red')
    allbox.classList.toggle('togglebox')
})
latestbtn=document.querySelector('.latestbtn')
latestbtn.addEventListener('click',()=>{
    latestbtn.classList.toggle('red')
    latestbox.classList.toggle('togglebox')
    console.log(latestbtn)
})

