import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";
import { Label } from "./ui/label";
import conf from "../conf/conf";
import Loader from "./ui/Loader";

const RTE = ({ name, control, label, defaultValue = "" }) => {
  const [isRTEloaded, setIsRTEloaded] = useState(false);

  return (
    <div className="space-y-2">
      {label && <Label>{label}</Label>}

      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange } }) => (
          <Editor
            apiKey={conf.tinyMCEApiKey}
            initialValue={defaultValue}
            onInit={() => setIsRTEloaded(true)}
            init={{
              height: 500,
              menubar: true,
              plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
              ],
              toolbar:
                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onEditorChange={onChange}
          />
        )}
      />

      {!isRTEloaded && (
        <div className="flex justify-center">
			<p><Loader /></p>
        </div>
      )}
    </div>
  );
};

export default RTE;
