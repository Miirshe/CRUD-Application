var forms = document.querySelector('#form');
forms.addEventListener("submit",function(event){
    event.preventDefault();
    Insert_Info();
})
var data = {
    names :"",
    age : "",
    phone : "",
    email : "",
    address : "",
    faculty : "",
};
function Insert_Info(){
    var names = document.getElementById('names');
    var age = document.getElementById('age');
    var phone = document.getElementById('numbers');
    var email = document.getElementById('Email');
    var address = document.getElementById('address');
    var faculty = document.getElementById('faculty');
    var infoes = document.getElementById('info');
    data.names=names.value;
    data.age=age.value;
    data.phone=phone.value;
    data.email=email.value;
    data.address=address.value;
    data.faculty=faculty.value;
    infoes.innerHTML+=
    `<tr>
    <td data="Name : ">${data.names}</td>
    <td data="Age : ">${data.age}</td>
    <td data="Phone : ">${data.phone}</td>
    <td data="Email : ">${data.email}</td>
    <td data="Address : ">${data.address}</td>
    <td data="Faculty : ">${data.faculty}</td>
    <td data=""><button onclick="delete_info(this)"  type="reset" id="delete"><i class="fa-solid fa-trash"></i></button></td>
    <td data=""><button onclick="" type="reset" id="edit"><i class="fa-solid fa-pen-to-square"></i></button></td>
</tr>
    `
}

function delete_info(e){
    e.parentElement.parentElement.remove();
    clears();
}

function clears(){
    names.innerHTML="";
    age.innerHTML="";
    phone.innerHTML="";
    email.innerHTML="";
    address.innerHTML="";
    faculty.innerHTML="";
}

