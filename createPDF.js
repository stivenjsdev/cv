async function gerenratePDF() {
  console.log("creating pdf...");

  /**
   * doc https://artskydj.github.io/jsPDF/docs/jsPDF.html
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
    filename: "cv-Stiven.pdf",
    image: { type: "jpeg", quality: 1 },
    html2canvas: { scale: 5 }, // entre mas alto mas definicion
    enableLinks: true,
    jsPDF: {
      unit: "mm", // or px or cm
      format: [210, 360], // or letter or a4 or legal or ledger, [210, 330] mm
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
button.addEventListener("click", gerenratePDF);
