
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <nav className="flex justify-between items-center px-6 py-4 md:px-12 lg:px-20">
        <div className="flex items-center gap-2">
          <svg className="w-8 h-8 text-indigo-600 dark:text-indigo-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 8h16v10H4V8zm0-2a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2H4zm7 11l5-3-5-3v6z" />
          </svg>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">WatchParty</span>
        </div>
        <button className="px-5 py-2 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm transition-all flex items-center gap-2">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h4m6 0v3a3 3 0 01-3 3H9a3 3 0 01-3-3V3m3 0h6" />
          </svg>
          Login
        </button>
      </nav>

      <main className="container mx-auto px-6 md:px-12 lg:px-20 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white">
              Watch videos <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">together</span>, no matter where you are
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Create a watching session and invite friends to enjoy YouTube videos, movies, and more - all in perfect sync. Chat, react, and share moments in real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button className="px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-all flex items-center justify-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-1-7v-6l5 3-5 3z" />
                </svg>
                Create a Watch Party
              </button>
              <button className="px-8 py-4 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-white font-medium transition-all">
                How it works
              </button>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 z-10 rounded-xl"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-20 h-20 text-white opacity-80" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <div className="absolute inset-0 bg-gray-900 rounded-xl overflow-hidden">
              <div className="absolute -inset-[10%] opacity-50">
                <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                  <g opacity="0.8">
                    <circle cx="25" cy="25" r="15" fill="#4f46e5" />
                    <circle cx="75" cy="75" r="15" fill="#7c3aed" />
                    <circle cx="75" cy="25" r="10" fill="#8b5cf6" />
                    <circle cx="25" cy="75" r="10" fill="#6366f1" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">How WatchParty Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm1-11v4h4v-2h-2v-2h-2zm-6 0v2h2v2h2v-4H7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Create a Session</h3>
              <p className="text-gray-600 dark:text-gray-300">Start a new watching room in seconds. No downloads or installs required.</p>
            </div>

            <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13 10h-2V8h2v2zm0-4h-2v2h2V6zm6 0v12c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2zm-4 14c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm-6-3h8V7H9v10z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Add Your Content</h3>
              <p className="text-gray-600 dark:text-gray-300">Upload videos or paste YouTube links to watch together with perfect synchronization.</p>
            </div>

            <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Invite Friends</h3>
              <p className="text-gray-600 dark:text-gray-300">Share a simple link and enjoy watching together with friends from anywhere.</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-20 py-8 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 sm:mb-0">
            <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 8h16v10H4V8zm0-2a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2H4zm7 11l5-3-5-3v6z" />
            </svg>
            <span className="text-gray-600 dark:text-gray-300 text-sm font-medium">© 2023 WatchParty. All rights reserved.</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400">Help</a>
            <a href="#" className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400">Privacy</a>
            <a href="#" className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
