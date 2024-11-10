// --- Cargar y cambiar imagen de perfil ---
const cameraIcon = document.getElementById('camera-icon');
const uploadPhoto = document.getElementById('upload-photo');
const profilePhoto = document.getElementById('profile-photo');
let currentPhoto = null;

if (cameraIcon && uploadPhoto) {
  cameraIcon.addEventListener('click', () => {
    uploadPhoto.click();
  });

  uploadPhoto.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
      profilePhoto.style.backgroundImage = `url(${e.target.result})`;
      currentPhoto = e.target.result;
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  });
}

// --- Toggle de Notificaciones ---
const notificationsToggle = document.getElementById('notifications-toggle');
notificationsToggle.addEventListener('change', (event) => {
    const isEnabled = event.target.checked;
    alert(`Notificaciones ${isEnabled ? 'activadas' : 'desactivadas'}.`);
});

// --- Botones Editar y Guardar ---
document.getElementById("edit-btn").addEventListener("click", () => {
    document.querySelectorAll(".info-item input").forEach(input => {
        input.removeAttribute("readonly");
        input.style.backgroundColor = "#fff";
    });
    document.getElementById("language").removeAttribute("disabled"); // Habilitar selector de idioma
    document.getElementById("edit-btn").style.display = "none";
    document.getElementById("save-btn").style.display = "inline-block";
});

document.getElementById("save-btn").addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validar formato de correo electrónico
    if (!emailRegex.test(email)) {
        alert("Por favor, introduce un correo electrónico válido.");
        return;
    }

    // Validar que el teléfono solo contiene números
    if (isNaN(phone.replace(/\s+/g, ''))) {
        alert("El teléfono solo debe contener números.");
        return;
    }

    // Guardar cambios y deshabilitar edición
    document.querySelectorAll(".info-item input").forEach(input => {
        input.setAttribute("readonly", true);
        input.style.backgroundColor = "#f0f0f0";
    });
    document.getElementById("language").setAttribute("disabled", true); // Deshabilitar selector de idioma
    document.getElementById("edit-btn").style.display = "inline-block";
    document.getElementById("save-btn").style.display = "none";
    alert("Cambios guardados exitosamente.");
});

// --- Restringir entrada de teléfono solo a números ---
document.getElementById("phone").addEventListener("input", (event) => {
    event.target.value = event.target.value.replace(/[^0-9]/g, '');
});
