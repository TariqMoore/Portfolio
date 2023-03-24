//Below is an intersectionObserver object. What intersectionObserver lets you do is find out what elements are on the screen.
//It has its own methods like "unobserve" when you want to stop looking at something, and "isIntersection" which is a true or false method to see if something is on the screen.
//These elements being observed can be placed in an argument called "entries" in our anonymous (or arrowhead) function
//Below we are looping over each entry using .forEach() and then adding the "show" class from our css IF that entry isIntersecting on the screen.
const fadeIn = document.querySelectorAll(".fadeIn"); //This variable is getting all elements with the specified css class and storing them into an array.
const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting);
        if (entry.isIntersecting){
            observer.unobserve(entry.target);
        }
    })
    }, 
    {
        threshold: 0, 
    }
)

fadeIn.forEach(fadeIn => {
    observer.observe(fadeIn); //this is looping over our variable with forEach, and then placing an observe on all of the elements in the array.
})