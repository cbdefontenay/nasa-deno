# NASA Deno API Project
## This is a Backend project, using Deno.

The idea is simple. Deno takes a NASA API from the SpaceX missions that took place in space
in order to discover some possible habitable planets (named "Kepler").

In this project managed by Deno, you can launch a mission in the future, see your history (Aborted launches and still running missions),
and see your upcoming mission, with the name of your choice.

The purpose of this project is to work with Deno, it's not suposed to be mobile responsive.

#### To be able to see what the project really is, clone it and then follow the following intructions:

1) Make sure you have Deno installed.
2) Run:

```js
git clone https://github.com/cbdefontenay/nasa-deno.git
```

) Go into the "src" folder:

```js
cd src
```
3) Ten run this deno CLI:

```js
deno run --allow-read --allow-write --allow-net mod.ts
```

4) The project should run on your [http://localhost:8000/](http://localhost:8000/).
5) If you do not see anything but a small NASA design, that's normal. Now go to [http://localhost:8000/index.html](http://localhost:8000/index.html)
to see the project working. 

### And that's it!
