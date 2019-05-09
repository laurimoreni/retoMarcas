window.onload = function() {
  // var username = "admin";
  // var password = "admin";
  // var x = new XMLHttpRequest();
  // x.open("GET", "http://localhost:8080/BaseX921/rest/?run=prueba.xq", true);
  // // x.setRequestHeader("Authorization", "Basic " + btoa(username + ":" + password));
  // // x.setRequestHeader("Access-Control-Allow-Origin", "*");
  // x.onreadystatechange = function() {
  //   if (x.readyState == 4 && x.status == 200) {
  //     var doc = x.responseXML;
  //     document.getElementById("item1").innerHTML = doc;
  //   }
  // };
  // x.send(null);
  // //////////////////////////////////////////////////////////////
  var username = "admin";
  var password = "admin";
  var url = 'http://localhost:8081/BaseX921/rest/?run=prueba.xq';
  $.ajax({
    type: "GET",
    url: url,
    dataType: "xml",
    beforeSend: function(xhr) {
      xhr.setRequestHeader("Authorization", "Basic " + btoa(username + ":" + password));
      xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
      xhr.setRequestHeader("Access-Control-Allow-Credentials", "*");
      xhr.setRequestHeader("Access-Control-Allow-Headers", "*");
    },
    success: function(xml) {
      var rootElement = $(xml).find('series');
      // muestra todos los resultados a la vez
      document.getElementById('item1').innerHTML += rootElement.find('nombre').text() + '<br>';
      // muestra los resultados de uno en uno
      rootElement.find('nombre').each(function() {
        document.getElementById('item1').innerHTML += $(this).text() + '<br>';
      });
    },
    error: function(jqXHR, textStatus, errorThrown) {
      //error handling goes here
    }
  });
};