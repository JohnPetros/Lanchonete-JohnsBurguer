const buttonToUp = document.querySelector(".button-to-up");
const body = document.querySelector("body");

const toUp = () => {
  body.scrollTop = 0;
};

const showButtonToUp = () => {
  if (body.scrollTop > 750) {
    buttonToUp.classList.add("show");
  } else {
    buttonToUp.classList.remove("show");
  }
};

const activeSection = (section) => {
  const targetLine = scrollY + innerHeight / 2;

  console.log(section);
  console.log(targetLine);

  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  const sectionBottom = sectionTop + sectionHeight;

  if (targetLine >= sectionTop && targetLine <= sectionBottom) {
    const menuElement = document.querySelector(`a[href="#${section}"]`);
    menuElement.classList.add("active");
  }
};

const onScroll = () => {
  showButtonToUp();
  const sections = document.querySelectorAll("section");
  // sections.forEach((section) => activeSection(section.id));
};

buttonToUp.addEventListener("click", toUp);
body.addEventListener("scroll", onScroll);
