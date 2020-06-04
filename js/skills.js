var items = document.querySelectorAll(".circle-menu-box p.menu-item");

for (var i = 0, l = items.length; i < l; i++) {
  items[i].style.left =
    (40 - 35 * Math.cos(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(
      4
    ) + "%";

  items[i].style.top =
    (40 + 35 * Math.sin(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(
      4
    ) + "%";
}
AOS.init();
