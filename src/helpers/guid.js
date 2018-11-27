const hash = _ => Math.floor((1 + Math.random()) * 0x10000)
  .toString(16)
  .substring(1);

const guid = _ => hash() + hash() + '-' + hash() + '-' + hash() + '-' + hash() + '-' + hash() + hash() + hash();

export default guid;
