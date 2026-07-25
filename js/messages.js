const seller = JSON.parse(
    localStorage.getItem("chatProvider")
);


const title = document.getElementById("sellerTitle");
const chat = document.getElementById("chatMessages");
const input = document.getElementById("messageText");
const send = document.getElementById("sendMessage");



if(!seller){

    if(title){
        title.innerHTML = "No seller selected";
    }

}
else{


    title.innerHTML =
    "💬 Chat with " + seller.name;



    let chatID = "chat_" + seller.id;



    let messages =
    JSON.parse(
        localStorage.getItem(chatID)
    ) || [];




    function loadMessages(){


        chat.innerHTML = "";


        messages.forEach(message=>{


            chat.innerHTML += `

            <div class="chat-message ${message.sender}">

                <strong>
                ${message.sender}
                </strong>

                <p>
                ${message.text}
                </p>

            </div>

            `;


        });


    }




    function sendMessage(){


        let text =
        input.value.trim();



        if(text === "")
        return;



        // ADMIN REQUEST

        if(text === "/adminrequest"){


            let user =
            JSON.parse(
                localStorage.getItem("user")
            );



            if(!user){

                alert(
                "You need an account first."
                );

                return;

            }



            let requests =
            JSON.parse(
                localStorage.getItem("adminRequests")
            ) || [];



            requests.push({

                email:user.email,

                date:new Date().toISOString()

            });



            localStorage.setItem(
                "adminRequests",
                JSON.stringify(requests)
            );



            input.value="";

            alert(
            "Admin request sent!"
            );


            return;


        }




        messages.push({

            sender:"Customer",

            text:text,

            time:
            new Date().toLocaleTimeString()

        });



        localStorage.setItem(

            chatID,

            JSON.stringify(messages)

        );



        input.value="";

        loadMessages();


    }





    send.onclick = sendMessage;



    input.addEventListener(
        "keydown",
        function(e){

            if(e.key==="Enter"){

                sendMessage();

            }

        }
    );



    loadMessages();


}