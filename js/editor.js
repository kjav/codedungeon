var editor = ace.edit("editor");

editor.getSession().setTabSize(2);
editor.getSession().setUseSoftTabs(true);
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/javascript");

// Load code from previous session
var previous_session = window.localStorage.getItem('code');

if (previous_session)
  editor.setValue(previous_session);
else
  editor.setValue("function level1Code(){" + "\n" + "\n" + "}");

function run_code() {
  var user_error = false;
  try {
    window.eval(editor.getValue());
  } catch (e) {
    user_error = true;
    alert(e);
  }

  if (!user_error) {
    level1Code();
    player.execute();
    $("#run").prop('disabled', true);
  }
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
