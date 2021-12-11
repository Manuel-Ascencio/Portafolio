export function animatedMenu(lines){
    const animation = document
    animation.addEventListener("click", e => {
        if(e.target.matches(lines)){
            animation.querySelector(lines).classList.toggle("open")
        }
    })
}
export function displayMenu(button, replace, links){
    const show = document
    show.addEventListener("click", e => {
        if(e.target.matches(button)){
            show.querySelector(replace).classList.toggle("visible_menu")
        }
        if(e.target.matches(links)){
            show.querySelector(replace).classList.remove("visible_menu")
            show.querySelector(button).classList.remove("open")

        }
    })
}

