document.getElementById("downloadBtn").addEventListener("click", () => {
    const link = document.createElement('a');
    link.href = 'noticaProduct.pdf'; 
    link.download = 'noticaProduct.pdf'; 
    link.click();
  });
  