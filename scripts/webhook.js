const webhookURL = "https://discord.com/api/webhooks/1155592537692712961/m6tmNHH_M1cx2nqb1T9VJMqFDZhRJXs9tmDgptetqmPLWed8AJfnxl86zk32uR7QAuSv"; // Replace this

async function sendMessage() {
    const message = document.getElementById("message").value.trim();
    const status = document.getElementById("status");

    if (!message) {
        status.innerText = "⚠️ Please enter a message.";
        status.style.color = "#ffaa00";
        return;
    }

    try {
        const response = await fetch(webhookURL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ content: message })
        });

    if (response.ok) {
          status.innerText = "✅ Message sent successfully!";
          status.style.color = "#00ff99";
          document.getElementById("message").value = "";
    } else {
          status.innerText = "❌ Failed to send message.";
          status.style.color = "#ff4444";
    }
      } catch (error) {
        status.innerText = "❌ Error sending request.";
        status.style.color = "#ff4444";
      }
    }
    function checkEnter(event) {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault(); // Prevents newline
            sendMessage();
        }
}