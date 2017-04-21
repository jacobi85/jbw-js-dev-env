import { expect } from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Test for index.js', () => {
  it('Should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it('Should say hello world', (done) => {
    const index = fs.readFileSync('./src/index.html','utf-8');
    jsdom.env(index, (err, window) => {
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("Hello world");
      done();
      window.close();
    });
  });
});
