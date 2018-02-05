//Films

$(document).ready(function() {
// load images et descriptions
var affiche = [
        {
            title: 'Monstres academy',
            src: "assets/images/films/academy.jpg",
            date: 2017,
            genre: "comedie",
            url: "https://www.youtube.com/embed/jCMIvbYzsQc",
            about: "bla1",
            price: 2
        },
        {
            title: 'Aladdin',
            src: "assets/images/films/aladdin.jpg",
            date: 2005,
            genre: "thriller",
            url: "https://www.youtube.com/embed/-JUNcfqk87w",
            about: "bla2",
            price: 2
        },
        {
            title: 'Batman',
            src: "assets/images/films/batman.jpg",
            date: 2010,
            genre: "scifi",
            url: "https://www.youtube.com/embed/CPTIgILtna8",
            about: "bla3",
            price: 2
        },
        {
            title: 'La Belle et la Bête',
            src: "assets/images/films/belle.jpg",
            date: 2011,
            genre: "comedie",
            url: "https://www.youtube.com/embed/lXmvFs0LL58",
            about: "bla4",
            price: 2
        },
        {
            title: 'Cendrion',
            src: "assets/images/films/cendrillon.jpg",
            date: 1996,
            genre: "dramatique",
            url: "https://www.youtube.com/embed/rmK_ix-MpQQ",
            about: "bla5",
            price: 2
        },
        {
            title: 'Les Aristochats',
            src: "assets/images/films/chats.jpg",
            date: 1995,
            genre: "thriller",
            url: "https://www.youtube.com/embed/R7EGq3kQK0I",
            about: "bla6",
            price: 2
        },
        {
            title: 'Les Animaux fantastiques',
            src: "assets/images/films/fantastic.jpg",
            date: 2010,
            genre: "thriller",
            url: "https://www.youtube.com/embed/jC8xuFcMq20",
            about: "bla7",
            price: 2
        },
        {
            title: 'Hercules',
            src: "assets/images/films/Hercules.jpg",
            date: 1980,
            genre: "scifi",
            url: "https://www.youtube.com/embed/5jfpDYt1s0c",
            about: "bla8",
            price: 2
        },
        {
            title: 'Harry Potter 1',
            src: "assets/images/films/hp1.jpg",
            date: 1980,
            genre: "scifi",
            url: "https://www.youtube.com/embed/P1BGgqhVGAI",
            about: "bla9",
            price: 2
        },
        {
            title: 'Harry Potter 2',
            src: "assets/images/films/hp2.jpg",
            date: 1980,
            genre: "scifi",
            url: "https://www.youtube.com/embed/Z3T8PuWuoL0",
            about: "bla10",
            price: 2
        },
        {
            title: 'Harry Potter 3',
            src: "assets/images/films/hp3.jpg",
            date: 1980,
            genre: "scifi",
            url: "https://www.youtube.com/embed/CLncEeVf4ks",
            about: "bla11",
            price: 2
        },
        {
            title: 'Harry Potter 4',
            src: "assets/images/films/hp4.jpg",
            date: 1980,
            genre: "scifi",
            url: "https://www.youtube.com/embed/XO9rqIgzDL0",
            about: "bla12",
            price: 2
        },
        {
            title: 'Harry Potter 5',
            src: "assets/images/films/hp5.jpg",
            date: 1980,
            genre: "scifi",
            url: "https://www.youtube.com/embed/S8-SXEGMmi4",
            about: "bla13",
            price: 2
        },
        {
            title: 'Harry Potter 6',
            src: "assets/images/films/hp6.jpg",
            date: 1980,
            genre: "scifi",
            url: "https://www.youtube.com/embed/yb-VYG3x5E8",
            about: "bla14",
            price: 2
        },
        {
            title: 'Harry Potter 7-1',
            src: "assets/images/films/hp7-1.jpg",
            date: 1980,
            genre: "scifi",
            url: "https://www.youtube.com/embed/HgZZsnleZJQ",
            about: "bla15",
            price: 2
        },
        {
            title: 'Harry Potter 7-2',
            src: "assets/images/films/hp7-2.jpg",
            date: 1980,
            genre: "scifi",
            url: "https://www.youtube.com/embed/1AfFyUZK1So",
            about: "bla16",
            price: 2
        },
        {
            title: 'Hunger Games',
            src: "assets/images/films/hunger.jpg",
            date: 1980,
            genre: "scifi",
            url: "https://www.youtube.com/embed/MJx5pmMNpBg",
            about: "bla17",
            price: 2
        },
        {
            title: 'Jungle Book',
            src: "assets/images/films/jungle.jpg",
            date: 1980,
            genre: "scifi",
            url: "https://www.youtube.com/embed/MM8GOli-DIg",
            about: "bla18",
            price: 2
        },
        {
            title: 'Le Labyrinthe',
            src: "assets/images/films/laby.jpg",
            date: 1980,
            genre: "scifi",
            url: "https://www.youtube.com/embed/5KInH8C5PyU",
            about: "bla19",
            price: 2
        },
        {
            title: 'Nemo',
            src: "assets/images/films/nemo.jpg",
            date: 1980,
            genre: "scifi",
            url: "https://www.youtube.com/embed/HsHo1F-duKU",
            about: "bla20",
            price: 2
        },
        {
            title: 'Jurassic Park',
            src: "assets/images/films/park.jpg",
            date: 1980,
            genre: "scifi",
            url: "https://www.youtube.com/embed/ZEY7iMX_oZs",
            about: "bla21",
            price: 2
        },
        {
            title: 'Peter Pan',
            src: "assets/images/films/peter.jpg",
            date: 1980,
            genre: "scifi",
            url: "https://www.youtube.com/embed/mZs_n92dLfY",
            about: "bla22",
            price: 2
        },
        {
            title: 'La Bande à Piscou',
            src: "assets/images/films/picsou.jpg",
            date: 1980,
            genre: "scifi",
            url: "https://www.youtube.com/embed/Z28CNdgUu_0",
            about: "bla22",
            price: 2
        },
        {
            title: 'La Reine des Neiges',
            src: "assets/images/films/reine.jpg",
            date: 1980,
            genre: "scifi",
            url: "https://www.youtube.com/embed/UqPfUpVtg_k",
            about: "bla23",
            price: 2
        },
        {
            title: 'Le Roi Lion',
            src: "assets/images/films/roi.jpg",
            date: 1980,
            genre: "scifi",
            url: "https://www.youtube.com/embed/-KfIYw-D4Iw",
            about: "bla24",
            price: 2
        },
        {
            title: 'Tou story 3',
            src: "assets/images/films/toystory.jpg",
            date: 1980,
            genre: "scifi",
            url: "https://www.youtube.com/embed/Kb5S5HuaQIQ",
            about: "bla25",
            price: 2
        }
];
    
    
    //Slider images generator
    $("#sliderFilms ul").html(function(){
       for( var i=0 ; i < affiche.length; i++) {
            $("#sliderFilms ul").append("<li><img src="+affiche[i].src+" alt=''></li>");
        }
    });

//First description display
    $("#description").html(function() {
        $("#description").append("<iframe width='560' height='315' src='"+affiche[0].url+"' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe><div class='infos'><h4 id='filmName'>"+affiche[0].title+"</h4><p><span>Story Line: </span>"+affiche[0].about+"</p><p><span>Release on: </span>"+affiche[0].date+"</p><p><span>Genres: </span>"+affiche[0].genre+"</p><p><span>Price: </span>"+affiche[0].price+"</p></div>"
        );
    });

//Clic image generation trailer
    $("#sliderFilms ul li img").click(function(){
        console.log($(this).attr("src"));
                for (i=0 ; i < affiche.length; i++) {
                    if ($(this).attr("src") == affiche[i].src) {
                        $("#description").html(" ");
                        $("#description").append("<iframe width='560' height='315' src='"+affiche[i].url+"' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe><div class='infos'><h4 id='filmName'>"+affiche[i].title+"</h4><p><span>Story Line: </span>"+affiche[i].about+"</p><p><span>Release on: </span>"+affiche[i].date+"</p><p><span>Genres: </span>"+affiche[i].genre+"</p><p><span>Price: </span>"+affiche[i].price+"</p></div>"
                        );
                    }
                    
                }
    });
    
// slider buttons    
    let carousel = $("#sliderFilms ul");
    let carouselChild = carousel.find('li');
    let count = 0;
    let canClick = true;
    let itemWidth = carouselChild.first().width(true);
    let lastItem;
    
     //Set Carousel width so it won't wrap
    carousel.width(itemWidth * carouselChild.length);
    
    //Set the event handlers for buttons
    $("#next").click(function(){
         if (canClick){
             canClick = false;
             count++;
             
             //Animate the slider to left as item width
             carousel.stop(false,true).animate({
                 left : '-='+itemWidth
             },600,function(){
                 //Find the first item and append it as the last item.
                 lastItem = carousel.find('li:first');
                 lastItem.remove().appendTo(carousel);
                 carousel.css('left', 0);
                 canClick = true;
             });
         }
        affiche.push(affiche[0]);
        affiche.shift(affiche[0]);
        
        //Clic image generation trailer
        $("#sliderFilms ul li img").click(function(){
            console.log($(this).attr("src"));
                    for (i=0 ; i < affiche.length; i++) {
                        if ($(this).attr("src") == affiche[i].src) {
                            $("#description").html(" ");
                            $("#description").append("<iframe width='560' height='315' src='"+affiche[i].url+"' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe><div class='infos'><h4 id='filmName'>"+affiche[i].title+"</h4><p><span>Story Line: </span>"+affiche[i].about+"</p><p><span>Release on: </span>"+affiche[i].date+"</p><p><span>Genres: </span>"+affiche[i].genre+"</p><p><span>Price: </span>"+affiche[i].price+"</p></div>"
                            );
                        }

                    }
        });
    }); //btn next
    
    $("#prev").click(function(){
         if (canClick){
             canClick = false;
             count--;
             
             //Find the last item and prepend it as the first item.
             lastItem = carousel.find('li:last');
             lastItem.remove().prependTo(carousel);
             carousel.css('left', -itemWidth);
             
             //Animate the slider to right as item width
             carousel.finish(true).animate({
                 left: '+='+itemWidth
             },300, function(){
                 canClick = true;
                 
             });
         }
        var x = affiche.pop();
        affiche.unshift(x);
        
        //Clic image generation trailer
        $("#sliderFilms ul li img").click(function(){
            console.log($(this).attr("src"));
                    for (i=0 ; i < affiche.length; i++) {
                        if ($(this).attr("src") == affiche[i].src) {
                            $("#description").html(" ");
                            $("#description").append("<iframe width='560' height='315' src='"+affiche[i].url+"' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe><div class='infos'><h4 id='filmName'>"+affiche[i].title+"</h4><p><span>Story Line: </span>"+affiche[i].about+"</p><p><span>Release on: </span>"+affiche[i].date+"</p><p><span>Genres: </span>"+affiche[i].genre+"</p><p><span>Price: </span>"+affiche[i].price+"</p></div>"
                            );
                        }

                    }
        });

    }); //btn prev
  
  //fini le slider  
});

