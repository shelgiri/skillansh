/* ============================================================================
   SKILLANSH GROWTH CIRCLE — EASY NEWS, UPDATES & ARTICLES MANAGER
   ============================================================================
   HOW TO PUBLISH A NEW UPDATE OR NEWS ITEM (NO HTML NEEDED!):
   1. Open this file (updates-data.js) in Notepad or VS Code.
   2. Under LATEST_UPDATES below, copy one { ... } block at the top of the list.
   3. Change the date, category, title, message, and optional link.
   4. Save the file and deploy your folder to Netlify!
   ============================================================================ */

window.SKILLANSH_UPDATES = [
  {
    date: "Upcoming Batch Announced",
    category: "🎓 Live Masterclass",
    badgeColor: "green", // Options: "amber", "green", "blue"
    title: "Skillansh 90-Min Practical Masterclass: Excel, Power Query & MIS Automation",
    message: "Eliminate repetitive manual accounting work, learn real-world corporate reconciliation techniques, and build dynamic reporting dashboards with mentor Girish Shelar.",
    linkText: "View Masterclass Details →",
    linkUrl: "workshop.html"
  },
  {
    date: "Monthly Reminder (11th & 14th)",
    category: "📑 GST Compliance Alert",
    badgeColor: "blue",
    title: "GSTR-1 Filing (11th) & GSTR-2B Static Statement Generation (14th)",
    message: "Reconcile your monthly GSTR-2B statement (generated on the 14th) against your Tally/ERP Purchase Register using Power Query before filing GSTR-3B on the 20th.",
    linkText: "View Statutory Calendar ↓",
    linkUrl: "#compliance-calendar"
  }
];
