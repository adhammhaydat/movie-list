let form = document.getElementById('form');
let viewData= document.getElementById('viewData');

 let arr=['action.png','adventure.png','animation.png','comdey.png','detective.png','fantasy.png','history.png',
'horror.png','musical.png','pirate.png','romantic.png','sci-fi.png','war.png','westen.png']; 
function Movie(name,select,releas,img){
  this.name=name;
  this.select=select;
  this.releas=releas;
  this.img=`./img/${img}`;
  Movie.all.push(this);


}
Movie.all=[];


function getData(e){
  e.preventDefault();
  let name = e.target.name.value;
  let select=e.target.selectUser.value;
  let releas= e.target.release.value;
  let img=findImg(select);

  new Movie(name , select, releas, img);
  localStorage.setItem('key',JSON.stringify(Movie.all));

  let tr =document.createElement('tr');
      viewData.appendChild(tr);

      let td =document.createElement('td');
      tr.appendChild(td);
      td.textContent='X';

      let tdmain =document.createElement('td');
      let showImg =document.createElement('img');
      showImg.src=`./img/${img}`;
      tr.appendChild(tdmain);

      let td1 =document.createElement('td');
      tr.appendChild(td1);
      td1.textContent=name;

      let td2 =document.createElement('td');
      tr.appendChild(td2);
      td2.textContent=releas;
  

}
form.addEventListener('submit',getData);

function render(){
  let data= JSON.parse(localStorage.getItem('key'))
  if(data){
  Movie.all=data;

  for (let i = 0; i < data.length; i++) {
        
      let tr =document.createElement('tr');
      viewData.appendChild(tr);

      let td =document.createElement('td');
      tr.appendChild(td);
      td.textContent='X';

      let tdmain =document.createElement('td');
      let showImg =document.createElement('img');
      showImg.src=`${data[i].img}`;
      tdmain.appendChild(showImg);
      tr.appendChild(tdmain);

      let td1 =document.createElement('td');
      tr.appendChild(td1);
      td1.textContent=data[i].name;

      let td2 =document.createElement('td');
      tr.appendChild(td2);
      td2.textContent=data[i].releas;
  }
}
}
render();
function findImg(select){
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].split('.')[0]);
    if(select === arr[i].split('.')[0]){
      return arr[i];
      
    }
    
  }
}