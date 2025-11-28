document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.querySelector(".st-default-search-input");
    
    if (searchInput) {
        searchInput.addEventListener("focusin", () => {
            const event = new CustomEvent("readthedocs-search-show");
            document.dispatchEvent(event);
        });
        
        // Also trigger on click for better UX
        searchInput.addEventListener("click", () => {
            const event = new CustomEvent("readthedocs-search-show");
            document.dispatchEvent(event);
        });
    }
});
