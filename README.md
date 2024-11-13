## What Is It

A very simple option type for Typescript inspired by Elm and F#.
- Option type called `Maybe<T>` which equates to `(T | null | undefined)`.
- Some typeguards `Some(x)` or `None(x)` for differentiating between states.

## References / Inspiration

**Syntax**

The option type is common to several functional languages. I've taken the
terminology from two I am familiar with and combined them (as per my own
personal preference).
- ```Maybe``` as option type taken from [Elm](https://package.elm-lang.org/packages/elm/core/latest/Maybe).
- ```Some``` / ```None``` types & guards taken from [F#](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/options).

**Similar Projects**

There are dozens of libraries doing the same thing. Some are far more fleshed out with
functionality than others. This is designed to be a very basic type with nomencleature
that I personally like. Here are some other examples:

[hasparus/maybe-ts:](https://github.com/hasparus/maybe-ts) An almost identical, very simple implementation.

[rdeneau/ts-maybe-type:](https://github.com/rdeneau/ts-maybe-type) A feature rich, very fleshed out implementation.

## Examples

Some messy examples. Needs cleared up. 

``` typescript
var mightBeString: Maybe<string>;
mightBeString = "I am a string";

var isString: string = Some(mightBeString) ? mightBeString : "I am not a string";
isString == "I am a string"; // true
isString == "I am not a string" // false
```

```typescript
var mightBeString: Maybe<string>;

var isString: string = Some(mightBeString) ? mightBeString : "I am not a string";
isString == "I am a string"; // false
isString == "I am not a string" // true
```

```typescript
function isString(x: Maybe<string>): string {
    if(Some(x)) {
        // The Some guard tells the TS compiler we have a string 
        // and can safely use the length method.
        var length = x.length;
        
        return `x is a string of length ${length}.`;
    }

    return `x is not a string`;
    // The following would throw an error because TS compiler
    // knows that x is null or undefined and has coerced it 
    // appropriately.
    // return `x is a string of length ${x.length}.`;
}

function isNotString(x: Maybe<string>): string {
    if(None(x)) {
        // The following would throw an error because TS compiler
        // knows that x is null or undefined and has coerced it 
        // appropriately.
        // var length = x.length;

        return `x is not a string`;
    }

    // Because we used the Some guard with a return statement, the
    // compiler now knows the only posibility is that x is a string
    // and coerces it as such.
    return `x is a string of length ${x.length}.`;
}

function stringLength(x: Maybe<string>): number {
    // Function should return 0 if not a string.
    if(None(x))
        return 0;

    // Because we used the None guard, the compiler now knows we are
    // dealing with a string and can treat it as such for the rest of
    // the method.
    return x.length;
}

```