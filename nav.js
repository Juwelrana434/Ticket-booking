document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", function () {
        if (button.getAttribute("data-state") === "disabled") {
            button.style.backgroundColor = "blue";
            button.setAttribute("data-state", "enabled");
        } else {
            button.style.backgroundColor = "green";
            button.setAttribute("data-state", "disabled");
        }
    });
});
