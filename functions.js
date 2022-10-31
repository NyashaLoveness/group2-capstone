window.addEventListener("load", function () {
    document.getElementById('layoutBtn').style.display = 'inline';
    document.getElementById('opsBtn').style.display = 'inline';
    document.getElementById('pipesBox').style.display = 'none';
    document.getElementById('junctionsBox').style.display = 'none';
    document.getElementById('coordsBox').style.display = 'none';
    document.getElementById('layout').style.display = 'none';
    document.getElementById('CRUD').style.display = 'none';
    document.getElementById('ordersForm').style.display = 'none';
    document.getElementById('link').style.display = 'none';
    document.getElementById('ops').style.display = 'none';
    document.getElementById('iframe').style.display = 'none';
    document.getElementById('tblJ').style.display = 'none';
    document.getElementById('settingsPg').style.display = 'none';
    document.getElementById('nodesBtn').style.display = 'inline';
    document.getElementById('nodes').style.display = 'none';
    
})

function showHome(){
    document.getElementById('layoutBtn').style.display = 'inline';
    document.getElementById('opsBtn').style.display = 'inline';
    document.getElementById('pipesBox').style.display = 'none';
    document.getElementById('junctionsBox').style.display = 'none';
    document.getElementById('coordsBox').style.display = 'none';
    document.getElementById('layout').style.display = 'none';
    document.getElementById('topbar').innerHTML = 'Welcome back!';
    document.getElementById('ordersForm').style.display = 'none';
    document.getElementById('ordersBtn').style.display = 'inline';
    document.getElementById('settingsPg').style.display = 'none';
    document.getElementById('link').style.display = 'none';
    document.getElementById('ops').style.display = 'none';
    document.getElementById('nodesBtn').style.display = 'inline';
    document.getElementById('nodes').style.display = 'none';
}

function ordersPg() {
    document.getElementById('topbar').innerHTML = 'Work orders';
    document.getElementById('layout').style.display = 'none';
    document.getElementById('link').style.display = 'none';
    document.getElementById('pipesBox').style.display = 'none';
    document.getElementById('junctionsBox').style.display = 'none';
    document.getElementById('coordsBox').style.display = 'none';
    document.getElementById('ordersForm').style.display = 'block';
    document.getElementById('layoutBtn').style.display = 'none';
    document.getElementById('opsBtn').style.display = 'none';
    document.getElementById('link').style.display = 'none';
    document.getElementById('layout').style.display = 'none';
    document.getElementById('ordersBtn').style.display = 'none';
    document.getElementById('CRUD').style.display = 'block';
    document.getElementById('settingsPg').style.display = 'none';
    document.getElementById('nodesBtn').style.display = 'none';
    document.getElementById('nodes').style.display = 'none';

}

function settingsShow() {
    document.getElementById('topbar').innerHTML = 'settings';
    document.getElementById('layout').style.display = 'none';
    document.getElementById('link').style.display = 'none';
    document.getElementById('pipesBox').style.display = 'none';
    document.getElementById('junctionsBox').style.display = 'none';
    document.getElementById('coordsBox').style.display = 'none';
    document.getElementById('ordersForm').style.display = 'none';
    document.getElementById('CRUD').style.display = 'none';
    document.getElementById('opsBtn').style.display = 'none';
    document.getElementById('layoutBtn').style.display = 'none';
    document.getElementById('orderstBtn').style.display = 'none';
    document.getElementById('ops').style.display = 'none';
    document.getElementById('ordersForm').style.display = 'none';
    document.getElementById('settingsPg').style.display = 'block';
    document.getElementById('acc').style.display = 'block';
    document.getElementById('nodesBtn').style.display = 'none';
    document.getElementById('nodes').style.display = 'none';
    
}   

function showLayout(){
    document.getElementById('topbar').innerHTML = 'System layout';
    document.getElementById('opsBtn').style.display = 'none';
    document.getElementById('layoutBtn').style.display = 'none';
    document.getElementById('ordersBtn').style.display = 'none';
    document.getElementById('settingsPg').style.display = 'none';
    document.getElementById('layout').style.display = 'block';
    document.getElementById('link').style.display = 'block';
    document.getElementById('iframe').style.display = 'block';
    document.getElementById('nodesBtn').style.display = 'none';
    document.getElementById('nodes').style.display = 'none';
}


function showTbls() { 
    document.getElementById('topbar').innerHTML = 'System data';
    document.getElementById('layout').style.display = 'none';
    document.getElementById('link').style.display = 'none';
    document.getElementById('pipesBox').style.display = 'block';
    document.getElementById('junctionsBox').style.display = 'block';
    document.getElementById('coordsBox').style.display = 'block';
    document.getElementById('settingsPg').style.display = 'none';
    document.getElementById('tblJ').style.display = 'block';
    document.getElementById('nodesBtn').style.display = 'none';
    document.getElementById('nodes').style.display = 'none';
};

function opsData(){
    document.getElementById('topbar').innerHTML = 'Operational data';
    document.getElementById('layout').style.display = 'none';
    document.getElementById('link').style.display = 'none';
    document.getElementById('pipesBox').style.display = 'none';
    document.getElementById('junctionsBox').style.display = 'none';
    document.getElementById('coordsBox').style.display = 'none';
    document.getElementById('ordersForm').style.display = 'none';
    document.getElementById('CRUD').style.display = 'none';
    document.getElementById('opsBtn').style.display = 'none';
    document.getElementById('layoutBtn').style.display = 'none';
    document.getElementById('ops').style.display = 'block';
    document.getElementById('settingsPg').style.display = 'none';
    document.getElementById('ordersBtn').style.display = 'none';
    document.getElementById('nodesBtn').style.display = 'none';
    document.getElementById('nodes').style.display = 'none';
}

function nodesData(){
    document.getElementById('topbar').innerHTML = 'Nodes trend analysis';
    document.getElementById('layout').style.display = 'none';
    document.getElementById('link').style.display = 'none';
    document.getElementById('pipesBox').style.display = 'none';
    document.getElementById('junctionsBox').style.display = 'none';
    document.getElementById('coordsBox').style.display = 'none';
    document.getElementById('ordersForm').style.display = 'none';
    document.getElementById('CRUD').style.display = 'none';
    document.getElementById('opsBtn').style.display = 'none';
    document.getElementById('layoutBtn').style.display = 'none';
    document.getElementById('ops').style.display = 'none';
    document.getElementById('settingsPg').style.display = 'none';
    document.getElementById('ordersBtn').style.display = 'none'; 
    document.getElementById('nodesBtn').style.display = 'none';
    document.getElementById('nodes').style.display = 'block';
}
