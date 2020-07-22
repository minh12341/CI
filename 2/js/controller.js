const controller = {}
controller.register = (data) => {
    document.getElementById('firstNameError').innerHTML ='';
    document.getElementById('lastNameError').innerHTML ='';
    document.getElementById('email-error').innerHTML ='';
    document.getElementById('passwordError').innerHTML ='';
    document.getElementById('confirmPasswordError').innerHTML ='';
    if(data.firstName === '') {
        document.getElementById('firstNameError').innerHTML = 'Please input first name'
    }
    if(data.lastName === '') {
        document.getElementById('lastNameError').innerHTML = 'Please input last name'
    }
    if(data.email=== '') {
        document.getElementById('email-error').innerHTML = 'Please input email'
    }
    if(data.password === '') {
        document.getElementById('passwordError').innerHTML = 'Please input password'
    }
    if(data.confirmPassword === '') {
        document.getElementById('confirmPasswordError').innerHTML = 'Please confirm password'
    }
}
controller.login = (data1) => {
    document.getElementById('emailError').innerHTML = '' ; 
    document.getElementById('passwordError').innerHTML = '';
    if(data1.email ==='') document.getElementById('emailError').innerHTML = 'Please input your email' ; 
    if(data1.password ==='') document.getElementById('passwordError').innerHTML = 'Please input your password';
}