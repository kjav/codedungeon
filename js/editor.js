var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/javascript");

function run_code() {
  console.log(window.eval(editor.getValue()));
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
