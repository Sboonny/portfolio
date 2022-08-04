# portfolio

[Live Url](https://sboonny.vercel.app/)
 
## library of answers, I found

**Git**:
- setting a function to true `git config --global core.fsmonitor true`

- exit the credential-cache, as password is probably cached in there `git credential-cache exit`


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

<details>
 <summary>Schema structure</summary>

```primsa
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id      Int      @id @default(autoincrement())
  name    String
  posts   Post[]
  profile Profile?
}

model Profile {
  id       Int    @id @default(autoincrement())
  biograpy String // Intentional typo!
  userId   Int    @unique
  user     User   @relation(fields: [userId], references: [id])
}

model Post {
  id         Int        @id @default(autoincrement())
  title      String
  published  Boolean    @default(true)
  content    String
  authorId   Int
  author     User       @relation(fields: [authorId], references: [id])
  categories Category[]
}

model Category {
  id    Int    @id @default(autoincrement())
  name  String
  posts Post[]

  @@unique([name])
}
```

</details>

---

To create charts use `flowchart`

to check propTypes https://reactjs.org/docs/typechecking-with-proptypes.html
