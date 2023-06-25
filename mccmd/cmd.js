function generateCommand() {
    var target = document.getElementById("target").value;
    var text = document.getElementById("text").value;
    var color = document.getElementById("color").value;
    var bold = document.getElementById("bold").checked;
    var italic = document.getElementById("italic").checked;
    var underlined = document.getElementById("underlined").checked;
    var strikethrough = document.getElementById("strikethrough").checked;
    var obfuscated = document.getElementById("obfuscated").checked;
    var textDelay = document.getElementById("textDelay").value;

    var message = {
        "text": text,
        "color": color,
        "bold": bold,
        "italic": italic,
        "underlined": underlined,
        "strikethrough": strikethrough,
        "obfuscated": obfuscated,
        "text_delay": textDelay
    };

    var command = "/tellraw " + target + " " + JSON.stringify(message);
    document.getElementById("commandOutput").innerText = command;
}

function copyCommand() {
    var commandOutput = document.getElementById("commandOutput");
    commandOutput.select();
    commandOutput.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("指令已複製到剪貼簿！");
}