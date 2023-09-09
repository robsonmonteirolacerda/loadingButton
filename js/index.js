


save_btn = document.querySelector(".save-btn");

save_btn.onclick = function() {
    this.innerHTML =  "<div class='loader'></div>";
    setTimeout(() => {
        this.innerHTML = "Mudanças Feitas";
        this.style = "background: #f1f5f4; color: #333; pointer-events: none"
    }, 2000); 
}