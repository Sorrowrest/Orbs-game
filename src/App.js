import React, {useRef} from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import './App.css'
function App() {
    const f = useRef();
  const { unityProvider, loadingProgression, isLoaded  } = useUnityContext({
    loaderUrl: "buildunity/BUILD.loader.js",
    dataUrl: "buildunity/BUILD.data",
    frameworkUrl: "buildunity/BUILD.framework.js",
    codeUrl: "buildunity/BUILD.wasm",
  });
  return (
      <div className="App">
          <>
              {!isLoaded && (
                  <p className="loadingText">Loading Application... {Math.round(loadingProgression * 100)}%</p>
              )}
              <Unity ref={f} unityProvider={unityProvider} style={{ width: 600, height: 600 }} />
          </>
      </div>
  );
}

export default App