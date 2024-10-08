// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::Manager;

fn main() {
  tauri::Builder::default()
  .setup(|app| {
    let main_window = app.get_window("main").unwrap();
    main_window.set_decorations(true);
    Ok(())
  })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
