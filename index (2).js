
const namaKaryawan = "Budi Santoso";
const gajiPokok = 5000000;
const tunjangan = 1000000;
const bonus = 500000;

let totalPendapatan = 0;
let potongan = 0;
let gajiBersih = 0;

// Arrow Function untuk menghitung gaji
const hitungGaji = () => {
    totalPendapatan = gajiPokok + tunjangan + bonus;
    potongan = totalPendapatan * 5 / 100;
    gajiBersih = totalPendapatan - potongan;

    return `
    SISTEM PENGGAJIAN KARYAWAN ==========
    Nama Karyawan : ${namaKaryawan}
    Gaji Pokok    : Rp${gajiPokok.toLocaleString("id-ID")}
    Tunjangan     : Rp${tunjangan.toLocaleString("id-ID")}
    Bonus         : Rp${bonus.toLocaleString("id-ID")}
    -------------------------------------
    Total Pendapatan : Rp${totalPendapatan.toLocaleString("id-ID")}
    Potongan (5%)    : Rp${potongan.toLocaleString("id-ID")}
    Gaji Bersih      : Rp${gajiBersih.toLocaleString("id-ID")}
    =====================================
    `;
};

console.log(hitungGaji());
