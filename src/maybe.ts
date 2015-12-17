/**
 * A Maybe implementation
 * that is JavaScript first
 * i.e. simple typed abstraction over null/undefined
 */
export class Maybe<T>{
    private _value: T;
    /** Based on value it will be Some or None */
    constructor(value: T) {
        this._value = value;
    }
    /** Shorthand for constructor */
    static Some<T>(value: T): Maybe<T> {
        return new Maybe(value);
    };
    static None<T>(): Maybe<T> {
        return new Maybe(null);
    };
    get value(): T {
        return this._value;
    }
    get isSome() {
        return this._value !== null && this._value !== undefined;
    }
    get isNone() {
        return !this.isSome;
    }
    map<U>(mapper: (now: T) => U): Maybe<U> {
        if (this.isSome) {
            return new Maybe(mapper(this._value));
        }
        else {
            return new Maybe(null);
        }
    }
}
