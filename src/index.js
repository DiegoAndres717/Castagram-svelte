import { append } from "svelte/internal";
import App from "./containers/App.svelte";

const app = new App({
    target: document.querySelector('main')
});

export {app};
