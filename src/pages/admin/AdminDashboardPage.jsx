import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AdminDashboardPage() {
  const [pipelinePeriod, setPipelinePeriod] = useState('This Month');
  const [acqPeriod, setAcqPeriod] = useState('This Month');

  return (
    <div className="flex flex-col gap-6 max-w-[1440px] mx-auto">
      
      {/* 1. GREETING & PAGE TITLE (Exact match from reference) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <span className="text-xs sm:text-sm font-semibold text-gray-500">Good Morning,</span>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mt-0.5">
            Here's your CRM overview
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Manage your leads, track deals and build lasting customer relationships.
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <button className="px-4 py-2 rounded-xl bg-white border border-[#E2E8F0] text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors shadow-2xs flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px] text-gray-500">download</span>
            <span>Export Report</span>
          </button>
          <button className="px-4 py-2 rounded-xl bg-[#00875A] hover:bg-[#00734c] text-white text-xs font-bold transition-all shadow-sm flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px]">add</span>
            <span>New Lead</span>
          </button>
        </div>
      </div>

      {/* 2. 4 METRICS CARDS (GREEN, BLUE, PURPLE, EMERALD) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        
        {/* Card 1: Total Leads */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E2E8F0] shadow-2xs flex flex-col justify-between hover:shadow-sm transition-shadow">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-xs font-semibold text-gray-500">Total Leads</span>
              <div className="text-2xl sm:text-[28px] font-extrabold text-gray-900 mt-1">4,320</div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-[#EBF7F2] text-[#00875A] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[20px]">groups</span>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-1.5 text-xs font-bold text-[#00875A]">
            <span className="material-symbols-outlined text-[16px]">trending_up</span>
            <span>+18.3%</span>
            <span className="text-gray-400 font-normal">vs last month</span>
          </div>
        </div>

        {/* Card 2: Total Contacts */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E2E8F0] shadow-2xs flex flex-col justify-between hover:shadow-sm transition-shadow">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-xs font-semibold text-gray-500">Total Contacts</span>
              <div className="text-2xl sm:text-[28px] font-extrabold text-gray-900 mt-1">2,856</div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[20px]">person</span>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-1.5 text-xs font-bold text-[#2563EB]">
            <span className="material-symbols-outlined text-[16px]">trending_up</span>
            <span>+12.6%</span>
            <span className="text-gray-400 font-normal">vs last month</span>
          </div>
        </div>

        {/* Card 3: Total Customers */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E2E8F0] shadow-2xs flex flex-col justify-between hover:shadow-sm transition-shadow">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-xs font-semibold text-gray-500">Total Customers</span>
              <div className="text-2xl sm:text-[28px] font-extrabold text-gray-900 mt-1">1,024</div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-[#FAF5FF] text-[#9333EA] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[20px]">store</span>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-1.5 text-xs font-bold text-[#9333EA]">
            <span className="material-symbols-outlined text-[16px]">trending_up</span>
            <span>+20.1%</span>
            <span className="text-gray-400 font-normal">vs last month</span>
          </div>
        </div>

        {/* Card 4: Total Revenue */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E2E8F0] shadow-2xs flex flex-col justify-between hover:shadow-sm transition-shadow">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-xs font-semibold text-gray-500">Total Revenue</span>
              <div className="text-2xl sm:text-[28px] font-extrabold text-gray-900 mt-1">$98,430</div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-[#F0FDF4] text-[#16A34A] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[20px]">attach_money</span>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-1.5 text-xs font-bold text-[#16A34A]">
            <span className="material-symbols-outlined text-[16px]">trending_up</span>
            <span>+22.4%</span>
            <span className="text-gray-400 font-normal">vs last month</span>
          </div>
        </div>
      </div>

      {/* 3. ROW 1 CHARTS (SALES PIPELINE & DEAL STAGES) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        
        {/* 3.1 SALES PIPELINE (7 Cols) */}
        <div className="lg:col-span-7 bg-white rounded-2xl p-5 border border-[#E2E8F0] shadow-2xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm sm:text-base font-bold text-gray-900">Sales Pipeline</h2>
            <div className="flex items-center gap-1 text-xs font-semibold text-gray-600 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-lg cursor-pointer">
              <span>{pipelinePeriod}</span>
              <span className="material-symbols-outlined text-[14px]">expand_more</span>
            </div>
          </div>

          {/* Horizontal Progressive Bars */}
          <div className="space-y-3.5 py-2">
            {[
              { stage: 'New Leads', value: 1240, max: 1240, color: 'bg-[#4ADE80]' },
              { stage: 'Qualified', value: 832, max: 1240, color: 'bg-[#6EE7B7]' },
              { stage: 'Proposal', value: 540, max: 1240, color: 'bg-[#A7F3D0]' },
              { stage: 'Negotiation', value: 310, max: 1240, color: 'bg-[#86EFAC]' },
              { stage: 'Closed Won', value: 208, max: 1240, color: 'bg-[#15803D]' },
            ].map((item, i) => (
              <div key={i} className="flex items-center text-xs font-medium text-gray-700">
                <span className="w-24 sm:w-28 shrink-0 font-semibold">{item.stage}</span>
                <div className="flex-1 bg-gray-100 rounded-full h-4.5 overflow-hidden mx-2 relative">
                  <div 
                    className={`h-full ${item.color} rounded-full transition-all duration-500`}
                    style={{ width: `${(item.value / item.max) * 100}%` }}
                  ></div>
                </div>
                <span className="w-12 text-right font-bold text-gray-900">{item.value.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 3.2 DEAL STAGES (5 Cols Donut Chart) */}
        <div className="lg:col-span-5 bg-white rounded-2xl p-5 border border-[#E2E8F0] shadow-2xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm sm:text-base font-bold text-gray-900">Deal Stages</h2>
            <Link to="/admin/deals" className="text-xs font-bold text-[#00875A] hover:underline">
              View all
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-around gap-4 py-2">
            {/* SVG Donut */}
            <div className="relative w-40 h-40 flex items-center justify-center shrink-0">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                {/* Background Ring */}
                <circle cx="50" cy="50" r="38" stroke="#F1F5F9" strokeWidth="14" fill="none" />
                {/* Segment 1: New Leads (28%) */}
                <circle cx="50" cy="50" r="38" stroke="#00875A" strokeWidth="14" fill="none"
                  strokeDasharray="238.76" strokeDashoffset="0" className="transition-all duration-700" />
                {/* Segment 2: Qualified (25%) */}
                <circle cx="50" cy="50" r="38" stroke="#06B6D4" strokeWidth="14" fill="none"
                  strokeDasharray="238.76" strokeDashoffset="-66.85" className="transition-all duration-700" />
                {/* Segment 3: Proposal (20%) */}
                <circle cx="50" cy="50" r="38" stroke="#3B82F6" strokeWidth="14" fill="none"
                  strokeDasharray="238.76" strokeDashoffset="-126.54" className="transition-all duration-700" />
                {/* Segment 4: Negotiation (15%) */}
                <circle cx="50" cy="50" r="38" stroke="#F59E0B" strokeWidth="14" fill="none"
                  strokeDasharray="238.76" strokeDashoffset="-174.29" className="transition-all duration-700" />
                {/* Segment 5: Closed Won (12%) */}
                <circle cx="50" cy="50" r="38" stroke="#FB7185" strokeWidth="14" fill="none"
                  strokeDasharray="238.76" strokeDashoffset="-210.1" className="transition-all duration-700" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                <span className="text-xl font-extrabold text-gray-900 leading-tight">540</span>
                <span className="text-[10px] text-gray-500 font-semibold uppercase">Active Deals</span>
              </div>
            </div>

            {/* Legend List */}
            <div className="space-y-1.5 text-xs w-full sm:w-auto">
              {[
                { name: 'New Leads', pct: '28%', color: 'bg-[#00875A]' },
                { name: 'Qualified', pct: '25%', color: 'bg-[#06B6D4]' },
                { name: 'Proposal', pct: '20%', color: 'bg-[#3B82F6]' },
                { name: 'Negotiation', pct: '15%', color: 'bg-[#F59E0B]' },
                { name: 'Closed Won', pct: '12%', color: 'bg-[#FB7185]' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className={`w-2.5 h-2.5 rounded-full ${item.color}`}></span>
                    <span className="text-gray-600 font-medium">{item.name}</span>
                  </div>
                  <span className="font-bold text-gray-900">{item.pct}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 4. ROW 2 CHARTS (CUSTOMER ACQUISITION & CONVERSION FUNNEL) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        
        {/* 4.1 CUSTOMER ACQUISITION (7 Cols Line Chart) */}
        <div className="lg:col-span-7 bg-white rounded-2xl p-5 border border-[#E2E8F0] shadow-2xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm sm:text-base font-bold text-gray-900">Customer Acquisition</h2>
            <div className="flex items-center gap-1 text-xs font-semibold text-gray-600 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-lg cursor-pointer">
              <span>{acqPeriod}</span>
              <span className="material-symbols-outlined text-[14px]">expand_more</span>
            </div>
          </div>

          <div className="relative pt-6 pb-2">
            {/* SVG Line Chart */}
            <div className="h-44 w-full relative">
              {/* Y Axis Grid Lines */}
              <div className="absolute inset-0 flex flex-col justify-between text-[10px] text-gray-400 pointer-events-none">
                <div className="border-b border-gray-100 w-full flex justify-between"><span>1k</span></div>
                <div className="border-b border-gray-100 w-full flex justify-between"><span>750</span></div>
                <div className="border-b border-gray-100 w-full flex justify-between"><span>500</span></div>
                <div className="border-b border-gray-100 w-full flex justify-between"><span>250</span></div>
                <div className="border-b border-gray-100 w-full flex justify-between"><span>0</span></div>
              </div>

              {/* Area & Line */}
              <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 500 150">
                <defs>
                  <linearGradient id="acqGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#22C55E" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#22C55E" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                {/* Fill Path */}
                <path
                  d="M 20 120 Q 70 140 120 100 T 220 90 T 320 60 T 420 30 T 480 20 L 480 150 L 20 150 Z"
                  fill="url(#acqGradient)"
                />
                {/* Stroke Path */}
                <path
                  d="M 20 120 Q 70 140 120 100 T 220 90 T 320 60 T 420 30 T 480 20"
                  fill="none"
                  stroke="#16A34A"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                {/* Peak Indicator Dot */}
                <circle cx="420" cy="30" r="5" fill="#16A34A" stroke="#FFFFFF" strokeWidth="2" />
              </svg>

              {/* Floating Tooltip matching reference image */}
              <div className="absolute top-2 right-14 bg-[#1E293B] text-white text-[11px] font-bold px-2.5 py-1.5 rounded-lg shadow-lg flex flex-col items-center">
                <span>720</span>
                <span className="text-[9px] text-gray-400 font-normal">Jun 2026</span>
              </div>
            </div>

            {/* X Axis Months */}
            <div className="flex items-center justify-between text-[11px] font-semibold text-gray-500 mt-3 px-3">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
            </div>
          </div>
        </div>

        {/* 4.2 CONVERSION FUNNEL (5 Cols Trapezoid Funnel) */}
        <div className="lg:col-span-5 bg-white rounded-2xl p-5 border border-[#E2E8F0] shadow-2xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm sm:text-base font-bold text-gray-900">Conversion Funnel</h2>
            <Link to="/admin/reports" className="text-xs font-bold text-[#00875A] hover:underline">
              View all
            </Link>
          </div>

          {/* Tiered Funnel Bars */}
          <div className="space-y-2 py-1 flex flex-col items-center">
            {/* Tier 1: Leads */}
            <div className="w-full flex items-center justify-between px-3 py-2 rounded-xl bg-[#22C55E] text-white text-xs font-bold shadow-xs">
              <span>Leads</span>
              <div className="flex items-center gap-3">
                <span>4,320</span>
                <span className="text-[10px] text-emerald-100 font-normal">100%</span>
              </div>
            </div>

            {/* Tier 2: Qualified */}
            <div className="w-[82%] flex items-center justify-between px-3 py-2 rounded-xl bg-[#4ADE80] text-gray-900 text-xs font-bold shadow-xs">
              <span>Qualified</span>
              <div className="flex items-center gap-3">
                <span>2,160</span>
                <span className="text-[10px] text-gray-700 font-semibold">50%</span>
              </div>
            </div>

            {/* Tier 3: Proposal */}
            <div className="w-[66%] flex items-center justify-between px-3 py-2 rounded-xl bg-[#86EFAC] text-gray-900 text-xs font-bold shadow-xs">
              <span>Proposal</span>
              <div className="flex items-center gap-3">
                <span>864</span>
                <span className="text-[10px] text-gray-700 font-semibold">20%</span>
              </div>
            </div>

            {/* Tier 4: Customers */}
            <div className="w-[50%] flex items-center justify-between px-3 py-2 rounded-xl bg-[#15803D] text-white text-xs font-bold shadow-xs">
              <span>Customers</span>
              <div className="flex items-center gap-3">
                <span>432</span>
                <span className="text-[10px] text-emerald-200 font-normal">10%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. ROW 3 ACTIVITY WIDGETS (3 EQUAL COLUMNS) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        
        {/* Widget 1: Upcoming Tasks & Calendar */}
        <div className="bg-white rounded-2xl p-5 border border-[#E2E8F0] shadow-2xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3.5 pb-2 border-b border-gray-100">
            <h2 className="text-sm font-bold text-gray-900 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#00875A] text-[18px]">event_note</span>
              <span>Upcoming Tasks &amp; Calendar</span>
            </h2>
            <Link to="/admin/calendar" className="text-xs font-bold text-[#00875A] hover:underline">
              View all
            </Link>
          </div>

          <div className="space-y-3">
            {[
              { day: '10', month: 'Jun', title: 'Follow up with Sarah Khan', place: 'Acme Inc.', time: '10:00 AM', color: 'bg-emerald-500' },
              { day: '11', month: 'Jun', title: 'Product demo with BetaTech', place: 'Online Meeting', time: '02:00 PM', color: 'bg-blue-500' },
              { day: '12', month: 'Jun', title: 'Send proposal to James Lee', place: 'Nova Solutions', time: '11:30 AM', color: 'bg-amber-500' },
              { day: '13', month: 'Jun', title: 'Call with marketing team', place: 'Internal', time: '04:00 PM', color: 'bg-purple-500' }
            ].map((task, idx) => (
              <div key={idx} className="flex items-center justify-between text-xs py-1 hover:bg-gray-50 rounded-lg px-1.5 transition-colors">
                <div className="flex items-center gap-2.5">
                  <div className="text-center w-7 shrink-0">
                    <span className="block font-bold text-gray-900 leading-none">{task.day}</span>
                    <span className="text-[10px] text-gray-400 uppercase">{task.month}</span>
                  </div>
                  <span className={`w-2 h-2 rounded-full shrink-0 ${task.color}`}></span>
                  <div className="min-w-0">
                    <div className="font-bold text-gray-800 truncate">{task.title}</div>
                    <span className="text-[10px] text-gray-400 block">{task.place}</span>
                  </div>
                </div>
                <span className="text-[11px] font-semibold text-gray-500 shrink-0">{task.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Widget 2: Recent Messages */}
        <div className="bg-white rounded-2xl p-5 border border-[#E2E8F0] shadow-2xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3.5 pb-2 border-b border-gray-100">
            <h2 className="text-sm font-bold text-gray-900 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#00875A] text-[18px]">chat_bubble_outline</span>
              <span>Recent Messages</span>
            </h2>
            <Link to="/admin/messages" className="text-xs font-bold text-[#00875A] hover:underline">
              View all
            </Link>
          </div>

          <div className="space-y-3">
            {[
              { name: 'Sarah Khan', msg: 'Thanks for the demo! Can you share the pitch...', time: '10:24 AM', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80' },
              { name: 'James Lee', msg: 'Looks good. Let\'s move to the next step...', time: 'Yesterday', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80' },
              { name: 'Priya Sharma', msg: 'When can we schedule the final call?', time: 'Yesterday', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80' },
              { name: 'Daniel Kim', msg: 'Great. Looking forward to our collaboration.', time: 'Jun 8', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80' }
            ].map((msg, idx) => (
              <div key={idx} className="flex items-center justify-between text-xs py-1 hover:bg-gray-50 rounded-lg px-1.5 transition-colors cursor-pointer">
                <div className="flex items-center gap-2.5 min-w-0">
                  <img src={msg.avatar} alt={msg.name} className="w-8 h-8 rounded-full object-cover shrink-0" />
                  <div className="min-w-0">
                    <div className="font-bold text-gray-900 truncate">{msg.name}</div>
                    <p className="text-[11px] text-gray-500 truncate">{msg.msg}</p>
                  </div>
                </div>
                <span className="text-[10px] text-gray-400 shrink-0 ml-2 font-medium">{msg.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Widget 3: Team Activity */}
        <div className="bg-white rounded-2xl p-5 border border-[#E2E8F0] shadow-2xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3.5 pb-2 border-b border-gray-100">
            <h2 className="text-sm font-bold text-gray-900 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#00875A] text-[18px]">history</span>
              <span>Team Activity</span>
            </h2>
            <Link to="/admin/reports" className="text-xs font-bold text-[#00875A] hover:underline">
              View all
            </Link>
          </div>

          <div className="space-y-3">
            {[
              { name: 'Emma Wilson', action: 'added a new lead', time: '2h ago', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80' },
              { name: 'Daniel Kim', action: 'moved a deal to Proposal', time: '4h ago', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80' },
              { name: 'Priya Sharma', action: 'closed a deal ($12,500)', time: '6h ago', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80' },
              { name: 'James Lee', action: 'updated contact details', time: '1d ago', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80' }
            ].map((act, idx) => (
              <div key={idx} className="flex items-center justify-between text-xs py-1 hover:bg-gray-50 rounded-lg px-1.5 transition-colors">
                <div className="flex items-center gap-2.5 min-w-0">
                  <img src={act.avatar} alt={act.name} className="w-8 h-8 rounded-full object-cover shrink-0" />
                  <div className="min-w-0">
                    <span className="font-bold text-gray-900">{act.name} </span>
                    <span className="text-gray-500 text-[11px]">{act.action}</span>
                  </div>
                </div>
                <span className="text-[10px] text-gray-400 shrink-0 ml-2 font-medium">{act.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
