const script = document.createElement("script");
script.type = "text/javascript";
script.src = "https://widget.buildwithlayer.com";
script.onload = () => {
  window.initializeLayerWidget({
    // Your Layer widget API key (can be found in the Layer dashboard - website widget section)
    apiKey: "54d053c6-d378-46f8-95bd-892d2e09a301",
    // Palette mode can be light ("light"), dark ("dark"), or browser-preferred mode ("browser"). Default is "browser" if this line is removed.
    paletteMode: "light",
    // Primary color as a hex value. Will default to the value set in the Layer dashboard if this line is removed.
    primaryColor: "#ffffff",
    // Design style can be either ChatGPT ("gpt") or GitHub Copilot ("copilot"). Default is "gpt" if this line is removed.
    designStyle: "copilot",
  });
};
document.head.appendChild(script);