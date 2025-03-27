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

        "episode2": `Episode 2 dives into common Spanish verbs
    and how to use them in everyday sentences.`
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
