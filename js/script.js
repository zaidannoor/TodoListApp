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

// mendapatkan elemen gambar ceklis dan delete
let checkButton = document.querySelectorAll('main .list-container .ceklis svg');
let deleteButton = document.querySelectorAll('main .list-container .delete svg');


// array untuk menampung task todo list
let myTask =[];
// variabel untuk menghitung iterasi
let iteration = 0;

function add(){
  //event.preventDefault();
    // mendapatkan nilai form addTask
    let task = addTask.value;

    // mengecek apakah task yang diinputkan sudah ada dalam array atau belum
    if(myTask.find(tugas => tugas == task)){
      // menampilkan alert kesalahan
      alert(`${task} sudah ada dalam list`);
      
    }else{
      // push nilai ke dalam variabel myTask
      myTask.push(task);

      // melakukan looping untuk menampilkan list task
      let cards = '';
      myTask.forEach(task => {
        cards += `
        <div class="col-4 my-3 text-center">
          <div class="card rounded-pill bg-dark text-light">
              <div id="${iteration}" class="card-body d-flex justify-content-center">
                  ${task} 
                  <div class="ceklis mx-3">
                      <svg onclick="tes()" xmlns="http://www.w3.org/2000/svg" width="28" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                      </svg>
                  </div>
                  <div class="delete">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                  </div>  
              </div>
          </div>
        </div>`
        
        document.querySelector("main .list-container").innerHTML = cards;
        // memerbarui checkButton dan delete Button
        checkButton = document.querySelectorAll('main .list-container .ceklis svg');
        deleteButton = document.querySelectorAll('main .list-container .delete svg');
    });
    } 
}

const tes = () => {
  console.log('tes');
  //checkButton.forEach(cb => cb.addEventListener('click', () => console.log('tes')))
};

// function addEventListenerList(list, event, fn) {
//   for (let index = 0; index < list.length; index++) {
//       list[index].addEventListener(event, fn,);
//   }
// }

//addEventListenerList(checkButton,'click',() => console.log('tes'));



  
