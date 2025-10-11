console.log("test");
$(document).ready(function(){
    let registrationForm = document.getElementById('registrationForm');
    $("#register").on('click', function(e){
        e.preventDefault();
        let userName = document.getElementById('userName').value;
        let userEmail = document.getElementById('userEmail').value;
        let userAge = parseInt(document.getElementById('userAge').value);
        let userCourse = document.getElementById('userCourse').value;
        let userPass = document.getElementById('userPass').value;
        let userCPass = document.getElementById('userCPass').value;

        let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        
        if (userName.trim() === ''){
            Swal.fire("Please Enter Username!");
            return;
        }
        if (!emailRegex.test(userEmail) || userEmail.trim() === ''){
            Swal.fire("Please Enter Valid Email!");
            return;
        }
        if (userAge < 18 || userAge > 100){
            Swal.fire("Please Enter Valid Age!");
            return;
        }
        if (userCourse === ""){
            Swal.fire("Please Select Course!");
            return;
        }
        if (userPass.length < 8 || userPass.trim() === ''){
            Swal.fire("Password must be at least 8 characters long!");
            return;
        }
        if (userPass !== userCPass){
            Swal.fire("Password and Confirm Password do not match!");
            return;
        }
        registrationForm.submit();
    })
})