'use strict';
// фиксация хедера
toggleClassOnScroll();
window.addEventListener('scroll', toggleClassOnScroll.bind());

function toggleClassOnScroll(el, pxAmount) {
	var scrollTop = window.pageYOffset; 
	var el = document.querySelector('header');
	
	if(innerWidth>991){if(scrollTop > 50) {
		el.classList.add('header_fixed');
	} else {
		el.classList.remove('header_fixed');
	}
}
}

// якорное меню


var blockMenu = document.querySelector(".menu-anchor"),
close = document.getElementById("close-menuM"),
open = document.getElementById("menuM"),
header = document.getElementById("header");

if (!document.getElementById('overflow')) {
	var overflow = document.createElement('div');
	overflow.id = 'overflow';
	//document.body.appendChild(overflow);
	header.appendChild(overflow);
}

function toggleMenu() {

	document.getElementById('overflow').classList.toggle('overflow_show');
	blockMenu.classList.toggle('menu-anchor_mobile');

}



close.onclick = toggleMenu;
open.onclick = toggleMenu;
overflow.onclick = toggleMenu;



// собираем все якоря; устанавливаем время анимации и количество кадров 
const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
animationTime = 800,
framesCount = 20;

anchors.forEach(function(item) {
	console.log(item.getAttribute('href'));
	
	item.addEventListener('click', function(e) {
		
		e.preventDefault();
		
		
		let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.scrollY;
		
		let scroller = setInterval(function() {
      // считаем на сколько скроллить за 1 такт
      let scrollBy = coordY / framesCount;
      
      // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
      // и дно страницы не достигнуто
      if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        // то скроллим на к-во пикселей, которое соответствует одному такту
        window.scrollBy(0, scrollBy);

    } else { 
        // иначе добираемся до элемента и выходим из интервала
        window.scrollTo(0, coordY);
        if(item.closest('.menu-anchor_mobile') != null){toggleMenu();}
        clearInterval(scroller);

    }
    // время интервала равняется частному от времени анимации и к-ва кадров
}, animationTime / framesCount);
	});
});

