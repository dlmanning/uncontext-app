var EventEmitter = require('wolfy87-eventemitter');

export class dataService extends EventEmitter {
  constructor () {
    var self = this;

    var socket_ = new WebSocket('ws://duel.uncontext.com:80');
    socket_.onmessage = function (data) {
      var obj = JSON.parse(data.data);
      self.emit('data', obj);
    };
  }
}
