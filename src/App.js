import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import './App.css'
function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "buildunity/BUILD.loader.js",
    dataUrl: "buildunity/BUILD.data",
    frameworkUrl: "buildunity/BUILD.framework.js",
    codeUrl: "buildunity/BUILD.wasm",
  });
  return (
      <div className="App">
        <Unity unityProvider={unityProvider} style={{ width: 600, height: 600 }} />
      </div>
  );
}

export default App