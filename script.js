/* =========================================
   TOP STEEL - JAVASCRIPT GENERAL
========================================= */


/* =========================================
   FUNCIÓN GENERAL DE ANIMACIONES AL SCROLL
========================================= */

function crearAnimacionScroll(selector, threshold = 0.15) {

    const elementos = document.querySelectorAll(selector);

    if (elementos.length === 0) {
        return;
    }

    const observador = new IntersectionObserver(
        (entradas) => {

            entradas.forEach((entrada) => {

                if (entrada.isIntersecting) {

                    entrada.target.classList.add("mostrar");

                } else {

                    entrada.target.classList.remove("mostrar");

                }

            });

        },
        {
            threshold: threshold
        }
    );


    elementos.forEach((elemento) => {
        observador.observe(elemento);
    });

}


/* =========================================
   1. SERVICIOS DEL INDEX
========================================= */

crearAnimacionScroll(
    ".tarjeta-servicio",
    0.20
);


/* =========================================
   2. PROYECTOS DEL INDEX
========================================= */

crearAnimacionScroll(
    ".proyecto",
    0.20
);


/* =========================================
   3. NOSOTROS DEL INDEX
========================================= */

crearAnimacionScroll(
    ".nosotros-texto, .nosotros-destacado",
    0.20
);


/* =========================================
   4. CONTACTO DEL INDEX
========================================= */

crearAnimacionScroll(
    ".contacto-texto, .formulario-contacto",
    0.20
);


/* =========================================
   5. PÁGINAS INTERNAS
========================================= */

crearAnimacionScroll(
    `
    .titulo-pagina,
    .servicio-detalle,
    .proyecto-grande,
    .nosotros-principal,
    .bloque-acero,
    .paso,
    .contacto-info,
    .cotizacion-box
    `,
    0.12
);


/* =========================================
   6. PROCESO WOW
========================================= */

crearAnimacionScroll(
    ".proceso-wow-titulo, .proceso-wow-card",
    0.15
);


/* =========================================
   7. GALERÍAS
========================================= */

crearAnimacionScroll(
    ".foto-proyecto",
    0.15
);


/* =========================================
   8. POR QUÉ TOP STEEL
========================================= */

crearAnimacionScroll(
    ".porque-titulo, .porque-card",
    0.15
);


/* =========================================
   9. ESTADÍSTICAS
========================================= */

crearAnimacionScroll(
    ".estadistica",
    0.15
);


/* =========================================
   10. PÁGINA ACTIVA EN EL MENÚ
========================================= */

const enlacesMenu =
    document.querySelectorAll(".menu a");


let paginaActual =
    window.location.pathname
        .split("/")
        .pop();


if (
    paginaActual === "" ||
    paginaActual === "/"
) {

    paginaActual = "index.html";

}


enlacesMenu.forEach((enlace) => {

    enlace.classList.remove("activo");

});


enlacesMenu.forEach((enlace) => {

    const destino =
        enlace
            .getAttribute("href")
            ?.split("#")[0];


    if (destino === paginaActual) {

        enlace.classList.add("activo");

    }

});


/* =========================================
   PÁGINAS QUE PERTENECEN A NOSOTROS
========================================= */

const paginasNosotros = [

    "proceso-diseno.html",
    "proceso-fabricacion.html",
    "proceso-instalacion.html"

];


if (paginasNosotros.includes(paginaActual)) {

    enlacesMenu.forEach((enlace) => {

        enlace.classList.remove("activo");

        if (
            enlace.getAttribute("href") ===
            "nosotros.html"
        ) {

            enlace.classList.add("activo");

        }

    });

}


/* =========================================
   PÁGINAS QUE PERTENECEN A PROYECTOS
========================================= */

const paginasProyectos = [

    "proyecto-estructuras.html",
    "proyecto-techos.html",
    "proyecto-paneles.html",
    "proyecto-barandas.html"

];


if (paginasProyectos.includes(paginaActual)) {

    enlacesMenu.forEach((enlace) => {

        enlace.classList.remove("activo");

        if (
            enlace.getAttribute("href") ===
            "proyectos.html"
        ) {

            enlace.classList.add("activo");

        }

    });

}


/* =========================================
   11. MENÚ MÓVIL
========================================= */

const menuBoton =
    document.getElementById("menuBoton");

const menu =
    document.querySelector(".menu");


