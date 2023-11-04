# portfolio

[Live Url](https://sboonny.vercel.app/)

To run locally

```console
pnpm install
pnpm dev
```

## Performance answers

To expose garbage collector

```ts
import { setFlagsFromString } from "v8";
import { runInNewContext } from "vm";
setFlagFromString("--expose_gc");
const gc = runInNewContext("gc");
```

## library of answers, I found

\*\*Type Helpers

- Combine woods

```ts
type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

type Combine<T1, T2> = Prettify<
  {
    [K in keyof (T1 | T2)]: T1[K] | T2[K];
  } & Partial<Omit<T1, keyof (T1 | T2)> & Omit<T2, keyof (T1 | T2)>>
>;
```

**Git**:

- Setting a function to true `git config --global core.fsmonitor true`
- Exit the credential-cache, as password is probably cached in there `git credential-cache exit`
- https://git-scm.com/docs/git-reflog, to pick list of commits
- Merge conflict git commands, https://stackoverflow.com/questions/5308816/how-can-i-merge-multiple-commits-onto-another-branch-as-a-single-squashed-commit

```console
git branch -m backup-feature
git switch <target-branch>
git checkout -b <whatever-you-like>
git merge --squash backup-feature
git commit -m "feat: new feature!"
```

- Rebase PR, if merge isn't a valid option

```console
git fetch upstream
git rebase -i upstream/main
```

- Conflict in package lock you can run:

```console
npm install --package-lock-only
git checkout upstream/main -- package.json
git checkout upstream/main -- pnpm-lock.yaml
```

To test the component fault tolerance

```ts
// What happens if I messed up here? Let's find out!
throw new Error("oops, I made a mistake!");
```

**Regex**:

For links with these format, `[hexadecimal numbers here](https://www.freecodecamp.org/news/hexadecimal-number-system/)` regex `/\[(.*?)\]\((.*?)\)/gm` should target them and `<a href="$2"target="_blank" rel="noopener noreferrer nofollow">$1</a>` will swap them into `<a href="https://www.freecodecamp.org/news/hexadecimal-number-system/"target="_blank" rel="noopener noreferrer nofollow">hexadecimal numbers here</a>`

**Scraping**:

- https://cheerio.js.org/
- https://axios-http.com/

---

To create charts use `flowchart`

---

Node/npm

running `npx npkill` will cleare node-modules files in the system

## Links to Services, I use a lot

### FrontEnd Client side

- For frontend session replays https://www.highlight.io/

### BackEnd Queries side

- For backend error handling https://www.axiom.co/
- Making backend queries easier https://github.com/trpc/trpc

### CSS generators

- https://www.joshwcomeau.com/shadow-palette/
- https://realfavicongenerator.net/

### Stock Images

- https://www.pexels.com/
- https://unsplash.com/
- https://stocksnap.io/

### Illustrations

- https://undraw.co/illustrations
- https://www.openpeeps.com/
- https://storytale.io/

### icons

- https://thenounproject.com/
- https://simpleicons.org/
- https://icons8.com/icons
- https://icones.js.org/

### fonts

- https://fonts.google.com/
- http://velvetyne.fr/
- https://www.losttype.com/

### Videos

- https://www.pexels.com/videos
- https://mixkit.co/
- https://coverr.co/

### Designtools

- https://express.adobe.com/sp/
- https://coolors.co/
- https://fontjoy.com/
- https://type-scale.com/
- https://www.canva.com/en_gb/

### Transform code snippets

- https://transform.tools/

### Create unique designs for unique situations

- https://www.shapedivider.app/
- https://app.haikei.app/

### Create a digram of the database

- https://dbdiagram.io/

### Publish package to npm

- https://www.npmjs.com/package/np

### Quick designed components

- https://m3.material.io/
