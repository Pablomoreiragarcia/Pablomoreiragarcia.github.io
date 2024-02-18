$(document).ready(function() {
    // Función para cambiar la clase navbar-shrink
    var navbarScroll = function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };

    function getCurrentSection() {
        var windowHeight = window.innerHeight || document.documentElement.clientHeight;
        var sections = document.querySelectorAll('section[id]');
        var currentSection = null;
        var minDistance = Number.MAX_VALUE;
    
        for (var i = 0; i < sections.length; i++) {
            var section = sections[i];
            var rect = section.getBoundingClientRect();
            var sectionHeight = rect.bottom - rect.top;
            var sectionCenter = rect.top + sectionHeight / 2;
            var distanceToCenter = Math.abs(windowHeight / 2 - sectionCenter);
    
            // Verificar si más del 50% de la altura de la sección está visible
            if (rect.top >= 0 && rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
                currentSection = section;
                break;
            } else if (distanceToCenter < minDistance) {
                minDistance = distanceToCenter;
                currentSection = section;
            }
        }
    
        return currentSection;
    }
    // Llamada inicial a las funciones
    navbarScroll();
    var currentSection = getCurrentSection();
    if (currentSection) {
        var currentSectionId = currentSection.getAttribute('id');
        $('.navbar-nav .nav-link').removeClass('active');
        $('.navbar-nav .nav-link[href="#' + currentSectionId + '"]').addClass('active');
    }



    // Evento de desplazamiento para las funciones
    $(window).scroll(function() {
        navbarScroll();
        currentSection = getCurrentSection();
        if (currentSection) {
            var currentSectionId = currentSection.getAttribute('id');
            $('.navbar-nav .nav-link').removeClass('active');
            $('.navbar-nav .nav-link[href="#' + currentSectionId + '"]').addClass('active');
        }

    });
});