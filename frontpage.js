function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entries.isIntersection){
            document.querySelectorAll(".animated")[0].classList.add("fade-in");
        }
    })
})

observer.observe(document.querySelector(".contains"));