const form = document.getElementById("providerForm");


form.addEventListener("submit", async function(e){

    e.preventDefault();


    const listing = {

        business_name:
        document.getElementById("providerName").value,

        service:
        document.getElementById("serviceType").value,

        description:
        document.getElementById("description").value,

        price:
        document.getElementById("price").value,

        location:
        document.getElementById("location").value,

        latitude:
        document.getElementById("latitude").value,

        longitude:
        document.getElementById("longitude").value

    };



    const { data, error } =
    await supabaseClient
    .from("listings")
    .insert([listing]);



    if(error){

        console.log(error);

        alert(
        "Error creating listing"
        );

        return;

    }


    alert(
    "Listing created successfully!"
    );


    window.location =
    "listings.html";


});