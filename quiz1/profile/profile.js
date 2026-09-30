function toggleAccordion(element) {
    const currentItem = element.parentElement;
    const currentContent = currentItem.querySelector('.accordion-content');
    const allItems = document.querySelectorAll('.accordion-item');
    const isActive = currentItem.classList.contains('active');
    
    allItems.forEach(item => {
        item.classList.remove('active');
        item.querySelector('.accordion-content').style.maxHeight = null;
    });
    
    if (!isActive) {
        currentItem.classList.add('active');
        currentContent.style.maxHeight = currentContent.scrollHeight + 40 + "px";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const activeItem = document.querySelector('.accordion-item.active');
    if (activeItem) {
        const activeContent = activeItem.querySelector('.accordion-content');
        activeContent.style.maxHeight = activeContent.scrollHeight + 40 + "px";
    }
});