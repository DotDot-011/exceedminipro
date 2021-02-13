let myParking = {
    pk1: '0',
    pk2: '0',
    pk3: '0',
    pk4: '0',
};

function get_empty() {
    fetch("https://backend.cpsk-club.xyz/g1", {
        method: "GET",
        headers: { "Content-Type": "application/json" },

    }).then((datas) => {
        myParking.pk1 = datasp.pk1;
        myParking.pk2 = datasp.pk2;
        myParking.pk3 = datasp.pk3;
        myParking.pk4 = datasp.pk4;
    });
}


// ตั้งdelay
setInterval(() => {
    get_empty();


},5000);