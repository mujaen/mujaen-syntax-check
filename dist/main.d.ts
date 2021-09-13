interface Options {
    brackets: [];
    start: string;
    end: string;
}
export default class SyntaxChecker {
    brackets: [];
    options: Options;
    constructor(options: {});
    _setOptions(options: any): void;
    checkBracket(block: string): boolean;
    validate(block: string): boolean;
}
export {};
