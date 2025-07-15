// Floating Chatbot Embed Script
(function () {
  const botFrame = document.createElement('iframe');
  botFrame.src = "https://unodoer.onrender.com";
  botFrame.style.position = "fixed";
  botFrame.style.bottom = "20px";
  botFrame.style.right = "20px";
  botFrame.style.width = "400px";
  botFrame.style.height = "600px";
  botFrame.style.border = "none";
  botFrame.style.zIndex = "1000";
  botFrame.style.boxShadow = "0 0 15px rgba(0, 0, 0, 0.2)";
  botFrame.style.borderRadius = "12px";
  document.body.appendChild(botFrame);
})();
