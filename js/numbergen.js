window.onload = () => {
    const rndButton = document.querySelector("#rnd-button");

    rndButton.addEventListener("click", () => {
        const tbl = document.body.querySelector("#rnd-table");
        
        for (const row of tbl.rows) {
            for (const cell of row.cells) {
                cell.innerText = Math.floor(Math.random() * 257);
            }

        }
    });

};




