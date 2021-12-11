
import { displayMenu, animatedMenu} from "./scripts/display_menu.js";

const animation = document;
animation.addEventListener("DOMContentLoaded", e => {
    animatedMenu(".show_menu")
})

const show = document;
show.addEventListener("DOMContentLoaded", e => {
    displayMenu(".show_menu", ".hidden", ".hidden a")
})



