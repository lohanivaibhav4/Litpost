import { useState } from "react";

function CoverImageInput() {
  const [fileName, setFileName] = useState("");
  const [previewURL, setPreviewURL] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      setPreviewURL(URL.createObjectURL(file)); // Generate temporary preview URL
    } else {
      setFileName("");
      setPreviewURL(null);
    }
  };

  return (
    <div className="space-y-4">
      {/* File Picker */}
      <div className="flex items-center justify-between border border-[#9d0619] rounded-md overflow-hidden">
        <label
          htmlFor="coverImage"
          className="cursor-pointer bg-[#9d0619] text-white px-4 py-2 hover:bg-[#7b0413] transition"
        >
          Choose Cover Image
        </label>
        <span className="px-3 text-sm text-gray-600 truncate">
          {fileName || "No file chosen"}
        </span>
        <input
          type="file"
          id="coverImage"
          name="coverImage"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>

      {/* Image Preview */}
      {previewURL && (
        <div className="w-full border border-gray-300 rounded-md overflow-hidden">
          <img
            src={previewURL}
            alt="Cover Preview"
            className="w-full h-48 object-cover"
          />
        </div>
      )}
    </div>
  );
}

export default CoverImageInput;
