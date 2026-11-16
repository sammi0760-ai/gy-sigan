"use client";

import React, { useState } from "react";
import { 
  PhoneCall, Phone, CalendarCheck, Menu, X,
  Gem, Users, Cpu, Trees, Train, HeartHandshake,
  Check, MapPin, Copy, CheckCircle, ShieldCheck, ClipboardPen
} from "lucide-react";

export default function CommercialLandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeBlock, setActiveBlock] = useState<"3BL" | "4BL">("3BL");
  const [privacyModal, setPrivacyModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [customer, setCustomer] = useState({ name: "", phone: "" });

  const handleQuickSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("userName") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("userPhone") as HTMLInputElement).value;
    setCustomer({ name, phone });
    setSuccessModal(true);
    form.reset();
  };

  const handleMainSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("mainName") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("mainPhone") as HTMLInputElement).value;
    setCustomer({ name, phone });
    setSuccessModal(true);
    form.reset();
  };

  const copyAddress = (addr: string) => {
    navigator.clipboard.writeText(addr);
    alert(`주소가 복사되었습니다: ${addr}`);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-[#0f3d2e] selection:text-white">
      
      {/* Top Bar */}
      <div className="bg-[#08281d] text-slate-300 text-xs py-2.5 px-4 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <span className="text-[#c9a875] font-bold flex items-center">
              반도건설(유보라) 책임시공 · 계양신도시 첫 라이프 스테이 몰
            </span>
            <span className="text-white/20">|</span>
            <span>견본주택: 경기도 부천시 원미구 도당동 222-46</span>
          </div>
          <div className="flex items-center space-x-6">
            <span className="text-slate-400">분양홍보관 직통</span>
            <a href="tel:1599-3554" className="text-[#c9a875] font-bold text-sm hover:text-white transition flex items-center">
              <PhoneCall className="w-3.5 h-3.5 mr-1" />
              1599-3554
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="flex items-center space-x-3">
              <div className="w-10 h-10 border-2 border-[#0f3d2e] rounded flex flex-col justify-center items-center text-[#0f3d2e] font-bold text-[10px] leading-tight">
                <span>시 時</span>
                <span>간 間</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-[#0f3d2e] font-bold">인천계양 AC3·AC4BL</span>
                <span className="text-xl font-black text-slate-900">상업시설 <span className="text-[#0f3d2e]">「시간」</span></span>
              </div>
            </a>

            <nav className="hidden lg:flex items-center space-x-8 text-sm font-semibold text-slate-700">
              <a href="#overview" className="hover:text-[#0f3d2e]">사업개요</a>
              <a href="#investment" className="hover:text-[#0f3d2e]">5대 투자핵심</a>
              <a href="#benefits" className="hover:text-[#0f3d2e] text-rose-600 font-bold">특별 분양혜택</a>
              <a href="#blocks" className="hover:text-[#0f3d2e]">3·4블록 MD안내</a>
              <a href="#masterlease" className="hover:text-[#0f3d2e]">마스터리스/직영몰</a>
              <a href="#location" className="hover:text-[#0f3d2e]">견본주택 오시는길</a>
            </nav>

            <div className="hidden sm:flex items-center space-x-4">
              <a href="tel:1599-3554" className="text-sm font-bold text-slate-900 flex items-center">
                <Phone className="w-4 h-4 mr-1 text-[#0f3d2e]" />
                1599-3554
              </a>
              <a href="#inquiry" className="bg-[#0f3d2e] text-white font-bold text-sm px-5 py-2.5 rounded-lg hover:bg-[#18533f] transition flex items-center">
                <ClipboardPen className="w-4 h-4 mr-1.5 text-[#c9a875]" />
                상가 분양상담
              </a>
            </div>

            <div className="flex items-center sm:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-slate-700">
                {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className="sm:hidden bg-white border-b border-slate-200 px-6 py-5 text-center space-y-3 font-medium">
            <a href="#overview" onClick={() => setMenuOpen(false)} className="block py-2 border-b border-slate-100">사업개요</a>
            <a href="#investment" onClick={() => setMenuOpen(false)} className="block py-2 border-b border-slate-100">5대 투자핵심 (희소가치 0.91%)</a>
            <a href="#benefits" onClick={() => setMenuOpen(false)} className="block py-2 border-b border-slate-100 text-rose-600 font-bold">특별 분양조건</a>
            <a href="#blocks" onClick={() => setMenuOpen(false)} className="block py-2 border-b border-slate-100">3·4블록 MD배치</a>
            <a href="#masterlease" onClick={() => setMenuOpen(false)} className="block py-2 border-b border-slate-100">5년 6% 마스터리스</a>
            <a href="#location" onClick={() => setMenuOpen(false)} className="block py-2 border-b border-slate-100">견본주택 오시는길</a>
            <a href="#inquiry" onClick={() => setMenuOpen(false)} className="block w-full py-3 bg-[#0f3d2e] text-white font-bold rounded-lg mt-2">
              관심고객 등록 바로가기
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-[#0f3d2e] py-20 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="inline-block bg-white/10 border border-[#c9a875]/40 text-[#ecd9bc] text-xs font-semibold px-3 py-1.5 rounded-full">
                계양신도시 첫 번째 라이프 스테이 몰 그랜드 오픈
              </span>

              <h1 className="text-3xl sm:text-5xl font-black leading-tight">
                배움과 건강, 미식과 휴식이<br />
                함께 머무는 복합 상업시설 <span className="text-[#c9a875]">「시간」</span>
              </h1>

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                반도건설 시공 1,110세대 단지 내 독점 상가!<br />
                <strong>총 203실 중 일반분양 154실</strong> · 마스터리스 45실 · 직영몰 4실
              </p>

              <div className="grid grid-cols-3 gap-3 pt-2 text-center">
                <div className="bg-black/25 border border-white/10 rounded-xl p-3">
                  <span className="text-[11px] text-slate-300 block">수도권 최저</span>
                  <span className="text-xl font-black text-[#c9a875]">0.91%</span>
                  <span className="text-[10px] text-slate-300 block">상업용지 희소성</span>
                </div>
                <div className="bg-black/25 border border-white/10 rounded-xl p-3">
                  <span className="text-[11px] text-slate-300 block">5년간 수익</span>
                  <span className="text-xl font-black text-[#c9a875]">6% 보장</span>
                  <span className="text-[10px] text-slate-300 block">마스터리스 45실</span>
                </div>
                <div className="bg-black/25 border border-white/10 rounded-xl p-3">
                  <span className="text-[11px] text-slate-300 block">계약금 이자</span>
                  <span className="text-xl font-black text-[#c9a875]">연 5% 지원</span>
                  <span className="text-[10px] text-slate-300 block">중도금 40% 무이자</span>
                </div>
              </div>
            </div>

            {/* Quick Form */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 text-slate-900 shadow-2xl">
              <h3 className="text-lg font-bold mb-3 flex items-center justify-between">
                <span>상가 로얄호실 선점 상담</span>
                <span className="text-xs bg-[#0f3d2e]/10 text-[#0f3d2e] px-2 py-0.5 rounded font-bold">실시간 접수</span>
              </h3>
              <form onSubmit={handleQuickSubmit} className="space-y-3">
                <input name="userName" required placeholder="고객 성함" className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-sm outline-none focus:border-[#0f3d2e]" />
                <input name="userPhone" required placeholder="휴대폰 번호 (010-0000-0000)" className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-sm outline-none focus:border-[#0f3d2e]" />
                <button type="submit" className="w-full py-3.5 bg-[#0f3d2e] text-white font-bold rounded-lg text-sm hover:bg-[#18533f] transition">
                  예상 분양가 & 호실 배치도 즉시 받기
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Benefits Strip */}
      <section id="benefits" className="py-12 bg-[#f9f8f5] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-[#0f3d2e] uppercase tracking-widest">FINANCIAL BENEFITS</span>
            <h2 className="text-2xl font-black mt-1">초기 자금 부담을 덜어드리는 <span className="text-rose-600">파격 분양 조건</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border-2 border-[#0f3d2e] shadow-sm">
              <div className="text-xs font-bold text-slate-500">계약금 10%</div>
              <div className="text-xl font-black text-[#0f3d2e] mt-1">연 5% 이자지원 (예정)</div>
              <p className="text-xs text-slate-600 mt-2">계약 익월부터 준공 전월까지 약 33개월간 계약금에 대해 연 5% 이자 지원</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="text-xs font-bold text-slate-500">중도금 40%</div>
              <div className="text-xl font-black text-rose-600 mt-1">전액 무이자 대출 지원</div>
              <p className="text-xs text-slate-600 mt-2">입점 시점까지 중도금 이자 0원으로 고금리 시대 대출 부담 완화</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="text-xs font-bold text-slate-500">잔금 50%</div>
              <div className="text-xl font-black text-slate-900 mt-1">5년 6% 마스터리스</div>
              <p className="text-xs text-slate-600 mt-2">반도건설이 직접 통임차하여 5년간 6% 확정 수익을 지급해 공실 리스크 제로</p>
            </div>
          </div>
        </div>
      </section>

      {/* Model House Location */}
      <section id="location" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-[#0f3d2e] uppercase tracking-widest">DIRECTIONS</span>
            <h2 className="text-2xl font-black mt-1">견본주택(홍보관) 오시는 길</h2>
          </div>
          <div className="max-w-3xl mx-auto bg-[#f9f8f5] p-6 sm:p-8 rounded-2xl border border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <span className="text-xs text-[#0f3d2e] font-bold block mb-1">견본주택 주소</span>
              <p className="text-base font-bold text-slate-900">경기도 부천시 원미구 도당동 222-46</p>
              <p className="text-xs text-slate-500 mt-1">※ 100% 사전 예약제 운영 / 전용 주차장 완비</p>
            </div>
            <button onClick={() => copyAddress('경기도 부천시 원미구 도당동 222-46')} className="px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-xs font-bold text-slate-800 flex items-center">
              <Copy className="w-3.5 h-3.5 mr-1 text-slate-500" />
              주소 복사
            </button>
          </div>
        </div>
      </section>

      {/* Mobile Sticky Bar */}
      <aside aria-label="모바일 빠른 예약 및 상담" className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 border-t border-slate-200 p-2.5 shadow-lg">
        <div className="grid grid-cols-2 gap-2">
          <a href="tel:1599-3554" className="flex items-center justify-center py-3 rounded-lg bg-slate-100 border border-slate-300 text-slate-900 font-bold text-sm">
            <PhoneCall className="w-4 h-4 mr-1 text-[#0f3d2e]" />
            전화상담 연결
          </a>
          <a href="#inquiry" className="flex items-center justify-center py-3 rounded-lg bg-[#0f3d2e] text-white font-bold text-sm">
            <ClipboardPen className="w-4 h-4 mr-1 text-[#c9a875]" />
            호실 분양상담
          </a>
        </div>
      </aside>

      {/* Success Modal */}
      {successModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 text-slate-900 text-center shadow-2xl">
            <CheckCircle className="w-12 h-12 text-[#0f3d2e] mx-auto mb-3" />
            <h3 className="text-lg font-bold mb-1">상담 예약이 접수되었습니다</h3>
            <p className="text-xs text-slate-600 mb-5">{customer.name}님({customer.phone}), 담당자가 빠르게 연락드리겠습니다.</p>
            <button onClick={() => setSuccessModal(false)} className="w-full py-2.5 bg-[#0f3d2e] text-white font-bold rounded-lg text-sm">
              확인
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
