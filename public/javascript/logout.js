async function logout() {
    // /api/users/logout route , this will log user out
    const response = await fetch('/api/users/logout', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    });
    //this will go to homepage
    if (response.ok) {
      console.log('Logged Out');
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
  //event listener for logout element in navbar
  document.querySelector('#logout').addEventListener('click', logout);