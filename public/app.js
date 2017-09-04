var CATS_TO_ADD = [
{name: "Seth", favefood: "Tuna", img: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"},
{name: "Travis", favefood: "Quiche", img: "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg"}
];

var app = function() {
 
  var addQuote = function(name, favefood, image) {

  var ul = document.createElement('ul');
    ul.classList.add('cat');

  var li1 = document.createElement('li');
    li1.innerText = name;

  var li2 = document.createElement('li');
    li2.innerText = favefood;

  var img1 = document.createElement('img');
    img1.src = image;
    img1.width = 250;



  ul.appendChild(li1)

  ul.appendChild(li2);

  ul.appendChild(img1);

  var cats = document.querySelector('#cats');
    cats.appendChild(ul);

}


for (var i = 0; i < CATS_TO_ADD.length; i++) {
  addQuote(CATS_TO_ADD[i].name, CATS_TO_ADD[i].favefood, CATS_TO_ADD[i].img)
}

};








window.onload = app;