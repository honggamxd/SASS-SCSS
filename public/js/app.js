function checkMail(){
    var input_mail = document.querySelector("#mail");
    if(input_mail.value){
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!filter.test(input_mail.value)) {
            alert('Địa chỉ mail không hợp lệ.');
        }
    }
}

function show() {
    var img = ["url(\"images/Layer 9.png\")", "url(\"images/wim1.png\")", "url(\"images/wim2.png\")" ];
    var i = 0;
    setInterval(function() {
        i++;
        if( i > 2) i = 0;
        document.querySelector(".banner").style.backgroundImage = img[i];
    }, 3000) ;
}
show();
function active(x){
    var child = x.children;
    child[0].className = "review-center";
    child[1].className = "box-center";
    child[0].children[0].src = "images/review-center.JPG";
    x.style.zIndex = 1 ;
}
function normal(x){
    var child = x.children;
    child[0].className = "review-left";
    child[1].className = "box-left";
    child[0].children[0].src = "images/review-left.JPG";
    x.style.zIndex = 0 ;
}
function changeReview(selector_1, selector_2, selector_3 ){
    var left = document.querySelector(selector_1);
    var center = document.querySelector(selector_2);
    var right = document.querySelector(selector_3);

    if( left.style.zIndex == "0"){
        active(left);
        normal(center);
        normal(right);
    }
}


//image-popup
var slideIndex = 1;
showSlides(slideIndex);
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function openModal(){
    document.getElementById("myModal").style.display = "block";
}
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}


function showSearch() {
    var search = document.querySelector('#search');
    var input_search = document.querySelector('.input-search');
    var main = document.querySelector('.main');
    search.addEventListener('click', function() {
        input_search.classList.add('open');
        search.setAttribute("href", "#");
    });
    main.addEventListener('click', function() {
        input_search.classList.remove('open');
        search.removeAttribute("href");
    });
}



