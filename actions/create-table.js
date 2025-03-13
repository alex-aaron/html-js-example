
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

    
}

createTable();