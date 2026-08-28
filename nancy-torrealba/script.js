/* =========================================================
   Nancy Torrealba — Interacciones de la landing
   ========================================================= */

(function () {
  "use strict";

  var WHATSAPP = "584144776156";

  /* ---------- Menú móvil ---------- */
  var botonMenu = document.querySelector(".barra__boton");
  var menu = document.getElementById("menu-principal");

  if (botonMenu && menu) {
    botonMenu.addEventListener("click", function () {
      var abierto = menu.classList.toggle("esta-abierto");
      botonMenu.setAttribute("aria-expanded", String(abierto));
      botonMenu.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
    });

    // Al tocar un enlace, se cierra el menú en móvil
    menu.addEventListener("click", function (evento) {
      if (evento.target.closest("a")) {
        menu.classList.remove("esta-abierto");
        botonMenu.setAttribute("aria-expanded", "false");
        botonMenu.setAttribute("aria-label", "Abrir menú");
      }
    });
  }

  /* ---------- Sombra de la barra al hacer scroll ---------- */
  var barra = document.querySelector(".barra");

  if (barra) {
    var actualizarBarra = function () {
      barra.classList.toggle("esta-fija", window.scrollY > 10);
    };
    actualizarBarra();
    window.addEventListener("scroll", actualizarBarra, { passive: true });
  }

  /* ---------- Animación de entrada por secciones ---------- */
  var elementos = document.querySelectorAll(".revelar");

  if (!("IntersectionObserver" in window)) {
    elementos.forEach(function (elemento) {
      elemento.classList.add("visible");
    });
  } else {
    var observador = new IntersectionObserver(
      function (entradas) {
        entradas.forEach(function (entrada) {
          if (entrada.isIntersecting) {
            entrada.target.classList.add("visible");
            observador.unobserve(entrada.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elementos.forEach(function (elemento) {
      observador.observe(elemento);
    });
  }

  /* ---------- Año del pie ---------- */
  var anio = document.getElementById("anio");
  if (anio) {
    anio.textContent = String(new Date().getFullYear());
  }

  /* ---------- Formulario: arma el mensaje y abre WhatsApp ---------- */
  var formulario = document.getElementById("formulario-contacto");

  if (formulario) {
    formulario.addEventListener("submit", function (evento) {
      evento.preventDefault();

      var datos = new FormData(formulario);
      var nombre = (datos.get("nombre") || "").toString().trim();
      var ciudad = (datos.get("ciudad") || "").toString().trim();
      var interes = (datos.get("interes") || "").toString().trim();
      var mensaje = (datos.get("mensaje") || "").toString().trim();

      var texto =
        "Hola Nancy, soy " +
        nombre +
        " desde " +
        ciudad +
        ". Me interesa " +
        interes +
        ".";

      if (mensaje) {
        texto += " " + mensaje;
      }

      window.open(
        "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(texto),
        "_blank",
        "noopener"
      );
    });
  }
})();