if (menuBoton && menu) {

    menuBoton.setAttribute(
        "aria-expanded",
        "false"
    );


    menuBoton.addEventListener(
        "click",
        () => {

            menu.classList.toggle(
                "mostrar-menu"
            );


            const abierto =
                menu.classList.contains(
                    "mostrar-menu"
                );


            menuBoton.textContent =
                abierto
                    ? "✕"
                    : "☰";


            menuBoton.setAttribute(
                "aria-expanded",
                abierto
            );

        }
    );


    enlacesMenu.forEach((enlace) => {

        enlace.addEventListener(
            "click",
            () => {

                menu.classList.remove(
                    "mostrar-menu"
                );

                menuBoton.textContent =
                    "☰";

                menuBoton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }
        );

    });


    /* CERRAR AL HACER CLIC FUERA */

    document.addEventListener(
        "click",
        (evento) => {

            if (
                !menu.contains(evento.target) &&
                !menuBoton.contains(evento.target)
            ) {

                menu.classList.remove(
                    "mostrar-menu"
                );

                menuBoton.textContent =
                    "☰";

                menuBoton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }
    );

}


/* =========================================
   12. FORMULARIO DEL INDEX
========================================= */

const formularioInicio =
    document.querySelector(
        ".formulario-contacto"
    );


if (formularioInicio) {

    formularioInicio.addEventListener(
        "submit",
        (evento) => {

            evento.preventDefault();


            const campos =
                formularioInicio.querySelectorAll(
                    "input"
                );


            const nombre =
                campos[0]?.value.trim() || "";

            const telefono =
                campos[1]?.value.trim() || "";

            const correo =
                campos[2]?.value.trim() || "";

            const servicio =
                formularioInicio
                    .querySelector("select")
                    ?.value || "";

            const mensaje =
                formularioInicio
                    .querySelector("textarea")
                    ?.value.trim() || "";


            if (
                nombre === "" ||
                telefono === ""
            ) {

                alert(
                    "Por favor completa tu nombre y teléfono."
                );

                return;

            }


            const textoWhatsApp =
`Hola TOP STEEL.

Mi nombre es ${nombre}.

Mi teléfono es:
${telefono}

Mi correo es:
${correo || "No indicado"}

Servicio de interés:
${servicio}

Descripción de mi proyecto:
${mensaje || "Deseo recibir más información."}`;


            const numeroWhatsApp =
                "51999999999";


            const urlWhatsApp =
                "https://wa.me/" +
                numeroWhatsApp +
                "?text=" +
                encodeURIComponent(
                    textoWhatsApp
                );


            window.open(
                urlWhatsApp,
                "_blank",
                "noopener,noreferrer"
            );

        }
    );

}


/* =========================================
   13. FORMULARIO CONTACTO INTERNO
========================================= */

const formularioCotizacion =
    document.getElementById(
        "formularioCotizacion"
    );


if (formularioCotizacion) {

    formularioCotizacion.addEventListener(
        "submit",
        (evento) => {

            evento.preventDefault();


            const nombre =
                document
                    .getElementById("nombre")
                    ?.value.trim() || "";

            const telefono =
                document
                    .getElementById("telefono")
                    ?.value.trim() || "";

            const servicio =
                document
                    .getElementById("servicio")
                    ?.value || "";

            const mensaje =
                document
                    .getElementById("mensaje")
                    ?.value.trim() || "";


            if (
                nombre === "" ||
                telefono === ""
            ) {

                alert(
                    "Por favor completa tu nombre y teléfono."
                );

                return;

            }


            const textoWhatsApp =
`Hola TOP STEEL.

Mi nombre es ${nombre}.

Mi teléfono es:
${telefono}

Estoy interesado en:
${servicio}

Descripción de mi proyecto:
${mensaje || "Deseo recibir más información."}`;


            const numeroWhatsApp =
                "51999999999";


            const urlWhatsApp =
                "https://wa.me/" +
                numeroWhatsApp +
                "?text=" +
                encodeURIComponent(
                    textoWhatsApp
                );


            window.open(
                urlWhatsApp,
                "_blank",
                "noopener,noreferrer"
            );

        }
    );

}


/* =========================================
   14. VISOR DE FOTOS
========================================= */

const visorProyecto =
    document.getElementById(
        "visorProyecto"
    );

const imagenVisor =
    document.getElementById(
        "imagenVisor"
    );

const cerrarVisor =
    document.getElementById(
        "cerrarVisor"
    );

const fotosGaleria =
    document.querySelectorAll(
        ".foto-proyecto img"
    );


if (
    visorProyecto &&
    imagenVisor
) {

    fotosGaleria.forEach((imagen) => {

        imagen.addEventListener(
            "click",
            () => {

                imagenVisor.src =
                    imagen.src;

                imagenVisor.alt =
                    imagen.alt;


                visorProyecto.classList.add(
                    "activo"
                );


                document.body.style.overflow =
                    "hidden";

            }
        );

    });


    function cerrarGaleria() {

        visorProyecto.classList.remove(
            "activo"
        );


        document.body.style.overflow =
            "";


        setTimeout(() => {

            imagenVisor.src = "";

        }, 400);

    }


    if (cerrarVisor) {

        cerrarVisor.addEventListener(
            "click",
            cerrarGaleria
        );

    }


    visorProyecto.addEventListener(
        "click",
        (evento) => {

            if (
                evento.target === visorProyecto
            ) {

                cerrarGaleria();

            }

        }
    );


    document.addEventListener(
        "keydown",
        (evento) => {

            if (
                evento.key === "Escape" &&
                visorProyecto.classList.contains(
                    "activo"
                )
            ) {

                cerrarGaleria();

            }

        }
    );

}


/* =========================================
   15. SERVICIOS EXPANDIBLES
   SOLO UNO ABIERTO A LA VEZ
========================================= */

const botonesServicios =
    document.querySelectorAll(
        ".boton-ver-servicio"
    );


botonesServicios.forEach((boton) => {

    boton.addEventListener(
        "click",
        () => {

            const tarjetaActual =
                boton.closest(
                    ".servicio-expandible"
                );


            if (!tarjetaActual) {
                return;
            }


            const yaEstaAbierta =
                tarjetaActual.classList.contains(
                    "abierto"
                );


            /* CERRAR LAS DEMÁS */

            document
                .querySelectorAll(
                    ".servicio-expandible.abierto"
                )
                .forEach((tarjeta) => {

                    tarjeta.classList.remove(
                        "abierto"
                    );


                    const textoBoton =
                        tarjeta.querySelector(
                            ".boton-ver-servicio span"
                        );


                    if (textoBoton) {

                        textoBoton.textContent =
                            "Ver más";

                    }

                });


            /* ABRIR LA SELECCIONADA */

            if (!yaEstaAbierta) {

                tarjetaActual.classList.add(
                    "abierto"
                );


                const textoActual =
                    boton.querySelector("span");


                if (textoActual) {

                    textoActual.textContent =
                        "Ver menos";

                }


                /* CENTRAR SUAVEMENTE */

                setTimeout(() => {

                    tarjetaActual.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

                }, 250);

            }

        }
    );

});


/* =========================================
   16. TRANSICIÓN ENTRE PÁGINAS
========================================= */

const transicionPagina =
    document.querySelector(
        ".transicion-pagina"
    );


const enlacesInternos =
    document.querySelectorAll(
        'a[href$=".html"]'
    );


enlacesInternos.forEach((enlace) => {

    enlace.addEventListener(
        "click",
        function(evento) {

            const destino =
                this.getAttribute("href");


            if (!destino) {
                return;
            }


            /* PERMITIR CTRL + CLIC */

            if (
                evento.ctrlKey ||
                evento.metaKey ||
                evento.shiftKey ||
                evento.altKey
            ) {

                return;

            }


            evento.preventDefault();


            if (
                destino === paginaActual
            ) {

                return;

            }


            if (transicionPagina) {

                transicionPagina
                    .classList.add(
                        "activa"
                    );


                setTimeout(() => {

                    window.location.href =
                        destino;

                }, 550);

            } else {

                window.location.href =
                    destino;

            }

        }
    );

});


/* =========================================
   17. BOTÓN ATRÁS DEL NAVEGADOR
========================================= */

window.addEventListener(
    "pageshow",
    () => {

        if (transicionPagina) {

            transicionPagina.classList.remove(
                "activa"
            );

        }

    }
);


/* =========================================
   18. SCROLL "VER MÁS" DEL INDEX
========================================= */

const scrollIndicador =
    document.querySelector(
        ".scroll-indicador"
    );


if (scrollIndicador) {

    scrollIndicador.addEventListener(
        "click",
        (evento) => {

            const destino =
                document.querySelector(
                    "#servicios"
                );


            if (destino) {

                evento.preventDefault();


                destino.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }
    );

}