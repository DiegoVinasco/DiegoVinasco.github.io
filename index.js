function focusSection(selectedId) {
  console.debug(selectedId);
  const sections = document.getElementsByTagName("section");
  for (let index = 0; index < sections.length; index++) {
    const element = sections[index];
    if (element.id == selectedId) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  }
}
