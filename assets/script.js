// Fungsi untuk submenu dropdown
function toggleDropdown(id, event) {
  event.preventDefault();
  const submenu = document.getElementById(id);
  const button = event.currentTarget;
  const arrow = button.querySelector(".arrow");

  const isVisible = submenu.style.display === "block";
  submenu.style.display = isVisible ? "none" : "block";

  if (isVisible) {
    button.classList.remove("active");
    if (arrow) arrow.style.transform = "rotate(0deg)";
  } else {
    button.classList.add("active");
    if (arrow) arrow.style.transform = "rotate(180deg)";
  }
}

// Fungsi untuk galeri toggle
function toggleGallery(event) {
  event.preventDefault();
  const gallery = document.getElementById('gallery-content');
  const button = event.currentTarget;
  const arrow = button.querySelector(".arrow");

  const isVisible = !gallery.classList.contains('hidden');
  gallery.classList.toggle('hidden');
  button.classList.toggle('active');

  if (arrow) {
    arrow.style.transform = isVisible ? "rotate(0deg)" : "rotate(180deg)";
  }
}

// Tutup semua submenu saat klik di luar
window.onclick = function(event) {
  const buttons = ['submenu', 'submenu2', 'submenu3'];

  buttons.forEach(id => {
    const submenu = document.getElementById(id);
    const button = document.querySelector(`[onclick*="${id}"]`);
    const arrow = button?.querySelector(".arrow");

    if (submenu && !event.target.closest('.cta-button')) {
      submenu.style.display = "none";
      button?.classList.remove("active");
      if (arrow) arrow.style.transform = "rotate(0deg)";
    }
  });
};


  
  