import { useState } from "react";
import Gnb from "../components/Gnb";
import "./Stadium.css";

const Stadium = () => {
  const [sheetOpen, setSheetOpen] = useState(false);

  const [seatType, setSeatType] = useState(null);
  const [zone, setZone] = useState(null);

  const seatTypeOptions = [
    "프리미엄석",
    "테이블석",
    "오렌지석",
    "블루석",
    "레드석",
    "네이비석",
    "외야그린석",
    "익사이팅석",
    "휠체어석",
  ];

  const zoneOptions = ["1루", "3루", "중앙"];

  const handleConfirm = () => {
    if (!seatType) return;
    setSheetOpen(false);
  };

  return (
    <section className="stadium-main">
      <div className="stadium-bg">
        <div className="inner">
          <div className="top-bar">
            <a href="#" className="topbar-location">
              잠실 경기 야구장
              <img
                src="/img/stadium-chevron-bottom.svg"
                alt="∨"
                className="chevron-icon"
              />
            </a>
            <a href="#" className="topbar-icon">
              <img src="/img/stadium-ticket-icon.svg" alt="티켓인증" />
            </a>
          </div>

          <div className={`bottom-box ${sheetOpen ? "open" : "closed"}`}>
            <div
              className="handle"
              role="button"
              tabInde={0}
              onClick={() => setSheetOpen((v) => !v)}
              onKeyDown={(e) => e.key === "Enter" && setSheetOpen((v) => !v)}
            />

            <h2 className="title">구역찾기</h2>
            <p className="desc">원하는 필터를 선택하세요.</p>

            {sheetOpen && (
              <>
                <h3 className="sheet-title">좌석별</h3>
                <div className="sheet-grid">
                  {seatTypeOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      className={`chip ${seatType === opt ? "active" : ""}`}
                      onClick={() => setSeatType(opt)}
                    >
                      {opt}
                    </button>
                  ))}
                </div>

                <h3 className="sheet-title">구역</h3>
                <div className="sheet-grid small">
                  {zoneOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      className={`chip ${zone === opt ? "active" : ""}`}
                      onClick={() => setZone(opt)}
                    >
                      {opt}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  className="confirm"
                  onClick={handleConfirm}
                  disabled={!seatType}
                >
                  확인
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stadium;
