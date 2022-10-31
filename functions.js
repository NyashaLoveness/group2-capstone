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
    document.getElementById('ordersBtn').style.display = 'block';
    document.getElementById('settingsPg').style.display = 'none';
    document.getElementById('link').style.display = 'none';
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

}

// function login() {
//     var usernm = document.getElementById('name').value;
//     var passwd = document.getElementById('passwd').value;

//     if (usernm == 'Bob' && passwd == 'operator01') {
//         alert('login successful');
//         function pipesShow() {
//             document.getElementById('loginPg').style.display = 'none';
//             document.getElementById('pathDir').textContent = 'Home > Pipe metadata';
//             document.getElementById('heading').textContent = 'Pipe metadata';
//             document.getElementById('tblJ').style.display = 'none';
//             document.getElementById('tbl').style.display = 'block';
//             document.getElementById('tblCoord').style.display = 'none';
//             document.getElementById('box').style.display = 'block';
//             document.getElementById('settingsPg').style.display = 'none';
//             document.getElementById('pathDir').style.display = 'block';
//             document.getElementById('menu').style.display = 'block';
//             document.getElementById('contentBox').style.display = 'block';
//         }
// } else {
//     alert('Oops, try again!')
// }
// pipesShow()
// }

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
    
}   

function showLayout(){
    document.getElementById('topbar').innerHTML = 'System layout';
    document.getElementById('opsBtn').style.display = 'none';
    document.getElementById('layoutBtn').style.display = 'none';
    document.getElementById('ordersBtn').style.display = 'none';
    document.getElementById('settingsPg').style.display = 'none';
    document.getElementById('layout').style.display = 'block';
    document.getElementById('link').style.display = 'block';
}


function showTbls() { 
    document.getElementById('topbar').innerHTML = 'System data';
    document.getElementById('layout').style.display = 'none';
    document.getElementById('link').style.display = 'none';
    document.getElementById('pipesBox').style.display = 'block';
    document.getElementById('junctionsBox').style.display = 'block';
    document.getElementById('coordsBox').style.display = 'block';
    document.getElementById('settingsPg').style.display = 'none';
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
    // document.getElementById('coordsBox').style.display = 'block';
}