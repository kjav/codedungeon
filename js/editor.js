var editor = ace.edit("editor");

editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/javascript");
editor.setValue("function level1Code(){" + "\n" + "\n"
+ "}");

function run_code() {
  console.log(window.eval(editor.getValue()));
  level1Code();
  player.execute();
}

// Add ctrl-enter keybinding for running code
editor.commands.addCommand({
  name: 'myCommand',
  bindKey: { win: "Ctrl-Enter", mac: "Command-Enter" },
  exec: function(editor) {
    run_code();
  },
  readOnly: true
});


$("#run").click(run_code);
