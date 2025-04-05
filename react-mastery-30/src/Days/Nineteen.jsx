import React, { useState } from "react";

const Nineteen = () => {
  const [folderData, setFolderData] = useState({
    name: "File Explorer",
    type: "folder",
    children: [
      {
        name: "node_modules",
        type: "folder",
        children: [],
      },
      {
        name: "public",
        type: "folder",
        children: [
          {
            name: "index.html",
            type: "file",
          },
          {
            name: "favicon.ico",
            type: "file",
          },
          {
            name: "manifest.json",
            type: "file",
          },
          {
            name: "robots.txt",
            type: "file",
          },
        ],
      },
      {
        name: "src",
        type: "folder",
        children: [
          {
            name: "Components",
            type: "folder",
            children: [
              {
                name: "Header.js",
                type: "file",
              },
              {
                name: "Footer.js",
                type: "file",
              },
              {
                name: "App.js",
                type: "file",
              },
            ],
          },
          {
            name: "App.css",
            type: "file",
          },
          {
            name: "App.test.js",
            type: "file",
          },
          {
            name: "index.css",
            type: "file",
          },
          {
            name: "index.js",
            type: "file",
          },
          {
            name: "logo.svg",
            type: "file",
          },
          {
            name: "reportWebVitals.js",
            type: "file",
          },
          {
            name: "setupTests.js",
            type: "file",
          },
        ],
      },
      {
        name: ".gitignore",
        type: "file",
      },
      {
        name: "package.json",
        type: "file",
      },
      {
        name: "package-lock.json",
        type: "file",
      },
      {
        name: "README.md",
        type: "file",
      },
    ],
  });

  const FileExplorer = ({ folderData }) => {
    const [showChilderen, setShowChildren] = useState(false);

    const handleShowChildren = () => {
      setShowChildren(!showChilderen);
    };
    return (
      <>
        <div className="container">
          <div onClick={handleShowChildren} style={{ cursor: "pointer" }}>
            {folderData?.type === "folder"
              ? showChilderen
                ? "📂"
                : "📁"
              : "🌞"}{" "}
            {folderData?.name}
          </div>

          {showChilderen &&
            folderData?.children?.map((childData, index) => (
              <FileExplorer folderData={childData} key={index}/>
            ))}
        </div>
      </>
    );
  };

  return (
    <div className="min-h-screen w-full flex  justify-center items-center">
      <FileExplorer folderData={folderData} />
    </div>
  );
};

export default Nineteen;
