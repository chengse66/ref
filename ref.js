/**
 * author www.dojs.com
 * do service like vue.js
 */
class RefObject extends EventTarget{
  constructor() {
    super();
    this._detail = {
        prev:null,
        now:null
    };

    this._handle = new CustomEvent("change", {
      detail: this._detail,
      bubbles: false,
      cancelable: true,
    });
    this._prev = null;
    this._value = null;
  }

  get value() {
    return this._value;
  }

  set value(any) {
    this._prev = this._value;
    this._value = any;
    if (this._prev != this._value) {
      this.update();
    }
  }

  update() {
    //回调事件
    this._detail.prev=this._prev;
    this._detail.now=this._value;
    this.dispatchEvent(this._handle);
  }

  /**
   * 
   * @param {(any,any)=>void} callback 
   * @returns 
   */
  watch(callback){
    const on_change=e=>{
        callback(e.detail.now,e.detail.prev);
    };
    this.addEventListener('change',on_change);
    return ()=>{
        this.removeEventListener('change',on_change);
    };
  }
}

const ref = (any) => {
    var r=new RefObject();
    r.value=any;
    return r;
};
