import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12">
      <div className="container mx-auto px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {/* <li>
                <a href="#home" className="hover:text-white">
                  Home
                </a>
              </li> */}
              <li>
                <a href="#about" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Information</h3>
            <ul className="space-y-2">
              <li>
                <span className="hover:text-white">
                  Email: mail.gabrieltutor@gmail.com
                </span>
              </li>
              {/* <li>
                <span className="hover:text-white">Phone: +123 456 7890</span>
              </li> */}
              <li>
                <span className="hover:text-white">Address: Philippines</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Me</h3>
            <div className="flex space-x-6">
              <a
                href="https://github.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .5C5.73.5.5 5.73.5 12a11.46 11.46 0 007.86 10.92c.58.11.77-.25.77-.55v-2.02c-3.2.69-3.87-1.54-3.87-1.54a3.05 3.05 0 00-1.27-1.67c-1.04-.71.08-.7.08-.7a2.4 2.4 0 011.75 1.18 2.42 2.42 0 003.3.95 2.44 2.44 0 01.72-1.52c-2.56-.29-5.26-1.28-5.26-5.7a4.46 4.46 0 011.18-3.08 4.17 4.17 0 01.11-3.04s.97-.31 3.17 1.18a10.7 10.7 0 015.76 0c2.2-1.49 3.17-1.18 3.17-1.18.49 1.51.19 2.72.1 3.01a4.46 4.46 0 011.18 3.08c0 4.43-2.7 5.4-5.27 5.68.27.23.53.68.53 1.38v2.04c0 .3.19.66.77.55A11.46 11.46 0 0023.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.5 3H4.5C3.675 3 3 3.675 3 4.5V19.5C3 20.325 3.675 21 4.5 21H19.5C20.325 21 21 20.325 21 19.5V4.5C21 3.675 20.325 3 19.5 3zM8.839 18H6.113V10.716H8.839V18zM7.475 9.478C6.531 9.478 5.769 8.716 5.769 7.772C5.769 6.828 6.531 6.066 7.475 6.066C8.419 6.066 9.181 6.828 9.181 7.772C9.181 8.716 8.419 9.478 7.475 9.478zM18.086 18H15.359V14.073C15.359 13.01 15.342 11.607 14.009 11.607C12.657 11.607 12.44 12.783 12.44 13.992V18H9.713V10.716H12.326V11.82H12.369C12.734 11.132 13.618 10.434 14.782 10.434C17.125 10.434 18.086 11.766 18.086 13.93V18Z" />
                </svg>
              </a>
              {/* <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.954 4.57c-.885.392-1.83.654-2.825.775 1.013-.608 1.794-1.57 2.163-2.724-.951.564-2.005.974-3.127 1.195-.897-.958-2.173-1.555-3.594-1.555-2.72 0-4.928 2.207-4.928 4.93 0 .39.045.77.127 1.134-4.092-.205-7.725-2.165-10.148-5.144-.424.728-.666 1.57-.666 2.475 0 1.71.87 3.216 2.188 4.099-.807-.026-1.566-.247-2.228-.616v.062c0 2.385 1.698 4.374 3.95 4.826-.414.112-.85.171-1.296.171-.317 0-.625-.03-.927-.086.631 1.956 2.445 3.379 4.6 3.42-1.685 1.32-3.809 2.105-6.102 2.105-.396 0-.788-.023-1.176-.067 2.179 1.396 4.768 2.212 7.548 2.212 9.055 0 14.01-7.507 14.01-14.01 0-.213-.005-.426-.014-.637.96-.694 1.797-1.562 2.457-2.548l-.047-.02z" />
                </svg>
              </a> */}
            </div>
          </div>
        </div>
        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          &copy; {new Date().getFullYear()} gabdotcode. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
