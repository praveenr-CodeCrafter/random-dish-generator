# Random Dish Generator 🍽️

A **React-based** web application that generates random dishes based on selected cuisines using **Google Generative AI**.

## 🚀 Features

- Select from **20+ cuisines**.
- AI-generated dish names, ingredients, and procedures.
- Option to specify a **main ingredient** (optional).
- Simple and **responsive** UI.
- **Error handling** for API failures.
- **Smooth UI experience** with loading indicators.

## 📌 Technologies Used

- **React + Vite** (Frontend Framework)
- **Tailwind CSS** (Styling)
- **Google Generative AI API** (Dish Generation)
- **Lucide-React** (Icons)

## 🛠️ Installation

### 1️⃣ Clone the repository:
```sh
git clone https://github.com/your-username/random-dish-generator.git
cd random-dish-generator
```
### 2️⃣ Install dependencies:
```sh
npm install
```
### 3️⃣ Set up API key:
Create a .env file in the root directory and add:
```sh
VITE_GOOGLE_AI_API_KEY=your_google_ai_api_key_here
```
### 4️⃣ Start the development server:
```sh
npm run dev
```
Open http://localhost:5173 in your browser.

## 🔧 How It Works

1. **Select a Cuisine** from the available options.  
2. (Optional) Enter a **"Main Ingredient"**.
3. Click **"Generate Random Dish"**.  
4. AI generates:  
   - **Dish name**  
   - **List of ingredients**  
   - **Step-by-step cooking procedure**  
5. If an error occurs, a **message is displayed**.  


## 🖼️ UI Components

### 1️⃣ **Header**
- Displays **app title and tagline**.  

### 2️⃣ **CuisineSelector**
- Buttons for selecting a **cuisine**.  
- Highlights the **selected cuisine**.  

### 3️⃣ **MainIngredient**
- Allows users to **specify a main ingredient** to refine the dish generation.  
- Completely **optional**—users can leave it blank for a fully random dish.  
- Helps generate **more tailored and relevant recipes**.

### 4️⃣ **GenerateButton**
- Triggers the **AI dish generation**.  
- Displays **loading animation** while waiting for a response.  

### 5️⃣ **DishDisplay**
- Shows the **generated dish name, ingredients, and cooking steps**.  

### 6️⃣ **ErrorMessage**
- Displays **API errors** if the dish generation fails.  
