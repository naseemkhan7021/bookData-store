console.log('indexLibrary 2');




class Books {
    constructor(name, author, type) {
        this.name = name
        this.author = author
        this.type = type
    };


};

class Display {
    constructor(books) {
        this.books = books
    };

    // validation fucntion 
    validation(book) {
        if (book.name.length > 3 || book.author.length > 3) return true
        else return false;
    };

    // adding the values
    // add(book) {


    //     console.log('added')
    //     return true

    //     // showAllDetail()
    // };


    // clear the value
    clear() {
        document.getElementById('formSumbit').reset();
    };

    // showing massege 
    show(result, color, massege) {
        let masseges = document.getElementById('alartH')
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


};


showAllDetail()

function showAllDetail() {
    let tableBody = document.getElementById('tBody')
    let library = localStorage.getItem('Library')
    if (library == null) {
        libraryObj = []

    }
    else {
        libraryObj = JSON.parse(library)
    };
    let html = ""
    libraryObj.forEach(function (element, intex) {
        html += `<tr>
                    <th scope="row">${intex+1}</th>
                    <td>${element.Bname}</td>
                    <td>${element.BAuthor}</td>
                    <td>${element.BType}</td>
                    <td><p id=${intex} onclick="deleteL(this.id)">Delete</p></td>
                </tr>`

    });
    tableBody.innerHTML = html

};

function deleteL(index){
    let library = localStorage.getItem('Library')
    if (library == null) {
        libraryObj = []

    }
    else {
        libraryObj = JSON.parse(library)
    };
    libraryObj.splice(index,2)
    localStorage.setItem('Library',JSON.stringify(libraryObj));
    showAllDetail();
};



// form fuctionality 
document.getElementById('formSumbit').addEventListener('submit', libraryFormSubmited);
function libraryFormSubmited(e) {
    console.log('Submited')

    let names = document.getElementById('name').value
    let author = document.getElementById('author').value
    let type;
    let typeclass = document.querySelectorAll('.type')
    Array.from(typeclass).forEach(element => {
        if (element.checked) type = element.value;
    })



    let books = new Books(names, author, type);
    console.log(books)

    let display = new Display(books)
    if (display.validation(books)) {

        let library = localStorage.getItem('Library')
        if (library == null) {
            libraryObj = []

        }
        else {
            libraryObj = JSON.parse(library)
        };

        let newObj = {
            Bname: names,
            BAuthor: author,
            BType: type
        };
        libraryObj.push(newObj)
        localStorage.setItem('Library', JSON.stringify(libraryObj))






        showAllDetail()
        display.clear()
        display.show('Submited', 'success', 'Success fully submitted the form')
    }
    else {
        display.show('Error', 'danger', 'Sorry you not submit the form try again')
        // console.log('not')
    };
    e.preventDefault();

};
