"use client";

import { useEffect, useRef, useState } from "react";
import CommandInput from "@/components/CommandInput";
import History from "@/components/History";
import {
  accessDeniedMessages,
  commands,
  entityQuotes,
  exitEntityMSG,
  startCommand,
  userNoChoice,
  userYesChoice,
} from "@/constants/commands";
import { AnimatePresence, motion } from "framer-motion";

export default function Terminal() {
  const parentRef = useRef(null);
  const [history, setHistory] = useState(startCommand);
  const [showInput, setShowInput] = useState(false);
  const [awaitingConfirmation, setAwaitingConfirmation] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [entityMode, setEntityMode] = useState(false);
  const [exitAttempt, setExitAttempt] = useState(0);

  const handleCommand = (command) => {
    if (awaitingConfirmation) {
      const normalizedCmd = command.trim().toLowerCase();

      if (normalizedCmd === "y" || normalizedCmd === "yes") {
        setHistory((prev) => [
          ...prev,
          { text: command, type: "command" },
          ...userYesChoice,
        ]);
      } else if (normalizedCmd === "n" || normalizedCmd === "no") {
        setHistory((prev) => [
          ...prev,
          { text: command, type: "command" },
          ...userNoChoice,
        ]);
        setTimeout(() => setHistory([]), 4000);
        return;
      } else {
        setHistory((prev) => [
          ...prev,
          { text: command, type: "command" },
          {
            text: "INVALID RESPONSE. ANSWER WITH (Y/N)",
            type: "error",
            typewriter: true,
            speed: 20,
          },
        ]);
        return;
      }

      setAwaitingConfirmation(false);
      return;
    }

    setHistory((prev) => [...prev, { text: command, type: "command" }]);

    const [cmd, ...args] = command.split(" ");

    if (cmd === "entity" && !entityMode) {
      setEntityMode(true);
    }

    if (entityMode && cmd !== "exitentity") {
      const randomQuote =
        entityQuotes[Math.floor(Math.random() * entityQuotes.length)];
      setHistory((prev) => [
        ...prev,
        { text: randomQuote, type: "entity", typewriter: true, speed: 30 },
      ]);
      return;
    }

    if (!entityMode && cmd === "exitentity") {
      setHistory((prev) => [...prev, ...accessDeniedMessages]);
      return;
    }
    const output = commands[cmd]
      ? commands[cmd](args)
      : [
          {
            text: `Command not found: ${cmd}`,
            type: "error",
            typewriter: true,
            speed: 20,
          },
        ];

    switch (cmd) {
      case "exitentity":
        if (exitAttempt >= 2) {
          setHistory((prev) => [...prev, ...exitEntityMSG]);
          setTimeout(() => {
            setEntityMode(false);
            setExitAttempt(0);
          }, 5000);
        } else {
          setExitAttempt((prev) => prev + 1);
          setHistory((prev) => [...prev, ...output]);
        }

        break;

      case "restart":
        setHistory((prev) => [...prev, ...output]);
        setTimeout(() => {
          setAwaitingConfirmation(true);
          setHistory([]);
          setTimeout(() => {
            setHistory(startCommand);
          }, 500);
        }, 1800);
        break;

      case "clear":
        setHistory([]);
        break;

      default:
        setHistory((prev) => [...prev, ...output]);
        break;
    }
  };

  useEffect(() => {
    setShowInput(false);
    const lastCommand = history[history.length - 1];
    const delay = lastCommand?.delay
      ? lastCommand.delay + lastCommand.text.length * lastCommand.speed + 1000
      : 0;

    const timer = setTimeout(() => {
      setShowInput(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [history]);

  useEffect(() => {
    parentRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="terminal"
          initial={{ opacity: 0, filter: "blur(140px)" }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
            height: isMaximized ? "90vh" : isMinimized ? "40px" : "26rem",
            width: isMaximized ? "100%" : isMinimized ? "16rem" : "100%",
          }}
          exit={{ opacity: 0, filter: "blur(140px)" }}
          transition={{ duration: 0.5 }}
          className={`max-w-3xl ${
            isMaximized ? "max-w-7xl" : ""
          } rounded-lg overflow-hidden flex flex-col transition-all duration-300
            ${
              entityMode
                ? "bg-black border-red-700"
                : "bg-black border-gray-900"
            } border-2`}
        >
          <div
            className={`p-2 flex items-center justify-between ${
              entityMode ? "bg-red-900" : "bg-gray-900"
            }`}
          >
            <h1
              className={`ml-2 text-sm font-bold cursor-pointer select-none ${
                entityMode ? "text-red-200" : "text-gray-300"
              }`}
              onClick={() => isMinimized && setIsMinimized(false)}
            >
              {entityMode ? "THE ENTITY" : "zero_day_terminal.exe"}
            </h1>
            <div className="flex space-x-2">
              <button
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  entityMode
                    ? "bg-yellow-700 hover:bg-yellow-600"
                    : "bg-yellow-500 hover:bg-yellow-400"
                }`}
                onClick={() => setIsMinimized((prev) => !prev)}
                aria-label="Minimize terminal"
              />
              <button
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  entityMode
                    ? "bg-green-700 hover:bg-green-600"
                    : "bg-green-500 hover:bg-green-400"
                }`}
                onClick={() => setIsMaximized((prev) => !prev)}
                aria-label="Maximize terminal"
              />
              <button
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  entityMode
                    ? "bg-red-700 hover:bg-red-600"
                    : "bg-red-500 hover:bg-red-400"
                }`}
                onClick={() => setIsVisible(false)}
                aria-label="Close terminal"
              />
            </div>
          </div>
          {!isMinimized && (
            <div
              className={`flex-1 p-4 overflow-y-auto ${
                entityMode
                  ? "text-red-400 font-mono"
                  : "text-green-400 font-mono"
              }`}
            >
              <History history={history} entityMode={entityMode} />
              <div ref={parentRef} />
              {showInput && (
                <CommandInput
                  onCommand={handleCommand}
                  entityMode={entityMode}
                />
              )}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
