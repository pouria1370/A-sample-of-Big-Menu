const megaMenu = document.getElementById("mega_menu");
const allTitlesInMegaMenu = Array.from(
  megaMenu.querySelectorAll("#mega_menu_tagLists li h3")
);
const megaMeuChildren = document.getElementById("mega_menu_children");
const target = megaMeuChildren.querySelectorAll(".secondChildren");
const arrayFromMegaMenuChildrenNodes = Array.from(target);
const navBarProducts = document.getElementById("menu");
/*شروع پیاده سازی هاور خود منو تب
 */
let prevIndex = null;
let currentIndex = 0;
const showNavBarHandler = () => {
  megaMenu.classList.remove("goHidden");
};
navBarProducts
  .querySelector("ul")
  .children[3].addEventListener("mouseenter", showNavBarHandler);
// پایان هاور خود منو
/*
شروع هاور داخل
*/
const getOutOfPreviousMenuTag = (indexNumber) => {
  if (prevIndex !== null) {
    allTitlesInMegaMenu[prevIndex].removeEventListener(
      "mouseover",
      getOutOfPreviousMenuTag.bind(null, prevIndex)
    );
  }
  if (indexNumber === currentIndex) {
    prevIndex = currentIndex;
    return;
  }

;
  prevIndex = currentIndex;
  currentIndex = indexNumber;
  arrayFromMegaMenuChildrenNodes[prevIndex].classList.add("extra");
  arrayFromMegaMenuChildrenNodes[currentIndex].classList.remove("extra");
};
allTitlesInMegaMenu.forEach((node, index) => {
  node.addEventListener("mouseover", getOutOfPreviousMenuTag.bind(null, index));
});

/*
پایان هاور داخل بیگ منو
*/
// هاور پنجره ای بیگ منو
const megaMenuPosition = megaMenu.getBoundingClientRect();
const menuPosition = navBarProducts.getBoundingClientRect();

let previousPpositionY = 0;
let currentPositionY = null;
let counterEvent = 0;
let handleMousemove = (event) => {
  previousPpositionY = currentPositionY;
  currentPositionY = event.y;
  if (!megaMenu.className.includes("goHidden")) {
    const megaMenuPosition = megaMenu.getBoundingClientRect();
  //  const overlayWindowNodes = document.querySelectorAll(".background_overlay");     این قسمت که کامنت شده مربوط میشه به هیدن کردن منوی اورلی بیشتر
  //  const overlayWindowArray = Array.from(overlayWindowNodes)
    counterEvent++;
    if (
      event.y > megaMenuPosition.bottom ||
      event.x < megaMenuPosition.left ||
      event.x > megaMenuPosition.width
    ) {
      megaMenu.classList.add("goHidden");
     // overlayWindowArray.forEach(node=>node.classList.remove(showMaker))
      counterEvent = 0;
    } else if (counterEvent !== 1 && currentPositionY <= previousPpositionY) {
      if (counterEvent > 50 && event.y < megaMenuPosition.top) {
        megaMenu.classList.add("goHidden");
     // overlayWindowArray.forEach(node=>node.classList.remove(showMaker))
        counterEvent = 0;
      }
    }
  }
};
document.addEventListener("mousemove", handleMousemove);
// پایان هاور پنجره ای بیگ منو

// هاور اورلی
const overlayBtns = document.querySelectorAll(".secondChildren ul>h6 ");
const overlayBtnArray = Array.from(overlayBtns);
const overlayWindowNodes = document.querySelectorAll(".background_overlay");
const overlayWindowArray = Array.from(overlayWindowNodes)

    
const showOverlay = (target) => {
const targetedUL = target.nextElementSibling;
targetedUL.classList.add("showMaker");
const megaMenuChildren = document.getElementById("mega_menu_children");
const menuPosition = megaMenuChildren.getBoundingClientRect();
const targetedULPosition = targetedUL.getBoundingClientRect();
  targetedUL.style.top=menuPosition.top;
  targetedUL.style.bottom=menuPosition.bottom;
  targetedUL.style.width=menuPosition.width;
  targetedUL.style.height=menuPosition.height
  targetedUL.style.left=menuPosition.left
  targetedUL.style.right=menuPosition.right
  targetedUL.style.x=menuPosition.x
  console.log(menuPosition,targetedULPosition);
};
console.log(overlayBtnArray);

overlayBtnArray.forEach((node) =>
  node.addEventListener("mouseover", (e) => showOverlay(e.target))
);





const hideOverlay = (target) => {
  const liHideOverlay=(target)=>{
   console.log("i am from lis")
    target.parentElement.classList.remove("showMaker");
  }
  const liList=Array.from(target.querySelectorAll('li'))
  liList.forEach(node=>node.addEventListener('click',(e)=>liHideOverlay(e.target)))

  target.classList.remove("showMaker");
  console.log("i am from ul");
};
overlayWindowArray.forEach((node) =>{
    node.addEventListener("click", (e) => hideOverlay(e.target))

}
);
// پایان هاور اورلی