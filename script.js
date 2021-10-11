function dropdown(){
    //binding elemen
    let dropdownNavEl = document.getElementById("dropdown_nav")
    //kondisi:
    //apabila tampilan dropdown ada (display:block), maka tombol berfungsi menghilangkan div.
    //apabila tampilan dropdown hilang(display:none), maka tombol berfungsi memunculkan div.
    if (dropdownNavEl.style.display === "block") {
        dropdownNavEl.style.display = "none"
    } else {
        dropdownNavEl.style.display = "block"
        }
}
function simpanForm(){
    event.preventDefault();
    //binding input elemen
    let formNamaEl          = document.getElementById("formNama")
    let formRoleEl          = document.getElementById("formRole")
    let formUsiaEl          = document.getElementById("formUsia")
    let formLokasiEl        = document.getElementById("formLokasi")
    let formExperienceEl    = document.getElementById("formExperience")
    let formEmailEl         = document.getElementById("formEmail")
    let formAvailabilityEl  = document.getElementById("formAvailability")
    //ambil value
    let formNama            = formNamaEl.value
    let formRole            = formRoleEl.value
    let formUsia            = formUsiaEl.value
    let formLokasi          = formLokasiEl.value
    let formExperience      = formExperienceEl.value
    let formEmail           = formEmailEl.value
    let formAvailability    = formAvailabilityEl.value
    //binding hasil
    nama.innerHTML          = formNama
    role.innerText          = formRole
    pengalaman.innerText    = formExperience
    usia.innerText          = formUsia
    lokasi.innerText        = formLokasi
    email.innerText         = formEmail
    availability.innerText  = formAvailability

    resetForm();
}

function resetForm(){
    document.getElementById("isi_form").reset()
    alert("Data berhasil disimpan")
    document.getElementById("isi_form").style.display = "none";
    
}

function tampilkanData(){
    //binding input elemen
    let isiFormEl           = document.getElementById("isi_form")
    //kondisi:
    //apabila tampilan id isi_form ada (display:block), maka tombol berfungsi menghilangkan div.
    //apabila tampilan id isi_form hilang(display:none), maka tombol berfungsi memunculkan div.
    if (isiFormEl.style.display === "block") {
            isiFormEl.style.display = "none"
    } else {
            isiFormEl.style.display = "block"
        }
}