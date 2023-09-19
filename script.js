const search = () => {
  const ser = document.getElementById("search").value.toUpperCase();
  const books = document.querySelectorAll(".book"); // Select all elements with class "book"

  for (let i = 0; i < books.length; i++) {
    // Start from i = 0
    let match = books[i].querySelector("h4"); // Select the "h4" element inside the book

    if (match) {
      let textvalue = match.textContent || match.innerText;
      if (textvalue.toUpperCase().indexOf(ser) > -1) {
        books[i].style.display = ""; // Show the book
      } else {
        books[i].style.display = "none"; // Hide the book
      }
    }
  }
};

const search2 = () => {
  const ser2 = document.getElementById("search2").value.toUpperCase();
  const book = document.querySelectorAll(".book"); // Select all elements with class "book"

  for (let i = 0; i < book.length; i++) {
    // Start from i = 0
    let match = book[i].querySelector("h4"); // Select the "h4" element inside the book

    if (match) {
      let textvalue = match.textContent || match.innerText;
      if (textvalue.toUpperCase().indexOf(ser2) > -1) {
        book[i].style.display = ""; // Show the book
      } else {
        book[i].style.display = "none"; // Hide the book
      }
    }
  }
};

const burger = document.querySelector('.burger');
const navitem = document.querySelector('.navitem');

if (burger && navitem) {
  burger.addEventListener("click", () => {
    navitem.classList.toggle('a-class');
  });
} else {
  console.error("One or both elements not found.");
}

