import React, { useRef } from "react";

/** компонения для выбора файла */

const SelectedFile = ({ handleFileInput }) => {
  const fileInput = useRef(null);

  return (
    <div className="file-uploader p-1">
      <label>
        Click to select some files
        <input
          multiple
          type="file"
          ref={fileInput}
          style={{ display: "none" }}
          onChange={(e) => {
            handleFileInput([...e.target.files]);
          }}
        />
      </label>
    </div>
  );
};

export { SelectedFile };
