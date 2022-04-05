// function createProductSlider({id, slides = 5, spaceBetween = 0}) {
//   new Swiper(`#${id} .swiper-container`,{
//     slidesPerView: slides,
//     spaceBetween: spaceBetween,
//     navigation: {
//       nextEl: `#${id} .swiper-button-next`,
//       prevEl: `#${id} .swiper-button-prev`,
//     },
//     breakpoints: {
//       1202: {
//         spaceBetween: spaceBetween,
//       },
//     }
//   });
// }

// document.addEventListener('DOMContentLoaded', function(){

//   $('.geo__trigger').click(function() {
//     $('.geo__dropdown').slideToggle();
//     $('.geo__dropdown').toggleClass('active');

//   })

//   $('[data-enjoy-geo-place]').click(function() {
//     const place = $(this).data('enjoy-geo-place')
//     $('[data-enjoy-geo-label]').text(place);
//     $('.geo__dropdown').slideUp();
//     $('.geo__dropdown').removeClass('active');
//     if(selectedPlace !== place){
//       selectedPlace = place
//     }
//   })

//   $(document).on("click", function(event){
//     var $trigger = $(".geo");
//     if($trigger !== event.target && !$trigger.has(event.target).length && $('.geo__dropdown').hasClass('active')) {
//       $(".geo__dropdown").slideUp();
//       $('.geo__dropdown').removeClass('active');
//     }
//   });

//   if($('#categoriesSlider .swiper-container').length > 0){
//     new Swiper('#categoriesSlider .swiper-container', {
//       slidesPerView: 'auto',
//       spaceBetween: 10,
//       navigation: {
//         nextEl: '#categoriesSlider .swiper-button-next',
//         prevEl: '#categoriesSlider .swiper-button-prev',
//       },
//       freeMode: true,
//       breakpoints: {
//         994: {
//           slidesPerView: 4,
//           spaceBetween: 0,
//           freeMode: false
//         },
//         1442: {
//           slidesPerView: 5,
//           spaceBetween: 0,
//           freeMode: false
//         },
//         1701: {
//           slidesPerView: 6,
//           spaceBetween: 0,
//           freeMode: false
//         },
//       }
//     });
//   }
//   if($('#smallSlider .swiper-container').length > 0){
//     new Swiper('#smallSlider .swiper-container', {
//       slidesPerView: 1,
//       spaceBetween: 5,
//       navigation: {
//         nextEl: '#smallSlider .swiper-button-next',
//         prevEl: '#smallSlider .swiper-button-prev',
//       },
//       breakpoints: {
//         460: {
//           slidesPerView: 2,
//         },
//         651: {
//           slidesPerView: 3,
//         },
//         994: {
//           slidesPerView: 2,
//         },
//         1701: {
//           slidesPerView: 2,
//           spaceBetween: 30,
//         },
//       }
//     });
//   }
//   if($('#subcategories .swiper-container').length > 0){
//     new Swiper('#subcategories .swiper-container', {
//       slidesPerView: 'auto',
//       spaceBetween: 8,
//       freeMode: true,
//       navigation: {
//         nextEl: '#subcategories .swiper-button-next',
//         prevEl: '#subcategories .swiper-button-prev',
//       },
//     });
//   }


//   $('[data-enjoy-bolder]').each(function() {
//     const text = $(this).text().trim();
//     const firstWord = text.replace(/ .*/,'');
//     const end = text.split(' ').pop();
//     console.log('text', text, 'firstWord', firstWord, 'end', end)
//     $(this).html(`${firstWord} <span>${end}</span>`);
//   });
//   const stars = document.querySelectorAll("[data-stars]");
//   stars.forEach((element) => {
//     const starsCount = element.dataset.stars;
//     const starsElements = element.querySelectorAll("svg");
//     for (let index = 0; index < starsCount; index++) {
//       starsElements[index].classList.add("active");
//     }
//   });
// })


// $(".product_item").hover(
//   function () {
//     $(this).closest(".swiper-container").addClass("hovered");
//   },
//   function () {
//     $(this).closest(".swiper-container").removeClass("hovered");
//   }
// );

// PRODUCT SCRIPTS
function toggleCount() {
  const isActiveNow = this.classList.contains('active');
  const textContainer = this.querySelector('span');
  const count = this.getAttribute('data-count');
  const newCount = isActiveNow ? Number(count) - 1 : Number(count) + 1;
  this.classList.toggle('active');
  textContainer.textContent = newCount;
  this.setAttribute('data-count', newCount);
}
document.querySelectorAll('[data-toggle-like]')
  .forEach(el => el.addEventListener('click', toggleCount));



document.querySelectorAll('[data-count]').forEach(item => {
  const textContainer = item.querySelector('span');
  const count = item.getAttribute('data-count');
  textContainer.textContent = count;
});

// FILTERS SCRIPTS

function toggleDropdown() {
  const dropdown = this.parentElement;
  const body = dropdown.querySelector('.body');
  const shouldOpen = dropdown.classList.contains('collapsed');
  const bodyHeight = body.querySelector('.body-content').offsetHeight;
  dropdown.classList.toggle("collapsed");
  if (shouldOpen) {
    body.style.height = 0;
    setTimeout(() => {
      body.style.height = bodyHeight + 'px';
    }, 1);
    return;
  }
  body.style.height = bodyHeight + 'px';
  setTimeout(() => {
    body.style.height = 0;
  }, 1);
}

document.querySelectorAll('[data-filter-dropdown] .head')
  .forEach(el => el.addEventListener('click', toggleDropdown));


function showAllCheckboxes() {
  const parent = this.parentElement;
  this.style.height = 0;
  const checkboxes = parent.querySelectorAll('.hide');
  checkboxes.forEach(item => {
    console.log(item);
    item.style.height = '40px';
    item.style.padding = '8px';
  });

}
document.querySelectorAll('[data-show-all]')
  .forEach(el => el.addEventListener('click', showAllCheckboxes));