function downloadClickedImg(URL) {
  const link = document.createElement("a");

  link.textContent = "Download image";
  link.href = URL;
  link.download = "pikaaa.png";

  // Download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

document.addEventListener("click", function (e) {
  // Only download images
  if (e.target.tagName == "IMG") {
    const imgFullURL = e.target.src;
    downloadClickedImg(imgFullURL);
  }
});
