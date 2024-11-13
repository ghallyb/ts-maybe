type Some<T> = T;
type None = null | undefined;

type Maybe<T> =
    Some<T>
    | None;

function Some<T>(x: Maybe<T>): x is T {
    return x !== undefined && x !== null;
}

function None<T>(x: Maybe<T>): x is None {
    return x === undefined || x === null;
}
    
export {
    Some, 
    None, 
    Maybe,
}