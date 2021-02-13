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
    fetch("mongodb://exceed_user:1q2w3e4r@158.108.182.0:2277/exceed_backend", {
        method: "GET",
        headers: { "Content-Type": "application/json" },

    }).then((response) => response.json())
    .then((datas) => {
        // NewParking.pk1.stat = datas.slot1.Availability;
        // NewParking.pk1.time = datas.slot1.min;
        // NewParking.pk1.money = datas.slot1.cost;
        // NewParking.pk2.stat = datas.slot2.Availability;
        // NewParking.pk2.time = datas.slot2.min;
        // NewParking.pk2.money = datas.slot2.cost;
        // NewParking.pk3.stat = datas.slot3.Availability;
        // NewParking.pk3.time = datas.slot3.min;
        // NewParking.pk3.money = datas.slot3.cost;
        // NewParking.pk4.stat = datas.slot4.Availability;
        // NewParking.pk4.time = datas.slot4.min;
        // NewParking.pk4.money = datas.slot4.cost;
        datas.forEach((data) => {
            console.log(data);
        });
    });
}


function check_parking_1()
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

function check_parking_2()
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

function check_parking_3()
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

function check_parking_4()
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

function show_pk1(){
    var status = document.getElementById('status_pk1');
    var cl = document.getElementById('card_pk1')
    if(NewParking.pk1.stat === 'False')
    {
        
        status.innerText = 'Available';
    }
    else
    {
        status.innerText = 'Not Available';
        cl.style.backgroundColor = "red";

    }
}
function show_pk2(){
    var status = document.getElementById('status_pk2');
    var cl = document.getElementById('card_pk2')
    if(NewParking.pk1.stat === 'False')
    {
        
        status.innerText = 'Available';
    }
    else
    {
        status.innerText = 'Not Available';
        cl.style.backgroundColor = "red";

    }
}
function show_pk3(){
    var status = document.getElementById('status_pk3');
    var cl = document.getElementById('card_pk3')
    if(NewParking.pk1.stat === 'False')
    {
        
        status.innerText = 'Available';
    }
    else
    {
        status.innerText = 'Not Available';
        cl.style.backgroundColor = "red";

    }
}
function show_pk4(){
    var status = document.getElementById('status_pk4');
    var cl = document.getElementById('card_pk4')
    if(NewParking.pk1.stat === 'False')
    {
        
        status.innerText = 'Available';
    }
    else
    {
        status.innerText = 'Not Available';
        cl.style.backgroundColor = "red";

    }
}

// ตั้งdelay
setInterval(() => {
    get_empty();
    check_parking_1();
    check_parking_2();
    check_parking_3();
    check_parking_4();
    show_pk1();
    show_pk2();
    show_pk3();
    show_pk4();
    console.log(NewParking);
},1000);