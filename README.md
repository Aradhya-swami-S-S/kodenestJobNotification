# Job Notification Tracker

> A premium SaaS application for intelligent job discovery with precision-matched scoring, daily digests, and comprehensive status tracking.

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.2-purple.svg)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

## 🎯 Overview

Job Notification Tracker is a sophisticated job search management system designed for the Indian tech market. It features an intelligent match scoring algorithm that analyzes 60+ realistic job listings from top companies like Amazon, Infosys, Razorpay, and Flipkart, helping users discover the most relevant opportunities based on their preferences.

**Live Demo:** https://kodenest-job-notification.vercel.app/

## ✨ Key Features

### 🎯 Intelligent Match Scoring
- **Deterministic algorithm** scoring jobs 0-100% based on 8 criteria
- Real-time match calculation with color-coded badges
- Customizable threshold filtering
- Transparent scoring breakdown

### 📧 Daily Digest System
- Automated top 10 job recommendations
- Email-style newsletter layout
- One-click copy to clipboard
- mailto: integration for easy sharing
- Persistent daily storage

### 📊 Status Tracking
- 4-state job application tracking (Not Applied, Applied, Rejected, Selected)
- Visual status indicators with color coding
- Recent activity timeline
- Toast notifications for updates
- Persistent localStorage storage

### 🔍 Advanced Filtering
- Multi-criteria filtering (keyword, location, mode, experience, source, status)
- Combined AND logic for precise results
- Sort by latest, match score, or salary
- Real-time filter updates

### 💾 Smart Persistence
- All preferences saved locally
- Saved jobs across sessions
- Status history tracking
- Daily digest caching

## 🏗️ Architecture

### Design System
- **Color Palette:** Off-white background (#F7F6F3), Deep red accent (#8B0000)
- **Typography:** Serif headings (Crimson Pro), Sans-serif body (Inter)
- **Spacing:** Consistent 8px scale (8, 16, 24, 40, 64px)
- **Philosophy:** Calm, intentional, coherent, confident

### Tech Stack
- **Frontend:** React 18.3.1 with Hooks
- **Routing:** React Router DOM 6
- **Build Tool:** Vite 5.4.2
- **Styling:** Pure CSS with CSS Variables
- **State Management:** React useState/useEffect + localStorage
- **Performance:** useMemo for optimized filtering

### Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base components (Button, Input, Card)
│   ├── JobCard.jsx     # Job listing card
│   ├── JobModal.jsx    # Job details modal
│   ├── FilterBar.jsx   # Multi-filter interface
│   ├── Navigation.jsx  # Top navigation
│   └── Toast.jsx       # Notification system
├── pages/              # Route pages
│   ├── Landing.jsx     # Landing page
│   ├── Dashboard.jsx   # Main job listings
│   ├── Settings.jsx    # User preferences
│   ├── Saved.jsx       # Saved jobs
│   ├── Digest.jsx      # Daily digest
│   ├── Proof.jsx       # Submission artifacts
│   ├── TestChecklist.jsx  # Testing system
│   └── Ship.jsx        # Deployment validation
├── utils/              # Business logic
│   ├── matchScore.js   # Scoring algorithm
│   ├── digestEngine.js # Digest generation
│   ├── statusTracking.js  # Status management
│   ├── testChecklist.js   # Test validation
│   └── proofSystem.js  # Submission system
└── data/
    └── jobsData.js     # 60 realistic job listings
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Aradhya-swami-S-S/kodenestJobNotification

# Navigate to project directory
cd kodenestJobNotification

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see the app.

### Build for Production

```bash
npm run build
npm run preview
```

## 📖 Usage Guide

### 1. Set Your Preferences
Navigate to **Settings** and configure:
- Role keywords (e.g., "Frontend Developer, React Engineer")
- Preferred locations (Bangalore, Remote, etc.)
- Work mode (Remote, Hybrid, Onsite)
- Experience level
- Required skills
- Minimum match score threshold (0-100%)

### 2. Browse Jobs
On the **Dashboard**:
- View 60 curated tech jobs from Indian companies
- See match scores for each job (color-coded)
- Use filters to narrow results
- Toggle "Show only matches" for jobs above your threshold
- Save interesting jobs for later
- Update application status

### 3. Generate Daily Digest
Visit **Digest** to:
- Generate your personalized top 10 jobs
- View jobs sorted by match score and recency
- Copy digest to clipboard
- Create email draft
- See recent status updates

### 4. Track Applications
- Update job status directly from job cards
- Filter by status (Applied, Rejected, Selected)
- View status history on digest page
- Get toast notifications on updates

## 🎨 Design Philosophy

This project follows a **premium B2C SaaS design system**:

- **Calm & Intentional:** No flashy animations or loud colors
- **Coherent:** Consistent spacing, typography, and color usage
- **Confident:** Clear hierarchy and purposeful design decisions
- **Professional:** Suitable for serious job seekers

## 🧪 Testing

Built-in test checklist system with 10 validation points:

1. ✅ Preferences persist after refresh
2. ✅ Match score calculates correctly
3. ✅ "Show only matches" toggle works
4. ✅ Save job persists after refresh
5. ✅ Apply opens in new tab
6. ✅ Status update persists after refresh
7. ✅ Status filter works correctly
8. ✅ Digest generates top 10 by score
9. ✅ Digest persists for the day
10. ✅ No console errors on main pages

Access the test checklist at `/test` route.

## 📊 Match Scoring Algorithm

Jobs are scored 0-100% based on:

| Criteria | Points | Description |
|----------|--------|-------------|
| Title Match | +25 | Role keyword in job title |
| Description Match | +15 | Role keyword in description |
| Location Match | +15 | Preferred location |
| Mode Match | +10 | Work mode preference |
| Experience Match | +10 | Experience level |
| Skills Overlap | +15 | Any skill match |
| Recency | +5 | Posted ≤ 2 days ago |
| Source | +5 | LinkedIn source |

**Maximum Score:** 100 (capped)

## 🗂️ Data

60 realistic Indian tech jobs featuring:
- **Companies:** Amazon, Infosys, TCS, Wipro, Razorpay, Flipkart, Swiggy, PhonePe, Paytm, CRED, and more
- **Roles:** SDE Intern, Frontend/Backend Developer, Full Stack, QA, Data Analyst, DevOps, Mobile Developer
- **Locations:** Bangalore, Pune, Hyderabad, Mumbai, Chennai, Noida, Remote
- **Experience:** Fresher, 0-1, 1-3, 3-5 years
- **Salary Ranges:** ₹15k-₹70k/month (internships), 3-30 LPA

## 🔒 Privacy

All data is stored locally in your browser using localStorage. No data is sent to external servers. Your preferences, saved jobs, and application statuses remain private.



## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👨‍💻 Author

Aradhyaswami S S
- GitHub: [@Aradhya-swami-S-S](https://github.com/Aradhya-swami-S-S)
- LinkedIn: [aradhyaswami-salimath](https://www.linkedin.com/in/aradhyaswami-salimath/)

## 🙏 Acknowledgments

- Design inspiration from premium SaaS products
- Job data based on real Indian tech market trends
- Built with modern React best practices


