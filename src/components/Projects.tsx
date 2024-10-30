import React from 'react';

const Projects = () => {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-12">
      <h2 className="text-2xl font-bold">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <div className="bg-white shadow-md p-4 rounded">
          <h3 className="text-lg font-bold">Project 1: Personal Website</h3>
          <p className="text-gray-600">A personal website built with Next.js and Tailwind CSS to showcase my skills and experience.</p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Built with Next.js and Tailwind CSS</li>
            <li>Responsive design for desktop and mobile devices</li>
            <li>Features a hero section, navbar, and projects section</li>
          </ul>
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-4">
            View Project
          </button>
        </div>
        <div className="bg-white shadow-md p-4 rounded">
          <h3 className="text-lg font-bold">Project 2: Todo List App</h3>
          <p className="text-gray-600">A todo list app built with React and Firebase to help users manage their tasks and deadlines.</p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Built with React and Firebase</li>
            <li>Features user authentication and authorization</li>
            <li>Allows users to create, edit, and delete tasks</li>
          </ul>
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-4">
            View Project
          </button>
        </div>
        <div className="bg-white shadow-md p-4 rounded">
          <h3 className="text-lg font-bold">Project 3: Blog</h3>
          <p className="text-gray-600">A blog built with Next.js and Markdown to share my thoughts and experiences on software development.</p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Built with Next.js and Markdown</li>
            <li>Features a responsive design for desktop and mobile devices</li>
            <li>Allows users to read and comment on blog posts</li>
          </ul>
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-4">
            View Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;