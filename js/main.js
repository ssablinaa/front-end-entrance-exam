/* global html2pdf */
document.getElementById("download").addEventListener("click", function () {
  const resume = document.getElementById("resume");

  const options = {
    margin: 0.5,
    filename: "resume.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };

  html2pdf().from(resume).set(options).save();
});
