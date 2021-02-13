let myParking = {
    pk1: '0',
    pk2: '0',
    pk3: '0',
    pk4: '0',
};

let ParkingMoney = {
    pk1: 0,
    pk2: 0,
    pk3: 0,
    pk4: 0,
};

function get_empty() {
    fetch("https://backend.cpsk-club.xyz/g1", {
        method: "GET",
        headers: { "Content-Type": "application/json" },

    }).then((datas) => {
        myParking.pk1 = datas.pk1.avai;
        myParking.pk2 = datas.pk2.avai;
        myParking.pk3 = datas.pk3.avai;
        myParking.pk4 = datas.pk4.avai;
    });
}


// ตั้งdelay
setInterval(() => {
    get_empty();

},5000);