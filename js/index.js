console.log('this is project 2');


function Books(name, author, type) {
    this.name = name
    this.author = author
    this.type = type

}

function Display(books) {

}

// validation fucntion 
Display.prototype.validation = function (book) {
    if (book.name.length > 3 || book.author.length > 3) return true
    else return false;
}

// adding the values
Display.prototype.add = function (index, book) {
    // console.log('add')
    let tBody = document.getElementById('tBody');
    let uiString = `<tr>
                        <th scope="row">${index + 1}</th>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`
    tBody.innerHTML += uiString
};


// clear the value
Display.prototype.clear = function () {
    document.getElementById('formSumbit').reset();
};


// showing massege 
Display.prototype.show = function (result, color, massege) {
    let masseges =  document.getElementById('alartH')
    masseges.innerHTML = `<div class="alert alert-${color} alert-dismissible fade show" role="alert">
            <strong>${result}!</strong> ${massege}.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>`


    setTimeout(() => {
        masseges.innerHTML = ''
    }, 3000);
};



// form fuctionality 
document.getElementById('formSumbit').addEventListener('submit', libraryFormSubmited);
function libraryFormSubmited(e) {
    console.log('Submited')
    let name = document.getElementById('name').value
    let author = document.getElementById('author').value
    let type;
    let front = document.getElementById('Front-end')
    let back = document.getElementById('Back-end')
    let database = document.getElementById('Dadabase')
    
    if (front.checked) {
        type = front.value;
    }
    else if (back.checked) {
        type = back.value;
    }
    else if (database.checked) {
        type = database.value;
    };
    let books = new Books(name, author, type);
    console.log(books)

    let display = new Display(books)
    if (display.validation(books)) {
        let index = 0;
        display.add(index, books)
        display.clear()
        display.show('Submited', 'success', 'Success fully submitted the form')
    }
    else {
        display.show('Error', 'warning', 'Sorry you not submit the form try again')
        // console.log('not')
    };
    e.preventDefault();

};