//Series
$(document).ready(function() {
// load images et descriptions
var afficheS = [
        {
            title: 'Assassination Classroom',
            src: "assets/images/series/assassination.jpg",
            date: 2017,
            genre: "comedie",
            url: "https://www.youtube.com/embed/kgNkGohA20k",
            about: "bla1",
            price: 2,
            add: "Add to basket"
        },
        {
            title: 'Avatar',
            src: "assets/images/series/avatar.jpg",
            date: 2005,
            genre: "thriller",
            url: "https://www.youtube.com/embed/nm-wiB60nHs",
            about: "bla2",
            price: 2,
            add: "Add to basket"
        },
        {
            title: 'Avengers',
            src: "assets/images/series/avengers.jpg",
            date: 2010,
            genre: "scifi",
            url: "https://www.youtube.com/embed/6ZfuNTqbHE8",
            about: "bla3",
            price: 2,
            add: "Add to basket"
        },
        {
            title: 'SpongeBob squarepants',
            src: "assets/images/series/bob.jpg",
            date: 2011,
            genre: "comedie",
            url: "https://www.youtube.com/embed/1WwAodx7jhw",
            about: "bla4",
            price: 2,
            add: "Add to basket"
        },
        {
            title: 'Saint Seiya',
            src: "assets/images/series/chevaliers.jpg",
            date: 1996,
            genre: "dramatique",
            url: "https://www.youtube.com/embed/L3Z0GFMjR5E",
            about: "bla5",
            price: 2,
            add: "Add to basket"
        },
        {
            title: 'Danny Phantom',
            src: "assets/images/series/danny.jpg",
            date: 1995,
            genre: "thriller",
            url: "https://www.youtube.com/embed/TINGlq_KdRU",
            about: "bla6",
            price: 2,
            add: "Add to basket"
        },
        {
            title: 'Dragon Ball',
            src: "assets/images/series/dragon.jpg",
            date: 2010,
            genre: "thriller",
            url: "https://www.youtube.com/embed/aOPJ6y3HWII",
            about: "bla7",
            price: 2,
            add: "Add to basket"
        },
        {
            title: 'Family Guy',
            src: "assets/images/series/family.jpg",
            date: 1980,
            genre: "scifi",
            url: "https://www.youtube.com/embed/wwoq3o_yNMw",
            about: "bla8",
            price: 2,
            add: "Add to basket"
        },
        {
            title: 'Futurama',
            src: "assets/images/series/futurama.jpg",
            date: 1980,
            genre: "scifi",
            url: "https://www.youtube.com/embed/FJM2F1jX_c4",
            about: "bla9",
            price: 2,
            add: "Add to basket"
        },
        {
            title: 'Goldorak',
            src: "assets/images/series/goldorak.jpg",
            date: 1980,
            genre: "scifi",
            url: "https://www.youtube.com/embed/_B3Qh6NDQ4I",
            about: "bla10",
            price: 2,
            add: "Add to basket"
        },
        {
            title: 'Young Justice',
            src: "assets/images/series/justice.jpg",
            date: 1980,
            genre: "scifi",
            url: "https://www.youtube.com/embed/UMs6_QOV10g",
            about: "bla11",
            price: 2,
            add: "Add to basket"
        },
        {
            title: 'La maison de Mickey',
            src: "assets/images/series/mickey.jpg",
            date: 1980,
            genre: "scifi",
            url: "https://www.youtube.com/embed/XO9rqIgzDL0",
            about: "bla12",
            price: 2,
            add: "Add to basket"
        },
        {
            title: 'Oggy et les Cafards',
            src: "assets/images/series/oggy.jpg",
            date: 1980,
            genre: "scifi",
            url: "https://www.youtube.com/embed/hZu6YrlGe0s",
            about: "bla13",
            price: 2,
            add: "Add to basket"
        },
        {
            title: 'Odd Parents',
            src: "assets/images/series/parrains.jpg",
            date: 1980,
            genre: "scifi",
            url: "https://www.youtube.com/embed/ymmsQ3MOshg",
            about: "bla14",
            price: 2,
            add: "Add to basket"
        },
        {
            title: 'Phineas and Ferb',
            src: "assets/images/series/phin.jpg",
            date: 1980,
            genre: "scifi",
            url: "https://www.youtube.com/embed/th9hxCGH_ms",
            about: "bla15",
            price: 2,
            add: "Add to basket"
        },
        {
            title: 'Pokemon',
            src: "assets/images/series/pokemon.jpg",
            date: 1980,
            genre: "scifi",
            url: "https://www.youtube.com/embed/Pnc7dk8l-Q0",
            about: "bla16",
            price: 2,
            add: "Add to basket"
        },
        {
            title: 'Batman La Releve',
            src: "assets/images/series/releve.jpg",
            date: 1980,
            genre: "scifi",
            url: "https://www.youtube.com/embed/xK6ajefLhcU",
            about: "bla17",
            price: 2,
            add: "Add to basket"
        },
        {
            title: 'Les Simpson',
            src: "assets/images/series/simp.jpg",
            date: 1980,
            genre: "scifi",
            url: "https://www.youtube.com/embed/8arbBxezySc",
            about: "bla18",
            price: 2,
            add: "Add to basket"
        },
        {
            title: 'Gravity Falls',
            src: "assets/images/series/souvenir.jpg",
            date: 1980,
            genre: "scifi",
            url: "https://www.youtube.com/embed/0PYzpK-xa6c",
            about: "bla19",
            price: 2,
            add: "Add to basket"
        },
        {
            title: 'Ultimate Spiderman',
            src: "assets/images/films/series/spider.jpg",
            date: 1980,
            genre: "scifi",
            url: "https://www.youtube.com/embed/nyMKJcnWh4k",
            about: "bla20",
            price: 2,
            add: "Add to basket"
        },
        {
            title: 'Starwars',
            src: "assets/images/series/star.jpg",
            date: 1980,
            genre: "scifi",
            url: "https://www.youtube.com/embed/Q0CbN8sfihY",
            about: "bla21",
            price: 2,
            add: "Add to basket"
        },
        {
            title: 'X-men',
            src: "assets/images/series/xmen.jpg",
            date: 1980,
            genre: "scifi",
            url: "https://www.youtube.com/embed/I8BobmZglOk",
            about: "bla22",
            price: 2,
            add: "Add to basket"
        }
];
    
    //Slider images generator
    $("#sliderSeries ul").html(function(){
       for( var i=0 ; i < afficheS.length; i++) {
            $("#sliderSeries ul").append("<li><img src="+afficheS[i].src+" alt=''></li>");
        }
    });

//First description display
    $("#description2").html(function() {
        $("#description2").append("<iframe width='560' height='315' src='"+afficheS[0].url+"' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe><div class='infos'><h4 id='filmName'>"+afficheS[0].title+"</h4><p><span>Story Line: </span>"+afficheS[0].about+"</p><p><span>Release on: </span>"+afficheS[0].date+"</p><p><span>Genres: </span>"+afficheS[0].genre+"</p><p><span>Price: </span>"+afficheS[0].price+"</p><p class='add'>"+afficheS[0].add+"</p></div>"
        );
        //Clic add
/*        $(".add").click(function() {
            
            let p = $(this).parent();
            let c = p[0].childNodes[0];
            console.log(c.textContent);
            for (var j=0; j < afficheS.length; j++) {
                if(c.textContent == afficheS[j].title) {
                    $(".product").append("<img src="+afficheS[j].src+" alt=''><p><span>Story Line: </span>"+afficheS[j].about+"</p><p class='quantity'>"counter++"</p><p><span>Price: </span>"+afficheS[j].price+"</p>");
                }
            }
         });*/
    });
    

//Clic image generation trailer
    $("#sliderSeries ul li img").click(function(){
                for (i=0 ; i < afficheS.length; i++) {
                    if ($(this).attr("src") == afficheS[i].src) {
                        $("#description2").html(" ");
                        $("#description2").append("<iframe width='560' height='315' src='"+afficheS[i].url+"' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe><div class='infos'><h4 id='filmName'>"+afficheS[i].title+"</h4><p><span>Story Line: </span>"+afficheS[i].about+"</p><p><span>Release on: </span>"+afficheS[i].date+"</p><p><span>Genres: </span>"+afficheS[i].genre+"</p><p><span>Price: </span>"+afficheS[i].price+"</p><p class='add'>"+afficheS[i].add+"</p></div>"
                        );
                    }
                    
                }
        /*$(".add").click(function() {
            let p = $(this).parent();
            let c = p[0].childNodes[0];
            console.log(c.textContent);
         });*/
    });

// slider buttons    
    let carousel = $("#sliderSeries ul");
    let carouselChild = carousel.find('li');
    let count = 0;
    let canClick = true;
    let itemWidth = carouselChild.first().width(true);
    let lastItem;
    
     //Set Carousel width so it won't wrap
    carousel.width(itemWidth * carouselChild.length);
    
    //Set the event handlers for buttons
    $("#next2").click(function(){
         if (canClick){
             canClick = false;
             count++;
             
             //Animate the slider to left as item width
             carousel.stop(false,true).animate({
                 left : '-='+itemWidth
             },600,function(){
                 //Find the first item and append it as the last item.
                 lastItem = carousel.find('li:first');
                 lastItem.remove().appendTo(carousel);
                 carousel.css('left', 0);
                 canClick = true;
             });
         }
        afficheS.push(afficheS[0]);
        afficheS.shift(afficheS[0]);
        
        //Clic image generation trailer
        $("#sliderSeries ul li img").click(function(){
                    for (i=0 ; i < afficheS.length; i++) {
                        if ($(this).attr("src") == afficheS[i].src) {
                            $("#description2").html(" ");
                            $("#description2").append("<iframe width='560' height='315' src='"+afficheS[i].url+"' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe><div class='infos'><h4 id='filmName'>"+afficheS[i].title+"</h4><p><span>Story Line: </span>"+afficheS[i].about+"</p><p><span>Release on: </span>"+afficheS[i].date+"</p><p><span>Genres: </span>"+afficheS[i].genre+"</p><p><span>Price: </span>"+afficheS[i].price+"</p><p id='add'>"+afficheS[i].add+"</p></div>"
                            );
                        }

                    }
            /*$(".add").click(function() {
                let p = $(this).parent();
                let c = p[0].childNodes[0];
                console.log(c.textContent);
             });*/
        });
    }); //btn next
    
    $("#prev2").click(function(){
         if (canClick){
             canClick = false;
             count--;
             
             //Find the last item and prepend it as the first item.
             lastItem = carousel.find('li:last');
             lastItem.remove().prependTo(carousel);
             carousel.css('left', -itemWidth);
             
             //Animate the slider to right as item width
             carousel.finish(true).animate({
                 left: '+='+itemWidth
             },300, function(){
                 canClick = true;
                 
             });
         }
        var x = afficheS.pop();
        afficheS.unshift(x);
        
        //Clic image generation trailer
        $("#sliderSeries ul li img").click(function(){
                    for (i=0 ; i < afficheS.length; i++) {
                        if ($(this).attr("src") == afficheS[i].src) {
                            $("#description2").html(" ");
                            $("#description2").append("<iframe width='560' height='315' src='"+afficheS[i].url+"' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe><div class='infos'><h4 id='filmName'>"+afficheS[i].title+"</h4><p><span>Story Line: </span>"+afficheS[i].about+"</p><p><span>Release on: </span>"+afficheS[i].date+"</p><p><span>Genres: </span>"+afficheS[i].genre+"</p><p><span>Price: </span>"+afficheS[i].price+"</p><p id='add'>"+afficheS[i].add+"</p></div>"
                            );
                        }

                    }
            /*$(".add").click(function() {
                let p = $(this).parent();
                let c = p[0].childNodes[0];
                console.log(c.textContent);
             });*/
        });

    }); //btn prev
  
  //fini le slider  
});











