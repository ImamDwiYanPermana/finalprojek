// Initialize and add the map
function initMap() {
  // Lokasi koordinat (contoh: Googleplex)
  const location = { lat: 37.422, lng: -122.084 };

  // Buat objek peta dan tentukan elemen DOM untuk tampilan
  const map = new google.maps.Map(document.getElementById("map"), {
    center: location,
    zoom: 15, // Sesuaikan level zoom sesuai kebutuhan
  });

  // Tandai lokasi dengan marker
  const marker = new google.maps.Marker({
    position: location,
    map: map,
    title: "Lokasi Kami",
  });
}

// Menangani pengiriman formulir kontak
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Menghentikan pengiriman formulir bawaan

    // Dapatkan nilai input dari formulir
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Contoh validasi sederhana, bisa disesuaikan dengan kebutuhan
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      alert("Mohon lengkapi semua kolom formulir.");
      return;
    }

    // Kirim formulir (simulasi)
    alert(
      "Formulir berhasil dikirim:\nNama: " +
        name +
        "\nEmail: " +
        email +
        "\nPesan: " +
        message
    );

    // Atur nilai input menjadi kosong setelah pengiriman
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  });
