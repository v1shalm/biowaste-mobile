"use client";

import type { ReactNode } from "react";
import { Icon } from "./icons";

/**
 * iOS passcode-style 3×4 numeric keypad.
 * Bottom-left corner can hold a custom slot (biometric, decimal, etc.).
 */
export function NumericKeypad({
  onDigit,
  onBackspace,
  bottomLeft,
}: {
  onDigit: (digit: string) => void;
  onBackspace: () => void;
  bottomLeft?: ReactNode;
}) {
  const digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  return (
    <div className="grid grid-cols-3 gap-3">
      {digits.map((d) => (
        <KeypadKey key={d} onClick={() => onDigit(d)}>
          {d}
        </KeypadKey>
      ))}

      {bottomLeft ?? <div />}

      <KeypadKey onClick={() => onDigit("0")}>0</KeypadKey>

      <KeypadKey onClick={onBackspace} aria-label="Backspace">
        <Icon.Backspace width={24} height={24} />
      </KeypadKey>
    </div>
  );
}

export function KeypadKey({
  onClick,
  children,
  ...rest
}: {
  onClick: () => void;
  children: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      onClick={onClick}
      className="keypad-key"
      {...rest}
    >
      {children}
    </button>
  );
}
