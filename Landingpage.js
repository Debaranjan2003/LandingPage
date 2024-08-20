<script>
        // Carousel functionality
        let index = 0;
        const images = document.querySelectorAll('.carousel-images img');
        const totalImages = images.length;

        function showNextImage() {
            index = (index + 1) % totalImages;
            const offset = -index * 100;
            document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
        }

        setInterval(showNextImage, 4000); // Change image every 4 seconds

        // Form submission script
        document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault(); 
        
            alert('Thank you for your message! We will get back to you soon.');
        });
    </script>
