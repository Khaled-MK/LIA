// Données à envoyer
// const qualifDiv = document.getElementById("qualif");
const formType = document.getElementById("formType");
const qualifSub = document.getElementById("qualifSub");
const leNom = document.getElementById("nom");
const lePrenom = document.getElementById("prenom");
const mail = document.getElementById("email");
const tel = document.getElementById("tel");
const societe = document.getElementById("societe");
const poste = document.getElementById("poste");
let type = "";
let subForm = "";

const subBtn = document.getElementById("subBtn");
// const url = "https://script.google.com/macros/s/AKfycbxoiLr93YfEyMrcPWMV6mUAJ1Egga_L9MwvZ70hbB6KxbVg1d0bd69pWZP-DSl3KmJvbA/exec";
const url = "https://script.google.com/macros/s/AKfycbyCeJybpuh_6kWd7C_-0tMtCy6Bxa6C6Xiim-MdqkOvqEp2t7rxzLwuL4WNmPZFtpDlrQ/exec";

formType.addEventListener("change", (e) => {
   if (e.target.id === "qualif") {
      qualifSub.classList.remove("hidden");
      type = "Formations qualifiantes";
      subForm = "";
   } else if (e.target.id === "entreprises") {
      qualifSub.classList.add("hidden");
      type = "Formations pour entreprises";
      subForm = "";
   } else if (e.target.id === "tutUnv") {
      qualifSub.classList.add("hidden");
      type = "Tutorat universitaire";
      subForm = "";
   } else {
      qualifSub.classList.add("hidden");
      type = "";
      subForm = "";
   }
});

qualifSub.addEventListener("change", (e) => {
   if (e.target.id === "etrangeLang") {
      subForm = "Langues étrangères";
   } else if (e.target.id === "adminGest") {
      subForm = "Gestion et administration";
   } else if (e.target.id === "commMedia") {
      subForm = "Communication et médias";
   } else if (e.target.id === "educ") {
      subForm = "Education";
   } else if (e.target.id === "traduction") {
      subForm = "Traduction";
   } else {
      subForm = "";
   }
});

subBtn.addEventListener("click", (e) => {
   e.preventDefault();

   const formData = {
      nom: leNom.value,
      prenom: lePrenom.value,
      email: mail.value,
      telephone: tel.value,
      company: societe.value,
      post: poste.value,
      form: type,
      subType: subForm,
   };

   const options = {
      method: "POST",
      headers: {
         "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(formData),
   };

   fetch(url, options)
      .then((response) => {
         if (response.ok) {
            console.log("Données envoyées avec succès !");
            location.href = "../index.html";
         } else {
            console.error("Erreur lors de l'envoi des données : ", response.statusText);
         }
      })
      .catch((error) => console.error("Erreur : ", error));
});
