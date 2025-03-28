/*!
    Title: Dev Portfolio Template
    Version: 1.2.2
    Last Change: 03/25/2020
    Author: Ryan Fitzgerald
    Repo: https://github.com/RyanFitzgerald/devportfolio-template
    Issues: https://github.com/RyanFitzgerald/devportfolio-template/issues

    Description: This file contains all the scripts associated with the single-page
    portfolio website.
*/

(function($) {

    /* ---------EPISODE TEMPLATE
    "episode2": ``,
    --------- */

    // Store episode content in a mapping
    const episodeContents = {
        "episode0": 
`Hello everyone, and welcome to Easy Spanish with Josue. The purpose of this podcast is to give you an opportunity to practice your Spanish listening comprehension with slow, easy, and beginner-friendly Spanish. 

Each episode is accompanied by a transcript so you can follow along as I speak. If you don’t understand a certain word, you should pause the playback, learn the definition, and return. This is the best way to expand your vocabulary and enhance your listening skills. I also recommend returning to episodes you have already listened to until you can understand them fully. 

Thank you for joining me! ¡Hasta luego!`,

        "episode1": 
`Hola a todos y bienvenidos al primer episodio de “Easy Spanish with Josue.” I recommend you read along as I am speaking. If you would like to, you can access the transcript in the show notes. If you would like to support the podcast, you can buy me a coffee with the link in the shownotes En este podcast, vas a poder practicar y aumentar tus habilidades de escuchar y entender en español. Voy a hablar de varias cosas en español muy simples para que te entiendas. Gracias por estar aquí conmigo. 

Ok, vamos a empezar con el primer episodio. En este episodio, voy a hablar del tema de los trabajos. Muchas personas tienen trabajos. Y todos tienen trabajos distintos. En nuestras sociedades hay posiciones como doctor, abogado, limpiador, ingeniero, entre muchos otros. En muchos trabajos, los trabajadores tienen que trabajar entre las horas de nueve de la mañana y cinco de la tarde. 

Si eres estudiante, ¿cuáles trabajos te gustan? Si estás trabajando, ¿qué trabajo tienes?

Hemos llegado al fin del episodio. Gracias por tu tiempo y gracias por estar aquí conmigo. Remember, if you would like to, you can access the transcript in the show notes. If you would like to support the podcast, you can buy me a coffee with the link in the shownotes. Hasta luego!`,

        "episode2": `
Hola a todos y bienvenidos al segundo episodio de “Easy Spanish with Josue.” I recommend you read along as I am speaking. If you would like to, you can access the transcript in the show notes. If you would like to support the podcast, you can buy me a coffee with the link in the show notes.

Ok, vamos a empezar con el episodio de hoy. Hoy, voy a hablar del tema de la ropa. Todos usamos ropa. Usamos ropa para trabajar, para descansar, para hacer ejercicios y para dormir. Cada persona tiene un estilo diferente.

Por ejemplo, en el verano, muchas personas usan ropa ligera. Usan camisetas, pantalones cortos, vestidos, sandalias o gafas de sol. Hace calor, así que queremos ropa cómoda.

En invierno, usamos ropa más abrigada. Usamos suéteres, chaquetas, pantalones largos, bufandas, guantes y botas. Hace frío, así que necesitamos ropa que nos dé calor.

También, muchas personas tienen ropa especial para el trabajo. Por ejemplo, un médico puede usar un uniforme blanco. Un abogado puede usar un traje formal. Un chef usa una chaqueta blanca y un gorro especial. Y muchas personas que trabajan en oficinas usan camisas, pantalones de vestir o faldas.

A veces, usamos ropa elegante para ocasiones especiales como bodas o fiestas. Y otras veces, usamos ropa deportiva para correr, hacer yoga o ir al gimnasio. Mi ropa favorita es cómoda. Me gusta usar camisetas y jeans.

¿Y tú? ¿Qué tipo de ropa te gusta usar? ¿Tienes una prenda favorita?

Hemos llegado al fin del episodio. Gracias por tu tiempo y gracias por estar aquí conmigo.

Remember, if you would like to, you can access the transcript in the show notes. If you would like to support the podcast, you can buy me a coffee with the link in the show notes.

¡Hasta luego!
`,
        "episode3": `
Hola a todos y bienvenidos al tercer episodio de “Easy Spanish with Josue.” I recommend you read along as I am speaking. If you would like to, you can access the transcript in the show notes. If you would like to support the podcast, you can buy me a coffee with the link in the show notes.

Ok, vamos a empezar con el episodio de hoy. Hoy voy a hablar de la comida.

Comemos todos los días. Comemos por la mañana, por la tarde y por la noche. En la mañana, muchas personas comen el desayuno. El desayuno puede incluir pan, huevos, café, jugo, leche, frutas o cereal.

Al mediodía, muchas personas almuerzan. El almuerzo es una comida más grande. Puede incluir arroz, pollo, ensalada, sopa, carne o pescado.

Por la noche, comemos la cena. La cena puede ser ligera o grande, depende de la persona. Algunas personas comen una sopa, un sándwich o solo una fruta.

También, muchas personas comen algo pequeño entre comidas. Esto se llama una merienda o un snack. Puede ser una galleta, una barra de granola, yogur o fruta.

Cada país tiene su comida típica. Por ejemplo, en México se comen tacos, enchiladas y tamales. En España, se come paella y tortilla de patatas. En Argentina, se come mucha carne y empanadas.

A mí me gustan mucho las sopaipillas de Chile, la fruta fresca y el pan con mantequilla.

¿Y a ti? ¿Cuál es tu comida favorita? ¿Te gusta cocinar o prefieres comer fuera?

Hemos llegado al fin del episodio. Gracias por tu tiempo y gracias por estar aquí conmigo.

Remember, if you would like to, you can access the transcript in the show notes. If you would like to support the podcast, you can buy me a coffee with the link in the show notes.

¡Hasta luego!
`,
    };

    // Show current year
    $("#current-year").text(new Date().getFullYear());

    // Remove no-js class
    $('html').removeClass('no-js');

    // Animate to section when nav is clicked
    $('header .scroll').click(function(e) {

        // Treat as normal link if no-scroll class
        if ($(this).hasClass('no-scroll')) return;

        e.preventDefault();
        var heading = $(this).attr('href');
        var scrollDistance = $(heading).offset().top;

        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, Math.abs(window.pageYOffset - $(heading).offset().top) / 1);

        // Hide the menu once clicked if mobile
        if ($('header').hasClass('active')) {
            $('header, body').removeClass('active');
        }
    });

    // Scroll to top
    $('#to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    // Scroll to first element
    $('#lead-down span').click(function() {
        var scrollDistance = $('#lead').next().offset().top;
        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, 500);
    });

    // Create timeline
    $('#experience-timeline').each(function() {

        $this = $(this); // Store reference to this
        $userContent = $this.children('div'); // user content

        // Create each timeline block
        $userContent.each(function() {
            $(this).addClass('vtimeline-content').wrap('<div class="vtimeline-point"><div class="vtimeline-block"></div></div>');
        });

        // Add icons to each block
        $this.find('.vtimeline-point').each(function() {
            $(this).prepend('<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>');
        });

        // Add dates to the timeline if exists
        $this.find('.vtimeline-content').each(function() {
            var date = $(this).data('date');
            if (date) { // Prepend if exists
                $(this).parent().prepend('<span class="vtimeline-date">'+date+'</span>');
            }
        });

    });

    // Open mobile menu
    $('#mobile-menu-open').click(function() {
        $('header, body').addClass('active');
    });

    // Close mobile menu
    $('#mobile-menu-close').click(function() {
        $('header, body').removeClass('active');
    });

    // Load additional projects
    $('#view-more-projects').click(function(e){
        e.preventDefault();
        $(this).fadeOut(300, function() {
            $('#more-projects').fadeIn(300);
        });
    });

    const toggleAccordion = document.getElementById('toggleAccordion');
    const accordionContent = document.getElementById('accordionContent');
    const episodeContent = document.getElementById('episodeContent');
    const accordionToggles = document.querySelectorAll('.accordion-toggle');

    // Toggle the entire accordion visibility
    toggleAccordion.addEventListener('click', () => {
        if (accordionContent.style.display === 'none') {
            accordionContent.style.display = 'block';
            toggleAccordion.textContent = 'Hide Transcripts';
        } else {
            accordionContent.style.display = 'none';
            toggleAccordion.textContent = 'Show Transcripts';
        }
    });

    
    // Update the <pre> content when an episode button is clicked
    accordionToggles.forEach((toggle) => {
        toggle.addEventListener('click', () => {
            const episodeKey = toggle.getAttribute('data-episode-key'); // Get the episode key
            const content = episodeContents[episodeKey]; // Get the content from the mapping
            if (content) {
                episodeContent.textContent = content; // Set the content of the <pre> element
            } else {
                episodeContent.textContent = 'Episode content not found.';
            }
        });
    });

})(jQuery);
