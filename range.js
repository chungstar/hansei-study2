const list = document.querySelector(".fa-list");
const line = document.querySelector(".fa-grip-lines");

list.addEventListener("click", () => {
  $(".mobile-box").css("display", "block");
  $(".wrapper").css("display", "none");
});

line.addEventListener("click", () => {
  $(".mobile-box").css("display", "block");
  $(".wrapper").css("display", "flex");
});
