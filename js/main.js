const investList = document.getElementById("ul");
const cat = document.getElementById("cat");
const imgDiv = document.querySelectorAll(".imgDiv");
const headers = document.querySelectorAll(".bg");
const liste = document.getElementById("lista");
const lis = liste.children;

window.addEventListener("scroll", () => {
   // console.log(scrollY);
   if (scrollY > 350) {
      headers.forEach((head) => {
         head.style = " background-color: rgba(0, 0, 0, 1);";
      });
   } else {
      headers.forEach((head) => {
         head.style = " background-color: rgba(0, 0, 0, 0.3);";
      });
   }

   if (document.documentElement.scrollWidth < 640) {
      if (scrollY > 460) {
         imgDiv.forEach((div, i) => {
            if (i === 0) {
               div.classList.add("visible");
            }
         });
      }
      if (scrollY > 600) {
         imgDiv.forEach((div, i) => {
            if (i === 1) {
               div.classList.add("visible");
            }
         });
      }
   } else {
      if (scrollY > 460) {
         imgDiv.forEach((div) => {
            div.classList.add("visible");
         });
      }
   }

   if (document.documentElement.scrollWidth < 640) {
      if (scrollY > 1400) {
         lis[0].classList.add("anim-List");
         lis[0].classList.remove("invest-List");
      }
      if (scrollY > 1500) {
         lis[1].classList.add("anim-List");
         lis[1].classList.remove("invest-List");
      }
      if (scrollY > 1600) {
         lis[2].classList.add("anim-List");
         lis[2].classList.remove("invest-List");
      }
      if (scrollY > 1800) {
         lis[3].classList.add("anim-List");
         lis[3].classList.remove("invest-List");
      }
   } else {
      if (scrollY > 440) {
         lis[0].classList.add("anim-List");
         lis[0].classList.remove("invest-List");
         setTimeout(function () {
            lis[1].classList.add("anim-List");
            lis[1].classList.remove("invest-List");
         }, 1000);
         setTimeout(function () {
            lis[2].classList.add("anim-List");
            lis[2].classList.remove("invest-List");
         }, 2000);
         setTimeout(function () {
            lis[3].classList.add("anim-List");
            lis[3].classList.remove("invest-List");
         }, 3000);
      }
   }
});

const styleSheets = document.styleSheets;

// console.log(styleSheets[0].href);
for (let j = 0; j < styleSheets.length; j++) {
   if (styleSheets[j].href.includes("http://127.0.0.1:5500/")) {
      const rules = styleSheets[j].cssRules || styleSheets[j].rules;
      for (let i = 0; i < rules.length; i++) {
         if (rules[i].selectorText === ".invest-List") {
            // console.log(rules[1]);
            // rules[i].style.animation = "inv-list 3s ease-out";
         }
      }
   }
}

document.addEventListener("click", () => {
   console.log(scrollY);
});
