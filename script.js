

    // Mobile navigation
    const menuBtn = document.getElementById("menuBtn");
    const nav = document.getElementById("nav");

    menuBtn.addEventListener("click", () => {
      nav.classList.toggle("active");
    });

    // Close menu after clicking a link
    document.querySelectorAll("nav a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("active");
      });
    });

    // Automatic copyright year
    document.getElementById("year").textContent =
      new Date().getFullYear();

    // Mouse parallax effect for 3D cubes
    document.addEventListener("mousemove", (event) => {

      const x = (event.clientX / window.innerWidth - 0.5) * 20;
      const y = (event.clientY / window.innerHeight - 0.5) * 20;

      document.querySelector(".cube.one").style.marginLeft = x + "px";
      document.querySelector(".cube.one").style.marginTop = y + "px";

      document.querySelector(".cube.two").style.marginLeft = -x + "px";
      document.querySelector(".cube.two").style.marginTop = -y + "px";
    });

