# portfolio

[Live Url](https://sboonny.vercel.app/)
 
## library of answers, I found

**Git**:
- setting a function to true `git config --global core.fsmonitor true`

- exit the credential-cache, as password is probably cached in there `git credential-cache exit`


**Regex**:

For links with these format, `[hexadecimal numbers here](https://www.freecodecamp.org/news/hexadecimal-number-system/)` regex `/\[(.*?)\]\((.*?)\)/gm` should target them and `<a href="$2"target="_blank" rel="noopener noreferrer nofollow">$1</a>` will swap them into `<a href="https://www.freecodecamp.org/news/hexadecimal-number-system/"target="_blank" rel="noopener noreferrer nofollow">hexadecimal numbers here</a>`
