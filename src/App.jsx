import React from 'react';
import Header from './components/Header/Header.jsx';
import styles from './App.module.scss';
import TeamProjectsSection from './components/TeamProjectsSection.jsx';
import MyProjectsSection from './components/MyProjectsSection.jsx';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <main className="flex-1">

        <section id="about" className="bg-gray-100 bg-opacity-75 py-12">
          <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="/profile-image.jpg"
                width={500}
                height={500}
                alt="Profile Image"
                className="mx-auto rounded-full w-64 h-64 object-cover"
              />
            </div>
            <div className="space-y-4 mx-2">
              <h2 className="text-3xl font-bold">About Me</h2>
              <p className="text-muted-foreground text-sm">
                親子エンジニアになることは一つ目標としていることです。
              </p>
              <p className="text-muted-foreground text-sm">
                「息子との関係を良好に保つこと」と両立して、「困っていることを一つ一つ解決できること」や、「短期間でスピーディーに新しいサービスを生み出せること」に憧れています。フルスタックエンジニアになろうとしています。
              </p>
            </div>
          </div>
        </section>

        <section className="bg-background bg-white py-12" id="skills">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-gray-100 bg-opacity-75 rounded-lg p-4 flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-8 h-8 mb-2"
                >
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
                <h3 className="text-lg font-bold">Linux</h3>
                <p className="text-muted-foreground text-sm">
                  Experienced in using Linux, particularly Windows Subsystem for Linux (Ubuntu).
                </p>
              </div>
              <div className="bg-gray-100 bg-opacity-75 rounded-lg p-4 flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-8 h-8 mb-2"
                >
                  <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
                  <line x1="12" x2="12" y1="22" y2="15.5"></line>
                  <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
                  <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
                  <line x1="12" x2="12" y1="2" y2="8.5"></line>
                </svg>
                <h3 className="text-lg font-bold">React</h3>
                <p className="text-muted-foreground text-sm">
                  Experienced in building web applications with React.
                </p>
              </div>
              <div className="bg-gray-100 bg-opacity-75 rounded-lg p-4 flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-8 h-8 mb-2"
                >
                  <rect x="16" y="16" width="6" height="6" rx="1"></rect>
                  <rect x="2" y="16" width="6" height="6" rx="1"></rect>
                  <rect x="9" y="2" width="6" height="6" rx="1"></rect>
                  <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path>
                  <path d="M12 12V8"></path>
                </svg>
                <h3 className="text-lg font-bold">Laravel</h3>
                <p className="text-muted-foreground text-sm">
                  Experienced in building server-side applications with Laravel.
                </p>
              </div>
              <div className="bg-gray-100 bg-opacity-75 rounded-lg p-4 flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-8 h-8 mb-2"
                >
                  <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                  <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                  <path d="M3 12A9 3 0 0 0 21 12"></path>
                </svg>
                <h3 className="text-lg font-bold">MySQL</h3>
                <p className="text-muted-foreground text-sm">
                  Experienced in designing and implementing relational databases.
                </p>
              </div>
            </div>
            <ul className="pt-10 pl-10 w-full pr-0">
              <li>HTML・CSS・JavaScript・Laravel・MySQL 学習を開始：2023年12月3日</li>
              <li>first commit：2024年1月19日</li>
              <li>30 commit：2024年2月17日</li>
              <li>60 commit：2024年3月5日</li>
              <li>チーム開発の現場へメンバーの一員として参加：2024年3月8日</li>
              <li>チーム開発 search の責任者として MVC を制作：2024年4月5日（Heroku：Hroku CLI）</li>
              <li>オンラインプログラミングスクール向けwebアプリを制作：2024年5月17日（X-Server：SSH）</li>
              <li>自走力があり、自社開発企業で十分に活躍できるランク：2024年6月20日（TechTrain の Rank Up 判定＝Junior Engineer）</li>
              <li>ubuntu の環境構築と Linux コマンドを使用した個人用パスワードマネージャーを制作：2024年6月27日（公開鍵と秘密鍵）</li>
              <li>Portfolio サイトを公開：2024年7月3日（Render：Vite + React）</li>
            </ul>
          </div>
        </section>

        <TeamProjectsSection />

        <MyProjectsSection />

      </main>
    </div>
  );
};

export default App;