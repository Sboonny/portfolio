# portfolio

[Live Url](https://sboonny.vercel.app/)
 
## library of answers, I found

**Git**:

- setting a function to true `git config --global core.fsmonitor true`

- exit the credential-cache, as password is probably cached in there `git credential-cache exit`

- https://git-scm.com/docs/git-reflog, to pick list of commits

- merge conflict git commands, https://stackoverflow.com/questions/5308816/how-can-i-merge-multiple-commits-onto-another-branch-as-a-single-squashed-commit
   
```console
git branch -m backup-feature
git switch <target-branch>
git checkout -b <whatever-you-like>
git merge --squash backup-feature
git commit -m "feat: new feature!"
```

**Note:** run `npm install --package-lock-only ` if your conflict in package lock

**Regex**:

For links with these format, `[hexadecimal numbers here](https://www.freecodecamp.org/news/hexadecimal-number-system/)` regex `/\[(.*?)\]\((.*?)\)/gm` should target them and `<a href="$2"target="_blank" rel="noopener noreferrer nofollow">$1</a>` will swap them into `<a href="https://www.freecodecamp.org/news/hexadecimal-number-system/"target="_blank" rel="noopener noreferrer nofollow">hexadecimal numbers here</a>`


**Scraping**:

- https://cheerio.js.org/
- https://axios-http.com/

**Prisma Node Commands cheat sheet**

This is made so I don't keep searching [its docs](https://www.prisma.io/docs/guides)

<details>
 <summary>Node shortcuts</summary>

---

create a migration

```nodejs
npx prisma migrate dev --name `migrate name`
```

to create a draft migration

```nodejs
npx prisma migrate dev --name `migrate name` --create-only
```

migrations to databases that already exist and cannot be reset

```nodejs
npx prisma migrate deploy
```

migration that should be ignored

```nodejs
npx prisma migrate resolve --applied `migrate name here`
```

get to the data model of failed modal

```nodejs
prisma migrate diff
```

</details>


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
