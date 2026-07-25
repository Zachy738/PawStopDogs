// PawStop User System + Admin Button


const ADMIN_EMAIL = "zlrm587@gmail.com";



async function loadUser(){


    const userArea = document.getElementById("userArea");


    if(!userArea) return;



    const { data, error } = await supabaseClient.auth.getUser();



    if(error){

        console.log(error);

    }



    const user = data.user;



    // USER IS LOGGED IN

    if(user){



        const username =
        user.user_metadata?.username || "PawStop User";



        let adminButton = "";



        // ONLY SHOW ADMIN BUTTON FOR ADMIN

        if(user.email === ADMIN_EMAIL){


            adminButton = `

            <a href="admin.html" class="admin-button">

                👑 Admin Panel

            </a>

            `;


        }





        userArea.innerHTML = `


        <div class="account-box">


            <span class="username">

                🐾 ${username}

            </span>



            ${adminButton}



            <button 
            class="logout-button"
            onclick="logout()">


                🚪 Logout


            </button>



        </div>


        `;



    }



    // USER IS LOGGED OUT

    else {



        userArea.innerHTML = `


        <div class="account-box">


            <a href="login.html">

                🔐 Login

            </a>



            <a href="signup.html">

                📝 Signup

            </a>


        </div>


        `;


    }


}





async function logout(){


    const { error } =
    await supabaseClient.auth.signOut();



    if(error){


        alert(error.message);

        return;


    }



    window.location.href = "index.html";


}





loadUser();