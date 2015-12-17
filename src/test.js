var docs = [{
  name: 'client1_doc1'
}, {
  name: 'client1_doc2'
}, {
  name: 'client1_doc3'
}, {
  name: 'client1_doc4'
}, {
  name: 'client2_doc1'
}, {
  name: 'client2_doc2'
}, {
  name: 'client2_doc3'
}, {
  name: 'client3_doc1'
}, {
  name: 'client4_doc1'
}];

var clients = [];

//first step to have name and client separately 
//in each document
docs = docs.map(function(doc) {
  var client_DocName = doc.name.split('_');
  doc.client = client_DocName[0];
  doc.doc = client_DocName[1];
  return doc;
});
//second, look through document to push each document
//inside the client array
docs.forEach(function(doc) {
  var client = clients.filter(function(client) {
    return client.name === doc.client;
  })[0];
  if(!client) {
    client = { name: doc.client, docs: []};
    clients.push(client);
  }
  client.docs.push(doc);
});
console.log(clients[0].docs);

