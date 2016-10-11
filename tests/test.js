' use strict'

var chai = require('chai'),
    expect = chai.expect,
    chaiHttp = require('chai-http');
var App = require('./index.js')
let server = require('../app');
var num
let mongoose = require("mongoose");
let Content = require('../models/content');

chai.should()
chai.use(chaiHttp);

var id

describe('====TEST CONTENT====', () => {
  describe('/GET content', () => {
      it('test GET dari isi content', (done) => {
        chai.request(server)
            .get('/content')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                //res.body.length.should.be.eql(1);
              done();
            });
      });
  });


  describe('/POST book', () => {
        it('test POST ke content', (done) => {
          let content = {
              judul: "Postingan 1",
              isi: "ini isi dari blog nya",
              hashtag: "hashtag"
          }
          chai.request(server)
              .post('/content')
              .send(content)
              .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('judul').eql('Postingan 1');
                done();
              });
        });
    });


    describe('/PUT/:id content', () => {
      it('it should UPDATE a content given the id', (done) => {
        let content = new Content({judul: "Postingan 1", isi: "ini isi dari blog nya", hashtag:"hashtag"})
        content.save((err, book) => {
                chai.request(server)
                .put('/content/' + content.id)
                .send({judul: "The Chronicles of Narnia", isi: "C.S. Lewis", hashtag:"HASH"})
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('judul').eql('The Chronicles of Narnia');
                  done();
                });
          });
      });
  });


  describe('/DELETE/:id book', () => {
      it('it should DELETE a book given the id', (done) => {
        let content = new Content({judul: "The Chronicles of Narnia", isi: "C.S. Lewis", hashtag:"YOWIS"})
        content.save((err, book) => {
                chai.request(server)
                .delete('/content/' + content.id)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                  done();
                });
          });
      });
  });

});




///////////////////
