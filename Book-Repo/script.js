let myLibrary = [{
    title: "James and the giant peach",
    author: "Roald Dahl",
    pages: 305,
    read: "no"
},{
    title: "Steve the random boy",
    author: "Crackerjack Jim",
    pages: 634,
    read: "yes"  
},{
    title: "Samaurai Sidney",
    author: "Ma Hubbards",
    pages: 33,
    read: "Yeh"
}];

function buildTable(myLibrary){
    let table = document.getElementById('myTable');    
    table.innerHTML = '';
    let numBook = document.getElementById("numBook");
    for(let i = 0; i < myLibrary.length; i++){
        // console.log("Length of myLibrary = " + i);
        let row = `<tr>
                        <td>${i+1}</td>
                        <td>${myLibrary[i].title}</td>
                        <td>${myLibrary[i].author}</td>
                        <td>${myLibrary[i].pages}</td>                        
                        <td>${myLibrary[i].read}</td>
                        <td><button type="button" onClick="markRead(${i})" class="btn btn-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                      </svg></td>
                        <td><button type="button" onClick="removeItem(${i})" class="btn btn-secondary"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>                      
                            </svg></a></button></td>                    
                    </tr>`
            table.innerHTML += row;                       
    }
}

function removeItem(i) {
    // let parent = document.getElementById("myTable").getElementsByTagName("tbody")[i];
    // let child = parent.getElementsByTagName("tr")[i];
    // console.log("Removed Item = ", child);
    // parent.removeChild(child);
    myLibrary.splice(i, 1);
    document.getElementById("numBook").innerText = myLibrary.length;
    buildTable(myLibrary);
    
}

function markRead(i) {
    if(myLibrary[i].read == "By Golly Yes"){
        myLibrary[i].read = "No";
        buildTable(myLibrary);
    } else {
        myLibrary[i].read = "By Golly Yes";
        buildTable(myLibrary);
    }
}

function Book() {
  // the constructor...
}

function addBookToLibrary() {
    // do stuff here
    let num = myLibrary.length;
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").value;
    
    myLibrary.push({title, author, pages, read});
    
    document.getElementById("numBook").innerText = num+1;
}