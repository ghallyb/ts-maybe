import { Maybe, Some, None } from "./types";

export function Some<T>(x: Maybe<T>): x is T {
    return x !== undefined && x !== null;
}

export function None<T>(x: Maybe<T>): x is None {
    return x === undefined || x === null;
}

