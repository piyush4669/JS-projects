firebase.initializeApp(config);
carData = [];
$("#chartContainer").hide();
  for(i=0;i<19;i++){
    var database = firebase.database().ref('' + i).once('value').then(function(data){
        //console.log(data.val());
        carData.push(data.val());
    });
  }

  String.prototype.capitalize = function() {
      return this.charAt(0).toUpperCase() + this.slice(1);
  }

let dataKey =[];
setTimeout(function getData(){
  console.log(carData);

  for(i=0;i<19;i++){
    let temp = carData[i];
    var li = document.createElement('li');
    li.value = temp.Model;
    let name = temp.Model.capitalize();
    li.innerHTML = name
    $('#select-profession').append(li);
    li.onclick = function() {
        $("#chartContainer").toggle();

        $('#carm').html(name);
        $('#caro').html('Origin : ' + temp.Origin);
        $('#cary').html('Year : ' + temp.Year);

        var chart1=new CanvasJS.Chart("chartContainer1",{animationEnabled:!0,theme:"light2",title:{text:"Acceleration"},axisY:{valueFormatString:"####",},data:[{type:"column",dataPoints:[{y:temp.Acceleration,label:"Acceleration"}]}]});chart1.render();

        var chart2=new CanvasJS.Chart("chartContainer2",{animationEnabled:!0,theme:"light2",title:{text:"Cylinders"},axisY:{valueFormatString:"####",},data:[{type:"column",dataPoints:[{y:temp.Cylinders,label:"Cylinders"}]}]});chart2.render();

        var chart3=new CanvasJS.Chart("chartContainer3",{animationEnabled:!0,theme:"light2",title:{text:"Displacement"},axisY:{valueFormatString:"####",},data:[{type:"column",dataPoints:[{y:temp.Displacement,label:"Displacement"}]}]});chart3.render();

        var chart4=new CanvasJS.Chart("chartContainer4",{animationEnabled:!0,theme:"light2",title:{text:"Horsepower"},axisY:{valueFormatString:"####",},data:[{type:"column",dataPoints:[{y:temp.Horsepower,label:"Horsepower"}]}]});chart4.render();

        var chart5=new CanvasJS.Chart("chartContainer5",{animationEnabled:!0,theme:"light2",title:{text:"MPG"},axisY:{valueFormatString:"####",},data:[{type:"column",dataPoints:[{y:temp.MPG,label:"MPG"}]}]});chart5.render();

        var chart6=new CanvasJS.Chart("chartContainer6",{animationEnabled:!0,theme:"light2",title:{text:"Weight"},axisY:{valueFormatString:"####",},data:[{type:"column",dataPoints:[{y:temp.Weight,label:"Weight"}]}]});chart6.render();


      }
    }
},5000);  
