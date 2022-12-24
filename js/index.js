const navlist = document.querySelector('.servise_nav_list');
const link = [...navlist.children];

const blockInfo = document.querySelector('.servide_work');
const info = [...blockInfo.children];


info.forEach((item, i) => {
  if(i === 0) item.classList.add("active");
})

link.forEach((item, index) => {
  item.setAttribute("data-set",`${index}`);
});

info.forEach((item, index) => {
  item.setAttribute("data-set",`${index}`);
});


navlist.addEventListener('click', event => {
  if(event.target !== navlist){
    link.forEach(item => {
        item.classList.remove('active');
      })
    }
    info.forEach(item => {
      if(item.dataset.set === event.target.dataset.set){
        item.classList.add("active");
      }else{
        item.classList.remove('active');
      }
    });
    event.target.classList.toggle('active');
})

/* --------------------------------Amazing Work-------------------------------- */
// добаление картинок

const amozingLinks = document.querySelector(".nav_link_block");
const _Links = [...amozingLinks.children];

const amozingContent = document.querySelector(".amazing_work_galery");
const _Content = [...amozingContent.children];

_Links.forEach((item, index) => {
  item.setAttribute("data-set",`${index}`);
  item.setAttribute("data-info",`${(item.innerText)}`);
});

_Content.forEach((item, index) => {
  item.setAttribute("data-set",`${index}`);
});

amozingLinks.addEventListener('click', event => {
  if(event.target !== amozingLinks){
    _Links.forEach(item => {
        item.classList.remove('active');
      })
    };

    _Content.forEach(item => {
      if(item.dataset.set === event.target.dataset.set){
        item.classList.add("active");
        if(item.children.length < 1){
          searchForActiveBlock(event.target.dataset.info)
        }
      } 
      else item.classList.remove('active');
    });

  event.target.classList.toggle('active');
});


function searchForActiveBlock(url){
  let count = 0;
  _Content.forEach(item =>{
    if(item.classList.contains("active")){
      while(count < 12){
        count++;
        const mask = 
            `<div class="galery_mask">
            <img class="foto" src="./img/${url}/${count}.jpg" alt="${count}.png">
            <div class="galery_mask_hover">
            <img class="hover_img" src="./img/icon2.png" alt="icon2.png">
            <h4 class="info_foto_title">creative design</h4>
            <p class="info_foto_name">${url}</p>
            </div>
            </div> `;
      item.insertAdjacentHTML('beforeend', mask);
      };
    };
  });
}
searchForActiveBlock("All")


/* --------------------------------Breaking News-------------------------------- */
let q = 0;
const blockContent = document.querySelector('.news_content');

  while(q < 8){
   
    q++ 

    html = `
    <a href="#">
      <div class="contetn_block">
      <img class="content_foto" src="./img/news/${q}.png" alt="news/${q}.png">
        <div class="content_data d-flex">
          <p class="data_text">12 <br> Feb</p>
        </div>
      <div class="content_info">
        <h4 class="content_info_title">Amazing Blog Post</h4>
        <p class="sub_title">By admin<span class="line">|</span>2 comment</p>
      </div>
    </div>
    </a>
    `
  blockContent.insertAdjacentHTML('beforeend', html)
}

const hover = document.querySelector('.news_content');
const hoverBlock = [...hover.children];

hoverBlock.forEach(item => {

  const block = item.childNodes[1];

  block.addEventListener('mouseover', e => {

    const arrItem = [...block.children];
    const arrText = [...arrItem[2].children];
    arrItem[1].style.backgroundColor = "#18CFAB";
    arrItem[0].style.filter = 'grayscale(100%)';
    arrText[0].style.color = "#18CFAB";
    arrText[0].style.paddingLeft = "21px";

  });

  block.addEventListener('mouseout', e => {
    const arrItem = [...block.children];
    const arrText = [...arrItem[2].children];
    arrItem[1].style.backgroundColor = "#203E38";
    arrItem[0].style.filter = 'grayscale(0%)';
    arrText[0].style.color = "#717171";
    arrText[0].style.paddingLeft = "16px";
  });
});

/* --------------------------------People Say slider-------------------------------- */

let sIndex = 1;

function slider(n){
  showSlides(sIndex += n);
}

function currentSlide(n){
  showSlides(sIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("clider_info");
  const nav = document.getElementsByClassName('border_nav');

  if(n > slides.length) sIndex = 1;
  if(n < 1) sIndex = slides.length;


  for(i = 0; i < slides.length; i++){
    slides[i].style.display = 'none';
  }

  for(i = 0; i < nav.length; i++){
    nav[i].className = nav[i].className.replace('active', '');
  }

  slides[sIndex - 1].style.display = 'flex';
}

showSlides(sIndex);

/*--------------------------------------------------------------------------*/

const masGred = document.getElementById('mas_gall');

let numberMasonry = 0;
function addImg(){
  while(numberMasonry < 23){
    numberMasonry++;
    const img = `<div class="item_masonry size4">
    <img src="./img/bestImages/${numberMasonry}.jpg" alt="bestImages-${numberMasonry}">
    <div class="masonry_hover">
        <a href="#">
          <i class="fa fa-search fa-2" ></i>
        </a>
    </div>
  </div>`
    masGred.insertAdjacentHTML("beforeend", img)
  }
  const avtoRun = setInterval(addImg, 500);
  setTimeout(() => { clearInterval(avtoRun)}, 6000);
}
addImg()

/*--------------------------------------------------------------------------*/
// добаление рабочих кнопок + прелоадер

function unDisable(){
  document.querySelector('.preloader').classList.remove('active');
  loadImg.classList.remove('dis');
}


function heandelAddImg(){
const activeLinck = document.querySelectorAll('.galery');

activeLinck.forEach(item => {

    if(item.classList.contains('active')){
      let numberImg = 0;

      function urlImg(){
        numberImg++;
        const getUrlImg =  `<div class="galery_mask">
        <img class="foto" src="./img/dopImg/${numberImg}.jpeg"  alt="${numberImg}.png">
        <div class="galery_mask_hover">
        <img class="hover_img" src="./img/icon2.png" alt="icon2.png">
        <h4 class="info_foto_title">creative design</h4>
        <p class="info_foto_name">Uploaded Image</p>
        </div>
        </div> `;
        item.insertAdjacentHTML('beforeend', getUrlImg);
      }
    };
    const avtoRun = setInterval(urlImg, 500);
    setTimeout(() => { clearInterval(avtoRun)}, 6000);
 });
};


const loadImg = document.querySelector('.btn');
let clicks  = 0;
loadImg.addEventListener('click', e => {
  if(e) clicks ++;

  document.querySelector('.preloader').classList.add('active')
  loadImg.classList.add('dis')

  heandelAddImg()
  setTimeout(unDisable, 6000);

  if(clicks === 2) loadImg.classList.add('none')
})

// делать кнопку не кликабельной 
function firstUnDisable(){
  preloader.classList.remove('active');
  loadImg.classList.remove('dis');
}


