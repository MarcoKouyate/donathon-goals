const loadLibrary = () => import("@tauri-apps/api/window");

const { Component } = loadLibrary() as any;

// tslint:disable-next-line:no-console
console.log(`typeof Component is ${typeof Component}`);

export { Component };
