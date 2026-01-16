import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import MainPgHeader from "../../components/MainPgHeader";


const LockerroomEditProfile = () => {
  return (
    <div className="editProfile">
        {/* ✅ 커버 섹션 */}
        <section className="editCover">
            <div className="inner">
                <div className="editCover-top">
                    <Link to="/lockerroom" className="back">
                        <img src="/img/lockerroom-back.svg" alt="뒤로가기" />
                    </Link>

                    <div className="editCover-btn">
                        <img src="/img/lockerroom-edit.svg" alt="수정 아이콘" />
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default LockerroomEditProfile