"use client"
import { Unity, useUnityContext } from "react-unity-webgl";
import { motion } from "framer-motion";

export const Quant = () => {
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: "/Build/QuantumEntanglement.loader.js",
    frameworkUrl: "/Build/QuantumEntanglement.framework.js",
    codeUrl: "/Build/QuantumEntanglement.wasm",
    dataUrl: "/Build/QuantumEntanglement.data",
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[rgba(103,111,232,0.1)] backdrop-blur-sm rounded-xl p-4 md:p-8"
    >
      <div className="relative">
        {!isLoaded && (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center bg-[rgba(10,10,30,0.8)] rounded-lg z-10"
            style={{ height: 700 }}
          >
            <div className="text-xl font-pixel mb-4">Loading Game...</div>
            <div className="w-64 h-4 bg-[rgba(0,0,0,0.5)] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#676FE8]"
                style={{ width: `${loadingProgression * 100}%` }}
              ></div>
            </div>
            <div className="mt-2 font-pixel text-sm">
              {Math.round(loadingProgression * 100)}%
            </div>
          </div>
        )}

        <div
          className="game-container flex items-center"
          style={{ height: 700 }}
        >
          <Unity
            unityProvider={unityProvider}
            style={{
              width: 1500,
              height: 700,
              borderRadius: "0.5rem",
            }}
          />
        </div>
      </div>

    </motion.div>
  );
};
