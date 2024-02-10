"use client";
import { TextField, TextArea } from "@radix-ui/themes";
import React from "react";
import { Button } from "@radix-ui/themes";

import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root>
        <TextField.Input placeholder="Title"></TextField.Input>
      </TextField.Root>

      <SimpleMDE placeholder="Description" />

      <Button>Submit new Issue</Button>
    </div>
  );
};

export default NewIssuePage;
