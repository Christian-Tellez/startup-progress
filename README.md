# My startup progress

Every startup goes through several stages. In every stage, there are necessary steps to be accomplished.

This is a simple application that documents that process.

### TODO list
- [x] Create base for all components
- [x] Add tasks to list
- [x] Sync with LocalStorage
- [x] Mark tasks as checked
- [x] When all tasks get checked → check stage
- [x] Block other stages till previous stage is not finished
- [x] Undo triggers confirm
- [x] Undo unchecks next stages tasks
- [x] Make it look less ugly
- [x] Deploy in Github pages
- [ ] ❓ Write unit tests
- [ ] ❓ Change confirm to modal (<dialog> HTML)
- [ ] ❓ Adding new task to prior stage gives alert and unchecks next stage tasks (same as in undo)
- [ ] ❓ Delete tasks
- [ ] ❓ Create new stages
- [ ] ❓ Make disabled stages more clear to the user

> [!NOTE]
> ❓ = not directly in requirements, but good to have (tests were a must tho 😞)

## How to run the code

You can find the code deployed here: https://christian-tellez.github.io/startup-progress/

Or you can clone the repository and run it in your local machine. Make sure to install all dependencies before doing so

```
npm install
npm run dev
```

> [!TIP]
> The app looks less ugly in dark mode

> [!NOTE]
> The app was developed using React + TypeScript + Vite so, for more info about it, check their site: https://vitejs.dev/guide/ (they don't pay me for this, I swear)