import React, { useState, useEffect, useRef } from 'react';

const TeamProjectsSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const textareaRef = useRef(null);

  const [value,] = useState(
    `講師コメント：家事や仕事で忙しい方が多い中、一か月間の短い期間ですごく頑張られていたかと思います。Slack でのやり取りも良くできており、チーム内での情報共有と連携もできていました。今後は自分が書いたコードと他の方のコードを見て、どのように連携しているかや、皆さんの機能についても検証・解析を行ってみましょう！また、今回の開発で身についたスキルは今後の自主制作等の開発に活かしてもらえたらと思います。`
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
    <section className="bg-background bg-white pt-16 pb-8 my-4" id="teams">
      <h2 className="text-3xl col-span-3 font-bold mb-0">Team Project</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="flex flex-col md:col-span-1 md:mr-3">
          <h3 className="text-2xl font-semibold mb-4">Gift Catalog</h3>
          <p className="text-muted-foreground text-base mx-2 md:ml-5">
            チーム4人体制で、自社内商品を管理するシステムとして開発。個々人の能力により販売力に差がありました。自動的にギフト化する仕組みがあるシステムへ移行することで、同時提案件数が増えることを期待した。
          </p>
        </div>
        <div
          className="relative flex-shrink-0 md:col-span-2"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setIsHovered(!isHovered)}
        >
          <img
            src="/baby-detail.png"
            alt="Project Image 1"
            className={`h-auto rounded-lg shadow-lg md:absolute md:top-4 md:left-1 transform transition-transform duration-300 ${
              isHovered ? 'z-0 scale-95' : 'z-10 md:scale-105 scale-100'
            }`}
          />
          <img
            src="/baby-search.png"
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

export default TeamProjectsSection;
