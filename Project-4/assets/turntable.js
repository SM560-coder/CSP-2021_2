const playlist = [
  {
    name:"Marvin Gaye",
    playlistnumber: "1",
    albumname: "Funky Nation: The Detroit Instrumentals",
    image: "https://th.bing.com/th/id/Re9659361950e6e8330cad8017e9bf513?rik=MCts0SS%2fS616nA&pid=ImgRaw",

  },

  {
    name:"Erykah Badu",
    playlistnumber: "2",
    albumname: "Worldwide Underground",
    image:"https://img.discogs.com/c5Qxf7_mVtF3jXRW7y1Sgdi8kl4=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-214916-1437272036-7059.jpeg.jpg",

  },

  {
    name:"Moose Dawa",
    playlistnumber: "3",
    albumname: "The Swap",
    image:"https://i0.cdn.hhv.de/catalog/475x475/00659/659335.jpg",

  },

  
  {
    name:"Ol' Burger Beats",
    playlistnumber: "4",
    albumname: "The Swap",
    image:"https://th.bing.com/th/id/Rcdd6d664bdcfaa2840709ba3883dee72?rik=6NkTO%2baNpcxHrg&pid=ImgRaw",

  },

  {
    name:"Tommy Guerrero",
    playlistnumber: "5",
    albumname: "The Swap",
    image:"https://i.pinimg.com/originals/b7/e0/c7/b7e0c715d2b10ca72d17bff925dbb7cf.jpg",

  },
  
  {
    name:"Kokoroko",
    playlistnumber: "6",
    albumname: "The Swap",
    image:"https://cdn2.thelineofbestfit.com/images/remote/https_cdn2.thelineofbestfit.com/media/2014/kokoroko.jpg",

  },
  
  {
    name:"Kokoroko",
    playlistnumber: "7",
    albumname: "The Swap",
    image:"https://cdn2.thelineofbestfit.com/images/remote/https_cdn2.thelineofbestfit.com/media/2014/kokoroko.jpg",

  },

  {
    name:"Erykah Badu",
    playlistnumber: "8",
    albumname: "The Swap",
    image:"https://i1.sndcdn.com/artworks-000181913752-b6vxk8-t500x500.jpg",

  },

  {
    name:"Kokoroko",
    playlistnumber: "9",
    albumname: "The Swap",
    image:"https://th.bing.com/th/id/R2779b15dccdb6401814671f5f75066f7?rik=2%2f29gGCG4Iee1w&pid=ImgRaw",

  },

  {
    name:"Roy Ayers",
    playlistnumber: "10",
    albumname: "The Swap",
    image:"https://lastfm.freetls.fastly.net/i/u/ar0/94c775f37bd1cb713c38ec68e6c9ba4f.jpg",
  },

];

const splide_list = document.querySelector('.splide__list')
var elms = document.getElementsByClassName( 'splide' );

function addImagesToSlider(){
// create a new list item

 

// iterate over the playlist

    for (let i = 0; i < playlist.length; i++) {
      console.log(playlist[i])
      let splide__slide = document.createElement('li');
      let slide_img = document.createElement('img');

      splide__slide.classList.add('splide__slide')

      let track_image = playlist[i].image

      slide_img.setAttribute('src', track_image)
      splide__slide.appendChild(slide_img)

      splide_list.appendChild(splide__slide)
  }

};

addImagesToSlider()

// let currentSlide = 0;
// console.log(currentSlide)
// const slides = document.querySelectorAll(".secondRow")
// console.log(slides)


// const init = (n) =>{
//   slides.foreEach((slide, index) =>{
//     slide.style.display = "none"})
//     slides[n].style.display = "block"
// };

// document.addEventListener("DOM Content Loaded", init)
// const next = () => {
//   currentSlide >=slides.length -1 ?
// currentSlide = 0: currentSlide++
//   Infinity(currentSlide)
// }

// setInterval(() => 
//     {next()
//     }, 5000 );



document.addEventListener( 'DOMContentLoaded', function () {
splide =  new Splide( '.splide', {
  type : 'loop',
  perPage: 5,
  autoplay: true,
  pauseOnHover: false,
  focus: "center",
  height: '9rem',
  interval:240000,
  
} ).mount();
});





//let spotify = document.querySelector(".spotify")
//console.log(spotify);

//function spotifyClick(){
  //spotify.addEventListener("click", spotify)
  //var splide = new Splide (".splide");
  //splide.on('autoplay:play',function(){

 // });

  //splide.mount();
  
//};



//spotifyClick();



