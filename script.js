let btn = document.querySelectorAll(".btn_accordion");
// let content = document.querySelector('.content_accordion');
btn.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("active");
    let content = element.nextElementSibling;
    if (element.classList.contains("active")) {
      content.style.height = content.scrollHeight + "px";
    } else {
      content.style.height = 0 + "px";
    }
  });
});
