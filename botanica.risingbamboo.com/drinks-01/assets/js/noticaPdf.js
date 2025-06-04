document.getElementById("downloadpdf").addEventListener("click", () => {
    const link = document.createElement('a');
    link.href = 'NoticaPDF.pdf'; 
    link.download = 'NoticaPDF.pdf'; 
    link.click();
  });
  