window.addEventListener('scroll', function () {
  var scroll = document.documentElement.scrollTop || document.body.scrollTop;
  var docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrollPercent = (scroll / docHeight) * 100;
  var progressBar = document.getElementById('progressBar');
  progressBar.style.width = scrollPercent + "%";

  if (scrollPercent > 50) {
    progressBar.classList.remove('bg-success');
    progressBar.classList.add('bg-danger');
  } else {
    progressBar.classList.remove('bg-danger');
    progressBar.classList.add('bg-success');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  var navItems = document.querySelectorAll('.nav-pagination');
  var backgrounds = [
    "img/sfondo_titolo.jpg",
    "img/inizi.jpg",
    "img/adrianoPensieroso.jpg",
    "img/maps_mattoni.png",
  ];

  navItems.forEach(function (item, index) {
    item.addEventListener('mouseover', function () {
      document.body.style.transition = "background-image 0.3s ease";
      document.body.style.backgroundImage = "url('" + backgrounds[index] + "')";
    });

    item.addEventListener('mouseout', function () {
      document.body.style.transition = "background-image 0.3s ease";
      document.body.style.backgroundImage = "url('" + backgrounds[0] + "')";
    });
  });
});

function toggleNavbar(navbarId) {
  var navbar = document.getElementById(navbarId);
  if (navbar.classList.contains("show")) {
    navbar.classList.remove("show");
  } else {
    navbar.classList.add("show");
  }
}
document.addEventListener('DOMContentLoaded', function() {
  var showButton = document.getElementById('showButton');
  var additionalInfo = document.getElementById('additionalInfo');

  showButton.addEventListener('click', function() {
    if (additionalInfo.style.display === 'none') {
      additionalInfo.style.display = 'block';
      this.textContent = 'Nascondi altre informazioni';
    } else {
      additionalInfo.style.display = 'none';
      this.textContent = 'Mostra altre informazioni';
    }
  });
});
