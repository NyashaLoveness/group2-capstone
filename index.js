import * as sqlite from 'sqlite';
import sqlite3 from 'sqlite3';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.static('./public'))
app.use(express.json());

const  db = await  sqlite.open({
    filename:  './leaks.db',
    driver:  sqlite3.Database
});

await db.exec(`PRAGMA foreign_keys = ON;`);
await db.migrate();

//fire up the port
app.listen(process.env.PORT || 6061)

const corsOptions = {
   origin:'*',
   credentials: true,           //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}
 app.use(cors(corsOptions)) // Use this after the variable declaration


app.get('/pipes', async function(req, res) {
    const pipe_data = await db.all(`select * from pipes`);
    res.json({
        pipe_data
    });
});

app.get('/junctions', (req, res) =>{
    res.status(200).send([
        {"ID":"10","Elevation":30,"Demand":155.7758,"Pattern":"P_10"},
        {"ID":"11","Elevation":30,"Demand":135.7103,"Pattern":"P_11"},
        {"ID":"12","Elevation":30,"Demand":158.9334,"Pattern":"P_12"},
        {"ID":"13","Elevation":30,"Demand":295.1782,"Pattern":"P_13"},
        {"ID":"14","Elevation":30,"Demand":181.9995,"Pattern":"P_14"},{"ID":"15","Elevation":30,"Demand":68.2253,"Pattern":"P_15"},{"ID":"16","Elevation":30,"Demand":85.6041,"Pattern":"P_16"},{"ID":"17","Elevation":30,"Demand":224.8992,"Pattern":"P_17"},{"ID":"18","Elevation":30,"Demand":427.1321,"Pattern":"P_18"},{"ID":"19","Elevation":30,"Demand":15.9995,"Pattern":"P_19"},{"ID":"2","Elevation":30,"Demand":280.1757,"Pattern":"P_2"},{"ID":"20","Elevation":30,"Demand":331.2483,"Pattern":"P_20"},{"ID":"21","Elevation":30,"Demand":243.4385,"Pattern":"P_21"},{"ID":"22","Elevation":30,"Demand":123.1402,"Pattern":"P_22"},{"ID":"23","Elevation":30,"Demand":256.1853,"Pattern":"P_23"},{"ID":"24","Elevation":30,"Demand":248.6517,"Pattern":"P_24"},{"ID":"25","Elevation":30,"Demand":49.527,"Pattern":"P_25"},{"ID":"26","Elevation":30,"Demand":263.5467,"Pattern":"P_26"},{"ID":"27","Elevation":30,"Demand":112.818,"Pattern":"P_27"},{"ID":"28","Elevation":30,"Demand":83.0625,"Pattern":"P_28"},{"ID":"29","Elevation":30,"Demand":96.7124,"Pattern":"P_29"},{"ID":"3","Elevation":30,"Demand":220.8291,"Pattern":"P_3"},{"ID":"30","Elevation":30,"Demand":105.3621,"Pattern":"P_30"},{"ID":"31","Elevation":30,"Demand":25.608,"Pattern":"P_31"},{"ID":"32","Elevation":30,"Demand":248.0802,"Pattern":"P_32"},{"ID":"4","Elevation":30,"Demand":34.1677,"Pattern":"P_4"},{"ID":"5","Elevation":30,"Demand":222.6056,"Pattern":"P_5"},{"ID":"6","Elevation":30,"Demand":319.1373,"Pattern":"P_6"},{"ID":"7","Elevation":30,"Demand":360.9283,"Pattern":"P_7"},{"ID":"8","Elevation":30,"Demand":169.1325,"Pattern":"P_8"},{"ID":"9","Elevation":30,"Demand":139.5633,"Pattern":"P_9"}])
});

app.get('/reservoirs', (req, res) => {
    res.status(200).send([{"ID":"1","Head":100}])
});

app.get('/coordinates', (req, res) => {
    res.status(200).send([
        {"Node":"24","Xcoord":3977.8,"Ycoord":7172.9},
        {"Node":"25","Xcoord":3954.44,"Ycoord":7990.65},
        {"Node":"26","Xcoord":4410.05,"Ycoord":7990.65},
        {"Node":"27","Xcoord":4818.93,"Ycoord":7990.65},
        {"Node":"20","Xcoord":4550.23,"Ycoord":5969.63},
        {"Node":"21","Xcoord":4550.23,"Ycoord":5303.74},
        {"Node":"22","Xcoord":4550.23,"Ycoord":4591.12},
        {"Node":"23","Xcoord":3977.8,"Ycoord":5969.63},
        {"Node":"28","Xcoord":3405.37,"Ycoord":5969.63},
        {"Node":"29","Xcoord":2716.12,"Ycoord":6004.67},
        {"Node":"1","Xcoord":5251.17,"Ycoord":4485.98},
        {"Node":"3","Xcoord":5227.8,"Ycoord":5969.63},
        {"Node":"2","Xcoord":5251.17,"Ycoord":5268.69},
        {"Node":"5","Xcoord":6676.4,"Ycoord":5969.63},
        {"Node":"4","Xcoord":6068.93,"Ycoord":5969.63},
        {"Node":"7","Xcoord":7260.51,"Ycoord":6600.47},
        {"Node":"6","Xcoord":7260.51,"Ycoord":5969.63},
        {"Node":"9","Xcoord":7260.51,"Ycoord":7990.65},
        {"Node":"8","Xcoord":7260.51,"Ycoord":7301.4},
        {"Node":"11","X-coord":6793.22,"Ycoord":8551.4},
        {"Node":"10","Xcoord":6793.22,"Ycoord":7990.65},
        {"Node":"13","Xcoord":6150.7,"Ycoord":8960.28},
        {"Node":"12","Xcoord":6793.22,"Ycoord":8960.28},
        {"Node":"15","Xcoord":5683.41,"Ycoord":7990.65},
        {"Node":"14","Xcoord":6302.57,"Ycoord":7990.65},
        {"Node":"17","Xcoord":5216.12,"Ycoord":7535.05},
        {"Node":"16","Xcoord":5216.12,"Ycoord":7990.65},
        {"Node":"19","Xcoord":5227.8,"Ycoord":6542.06},
        {"Node":"18","Xcoord":5227.8,"Ycoord":7137.85},
        {"Node":"31","Xcoord":2716.12,"Ycoord":7990.65},
        {"Node":"30","Xcoord":2716.12,"Ycoord":6904.21},
        {"Node":"32","Xcoord":3405.37,"Ycoord":7990.65}])
});