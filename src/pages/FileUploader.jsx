import { useState } from 'react';
import { FiPlus } from 'react-icons/fi';

export default function FileUploader() {
  const [files, setFiles] = useState([]);

  const handleUpload = (e) => {
    const uploaded = Array.from(e.target.files);
    setFiles(uploaded);
  };

  return (
    <div className="upload-container">
      {files.length === 0 ? (
        <div className="placeholder">
          <FiPlus className="plus-icon" />
          <p>شما هنوز هیچ مجموعه‌ای ذخیره نکرده‌اید</p>
          <label className="upload-btn" htmlFor="file-upload">
            افزودن فایل
          </label>
          <input
            type="file"
            id="file-upload"
            multiple
            onChange={handleUpload}
            className="file-input"
            style={{ display: 'none' }}
          />
        </div>
      ) : (
        <div>
          <h2>تعداد فایل‌ها: {files.length}</h2>
          <ul>
            {files.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}