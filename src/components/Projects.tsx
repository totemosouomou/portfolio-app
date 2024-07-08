import React, { useState, useEffect, useRef } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import styles from '../App.module.scss'

interface ProjectsProps {
  id: string
  title: string
  appName: string
  image1: string
  image2: string
  linkUrl: string
  userId: string
  password: string
  description: string
  comment: string
}

const Projects: React.FC<ProjectsProps> = ({
  id,
  title,
  appName,
  image1,
  image2,
  linkUrl,
  userId,
  password,
  description,
  comment,
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const [copySuccess, setCopySuccess] = useState('')
  const [copyTarget, setCopyTarget] = useState('')

  const handleCopy = (text: string) => {
    setCopySuccess('Copied!')
    setCopyTarget(text)
    setTimeout(() => {
      setCopySuccess('')
      setCopyTarget('')
    }, 2000)
  }

  useEffect(() => {
    const textarea = textareaRef.current
    if (textarea) {
      const resizeTextarea = () => {
        textarea.style.height = 'auto'
        textarea.style.height = textarea.scrollHeight + 'px'
      }

      resizeTextarea()
      textarea.addEventListener('input', resizeTextarea)
      window.addEventListener('resize', resizeTextarea)

      return () => {
        textarea.removeEventListener('input', resizeTextarea)
        window.removeEventListener('resize', resizeTextarea)
      }
    }
  }, [])

  return (
    <section className="bg-white pt-16 pb-8 my-4" id={id}>
      <h2 className="text-3xl col-span-3 font-bold mb-0">{title}</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="flex flex-col md:col-span-1 md:mr-3">
          <h3 className="text-2xl font-semibold mb-4">{appName}</h3>
          <p className="text-muted-foreground text-base mx-2 md:ml-5">
            {description}
          </p>
          <div className="mt-4 p-4 md:ml-4 bg-white rounded-lg shadow-lg flex justify-between items-center">
            <div className="m-4">
              <a
                href={linkUrl}
                className="flex items-center text-green-500 hover:underline"
              >
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
                Link
              </a>
            </div>
            <div className="flex flex-col items-end">
              <div className="flex items-center mb-2">
                <label className="mr-2" htmlFor="userId">
                  ID:
                </label>
                <input
                  type="text"
                  id="userId"
                  value={userId}
                  readOnly
                  className="border rounded p-1 w-36 text-xs"
                  title="User ID"
                  placeholder="User ID"
                />
                <CopyToClipboard
                  text={userId}
                  onCopy={() => handleCopy('User ID')}
                >
                  <button className="ml-2 px-2 py-1 bg-green-500 text-white rounded text-sm">
                    Copy
                  </button>
                </CopyToClipboard>
              </div>
              <div className="flex items-center">
                <label className="mr-2" htmlFor="password">
                  Pass:
                </label>
                <input
                  type="text"
                  id="password"
                  value={password}
                  readOnly
                  className="border rounded p-1 w-36 text-xs"
                  title="Password"
                  placeholder="Password"
                />
                <CopyToClipboard
                  text={password}
                  onCopy={() => handleCopy('Password')}
                >
                  <button className="ml-2 px-2 py-1 bg-green-500 text-white rounded text-sm">
                    Copy
                  </button>
                </CopyToClipboard>
              </div>
              {copySuccess && copyTarget && (
                <div className="mt-2 text-green-500 text-sm">
                  {copyTarget} {copySuccess}
                </div>
              )}
            </div>
          </div>
        </div>
        <div
          className="relative flex-shrink-0 md:col-span-2"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(!isHovered)}
        >
          <img
            src={image1}
            alt="Project Image 1"
            className={`h-auto rounded-lg shadow-lg md:absolute md:top-4 md:left-1 transform transition-transform duration-300 ${
              isHovered ? 'z-0 scale-95' : 'z-10 md:scale-100 scale-95'
            }`}
          />
          <img
            src={image2}
            alt="Project Image 2"
            className={`h-auto rounded-lg shadow-lg md:relative md:top-9 md:left-1 transform transition-transform duration-300 ${
              isHovered ? 'z-10 md:scale-100 scale-95' : 'z-0 scale-95'
            } relative`}
          />
        </div>
      </div>
      <textarea
        ref={textareaRef}
        className={`mt-8 md:mt-20 text-sm md:px-10 ${styles.textareaStyle}`}
        aria-label="Comment"
        value={comment}
        readOnly
      />
    </section>
  )
}

export default Projects
