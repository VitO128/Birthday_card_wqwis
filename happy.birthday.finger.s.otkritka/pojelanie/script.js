let wishpr = "Я желаю, ";

function WishDow() {
    let plwish = document.getElementById("wish").value;
    let allwish = wishpr + plwish;
    let file = new Blob([allwish], {
        type: "text/plain;charset=UTF-8"
    });

    let link = document.createElement("a");
    link.href = URL.createObjectURL(file);
    link.download = "my.birthday.wish.2026.txt";
    link.click();
let cont = document.getElementById("continue");
cont.hidden = false;
}
function Continue() {
        window.location.href ="../otkritka/index.html"
}

    