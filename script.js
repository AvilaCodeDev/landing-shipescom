document.addEventListener('DOMContentLoaded', function() {
    // Contenidos para cada programa
    const programContent = {
        'sistemas': `
            <div class="programa-completo">
                <div class="objetivo-section">
                    <h3>Objetivo</h3>
                    <p>Formar ingenieros en sistemas computacionales de sólida preparación científica y tecnológica en los ámbitos del desarrollo de software y hardware...</p>
                </div>
                
                <div class="perfiles-container">
                    <div class="perfil-ingreso">
                        <h3>Perfil de Ingreso</h3>
                        <p>Los aspirantes a estudiar este programa deberán tener conocimientos en matemáticas, física e informática...</p>
                    </div>
                    
                    <div class="perfil-egreso">
                        <h3>Perfil de Egreso</h3>
                        <p>El egresado del programa podrá desempeñarse en equipos multidisciplinarios en los ámbitos del desarrollo de software y hardware...</p>
                    </div>
                </div>
                
                <div class="atributos-campo-container">
                    <div class="atributos-egresado">
                        <h3>Atributos del Egresado</h3>
                        <p>Conjunto de resultados evaluables individualmente, que conforman los componentes indicativos del potencial de un egresado...</p>
                    </div>
                    
                    <div class="campo-laboral">
                        <h3>Campo Laboral</h3>
                        <p>Se desarrollan en los sectores público y privado, consultorías, innovación, investigación, entre otros.</p>
                    </div>
                </div>
            </div>
        `,
        'ia': `...`, // Mismos contenidos de prueba
        'ciencia-datos': `...`,
        'maestria-moviles': `...`,
        'doctorado-ia': `...`,
        'escomunidad': `...`
    };

    const main = document.querySelector('main');
    const contentContainer = document.createElement('div');
    contentContainer.className = 'content-section';
    contentContainer.id = 'dynamic-content';
    main.insertBefore(contentContainer, document.querySelector('.sidebar'));

    function showContent(title, content) {
        contentContainer.innerHTML = `
            <h2>${title}</h2>
            ${content}
        `;
        contentContainer.classList.add('active');
    }

    function hideContent() {
        contentContainer.classList.remove('active');
        contentContainer.innerHTML = '';
    }

    const dropdownLinks = document.querySelectorAll('.dropdown-content a');

    dropdownLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const linkText = this.textContent.trim();

            if (linkText === 'Ing. Sistemas Computacionales') {
                showContent('Ingeniería en Sistemas Computacionales', programContent.sistemas);
            } else if (linkText === 'Ing. En Inteligencia Artificial') {
                showContent('Ingeniería en Inteligencia Artificial', programContent.ia);
            } else if (linkText === 'Lic. En Ciencia de Datos') {
                showContent('Licenciatura en Ciencia de Datos', programContent['ciencia-datos']);
            } else if (linkText === 'M. en C. En Sistemas Computacionales Moviles') {
                showContent('Maestría en Ciencias en Sistemas Computacionales Móviles', programContent['maestria-moviles']);
            } else if (linkText === 'M. en C. Y Doctorado En Inteligencia Artificial Y Ciencia de Datos') {
                showContent('Maestría y Doctorado en IA y Ciencia de Datos', programContent['doctorado-ia']);
            } else {
                showContent('Programa no disponible', `<p>El contenido solicitado no está disponible.</p>`);
            }
        });
    });

    const navButtons = document.querySelectorAll('.button[data-section]');

    navButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.getAttribute('data-section');

            if (section === 'escomunidad') {
                showContent('ESCOMUNIDAD', programContent.escomunidad);
            } else if (section !== 'oferta' && section !== 'posgrados') {
                hideContent();
            }
        });
    });

    const dropdownToggle = document.querySelector('.dropdown > .button');
    const dropdownContent = document.querySelector('.dropdown-content');

    if (dropdownToggle && dropdownContent) {
        dropdownToggle.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdownContent.style.display = 
                    dropdownContent.style.display === 'block' ? 'none' : 'block';
            }
        });
    }

    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && dropdownContent) {
            dropdownContent.style.display = '';
        }
    });
});
