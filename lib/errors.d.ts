/**
 * This type of error is thrown when a parameter to a method or property is
 * out of expected bounds.
 */
export class ArgumentOutOfBoundsError extends Error {
    protected constructor();
    /**
     * Max expected value for the condition.
     */
    readonly maxValue: number;
    /**
     * Min expected value for the condition.
     */
    readonly minValue: number;
    /**
     * Passed-in value for the argument.
     */
    readonly value: number;
}

/**
 * Specifies an underlying error in the engine in processing a function.
 */
export class EngineError extends Error {
    protected constructor();
}

/**
 * Specifies that a passed-in argument to a method is not correct or allowed.
 */
export class InvalidArgumentError extends Error {
    /**
     * Index of the argument that is in error.
     */
    readonly index: number;
}
