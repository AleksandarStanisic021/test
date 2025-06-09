"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ButtonComponent() {
  const [text, setText] = useState("Select to skip");
  const [bgColor, setBgColor] = useState("blue");

  return (
    <div>
      <Button
        style={{ backgroundColor: bgColor, color: "white" }}
        onClick={() => {
          setText("Skip selected");
          setBgColor("red");
        }}>
        {text}
      </Button>
    </div>
  );
}
