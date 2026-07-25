async function loadListings(){

    const container = document.getElementById("listingsContainer");


    const { data, error } = await supabaseClient
        .from("listings")
        .select("*");


    if(error){

        console.log("Supabase Error:", error);

        container.innerHTML =
        "Error loading listings";

        return;

    }



    console.log(data);



    container.innerHTML = "";



    if(data.length === 0){

        container.innerHTML =
        "No listings yet";

        return;

    }



    data.forEach(listing => {


        container.innerHTML += `

        <div class="listing-card">


            <h2>
            🐶 ${listing.business_name}
            </h2>


            <p>
            Service: ${listing.service}
            </p>


            <p>
            📍 ${listing.location}
            </p>


            <p>
            💵 $${listing.price}
            </p>


            <p>
            ${listing.description || ""}
            </p>


        </div>

        `;


    });


}



loadListings();