var theme = ["amber",
    "brown",
    "deep-purple",
    "khaki",
    "orange",
    "teal",
    "black",
    "cyan",
    "green",
    "light-blue",
    "pink",
    "yellow",
    "blue",
    "dark-grey",
    "grey",
    "light-green",
    "purple",
    "blue-grey",
    "deep-orange",
    "indigo",
    "lime",
    "red"];

window.onload = start;
function start(){
var selection = document.querySelector('select');
for (var i in theme) {
    o = document.createElement("option");
    o.value = theme[i];
    o.innerText = theme[i];
    selection.appendChild(o);
}
document.querySelector("select").addEventListener('change', test);

}


function test(e) {
    console.log(this.value);
    selected_theme = this.value;
    document.querySelector(".theme").href = "w3-theme-" + selected_theme + ".css";
}

