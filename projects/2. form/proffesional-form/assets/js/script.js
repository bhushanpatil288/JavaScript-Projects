console.log("test");
$(document).ready(function(){
    let registrationForm = document.getElementById('registrationForm');
    $("#register").on('click', function(e){
        e.preventDefault();
        let userName = document.getElementById('userName').value;
        let userEmail = document.getElementById('userEmail').value;
        let userAge = document.getElementById('userAge').value;
        let userCourse = document.getElementById('userCourse').value;
        let userPass = document.getElementById('userPass').value;
        let userCPass = document.getElementById('userCPass').value;
        let address = document.getElementById('address').value;
        let phone = document.getElementById('phone').value;

        let gender;
            if (male.checked) {
                gender = male.value;
            } else if (female.checked) {
                gender = female.value;
            } else {
                gender = null;
            }

        let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let phoneRegex = /^[0-9]{10}$/
        
        if (userName.trim() === ''){
            Swal.fire("Please Enter Username!");
            return;
        }
        if (!emailRegex.test(userEmail) || userEmail.trim() === ''){
            Swal.fire("Please Enter Valid Email!");
            return;
        }
        if (userAge === ""){
            Swal.fire("Please Enter Valid Age!");
            return;
        } else {
            let enteredDate = new Date(userAge);
            let today = new Date();

            if (enteredDate > today) {
                Swal.fire("Please enter a valid Date of Birth. Future dates are not allowed. Only 18+ users can register. 🎂");
                return;
            }
            let age = today.getFullYear() - enteredDate.getFullYear();
            let m = today.getMonth() - enteredDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < enteredDate.getDate())) {
                age--;
            }

            if (age < 18) {
                Swal.fire("Access denied! 🚫 Only 18+ users can register.");
                return;
            }
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
        if (address.length < 10 || address.trim() === ''){
            Swal.fire("Please enter valid Address");
            return;
        }
        if (!phoneRegex.test(phone)){
            swal.fire("Please enter valid 10 digit phone number!")
            return;
        }
        if (!gender) {
            Swal.fire("select your gender");
            return;
        }
        registrationForm.submit();
    })
})