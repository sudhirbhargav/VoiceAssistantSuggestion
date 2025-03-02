## 🚀 Project Overview

Deligo is a **voice assistant** that suggests the **top 5 menu items** from nearby restaurants based on user location. It is built using:

- **Frontend**: React.js & Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **AI**: Gemini AI (for NLP and intelligent suggestions)
- **Geolocation**: Google Maps API (for finding nearby restaurants)

## 🎯 Features

- ✅ **Voice-Powered Search**: Users can interact with Deligo using voice commands to find the best food options.
- ✅ **Top 5 Recommendations**: The app provides the top 5 food items from nearby restaurants.
- ✅ **Real-time Suggestions**: Data is fetched dynamically based on user location.
- ✅ **User-Friendly Interface**: Simple and intuitive design for seamless user experience.
- ✅ **Scalable and Efficient API**: Uses Express.js for smooth backend performance.

## 🛠️ Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose), AWS
- **AI**: Gemini AI
- **Geolocation**: Google Maps API

## 🏷️ Installation & Setup

### 🔹 Backend Setup

1️⃣ Clone the repository:

```bash
git clone https://github.com/sudhirbhargav/VoiceAssistantSuggestion.git
cd backend
```

2️⃣ Install dependencies:

```bash
npm install
```

3️⃣ Set up environment variables (`.env` file):

```plaintext
MONGO_URI=mongodb+srv://your-db-url
GEMINI_API_KEY=your-gemini-api-key
GOOGLE_MAPS_API_KEY=your-google-maps-key
```

4️⃣ Start the server:

```bash
npm start
```

### 🔹 Frontend Setup

1️⃣ Navigate to frontend:

```bash
cd frontend
```

2️⃣ Install dependencies:

```bash
npm install
```

3️⃣ Start the React app:

```bash
npm start
```

## 🔥 API Endpoints

### **1️⃣ Get Top 5 Menu Items from Nearby Restaurants**

```http
GET /restaurants/top-items?longitude=<longitude>&latitude=<latitude>
```

_Response:_

```json
{
  "success": true,
  "data": [
    {
      "restaurant": "Pizza Palace",
      "item": "Pepperoni Pizza",
      "rating": 4.8
    },
    {
      "restaurant": "Sushi World",
      "item": "Salmon Roll",
      "rating": 4.7
    }
  ]
}
```

## 🌟 Upcoming Features

- ✅ **Personalized Recommendations**: AI-based suggestions tailored to user preferences.
- ✅ **Order Placement**: Allow users to place orders directly through the app.
- ✅ **Multilingual Support**: Expanding voice assistant to support multiple languages.
- ✅ **User Authentication**: JWT-based login & favorites feature.
- ✅ **Dynamic Price & Discount Suggestions**

## 🤝 Team Members

1. **Sudhir Bhargav**  
   💎 [GitHub](https://github.com/sudhirbhargav) | 📧 [Email](mailto:Sudhirbhargav100@gmail.com)

2. **Nisarg Shah**  
   💎 [GitHub](https://github.com/nisargshah23) | 📧 [Email](mailto:shahnisarg23@gmail.com)

3. **Deepanshi Garg**  
   💎 [GitHub](https://github.com/deepanshi-garg) | 📧 [Email](mailto:deepanshigarg1307@gmail.com)

## ✨ Support

If you like this project, please ⭐ the repository!

## 🐝 License

This project is open-source and available under the MIT License.

---

## 🌍 Deployed Link

Access the live application here:  
**[Deligo - Voice Assistant for Restaurant Recommendations](https://voice-assistant-suggestion.vercel.app/)**

## 🎥 Project Walkthrough Video

Watch a detailed explanation of the entire project here:  
**[Deligo - Project Walkthrough](https://drive.google.com/drive/folders/1rxgWi1cI2Wo7EiDQwQJqV0oiDcO4XQa_?usp=sharing)**
