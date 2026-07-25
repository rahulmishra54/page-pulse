# 🚀 Page Pulse

Page Pulse is a full-stack web application that analyzes any public website and provides useful SEO, accessibility, and page insights in real time.

Users can enter a valid website URL, and the application fetches the webpage, analyzes its HTML, and displays key metrics through a clean, modern, and responsive interface.

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
- ❌ Robust error handling for:
  - Invalid URLs
  - Website unavailable
  - Timeout errors
  - Non-HTML responses

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
          Cheerio → Parse HTML
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
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── services/
│   │   └── utils/
│   │
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│   │
│   ├── public/
│   └── package.json
│
└── README.md
```

---

# 📖 Usage

1. Open the application.
2. Enter a valid website URL.
3. Click **Analyze**.
4. The application fetches the webpage and displays the analysis report.

### Example URLs

#### ✅ Valid URLs

- https://example.com
- https://github.com
- https://openai.com
- https://digitalheroesco.com

#### ❌ Invalid URLs

- abc
- https://this-domain-should-not-exist-123456789.com

---

## 🔌 API Contract

### Endpoint

```
POST /api/analyze
```

### Request Body

```json
{
  "url": "https://example.com"
}
```

### Success Response

```json
{
  "status": 200,
  "responseTime": 245,
  "title": "Example Domain",
  "metaDescription": "Example website",
  "h1Count": 1,
  "totalImages": 3,
  "missingAlt": 1,
  "totalLinks": 12,
  "wordCount": 428
}
```

### Error Response

```json
{
  "error": "Invalid URL"
}
```

Possible error messages include:

- Invalid URL
- Website unavailable
- Request timeout
- Unsupported content type

---

## 🎯 Design Decisions

### 1. Layered Backend Architecture

The backend is organized into routes, controllers, and services to improve maintainability, readability, and scalability.

### 2. React + Vite

React with Vite provides fast development, hot module replacement, and a lightweight build process.

### 3. Cheerio for HTML Parsing

Cheerio enables fast server-side HTML parsing without the overhead of launching a browser, making it ideal for extracting SEO-related information.

---

## ⚙️ Installation

### Clone the Repository

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

<img width="1592" height="777" alt="Home Page" src="https://github.com/user-attachments/assets/ffb6c48d-c6dd-48fc-b045-381c6ad83718" />

### Website Analysis

<img width="1318" height="662" alt="Website Analysis" src="https://github.com/user-attachments/assets/3e237efe-8e0e-4079-82af-df654372a3a9" />

---

## 🧪 Testing

The application has been designed to handle:

- ✅ Valid website analysis
- ✅ Invalid URL validation
- ✅ Website unavailable errors
- ✅ Timeout handling
- ✅ Non-HTML response handling

---

## 🚀 Future Improvements

- AI-powered website insights
- SEO score calculation
- Core Web Vitals integration
- Performance recommendations
- PDF report export
- Website comparison
- Broken link detection
- Open Graph and Twitter Card analysis

---

## 👨‍💻 Author

**Rahul Mishra**

GitHub: https://github.com/rahulmishra54

---

## 📜 License

This project was developed as part of the **Digital Heroes Software Development Qualification Task** and is available for educational and portfolio purposes.
