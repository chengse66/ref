declare class RefObject extends EventTarget {
    get value(): any;
    set value(any: any);
    update(): void;
    watch(callback: (now: any, prev: any) => void): () => void;
  }
  
  declare const ref: (any: any) => RefObject;