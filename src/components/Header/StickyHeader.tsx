import React, { useState, useEffect, useRef, RefObject } from 'react';
import styles from './StickyHeader.module.scss';

interface StickyHeaderProps {
  headerRef: RefObject<HTMLDivElement>;
  meetingUrl: string;
}

const StickyHeader: React.FC<StickyHeaderProps> = ({ headerRef, meetingUrl }) => {
  const [showStickyDiv, setShowStickyDiv] = useState(false);
  const [animateStickyDiv, setAnimateStickyDiv] = useState(false);

  const handleScroll = () => {
    if (headerRef.current) {
      const headerBottom = headerRef.current.getBoundingClientRect().bottom;
      if (headerBottom < 0 && !showStickyDiv) {
        setShowStickyDiv(true);
        setAnimateStickyDiv(true);
      } else if (headerBottom >= 0 && showStickyDiv) {
        setAnimateStickyDiv(false);
        setTimeout(() => setShowStickyDiv(false), 300);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showStickyDiv]);

  const handleButtonClick = () => {
    window.open(meetingUrl, '_blank', 'noopener noreferrer');
  };

  return (
    showStickyDiv && (
      <div className={`${styles.stickyHeader} ${animateStickyDiv ? styles.slideIn : styles.slideOut}`}>
        <button className={styles.styledButton} onClick={handleButtonClick}>
          ONLINE Meeting<span className="ml-4 text-sm font-normal">30 ～ 40分</span>
        </button>
      </div>
    )
  );
};

export default StickyHeader;
