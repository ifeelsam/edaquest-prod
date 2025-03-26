"use client"
import {Unity, useUnityContext} from "react-unity-webgl"
import React from 'react'

export default function TempGame() {
    const { unityProvider } = useUnityContext({
        loaderUrl: "../../../game/Build/QuantumEntanglement.loader.js",
        frameworkUrl: "../../../game/Build/QuantumEntanglement.framework.js",
        codeUrl: "../../../game/Build/QuantumEntanglement.wasm",
        dataUrl: "../../../game/Build/QuantumEntanglement.data"
    });
    console.log(unityProvider, "redfd fdfd ")

  return <Unity unityProvider={unityProvider}
  //  style={{ width: "800px", height: "600px" }}
  />
}

