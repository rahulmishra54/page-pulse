# 🚀 Page Pulse

Page Pulse is a full-stack web application that analyzes a website and provides useful SEO, accessibility, and page information in real time.

Users can enter any valid website URL, and the application fetches the webpage, analyzes its HTML, and displays key metrics through a clean and responsive interface.

---

## ✨ Features

- 🌐 Analyze any public website
- 📊 HTTP Status Code
- ⚡ Response Time
- 📄 Page Title
- 📝 Meta Description
- 🏷️ H1 Heading Count
- 🖼️ Total Images
- ♿ Images Missing Alt Text
- 🔗 Total Links
- 📚 Approximate Word Count
- 📱 Responsive UI
- ❌ Error handling for:
  - Invalid URLs
  - Timeout errors
  - Non-HTML pages
  - Website unavailable

---

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- Axios
- Cheerio

---

## 🏗️ Architecture

```
                React Frontend
                       │
                       ▼
                 Express API
                       │
                       ▼
                 Controller Layer
                       │
                       ▼
                  Service Layer
                       │
                       ▼
        Axios → Fetch Website HTML
                       │
                       ▼
          Cheerio → Parse HTML Content
                       │
                       ▼
                JSON Response
```

---

## 📂 Project Structure

```
page-pulse/
│
├── backend/
│   ├── src/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/rahulmishra54/page-pulse.git
```

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 📸 Screenshots

### Home Page

<img width="1592" height="777" alt="image" src="https://github.com/user-attachments/assets/ffb6c48d-c6dd-48fc-b045-381c6ad83718" />


### Website Analysis

<img width="1318" height="662" alt="image" src="https://github.com/user-attachments/assets/3e237efe-8e0e-4079-82af-df654372a3a9" />



---

## 🚀 Future Improvements

- AI-powered website insights
- SEO score calculation
- Performance recommendations
- PDF report export
- Website comparison feature

---

## 👨‍💻 Author

**Rahul Mishra**

GitHub: https://github.com/rahulmishra54
