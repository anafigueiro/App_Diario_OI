import { useContext } from "react";
import { analysisContext } from "../context/analysisContext";

export function useAnalysis() {
  const context = useContext(analysisContext);
  return context;
}
