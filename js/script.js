// menampilkan tanggal dan waktu saat ini
let d = new Date();
document.querySelector("main p").innerHTML = `
    ${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()},   ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}
`;

// mendapatkan elemen inputan form
const search = document.getElementById('search');
const addTask = document.getElementById('addTask');

// array untuk menampung task pada todo list
let myTask =[];

// Membuat tombol ceklis dan delete, kemudian menempelkannya pada tiap list
const addButton = () => {
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
}


// klik tombol bergambar ceklis untuk mentoggle class checked list yang diinginkan
const togglingCheck = () => {
  let checkButton = document.getElementsByClassName("ceklis");
  let myNodelist = document.getElementsByTagName("LI");
  for (let i = 0; i< checkButton.length; i++) {
    checkButton[i].onclick = () => {
      myNodelist[i].classList.toggle("checked");
    }
    
  }
}


// klik tombol bergambar trash untuk menghapus list yang diinginkan
const deleteList = () => {
  let delButton = document.getElementsByClassName("hapus");
  for (let i = 0; i < delButton.length; i++) {
    delButton[i].onclick = function() {
      // Mengubah display list yang diclick menjadi none
      let span = this.parentElement;
      let li = span.parentElement;
      let ul = li.parentElement;
      //li.style.display = "none";
      ul.removeChild(li);

      // Menghapus task dari array myTask
      //myTask[i] = undefined;
      myTask.splice(i,1);
      console.log(i);
      console.log(myTask);
      console.log(delButton.length)
      return true;
    }
  }
  
}



// Membuat todo list baru saat submit form 
function addList(){
  // mendapatkan nilai form addTask
  let task = addTask.value;
  if(task != ''){
    // mengecek apakah task yang diinputkan sudah ada dalam array atau belum
    if(myTask.find(tugas => tugas == task)){
      // menampilkan alert kesalahan
      alert(`${task} sudah ada dalam list`);
      
    }else{
      // push nilai ke dalam variabel myTask
      myTask.push(task);

      // membuat list baru dan menambahkannya pada ul
      let li = document.createElement("li");
      let text = document.createTextNode(task);
      li.appendChild(text);
      document.getElementById("task-list").appendChild(li);
      document.getElementById("addTask").value = "";

      // Menambahkan button check dan delete pada list baru
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
      // memasukkan span kedalam li
      li.appendChild(span);
      
      // Memanggil function togglingCheck dan deleteList()
      togglingCheck();
      deleteList();
    }
  }else{
    alert('Inputan tidak boleh kosong')
    
  }
  
} 

addButton();
togglingCheck();
deleteList();




tes = ['halo' , 'hei', 'hi','hoy'];

  
