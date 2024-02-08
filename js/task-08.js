//  <form class="login-form">
//       <label>
//         Email
//         <input type="email" name="email" />
//       </label>
//       <label>
//         Password
//         <input type="password" name="password" />
//       </label>
//       <button type="submit">Login</button>



const loginForm = document.querySelector('.login-form');


loginForm.addEventListener('submit', handleForm);

function handleForm(evt) {
    evt.preventDefault();
    const { email, password } = evt.currentTarget.elements;

    if (!email.value || !password.value) {
        return alert('Please fill in all the fields!');
    } else {
        const formObj = {
            email: email.value,
            password: password.value,
        };
        console.log(formObj);
    };

evt.currentTarget.reset();
    
}
