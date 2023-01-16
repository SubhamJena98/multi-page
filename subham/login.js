function signUpData(e){
    e.preventDefault()

    let userName = document.getElementById("username").value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let cpassword = document.getElementById('cpassword').value;


    if(userName ===''){
        alert("Enter The Name");
    }
    else if(email ===''){
        alert('Enter Email')
    }
    else if(password != cpassword || password.length < 6){
        alert("password must be same or password must be 6 letter")
    }
    else{
        console.log("added");
        localStorage.setItem('User_Name', userName)
        localStorage.setItem('Email', email)
        localStorage.setItem('Password', password)
        localStorage.setItem('CPassword', cpassword)

        window.location.href='index.html'
    }
}

function loginData(e){
    e.preventDefault()

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let userEmail = localStorage.getItem('Email');
    let password1 = localStorage.getItem('Password');
    
    if(email == userEmail || password == password1){
        window.location.href='firstPage.html'
    }else{
        alert('Incorrect Email or password')
    }
}