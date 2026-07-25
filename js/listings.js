// PawStop Listings + Message Seller Button

async function loadListings(){

    const container = document.getElementById("listingsContainer");

    if(!container) return;


    const { data: listings, error } = await supabaseClient
        .from("listings")
        .select("*")
        .order("created_at", { ascending:false });



    if(error){

        console.log(error);

        container.innerHTML =
        "Error loading listings.";

        return;

    }



    container.innerHTML = "";



    listings.forEach(listing => {


        const card = document.createElement("div");

        card.className = "listing-card";



        card.innerHTML = `

        <h2>
        🐶 ${listing.business_name}
        </h2>


        <p>
        ${listing.description || "No description"}
        </p>


        <p>
        📍 ${listing.location}
        </p>


        <p>
        💵 $${listing.price}
        </p>



        <button 
        class="message-button"
        onclick="messageSeller('${listing.id}')">

        💬 Message Seller

        </button>


        `;



        container.appendChild(card);


    });


}




function messageSeller(listingId){

    window.location.href =
    "messages.html?listing=" + listingId;

}





loadListings();