// PawStop Account Display System

async function loadUser() {

    const userArea = document.getElementById("userArea");

    // Stop if the page doesn't have the user area
    if (!userArea) {
        return;
    }


    const { data, error } = await supabaseClient.auth.getUser();


    if (error) {

        console.log(error);

    }


    const user = data.user;



    // User is logged in
    if (user) {


        const username =
        user.user_metadata?.username || "PawStop User";


        userArea.innerHTML = `

            <div class="account-box">

                <span class="username">
                    🐾 ${username}
                </span>


                <button 
                class="logout-button"
                onclick="logout()">

                    🚪 Logout

                </button>

            </div>

        `;


    } 
    
    // User is not logged in
    else {


        userArea.innerHTML = `

            <div class="account-box">


                <a href="login.html" class="login-button">

                    🔐 Login

                </a>


                <a href="signup.html" class="signup-button">

                    📝 Signup

                </a>


            </div>

        `;


    }

}




// Logout function

async function logout() {


    const { error } =
    await supabaseClient.auth.signOut();



    if (error) {

        alert(error.message);

        return;

    }



    window.location.href = "index.html";


}





// Run when page loads

loadUser();