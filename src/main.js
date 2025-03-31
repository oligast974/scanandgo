import { Html5Qrcode } from "html5-qrcode";

document.getElementById("start-scan").addEventListener("click", () => {
  const scanner = new Html5Qrcode("reader");
  scanner.start(
    { facingMode: "environment" },
    {
      fps: 10,
      qrbox: 250,
    },
    (decodedText) => {
      document.getElementById("info").textContent = `Code scanné : ${decodedText}`;
      scanner.stop();
      document.getElementById("inconnu").style.display = "block";
    },
    (error) => {
      console.warn(`Erreur scan : ${error}`);
    }
  );
});

document.getElementById("ajouter").addEventListener("click", () => {
  const nom = document.getElementById("nom").value;
  const prix = document.getElementById("prix").value;
  alert(`Produit ajouté : ${nom} - ${prix}€`);
});
