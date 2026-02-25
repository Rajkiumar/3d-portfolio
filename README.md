# S Rajkumar | 3D Portfolio Website

A modern, interactive portfolio website built with Next.js, Three.js, and Tailwind CSS, featuring immersive 3D elements and smooth animations.

## 🚀 Features

- **Interactive 3D Models** - GLTF models rendered with Three.js
- **Responsive Design** - Optimized for all devices
- **Dynamic Navigation** - Circular navigation interface
- **Real-time Contact Form** - EmailJS integration
- **GitHub Stats Integration** - Live GitHub statistics and activity
- **Smooth Animations** - Framer Motion powered transitions
- **Project Showcase** - Display of real projects from GitHub

## 🛠️ Tech Stack

**Languages:** Python, Java, JavaScript, C++  
**Frontend:** React, Next.js, Tailwind CSS, Three.js, TypeScript, Flutter  
**Backend:** Node.js, Express, REST APIs, JWT Auth, WebSockets  
**Databases:** MongoDB, SQL  
**DevOps:** Git, GitHub Actions, Docker, Vercel, Render  
**AI/ML:** Gemini API, RAG patterns  
**Other:** UI/UX Design, React Native (Expo), Bcrypt

## 📂 Featured Projects

1. **Urbanroof** - AI-driven DDR report generation system
2. **fullstack-docker-app** - Containerized full-stack application
3. **AI_Travel_Planer** - AI-powered travel itinerary planner
4. **My_first_3D_website** - Interactive 3D web experience
5. **PDF_to_Audio_Python** - PDF text-to-speech utility
6. **wastemanager** - Flutter-based waste management app
7. **insta-clone** - Social media clone with backend
8. **Community-Marketplace** - Community marketplace interface

## 📦 Getting Started

### Prerequisites

- Node.js 14.x or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Rajkiumar/3d-portfolio.git
cd 3d-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables (see EmailJS setup below)

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📧 Contact Form Setup (EmailJS)

The contact form sends messages to: **sumathiselvam0007@gmail.com**

### Setup Steps:

1. **Create EmailJS Account**: Sign up at [emailjs.com](https://www.emailjs.com)

2. **Add Email Service**: Connect your Gmail account and copy the Service ID

3. **Create Template** with these variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{reply_to}}`
   - `{{message}}`
   - `{{to_email}}`

4. **Get Public Key**: Copy from Account → API Keys

5. **Create `.env.local`** in project root:
```env
NEXT_PUBLIC_SERVICE_ID="service_xxxxxxx"
NEXT_PUBLIC_TEMPLATE_ID="template_xxxxxxx"
NEXT_PUBLIC_PUBLIC_KEY="xxxxxxxxxxxxxxxx"
```

6. **Restart server** and test the contact form

## 📫 Connect

- **Email**: sumathiselvam0007@gmail.com
- **LinkedIn**: [linkedin.com/in/rajkumar2614](https://www.linkedin.com/in/rajkumar2614/)
- **GitHub**: [github.com/Rajkiumar](https://github.com/Rajkiumar)

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Credits

**3D Models:**
- ["Tim Mckee - Boy Wizard"](https://skfb.ly/6YATu) by elbertwithane (CC BY 4.0)
- ["Stylized wizard hat"](https://skfb.ly/ozxOQ) by Enkarra (CC BY 4.0)
- ["Wizard Staff"](https://skfb.ly/6QYZw) by Toymancer Studio (CC BY 4.0)

**Tools & Libraries:**
- [Next.js](https://nextjs.org/)
- [Three.js](https://threejs.org/) & [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [EmailJS](https://www.emailjs.com/)
- [GitHub Readme Stats](https://github.com/anuraghazra/github-readme-stats)

**Original Template**: Based on CodeBucks' [Next.js Creative Portfolio Tutorial](https://github.com/codebucks27/Next.js-Creative-Portfolio-Website)

---

Made with ❤️ by S Rajkumar
