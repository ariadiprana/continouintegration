var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true })
var should = require('chai').should();

nightmare
  .goto('http://localhost:3000/')
  .type('[name=judul]', 'Judul Otomatis')
  .type('[name=isi]', 'berita ini ditulis secara otomatis, keren kaaan, keren ga guuuuys')
  .click('#formulir button[type=submit]')
  .wait('#main')
  .evaluate(function () {
    return document.querySelector('#main .searchCenterMiddle li a').href
  })
  .end()
  .then(function (result) {
    console.log(result)
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });
