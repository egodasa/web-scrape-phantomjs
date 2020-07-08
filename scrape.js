
// inisialisasi variabel page sebagai penampung browser
var page = require('webpage').create();

// buka halaman web
page.open('https://www.suzuki.co.id/automobile', function(status) {
  
  // jika gagal dalam membuka web, maka tampilkan error
  if (status !== 'success')
  {
    console.log('Unable to access network');
  }
  else
  {
  	// jika berhasil, jalankan kode 
  	// kode didalam callback page.evaluate sama dengan web console.
  	// sehingga DOM API dapat berjalan didalam callback tsb.
    var hasil = page.evaluate(function() {

    	// DOM API dapat berjalan disini
      var hasil_tmp = [];
      var nama = document.getElementsByClassName("name");
      var harga = "";
      var nama_mobil = "";
      for(var x = 0; x < nama.length - 1; x++)
      {
      	nama_mobil = document.getElementsByClassName("name")[x].innerHTML;
      	harga = document.getElementsByClassName("price")[x].innerHTML;
      	harga = harga.replace("<strong>", "");
      	harga = harga.replace("</strong>", "");
      	harga = harga.replace("Rp", "")
      	harga = harga.replace(".", "")
      	hasil_tmp.push({nama_mobil: nama_mobil, harga: harga})
      }
      return JSON.stringify(hasil_tmp);
    });

    console.log(hasil);
  }
  phantom.exit();
});
