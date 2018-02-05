//Films
$(document).ready(function() {
// load images et descriptions
var affiche = [
        {
            title: 'Harry Potter - POP!',
            src: "assets/images/harry-pop.jpg",
            price: "13.99€",
            genre: "Figurine",
        },
        {
            title: 'Hagrid - POP!',
            src: "assets/images/hagrid-pop.jpg",
            price: "16.99€",
            genre: "Figurine",
        },
        {
            title: 'Ron Weasley - POP!',
            src: "assets/images/ron-pop.png",
            price: "13.99€",
            genre: "Figurine",
        },
        {
            title: 'Sirius Black - POP!',
            src: "assets/images/sirius-pop.jpg",
            price: "13.99€",
            genre: "Figurine",
        },
        {
            title: 'Albus Dumbledore - POP!',
            src: "assets/images/dumbledore-pop.jpg",
            price: "13.99€",
            genre: "Figurine",
        },
        {
            title: 'Remus Lupin - POP!',
            src: "assets/images/lupin-pop.jpg",
            price: "13.99€",
            genre: "Figurine",
        },
        {
            title: 'Hermione Granger - POP!',
            src: "assets/images/hermione-pop.jpg",
            price: "13.99€",
            genre: "Figurine",
        },
        {
            title: 'Dolores Ombrage - POP!',
            src: "assets/images/ombrage-pop.jpg",
            price: "13.99€",
            genre: "Figurine",
        },
        {
            title: 'Alastor Maugrey - POP!',
            src: "assets/images/maugrey-pop.jpg",
            price: "13.99€",
            genre: "Figurine",
        },
        {
            title: 'Ginny Weasley - POP!',
            src: "assets/images/ginny.jpeg",
            price: "13.99€",
            genre: "Figurine",
        },
        {
            title: 'Lucius Malefoy - POP!',
            src: "assets/images/lucius.jpeg",
            price: "13.99€",
            genre: "Figurine",
        },
        {
            title: 'Sully - POP!',
            src: "assets/images/sully.jpeg",
            price: "13.99€",
            genre: "Figurine",
        },
        {
            title: 'Bob - POP!',
            src: "assets/images/bob.jpeg",
            price: "13.99€",
            genre: "Figurine",
        },
        {
            title: 'Buzz - POP!',
            src: "assets/images/buzz.jpg",
            price: "13.99€",
            genre: "Figurine",
        },
        {
            title: 'Woody - POP!',
            src: "assets/images/woody.jpg",
            price: "13.99€",
            genre: "Figurine",
        },
        {
            title: 'Goku SSJ Blue - POP!',
            src: "assets/images/goku.jpg",
            price: "13.99€",
            genre: "Figurine",
        },
        {
            title: 'Vegeta - POP!',
            src: "assets/images/vegeta.jpg",
            price: "13.99€",
            genre: "Figurine",
        },
        
];
    
    
    //Slider images generator
    $("#sliderGoodies ul").html(function(){
       for( var i=0 ; i < affiche.length; i++) {
            $("#sliderGoodies ul").append("<li><img src="+affiche[i].src+" alt=''></li>");
        }
    });

//First description display
    $("#description").html(function() {
        $("#description").append("<div class='infos'><h4 id='filmName'>"+affiche[0].title+"</h4><p><span>Genre: </span>" +affiche[0].genre+"</p><p><span>Price: </span>"+affiche[0].price+"</p></div>"
        );
    });

//Clic image generation trailer
    $("#sliderGoodies ul li img").click(function(){
        console.log($(this).attr("src"));
                for (i=0 ; i < affiche.length; i++) {
                    if ($(this).attr("src") == affiche[i].src) {
                        $("#description").html(" ");
                        $("#description").append("<div class='infos'><h4 id='filmName'>"+affiche[i].title+"</h4><p><span>Genre: </span>"+affiche[i].genre+"</p><p><span>Price: </span>"+affiche[i].price+"</p></div>"
                        );
                    }
                    
                }
    });
    
// slider buttons    
    let carousel = $("#sliderGoodies ul");
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
        $("#sliderGoodies ul li img").click(function(){
            console.log($(this).attr("src"));
                    for (i=0 ; i < affiche.length; i++) {
                        if ($(this).attr("src") == affiche[i].src) {
                            $("#description").html(" ");
                                $("#description").append("<div class='infos'><h4 id='filmName'>"+affiche[i].title+"</h4><p><span>Genre: </span>"+affiche[i].genre+"</p><p><span>Price: </span>"+affiche[i].price+"</p></div>"
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
        $("#sliderGoodies ul li img").click(function(){
            console.log($(this).attr("src"));
                    for (i=0 ; i < affiche.length; i++) {
                        if ($(this).attr("src") == affiche[i].src) {
                            $("#description").html(" ");
                            $("#description").append("<div class='infos'><h4 id='filmName'>"+affiche[i].title+"</h4><p><span>Story Line: </span>"+affiche[i].about+"</p><p><span>Release on: </span>"+affiche[i].date+"</p><p><span>Genres: </span>"+affiche[i].genre+"</p><p><span>Price: </span>"+affiche[i].price+"</p></div>"
                            );
                        }

                    }
        });

    }); //btn prev
  
  //fini le slider  
});
