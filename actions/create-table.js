
function createTable(){
  let col1 = [];
  let col2 = [];
  
  if (data.length % 2 === 0){
    col1 = data.slice(0, data.length / 2);
    col2 = data.slice(data.length / 2);
  } else {
    col1 = data.slice(0, Math.floor(data.length / 2));
    col2 = data.slice(Math.floor(data.length / 2));
  }

  let col1Element = document.getElementById('column-1');
  let col2Element = document.getElementById('column-2');

  col1.forEach(movie => {
    let li = document.createElement('li');
    li.className = "list-group-item";
    li.innerHTML = movie.title;
    col1Element.append(li);
  });

  col2.forEach(movie => {
    let li = document.createElement('li');
    li.className = "list-group-item";
    li.innerHTML = movie.title;
    col2Element.append(li);
  });
    
}

createTable();