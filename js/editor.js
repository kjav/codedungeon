var editor = ace.edit("editor");

// Load code from previous session
var previous_session = window.localStorage.getItem('code');

editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/javascript");
if (previous_session)
  editor.setValue(previous_session);
else
  editor.setValue("function level1Code(){" + "\n" + "\n" + "}");

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

var saveTimeout = -1;
var save_frequency = 5000;
// Save code
editor.getSession().on('change', function(e) {
  if (saveTimeout == -1)
    saveTimeout = setTimeout(function() {
      window.localStorage.setItem('code', editor.getValue());
    }, save_frequency);
});

window.onunload = function(e) {
  window.localStorage.setItem('code', editor.getValue());
};

$("#run").click(run_code);
