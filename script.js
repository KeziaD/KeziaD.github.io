window.onload = function() {
    const bilderreihe = document.getElementById('bilderreihe');
    const bilder = Array.from(bilderreihe.children);
    
    // Duplizieren der Bilderreihe
    bilder.forEach(bild => {
        const clonedBild = bild.cloneNode(true);
        bilderreihe.appendChild(clonedBild);
    });
};