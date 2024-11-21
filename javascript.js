    function validateForm() {
        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const telefono = document.getElementById("telefono").value;
        const archivo = document.getElementById("archivo").value;
        const terminos = document.getElementById("terminos").checked;

        if (!nombre || !email || !terminos) {
            document.getElementById("error-message").style.display = "block";
            return false;
        }

        document.getElementById("error-message").style.display = "none";
        return true;
    }
