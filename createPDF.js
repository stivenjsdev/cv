async function generatePDF() {
  console.log("creating pdf...");

  /**
   * doc: https://github.com/eKoopmans/html2pdf.js
   * doc: https://artskydj.github.io/jsPDF/docs/jsPDF.html
   */

  // Delete underline in article titles
  const articleTitles = document.getElementsByClassName('article-title');
  
  for(i = 0; i < articleTitles.length; i++) {
    articleTitles[i].style.textDecoration = 'none';
  }


  // Export to PDF
  const element = document.getElementById("cv");
  // const element = document.body // Delete this
  const opt = {
    margin: 0,
    filename: "stivenCv.pdf",
    image: { type: "jpeg", quality: 0.62 }, // 1 for a better quality in the profile image
    html2canvas: { scale: 5 }, // entre mas alto mas definicion
    enableLinks: true,
    jsPDF: {
      unit: "mm", // or px or cm
      format: [210, 400], // or letter or a4 or legal or ledger, [210, 330] mm
      orientation: "portrait",
      precision: "16", // or 12
    },
  };
  try {
    await html2pdf().set(opt).from(element).save();
    console.log("...pdf created");
    // Add again underline in article titles
    for(i = 0; i < articleTitles.length; i++) {
      articleTitles[i].style.textDecoration = 'underline';
    }
  } catch (error) {
    console.log(error.message)
  }
}

const button = document.getElementById("export-button");
button.addEventListener("click", generatePDF);
