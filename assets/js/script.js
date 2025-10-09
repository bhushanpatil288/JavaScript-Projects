document.addEventListener("DOMContentLoaded", ()=>{
    // header start

    // hamburger menu start
    const hamMenu = document.querySelector(".menu")
    const hamMenuItems = document.querySelector(".menu-items")

    hamMenu.addEventListener("click", (e)=>{
        e.stopPropagation();
        hamMenuItems.classList.toggle("visible")
    })

    hamMenuItems.addEventListener("click", (e)=>{
        e.stopPropagation();
    })

    document.addEventListener("click", ()=>{
        hamMenuItems.classList.remove("visible");
    })

    // hamburger menu end

    // theme toggle start 

    const settings = document.querySelector(".settings-menu");
    const settingsIcon = document.querySelector(".settings-icon");
    const lightButton = document.querySelector(".theme-light");
    const darkButton = document.querySelector(".theme-dark");

    settingsIcon.addEventListener("click", (e)=>{
        e.stopPropagation();
        settings.classList.toggle("visible");
    })

    settings.addEventListener("click", (e)=>{
        e.stopPropagation();
    })

    document.addEventListener("click", ()=>{
        settings.classList.remove("visible");
    })

    darkButton.addEventListener("click", ()=>{
        document.querySelector("body").classList.add("dark")
    })
    lightButton.addEventListener("click", ()=>{
        document.querySelector("body").classList.remove("dark");
    })

    // theme toggle end
    // header end
})