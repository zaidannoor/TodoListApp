// menampilkan tanggal dan waktu saat ini
let d = new Date();
document.querySelector("main p").innerHTML = `
    ${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()},   ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}
`;



// mendapatkan elemen form
const addTaskForm = document.getElementById('addTaskForm');
const searchForm = document.getElementById('searchForm');
const search = document.getElementById('search');
const addTask = document.getElementById('addTask');


// Membuat tombol ceklis dan delete, kemudian menempelkannya pada tiap list
let myNodelist = document.getElementsByTagName("LI");

for (let i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("SPAN");

  // Menambahkan element ceklis
  let ceklis = document.createElement("IMG");
  ceklis.setAttribute('src' , 'img/check.svg');
  ceklis.setAttribute('width' , '28');
  ceklis.className = 'ceklis';
  span.appendChild(ceklis);

  // menambahkan element delete
  let hapus = document.createElement("IMG");
  hapus.setAttribute('src' , 'img/trash.svg');
  hapus.setAttribute('width' , '28');
  hapus.className = 'hapus';
  span.appendChild(hapus);

  // memasukkan span kedalam nodelist
  myNodelist[i].appendChild(span);
}

// klik tombol bergambar ceklis untuk mentoggle class checked list yang diinginkan
let checkButton = document.getElementsByClassName("ceklis");
for (let i = 0; i< checkButton.length; i++) {
  checkButton[i].onclick = () => {
    myNodelist[i].classList.toggle("checked");
  }
  
}

// klik tombol bergambar trash untuk menghapus list yang diinginkan
let delButton = document.getElementsByClassName("hapus");
for (let i = 0; i < delButton.length; i++) {
  delButton[i].onclick = function() {
  let span = this.parentElement;
  let li = span.parentElement
  li.style.display = "none";
  }
}

// array untuk menampung task todo list
let myTask =[];
// variabel untuk menghitung iterasi
let iteration = 0;

function add(){
  // mendapatkan nilai form addTask
  let task = addTask.value;

  // mengecek apakah task yang diinputkan sudah ada dalam array atau belum
  if(myTask.find(tugas => tugas == task)){
    // menampilkan alert kesalahan
    alert(`${task} sudah ada dalam list`);
    
  }else{
    // push nilai ke dalam variabel myTask
    myTask.push(task);

    
    
  };
} 

const tes = () => {
  console.log('tes');
  
  
}



  
