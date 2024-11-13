type Some<T> = T;
type None = null | undefined; // Should void be in here?

type Maybe<T> =
    Some<T>
    | None;

export {
    Some, None, Maybe
}