// modal on load
$(window).on('load',function(){
    $("#modalLoad").css('display','block');
    $("#modalLoad #blur a").click(function() {
        $("#modalLoad").css('display','none');
    });
});


// Login modal

$(document).ready(function() {
    $("#close").click(function() {
        $("#new-account").css('display','block');
        $("#signIn").css('display','block');
        $("#signUp").css('display','none');
        $("label[for='conditions']").css('display','none');
        $("#newPass").css('display','none');
        $("#login").css('display','block');
        $("#pass").css('display','block');
        $("label[for='connect']").css('display','flex');
        $("#email").css('display','none');
    });
    
    $("#new-account").click(function() {
        $(this).css('display','none');
        $("#signIn").css('display','none');
        $("#signUp").css('display','block');
        $("label[for='conditions']").css('display','flex');
    });
    
    $("#forgot").click(function() {
        $(this).css('display','none');
        $("#email").css('display','block');
        $("#newPass").css('display','block');
        $("#login").css('display','none');
        $("#pass").css('display','none');
        $("label[for='conditions']").css('display','none');
        $("label[for='connect']").css('display','none');
        $("#signIn").css('display','none');
        $("#signUp").css('display','none');
        $("#new-account").css('display','none');
    });
});

$(document).ready(function() {
  $('#play-video').on('click', function(ev) {
 
    $("#video")[0].src += "&autoplay=1";
    ev.preventDefault();
 
  });
});


$(document).ready(function() {
    $("#basketIcon").click(function() {
        $("#panier").css('display','block');
    });

    $("#basketIcon").dblclick(function() {
        $("#panier").css('display','none');
    });
});
















































