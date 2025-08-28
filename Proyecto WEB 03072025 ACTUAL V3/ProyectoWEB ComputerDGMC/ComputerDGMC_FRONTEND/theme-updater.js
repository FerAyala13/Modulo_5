// SCRIPT PARA APLICAR EL NUEVO ESQUEMA DE COLORES A TODAS LAS PÁGINAS
document.addEventListener('DOMContentLoaded', function() {
    // Aplicar estilos al header para que coincida con la imagen
    const header = document.querySelector('header');
    if (header && !header.classList.contains('main-header')) {
        header.classList.add('main-header');
        header.style.background = '#667eea'; // Púrpura sólido
        header.style.color = 'var(--text-light)';
        header.style.boxShadow = '0 2px 8px var(--shadow-medium)';
        header.style.padding = '10px 0';
        header.style.height = 'auto';
        header.style.display = 'flex';
        header.style.alignItems = 'center';
    }

    // Ajustar el contenido del header para que coincida con la imagen
    const headerDiv = header?.querySelector('div');
    if (headerDiv) {
        headerDiv.style.display = 'flex';
        headerDiv.style.alignItems = 'center';
        headerDiv.style.justifyContent = 'space-between';
        headerDiv.style.width = '100%';
        headerDiv.style.maxWidth = '1400px';
        headerDiv.style.margin = '0 auto';
        headerDiv.style.padding = '0 20px';
    }

    // Eliminar cualquier sección de header de categoría existente para mantener el diseño limpio
    const existingSectionHeader = document.querySelector('.section-header');
    if (existingSectionHeader) {
        existingSectionHeader.remove();
    }

    // Aplicar estilos a botones
    const buttons = document.querySelectorAll('button, .btn');
    buttons.forEach(btn => {
        if (!btn.classList.contains('btn-secondary')) {
            btn.style.background = 'var(--primary-gradient)';
            btn.style.color = 'var(--text-light)';
            btn.style.borderRadius = '25px';
            btn.style.padding = '12px 24px';
            btn.style.border = 'none';
            btn.style.fontWeight = '600';
            btn.style.transition = 'all 0.3s ease';
            btn.style.boxShadow = '0 4px 15px var(--shadow-medium)';
        }
    });

    // Aplicar estilos a enlaces principales
    const mainLinks = document.querySelectorAll('a[href*=".html"]');
    mainLinks.forEach(link => {
        if (link.textContent.includes('Iniciar Sesión') || 
            link.textContent.includes('Registrarse') ||
            link.textContent.includes('Ver Productos')) {
            link.style.color = 'var(--text-light)';
            link.style.fontWeight = '600';
        }
    });

    // Aplicar estilos a cards y contenedores
    const cards = document.querySelectorAll('.product, .card, .item');
    cards.forEach(card => {
        card.style.background = 'white';
        card.style.borderRadius = '15px';
        card.style.boxShadow = '0 5px 15px var(--shadow-light)';
        card.style.transition = 'all 0.3s ease';
    });

    // Aplicar estilos a títulos de sección
    const titles = document.querySelectorAll('h1, h2, h3');
    titles.forEach(title => {
        if (title.textContent.includes('Productos') || 
            title.textContent.includes('Accesorios') ||
            title.textContent.includes('Componentes') ||
            title.textContent.includes('Computadoras') ||
            title.textContent.includes('Gaming')) {
            title.style.color = 'var(--primary-color)';
            title.style.fontWeight = '700';
        }
    });

    // Aplicar estilos a formularios
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        const inputs = form.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.style.borderRadius = '8px';
            input.style.border = '1px solid #ddd';
            input.style.padding = '10px 15px';
            input.style.transition = 'all 0.3s ease';
        });
    });

    // Aplicar estilos a la barra de búsqueda
    const searchForm = document.getElementById('busquedaForm');
    if (searchForm) {
        searchForm.style.background = 'white';
        searchForm.style.borderRadius = '12px';
        searchForm.style.boxShadow = '0 2px 8px var(--shadow-light)';
    }

    // Aplicar estilos al carrito
    const carritoBtn = document.getElementById('pagar-btn');
    if (carritoBtn) {
        carritoBtn.style.background = 'var(--primary-gradient)';
        carritoBtn.style.color = 'var(--text-light)';
        carritoBtn.style.borderRadius = '8px';
        carritoBtn.style.border = 'none';
        carritoBtn.style.fontWeight = '600';
    }

    console.log('✅ Esquema de colores aplicado correctamente');
});

// Función para aplicar estilos CSS personalizados
function applyCustomStyles() {
    const style = document.createElement('style');
    style.textContent = `
        /* Estilos adicionales para consistencia */
        .main-header {
            background: var(--primary-gradient) !important;
            color: var(--text-light) !important;
            box-shadow: 0 4px 15px var(--shadow-medium) !important;
        }
        
        .section-header {
            background: var(--primary-gradient);
            color: var(--text-light);
            padding: 40px 0;
            text-align: center;
            margin-bottom: 40px;
        }
        
        .section-title {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 10px;
            text-shadow: 2px 2px 4px var(--shadow-heavy);
        }
        
        .section-subtitle {
            font-size: 1.2rem;
            opacity: 0.9;
        }
        
        .btn {
            background: var(--primary-gradient) !important;
            color: var(--text-light) !important;
            border-radius: 25px !important;
            box-shadow: 0 4px 15px var(--shadow-medium) !important;
        }
        
        .btn:hover {
            transform: translateY(-2px) !important;
            box-shadow: 0 6px 20px var(--shadow-heavy) !important;
        }
    `;
    document.head.appendChild(style);
}

// Aplicar estilos personalizados
applyCustomStyles(); 