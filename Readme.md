### Why electron :

1. Cross platform
2. Uses web tech for desktop app
3. Open Source

### How it works

- It Bundles **Chromium content module** for UI
- It Bundles **Node** for native desktop platform such as accessing file system,os system(task bar etc), recently used documents,native notification etc.
- It build into native binary which uses these to bundles internally. This allows you to create application that run on mac, windows and linux platform.

### Different process in electron

- Main Process : This is the parent process of the app which is responsible for controlling all other processes. It manages the application lifecycle and in reponsible for spawning new render processes. There is only 1 Main process in the application.
- Rendered process : These are the child processes. We can have multiple render processes. Generally are in a app by a UI window.

### IPC(Inter process communication)

Each process gets an ipc module. This is the mechanism through which the processes in an electron app communicate.

- IPC module is an instance of node event emitter.
- ipcMain and ipcRenderer are the 2 modules for the main and the renderer processes.

### Process Modules

These are the electron modules that are available to processes in electron app. These modules are available or unavailable depending on the kind of process the code is running in.
