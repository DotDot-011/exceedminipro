let OldParking = {
    pk1: 
    {
        stat: 'False',
        Money: '0',
        time: '0',
    },
    pk2: 
    {
        stat: 'False',
        Money: '0',
        time: '0',
    },
    pk3: 
    {
        stat: 'False',
        Money: '0',
        time: '0',
    },
    pk4: 
    {
        stat: 'False',
        Money: '0',
        time: '0',
    },
};

let NewParking = {
    pk1: 
    {
        stat: 'False',
        Money: '0',
        time: '0',
    },
    pk2: 
    {
        stat: 'False',
        Money: '0',
        time: '0',
    },
    pk3: 
    {
        stat: 'False',
        Money: '0',
        time: '0',
    },
    pk4: 
    {
        stat: 'False',
        Money: '0',
        time: '0',
    },
};

var t = 20;

// เอาไว้เช็ก ตอนรถออกถ้ารถออก stat เป็น True

let Show = {
    pk1: 
    {
        stat: 'True',
        time: '5',
        Money: '600',
    },
    pk2:     {
        stat: 'True',
        time: '10',
        Money: '5000',
    },
    pk3:     {
        stat: 'True',
        time: '30',
        Money: '200',
    },
    pk4:     {
        stat: 'True',
        time: '80',
        Money: '90',
    },
};

let all_time = {
    pk1: 0,
    pk2: 0,
    pk3: 0,
    pk4: 0,
};

function get_empty() {
    fetch("https://exceed1.cpsk-club.xyz", {
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
        // all_time.pk1 = Integer.parseInt(datas.pk1.cost_glob);
        // all_time.pk1 = Integer.parseInt(datas.pk2.cost_glob);
        // all_time.pk1 = Integer.parseInt(datas.pk3.cost_glob);
        // all_time.pk1 = Integer.parseInt(datas.pk4.cost_glob);
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
        cl.style.backgroundColor = "hsl(101, 61%, 50%)";
        
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

function check_out_pk1(){
    var card_1 = document.getElementById('alert_card_1');
    if(Show.pk1.stat === 'True')
    {
        console.log("Test");
        card_1.style.visibility = "visible";
        card_1.innerText = "Cost : " + Show.pk1.Money +"\n"+ "Time : " + Show.pk1.time +"\n"+ "Min :";
        setTimeout(function() {
            Show.pk1.stat = 'False';
        }, 10000);

    }
    else
    {
        console.log("Boom");
        card_1.style.visibility = "hidden";
    }

}
function check_out_pk2()
{
    var card_2 = document.getElementById('alert_card_2');
    if(Show.pk2.stat === 'True')
    {
        console.log("Test");
        card_2.style.visibility = "visible";
        card_2.innerText = "Cost : " + Show.pk2.Money +"\n"+ "Time : " + Show.pk2.time +"\n"+ "Min :";
        setTimeout(function() {
            Show.pk2.stat = 'False';
        }, 10000);

    }
    else
    {
        console.log("Boom");
        card_2.style.visibility = "hidden";
    }
}

function check_out_pk3()
{
    var card_3 = document.getElementById('alert_card_3');
    if(Show.pk3.stat === 'True')
    {
        console.log("Test");
        card_3.style.visibility = "visible";
        card_3.innerText = "Cost : " + Show.pk3.Money +"\n"+ "Time : " + Show.pk3.time +"\n"+ "Min :";
        setTimeout(function() {
            Show.pk3.stat = 'False';
        }, 10000);

    }
    else
    {
        console.log("Boom");
        card_3.style.visibility = "hidden";
    }
}

function check_out_pk4()
{
    var card_4 = document.getElementById('alert_card_4');
    if(Show.pk4.stat === 'True')
    {
        console.log("Test");
        card_4.style.visibility = "visible";
        // card_1.style.width = "7rem";
        // card_1.style.height =  "13rem";
        // card_1.style.backgroundColor = "hsl(224, 61%, 50%)";
        // card_1.style.border = "1px  black";
        // card_1.style.padding = "0px";
        // card_1.style.margin = "0rem 8rem";
        // card_1.style.display = "flex";
        // card_1.style.justifyContent = "row";
        // card_1.style.alignItems = "center";
        // card_1.style.borderRadius = "20px";
        // Show.pk1.stat = 'False';
        // t=0;
        card_4.innerText = "Cost : " + Show.pk4.Money +"\n"+ "Time : " + Show.pk4.time +"\n"+ "Min :";
        setTimeout(function() {
            Show.pk4.stat = 'False';
        }, 10000);

    }
    else
    {
        console.log("Boom");
        card_4.style.visibility = "hidden";
    }
}

var dps = []; // dataPoints
var chart = new CanvasJS.Chart("chart_1", {
	title :{
		text: "Dynamic Data"
	},
	data: [{
		type: "line",
		dataPoints: dps
	}]
});

var xVal = 0;
var yVal = 0; 
var updateInterval = 1000;
var dataLength = 20; // number of dataPoints visible at any point

var updateChart = function (count) {

	count = count || 1;

	for (var j = 0; j < count; j++) {
		yVal = yVal +  all_time.pk1;
		dps.push({
			x: xVal,
			y: yVal
		});
		xVal++;
	}

	if (dps.length > dataLength) {
		dps.shift();
	}

	chart.render();
};







// ตั้งdelay
updateChart(dataLength);
setInterval(() => {
    // get_empty();
    check_parking_1();
    check_parking_2();
    check_parking_3();
    check_parking_4();
    show_pk1();
    check_out_pk1();
    check_out_pk2();
    check_out_pk3();
    check_out_pk4();

    // console.log(NewParking);
    show_pk2();
    show_pk3();
    show_pk4();
    // Plotly.extendTraces("chart_1",{y: [[all_time.pk1]]} , [0]);
    updateChart();
    console.log(NewParking);

},1000);