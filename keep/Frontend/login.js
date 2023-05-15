
// import axios from 'axios'
const signupbtn = document.getElementsByClassName('btn')[0];
const loginbtn = document.getElementsByClassName('btn2')[0];
function formReset() {
    document.querySelector('#form1').reset();
}
signupbtn.addEventListener('click', (e) => {
    e.preventDefault();
    const user = document.querySelector('#user').value;
    const email = document.querySelector('#mail').value;
    const password = document.querySelector('#pass').value;
    axios.post('http://localhost:100/user/create', { username: user, email: email, password: password }).then((res) => {
        console.log(res)
        alert(res.data.message)
    }).catch((err) => {
        alert(err.message)
    });
    console.log("Haribol")
    formReset();
})

loginbtn.addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.querySelector('#user2').value;
    const password = document.querySelector('#pass2').value;
    axios.post('http://localhost:100/user/signin', { email: email, password: password }).then((res) => {
        console.log(res)
        // console.log(window.location.hostname);
        // console.log(window.location.pathname);
        // console.log(window.location.protocol);
        console.log(window.location.host);
        // console.log(window.location.origin);
        // console.log(window.location.port);

        // console.log(res.statusText);
        alert(res.data.message)
        sessionStorage.setItem("isLogin", true)

        setTimeout(() => {
            // window.location.assign('/index.html');
            const val = sessionStorage.getItem('isLogin');
            console.log(val)
            if (val) {
                window.location.replace('/index.html')
            }
        }, 1000);

    }).catch((err) => {
        // console.log(err.response.data);
        alert(err.response.data.message)

        // alert(data.message)
    });
    console.log("Clicked")

})

