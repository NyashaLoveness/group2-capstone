window.addEventListener("load", function () {
    document.getElementById('loginPg').style.display = 'block';
    document.getElementById('tblJ').style.display = 'none';
    document.getElementById('tbl').style.display = 'none';
    document.getElementById('tblCoord').style.display = 'none';
    document.getElementById('settingsPg').style.display = 'none';
    document.getElementById('box').style.display = 'none';
    document.getElementById('pathDir').style.display = 'none';
    document.getElementById('menu').style.display = 'none';
    document.getElementById('contentBox').style.display = 'none';
})

function login() {
    var usernm = document.getElementById('name').value;
    var passwd = document.getElementById('passwd').value;

    if (usernm == 'Bob' && passwd == 'operator01') {
        alert('login successful');
        function pipesShow() {
            document.getElementById('loginPg').style.display = 'none';
            document.getElementById('pathDir').textContent = 'Home > Pipe metadata';
            document.getElementById('heading').textContent = 'Pipe metadata';
            document.getElementById('tblJ').style.display = 'none';
            document.getElementById('tbl').style.display = 'block';
            document.getElementById('tblCoord').style.display = 'none';
            document.getElementById('box').style.display = 'block';
            document.getElementById('settingsPg').style.display = 'none';
            document.getElementById('pathDir').style.display = 'block';
            document.getElementById('menu').style.display = 'block';
            document.getElementById('contentBox').style.display = 'block';
        }
} else {
    alert('Oops, try again!')
}
pipesShow()
}



function tablesShow() { //show Junctions table
    document.getElementById('pathDir').textContent = 'Home > Junctions';
    document.getElementById('heading').textContent = 'Junctions';
    document.getElementById('tblJ').style.display = 'block';
    document.getElementById('tbl').style.display = 'none';
    document.getElementById('tblCoord').style.display = 'none';
    document.getElementById('settingsPg').style.display = 'none';
};

function coordsShow() { //show the coordinates table
    document.getElementById('pathDir').textContent = 'Home > Coordinates';
    document.getElementById('heading').textContent = 'Coordinates';
    document.getElementById('tblCoord').style.display = 'block';
    document.getElementById('tbl').style.display = 'none';
    document.getElementById('tblJ').style.display = 'none';
    document.getElementById('settingsPg').style.display = 'none';
}

function metadataShow() {
    document.getElementById('pathDir').textContent = 'Home > Pipe metadata';
    document.getElementById('heading').textContent = 'Pipe metadata';
    document.getElementById('tblCoord').style.display = 'none';
    document.getElementById('tbl').style.display = 'block';
    document.getElementById('tblJ').style.display = 'none';
    document.getElementById('settingsPg').style.display = 'none';
}

function settingsShow() {
    document.getElementById('pathDir').textContent = 'Settings';
    document.getElementById('heading').textContent = 'Settings';
    document.getElementById('tabs').style.display = 'none';
    document.getElementById('tbl').style.display = 'none';
    document.getElementById('box').style.marginTop = '-27em';
    document.getElementById('settingsPg').style.display = 'block';
    document.getElementById('contentBox').style.height = '23.5em';
    document.getElementById('contentBox').style.paddingTop = '0.3em';
    document.getElementById('settingsPg').style.marginTop = '0.3em';
    
}   