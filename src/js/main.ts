interface Options {
    brackets: [],
    start: string,
    end: string
}

export default class SyntaxChecker {
    public brackets: [];
    public options: Options;

    constructor(options: {}) {
        this.brackets = [];
        this.options = {
            brackets: [],
            start: '',
            end: ''
        };
        this._setOptions(options);
    };

    _setOptions(options: any) {
        if(options) this.options = options;
    }

    checkBracket(block: string) {
        this.brackets = block.split('').reduce((acc, current) => {
            if (current === this.options.brackets[acc[acc.length - 1]]) {
                acc.pop();
            } else {
                (acc as string[]).push(current);
            }
            return acc;
        }, []);

        return this.brackets.length === 0;
    }

    validate(block: string) {
        return Object.keys(this.options).map(key => {
            switch (key) {
                case 'brackets':
                    return this.checkBracket(block);
                case 'start':
                    return block.startsWith(this.options[key]);
                case 'end':
                    return block.endsWith(this.options[key]);
            }
        }).every(value => value === true);
    }
};