export declare class Maybe<T> {
    private _value;
    constructor(value: T);
    static Some<T>(value: T): Maybe<T>;
    static None<T>(): Maybe<T>;
    value: T;
    isSome: boolean;
    isNone: boolean;
    map<U>(mapper: (now: T) => U): Maybe<U>;
}
