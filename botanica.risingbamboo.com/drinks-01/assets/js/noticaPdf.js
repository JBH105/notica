document.getElementById("downloadpdf").addEventListener("click", () => {
    const link = document.createElement('a');
    link.href = 'newNotica.pdf'; 
    link.download = 'newNotica.pdf'; 
    link.click();
  });
  