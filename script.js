var repeat = true

while ( repeat ) { 
	alert ( "selamat datang di game tebak angka \ntebak angka dari 1 - 5 \ndan komputer akan membandingkan nya" );
	alert ( "percobaan hanya 1 kali jadi cobalah keberutangan mu");

	// user
	var user = prompt("masukkan angka yang anda pilih 1-5 : ");
	 
	// komputer
	var cop = Math.random();
	if ( cop < 0.34 ) {
		cop = "1";
	}
	else if ( cop < 0.44) {
		cop = "2";
	}
	else if ( cop < 0.54) {
		cop = "3";
	}
	else if ( cop >= 0.54 && cop < 0.64 ) {
		cop = "4";
	}
	else {
		cop = "5";
	}

	// aturan main
	var hasil = "";

	if ( user === cop ) {
		hasil = "BERHASIL";
	}
	else if ( user != cop ) {
		hasil = "GAGAL COBA LAGI SEMANGAT";
	}
	else {
		alert ("input salah coba lagi")
	}

	// hasil
	alert ("pilihan mu adalah " + user + "\ndan pilihan computer adalah " + cop + "\nmaka kamu " + hasil );

	// ulang
	repeat = confirm("seru? kalo seru main lagi yuk");
}

alert ( " yah udahan kalo lagi bosen main dengan ku yuk kalian bisa ketik website yang di atas ");