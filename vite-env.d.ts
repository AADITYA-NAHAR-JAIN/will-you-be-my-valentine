.centered-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  overflow: hidden;
}

/* Decorative floating elements */
.centered-container::before,
.centered-container::after {
  content: "💕";
  position: absolute;
  font-size: 3rem;
  animation: float 6s ease-in-out infinite;
  pointer-events: none;
}

.centered-container::before {
  top: 10%;
  left: 5%;
  animation-delay: 0s;
}

.centered-container::after {
  bottom: 10%;
  right: 5%;
  animation-delay: 2s;
}

.valentine-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 105, 180, 0.2);
  max-width: 600px;
  animation: fadeInScale 0.6s ease-out;
  position: relative;
  z-index: 10;
}

.valentine-container img {
  border-radius: 15px;
  object-fit: cover;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
  animation: heartbeat 1.5s ease-in-out infinite;
}

/* Custom class for Yes button styles */
.yes-button {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #FF1493 0%, #FF69B4 100%);
  color: #fff;
  font-weight: bold;
  font-size: 1.1rem;
  padding: 14px 28px;
  border-radius: 50px;
  border: none;
  margin-right: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(255, 20, 147, 0.3);
  transform: scale(1);
}

.yes-button:hover {
  background: linear-gradient(135deg, #FF69B4 0%, #FF1493 100%);
  transform: scale(1.05);
  box-shadow: 0 8px 25px rgba(255, 20, 147, 0.6);
}

.yes-button:active {
  transform: scale(0.98);
}

/* Custom class for No button styles */
.no-button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  font-weight: bold;
  font-size: 1rem;
  padding: 12px 24px;
  border-radius: 50px;
  border: 2px solid #667eea;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
}

.no-button:hover {
  background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
  transform: scale(1.02);
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.5);
}

.no-button:active {
  transform: scale(0.96);
}

/* Custom class for text container */
.text-container {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 1.5rem 0;
  color: #764ba2;
  text-align: center;
  line-height: 1.3;
  animation: pulse-glow 2s ease-in-out infinite;
  letter-spacing: -0.5px;
}

.github-link {
  position: absolute;
  top: 20px;
  left: 20px;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  z-index: 100;
}

.github-link:hover {
  color: #FFB6C1;
  text-shadow: 0 0 10px rgba(255, 105, 180, 0.5);
}
