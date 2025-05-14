
        // Toggle sidebar on mobile
        document.querySelector('.hamburger').addEventListener('click', () => {
            document.querySelector('.sidebar').classList.toggle('active');
        });

        // Handle category clicks
        document.querySelectorAll('.category').forEach(category => {
            category.addEventListener('click', () => {       
                document.querySelectorAll('.category').forEach(cat => cat.classList.remove('active'));            
                category.classList.add('active');

                document.querySelectorAll('.products').forEach(section => {
                    section.style.display = 'none';
                });

                const categoryId = category.getAttribute('data-category');
                document.getElementById(categoryId).style.display = 'grid';

                // Close sidebar on mobile after selection
                if (window.innerWidth <= 768) {
                    document.querySelector('.sidebar').classList.remove('active');
                }
            });
        });
