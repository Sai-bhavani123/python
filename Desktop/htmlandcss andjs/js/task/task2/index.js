
        const color = document.getElementById("container")
        for ( let i = 1; i <= 7; i++) {
            const btn = document.createElement("button");
            btn.className = "color-btn";
            let colorName = "";
            let colorhexa= "";

            if (i === 1) {
                colorName = "Violet";
                colorhexa= "#8F00FF";
            }
            else if (i === 2) {
                colorName = "Indigo";
                colorhexa= "#4B0082";
            }
            else if (i === 3) {
                colorName = "Blue";
                colorhexa= "#0000FF";
            }
            else if (i === 4) {
                colorName = "Green";
                colorhexa= "#00FF00";
            }
            else if (i === 5) {
                colorName = "Yellow";
                colorhexa= "#FFFF00";
            }
            else if (i === 6) {
                colorName = "Orange";
                colorhexa= "#FFA500";
            }
            else if (i === 7) {
                colorName = "Red";
                colorhexa= "#FF0000";
            }
            btn.textContent = colorName;
            btn.style.backgroundColor = colorhexa;
            btn.addEventListener("click",()=>{
                setTimeout(()=>{
                    document.body.style.backgroundColor=colorhexa;
                },1000)
            })
            color.appendChild(btn)

        }