import { useEffect } from "react";
import { useLocation } from "wouter";
import { useI18n } from "@/i18n/runtime";

/**
 * `/en` used to be a hand-maintained English clone of the deck, living in a
 * parallel `sections-en/` tree. Language is now a runtime switch on the one
 * deck, so this route exists only to keep old links working: it selects
 * English and forwards to `/`.
 */
export default function En() {
  const { setLocale } = useI18n();
  const [, navigate] = useLocation();

  useEffect(() => {
    setLocale("en");
    navigate("/", { replace: true });
  }, [setLocale, navigate]);

  return null;
}
