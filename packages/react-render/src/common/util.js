import EventEmitter from 'eventemitter3';
const eventEmitter = new EventEmitter();

export { default as moment } from 'moment';
export { Modal as dialog } from 'antd';
export { eventEmitter };