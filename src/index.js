class Sorter {
  constructor() {
    this.arrValues=[];
    this.rule=(a,b)=>{
      if (a > b) return 1;
      if (a < b) return -1;
    }
  }

  add(element) {
    this.arrValues.push(element);
  }

  at(index) {
    return (this.arrValues[index]);
  }

  get length() {
    return (this.arrValues.length);
  }

  toArray() {
    return (this.arrValues);
  }

  sort(indices) {
    let sortKeys=indices.sort();
    let keysValues=[];
    for(let i=0;i<indices.length;i++)
    {
      keysValues.push(this.at(sortKeys[i]));
    }
    let sortKeysValues=keysValues.sort(this.rule);
    for(let i=0;i<indices.length;i++)
    {
      this.arrValues.splice(sortKeys[i],1,sortKeysValues[i]);
    }
  }

  setComparator(compareFunction) {
    this.rule=compareFunction;
  }
}

module.exports = Sorter;
