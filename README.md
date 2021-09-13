# mujaen-syntax-ckeck
## Syntax Ckecker

### Install
```
npm install mujaen-syntax-ckeck
```

### brackets
- 입력값이 괄호 혹은 지정한 문자열이 짝이 맞는지 확인합니다 
- 이때, 'string' 외에 다른 타입 혹은 공백일 시 실행되지 않습니다.

### start
- 입력값이 특정 문자열로 시작하는지 확인합니다

```javascript
{
    start: '[',
}
```

### end
- 입력값이 특정 문자열로 끝나는지 확인합니다

```javascript
{
    end: ']'
}
```

### validate
- 검사 규칙을 수행하여 결과값으로 'boolean'을 반환합니다.
```javascript
form.add({validate: []});
```

### options

| 속성 | 설명 | 기본값 | 타입 |
|---|---|---|---|
| brackets | 문자열 짝 | {} | object |
| start | 문자열 시작 | '' | string |
| end | 문자열 끝 | '' | string |


### Usage
```javascript
import SyntaxChecker from "mujaen-syntax-check";

const checker = new SyntaxChecker({
    brackets: {
        '[':']',
        '{':'}',
        '(':')'
    },
    start: '[',
    end: ']'
});

checker.validate('[({}{{{{}}}})[][]]'); //result: true or false 
```




