import { resolveResource } from "@tauri-apps/api/path";
import { readTextFile } from "@tauri-apps/api/fs";

let goals;

const Goals = async () => {
  const resourcePath = await resolveResource("resources/goals.json");
  goals = JSON.parse(await readTextFile(resourcePath));
};

export default { goals, Goals };
