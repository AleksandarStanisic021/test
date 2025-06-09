"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ButtonComponent() {
  const [text, setText] = useState("Select to skip");

  return (
    <div>
      <Button
        style={{ backgroundColor: "blue", color: "white" }}
        onClick={() => setText("Skip selected")}>
        {text}
      </Button>
    </div>
  );
}
