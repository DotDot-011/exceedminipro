let OldParking = {
    pk1: 
    {
        stat: 'False',
        Money: 0,
        time: 0,
    },
    pk2: 
    {
        stat: 'False',
        Money: 0,
        time: 0,
    },
    pk3: 
    {
        stat: 'False',
        Money: 0,
        time: 0,
    },
    pk4: 
    {
        stat: 'False',
        Money: 0,
        time: 0,
    },
};

let NewParking = {
    pk1: 
    {
        stat: 'False',
        Money: 0,
        time: 0,
    },
    pk2: 
    {
        stat: 'False',
        Money: 0,
        time: 0,
    },
    pk3: 
    {
        stat: 'False',
        Money: 0,
        time: 0,
    },
    pk4: 
    {
        stat: 'False',
        Money: 0,
        time: 0,
    },
};

// เอาไว้เช็ก ตอนรถออกถ้ารถออก stat เป็น True

let Show = {
    pk1: 
    {
        stat: 'False',
        time: 0,
        Money: 0,
    },
    pk2:     {
        stat: 'False',
        time: 0,
        Money: 0,
    },
    pk3:     {
        stat: 'False',
        time: 0,
        Money: 0,
    },
    pk4:     {
        stat: 'False',
        time: 0,
        Money: 0,
    },
};

let all_time = 0;

function get_empty() {
    fetch("https://backend.cpsk-club.xyz/g1", {
        method: "GET",
        headers: { "Content-Type": "application/json" },

    }).then((datas) => {
        NewParking.pk1 = datas.pk1.avai;
        NewParking.pk2 = datas.pk2.avai;
        NewParking.pk3 = datas.pk3.avai;
        NewParking.pk4 = datas.pk4.avai;
    });
}


function check_parking_1();
{
    if(OldParking.pk1.stat == 'True' && NewParking.pk1.stat == 'False')
    {
        Show.pk1.stat = 'True';
        Show.pk1.time = OldParking.pk1.time;
        Show.pk1.Money = OldParking.pk1.time;
    }
    OldParking.pk1.stat = NewParking.pk1.stat;
    OldParking.pk1.time = NewParking.pk1.time;
    OldParking.pk1.time = NewParking.pk1.time;
}

function check_parking_2();
{
    if(OldParking.pk1.stat == 'True' && NewParking.pk1.stat == 'False')
    {
        Show.pk2.stat = 'True';
        Show.pk2.time = OldParking.pk2.time;
        Show.pk2.Money = OldParking.pk2.time;
    }
    OldParking.pk2.stat = NewParking.pk2.stat;
    OldParking.pk2.time = NewParking.pk2.time;
    OldParking.pk2.time = NewParking.pk2.time;
}

function check_parking_3();
{
    if(OldParking.pk3.stat == 'True' && NewParking.pk3.stat == 'False')
    {
        Show.pk3.stat = 'True';
        Show.pk3.time = OldParking.pk3.time;
        Show.pk3.Money = OldParking.pk3.time;
    }
    OldParking.pk3.stat = NewParking.pk3.stat;
    OldParking.pk3.time = NewParking.pk3.time;
    OldParking.pk3.time = NewParking.pk3.time;
}

function check_parking_4();
{
    if(OldParking.pk4.stat == 'True' && NewParking.pk4.stat == 'False')
    {
        Show.pk4.stat = 'True';
        Show.pk4.time = OldParking.pk4.time;
        Show.pk4.Money = OldParking.pk4.time;
    }
    OldParking.pk4.stat = NewParking.pk4.stat;
    OldParking.pk4.time = NewParking.pk4.time;
    OldParking.pk4.time = NewParking.pk4.time;
}

// ตั้งdelay
setInterval(() => {
    get_empty();
    check_parking_1();
    check_parking_2();
    check_parking_3();
    check_parking_4();
},1000);