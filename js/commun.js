const toutText = getTextFromNode(document.body);
const searchBar = document.getElementById("searchBar");
const rechRes = document.getElementById("rechRes");
const pageText = toutText.split("%").filter((item) => item.trim() !== "");

searchBar.addEventListener("input", () => {
   console.log(searchBar.childNodes);
   let result = [];
   let input = searchBar.value;

   let old = rechRes.children;
   for (let i = 0; i < old.length; old++) {
      old[i].remove();
      rechRes.classList.remove("absolute", "w-[326px]", "bg-white", "border-t-2", "border-gray-400", "rounded-b-md", "py-2", "flex");
      rechRes.classList.add("hidden");
   }

   if (input.length) {
      //   console.log(old);

      result = pageText.filter((key) => {
         return key.toLowerCase().includes(input.toLowerCase());
      });
      // console.log(result.length);
      if (result.length > 0) {
         let ul = document.createElement("ul");
         rechRes.classList.add("absolute", "top-8", "w-[436px]", "bg-white", "border-t-2", "border-gray-400", "rounded-b-md", "py-2", "flex");
         rechRes.classList.remove("hidden");
         searchBar.classList.remove("rounded-l-md");
         searchBar.parentElement.classList.remove("rounded-l-md");
         searchBar.classList.add("rounded-tl-md");
         searchBar.parentElement.classList.add("rounded-tl-md");

         result.forEach((res) => {
            let lis = document.createElement("li");
            lis.append(document.createTextNode(res));
            lis.classList.add("px-2", "py-1", "w-full", "cursor-pointer", "select-none", "hover:bg-cyan-50", "whitespace-pre-wrap", "text-ellipsis", "overflow-hidden");
            ul.append(lis);
         });
         rechRes.append(ul);
      } else {
         for (let i = 0; i < old.length; old++) {
            old[i].remove();
            rechRes.classList.remove("absolute", "bg-white", "border-t-2", "border-gray-400", "rounded-b-md", "py-2", "flex");
         }
         rechRes.classList.add("hidden");
         searchBar.classList.add("rounded-l-md");
         searchBar.parentElement.classList.add("rounded-l-md");

         searchBar.classList.remove("rounded-tl-md");
         searchBar.parentElement.classList.remove("rounded-tl-md");
      }
   }
});

searchBar.addEventListener("blur", () => {
   let old = rechRes.children;
   for (let i = 0; i < old.length; old++) {
      old[i].remove();
      rechRes.classList.remove("absolute", "w-[326px]", "bg-white", "border-t-2", "border-gray-400", "rounded-b-md", "py-2", "flex");
   }
   searchBar.value = "";
   rechRes.classList.add("hidden");
   searchBar.classList.add("rounded-l-md");
   searchBar.parentElement.classList.add("rounded-l-md");

   searchBar.classList.remove("rounded-tl-md");
   searchBar.parentElement.classList.remove("rounded-tl-md");
});

function getTextFromNode(node) {
   let text = "";
   if (node.nodeType === Node.TEXT_NODE) {
      if (!node.nodeValue.includes("\n") && /\s/gi.test(node.nodeValue)) {
         text += node.nodeValue;
         text += "%%";
      }
   }
   node = node.firstChild;
   while (node) {
      text += getTextFromNode(node);
      node = node.nextSibling;
   }
   return text;
}
