import React, { useRef } from 'react'
import Header from './components/Header/Header'
import StickyHeader from './components/Header/StickyHeader'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import styles from './App.module.scss'

interface AppProps {
  // props の型定義を追加する場合、ここに記述する
}

const App: React.FC<AppProps> = () => {
  const headerRef = useRef<HTMLDivElement>(null)
  const base = process.env.GITHUB_PAGES ? '/portfolio-app' : './'

  // マイルストーンの配列を定義
  const milestones = [
    'HTML・CSS・JavaScript・Laravel・MySQL 学習を開始：2023年12月3日',
    'first commit：2024年1月19日',
    '30 commit：2024年2月17日',
    '60 commit：2024年3月5日',
    'チーム開発の現場へメンバーの一員として参加：2024年3月8日',
    'チーム開発 search の責任者として MVC を制作：2024年4月5日（Heroku：Heroku CLI）',
    'オンラインプログラミングスクール向けwebアプリを制作：2024年5月17日（X-Server：SSH）',
    '自走力があり、自社開発企業で十分に活躍できるランク：2024年6月20日（TechTrain の Rank Up 判定＝Junior Engineer）',
    'ubuntu の環境構築と Linux コマンドを使用した個人用パスワードマネージャーを制作：2024年6月27日（公開鍵と秘密鍵）',
    'Portfolio サイトを公開：2024年7月3日（Render：Vite + React）',
  ]

  return (
    <div className={styles.app}>
      <div ref={headerRef}>
        <Header name="丸岡裕也" title="Junior Engineer" />
      </div>
      <StickyHeader
        headerRef={headerRef}
        meetingUrl="https://calendar.app.google/jypE761CoXB6LJi87"
      />

      <main className="flex-1">
        <AboutMe
          imagePath={`${base}/profile-image.jpg`}
          zennLink="https://zenn.dev/souomou"
          gitLink="https://github.com/totemosouomou"
          aboutTitle="About Me"
          aboutText1="親子エンジニアになることは一つ目標としていることです。"
          aboutText2="「息子との関係を良好に保つこと」と両立して、「困っていることを一つ一つ解決できること」や、「短期間でスピーディーに新しいサービスを生み出せること」に憧れています。フルスタックエンジニアになりたい！"
        />

        <Skills
          milestones={milestones.map(
            (milestone, index) => milestone // マイルストーンの配列を渡す
          )}
        />

        <Projects
          id="teams"
          title="Team Project"
          appName="Gift Catalog"
          image1={`${base}/baby-detail.png`}
          image2={`${base}/baby-search.png`}
          linkUrl="https://team199-bcdc2192c3c3.herokuapp.com/"
          userId="maruoka@example.com"
          password="password"
          description="チーム4人体制で、自社内商品を管理するシステムとして開発。ユーザー（社員ID）管理と在庫管理の機能追加。また、自動的にギフト化する仕組みがあるシステムへ移行することで、お客様への同時提案件数が増えることを期待した。"
          comment="講師コメント：家事や仕事で忙しい方が多い中、一か月間の短い期間ですごく頑張られていたかと思います。Slack でのやり取りも良くできており、チーム内での情報共有と連携もできていました。今後は自分が書いたコードと他の方のコードを見て、どのように連携しているかや、皆さんの機能についても検証・解析を行ってみましょう！また、今回の開発で身についたスキルは今後の自主制作等の開発に活かしてもらえたらと思います。"
        />

        <Projects
          id="projects"
          title="My Project"
          appName="Share Article"
          image1={`${base}/school-detail.png`}
          image2={`${base}/school-top.png`}
          linkUrl="https://souomou.cloudfree.jp/techis/login"
          userId="maruoka@example.com"
          password="password"
          description="ユーザー（生徒さん）が、カリキュラムを学ぶ中で役に立った記事をシェアする・コメントの仕組みを開発。学びのアウトプット機会を増やし、オンラインで離れた中でも、同期と切磋琢磨する気持ちが育まれることを期待した。"
          comment="講師コメント：明確な問題意識を持って、持てる技術を注力し解決に取り組まれています！機能が本当に素晴らしいですね！同じ入校月の生徒さん同士が切磋琢磨できる環境が一段と整うのではないでしょうか！^^そして機能だけではなくデザインも優れています！ブランドカラーが設定されており、まるで既存のアプリケーションのような仕上がりです！NGワードも設定されており、ユーザーの安心安全にも配慮がなされています！「何となくサイトを開くと、一つ記事が目に入って、読んでしまう」→これだけでも学習に繋がりますね！^^"
        />
      </main>
    </div>
  )
}

export default App
