window.addEventListener("load", function () {
    document.getElementById('layoutBtn').style.display = 'inline';
    document.getElementById('gaugesBtn').style.display = 'inline';
    document.getElementById('pipesBox').style.display = 'none';
    document.getElementById('junctionsBox').style.display = 'none';
    document.getElementById('coordsBox').style.display = 'none';
    document.getElementById('layout').style.display = 'none';
    
})

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


// function coordsShow() { //show the coordinates table
//     document.getElementById('pathDir').textContent = 'Home > Coordinates';
//     document.getElementById('heading').textContent = 'Coordinates';
//     document.getElementById('tblCoord').style.display = 'block';
//     document.getElementById('tbl').style.display = 'none';
//     document.getElementById('tblJ').style.display = 'none';
//     document.getElementById('settingsPg').style.display = 'none';
// }

// function metadataShow() {
//     document.getElementById('pathDir').textContent = 'Home > Pipe metadata';
//     document.getElementById('heading').textContent = 'Pipe metadata';
//     document.getElementById('tblCoord').style.display = 'none';
//     document.getElementById('tbl').style.display = 'block';
//     document.getElementById('tblJ').style.display = 'none';
//     document.getElementById('settingsPg').style.display = 'none';
// }

// function settingsShow() {
//     document.getElementById('pathDir').textContent = 'Settings';
//     document.getElementById('heading').textContent = 'Settings';
//     document.getElementById('tabs').style.display = 'none';
//     document.getElementById('tbl').style.display = 'none';
//     document.getElementById('box').style.marginTop = '-27em';
//     document.getElementById('settingsPg').style.display = 'block';
//     document.getElementById('contentBox').style.height = '23.5em';
//     document.getElementById('contentBox').style.paddingTop = '0.3em';
//     document.getElementById('settingsPg').style.marginTop = '0.3em';
    
// }   

function showGauges(){
    document.getElementById('topbar').innerHTML = 'Operational data';
    document.getElementById('opsBtn').style.display = 'none';
    document.getElementById('pipesBox').style.display = 'block';
    // document.getElementById('JnC').style.display = 'block';
    document.getElementById('junctionsBox').style.display = 'block';
    document.getElementById('coordsBox').style.display = 'block';
}

function showLayout(){
    document.getElementById('topbar').innerHTML = 'System layout';
    document.getElementById('gaugesBtn').style.display = 'none';
    document.getElementById('layoutBtn').style.display = 'none';
    document.getElementById('layout').style.display = 'block';
}

function showHome(){
    document.getElementById('layoutBtn').style.display = 'inline';
    document.getElementById('gaugesBtn').style.display = 'inline';
    document.getElementById('pipesBox').style.display = 'none';
    document.getElementById('junctionsBox').style.display = 'none';
    document.getElementById('coordsBox').style.display = 'none';
    document.getElementById('layout').style.display = 'none';
    document.getElementById('topbar').innerHTML = 'Welcome back!';
    
}

function showTbls() { 
    document.getElementById('topbar').innerHTML = 'System data';
    document.getElementById('allTbls').style.display = 'block';
    document.getElementById('layout').style.display = 'none';
    document.getElementById('link').style.display = 'none';
};