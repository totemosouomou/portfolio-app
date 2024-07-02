import React, { useState, useEffect, useRef } from 'react';

const MyProjectsSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const textareaRef = useRef(null);

  const [value,] = useState(
    `講師コメント：明確な問題意識を持って、持てる技術を注力し解決に取り組まれています！機能が本当に素晴らしいですね！同じ入校月の生徒さん同士が切磋琢磨できる環境が一段と整うのではないでしょうか！^^そして機能だけではなくデザインも優れています！ブランドカラーが設定されており、まるで既存のアプリケーションのような仕上がりです！NGワードも設定されており、ユーザーの安心安全にも配慮がなされています！「何となくサイトを開くと、一つ記事が目に入って、読んでしまう」→これだけでも学習に繋がりますね！^^`
  );

  useEffect(() => {
    const textarea = textareaRef.current;
    const resizeTextarea = () => {
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
    };

    resizeTextarea(); // 初期サイズを設定
    textarea.addEventListener('input', resizeTextarea);
    window.addEventListener('resize', resizeTextarea);

    return () => {
      textarea.removeEventListener('input', resizeTextarea);
      window.removeEventListener('resize', resizeTextarea);
    };
  }, []);

  return (
    <section className="bg-background bg-white pt-16 pb-8 my-4" id="projects">
      <h2 className="text-3xl col-span-3 font-bold mb-0">My Project</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="flex flex-col md:col-span-1 md:mr-3">
          <h3 className="text-2xl font-semibold mb-4">Share Article</h3>
          <p className="text-muted-foreground text-base mx-2 md:ml-5">
            同期入校した生徒同士が、カリキュラムを学ぶ中で役に立った記事をシェアする・コメントの仕組みを開発。学びのアウトプット機会が増え、オンラインで離れた中でも互いに切磋琢磨する気持ちが育まれることを期待した。
          </p>
        </div>
        <div
          className="relative flex-shrink-0 md:col-span-2"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setIsHovered(!isHovered)}
        >
          <img
            src="/school-detail.png"
            alt="Project Image 1"
            className={`h-auto rounded-lg shadow-lg md:absolute md:top-5 md:left-1 transform transition-transform duration-300 ${
              isHovered ? 'z-0 scale-95' : 'z-10 md:scale-105 scale-100'
            }`}
          />
          <img
            src="/school-top.png"
            alt="Project Image 2"
            className={`h-auto rounded-lg shadow-lg md:relative md:top-9 md:left-1 transform transition-transform duration-300 ${
              isHovered ? 'z-10 md:scale-105 scale-100' : 'z-0 scale-95'
            } relative`}
          />
        </div>
      </div>
      <textarea
        ref={textareaRef}
        className="mt-8 md:mt-20 text-sm w-full px-10"
        value={value}
        readOnly
      />
    </section>
  );
};

export default MyProjectsSection;
