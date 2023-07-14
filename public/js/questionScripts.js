const inpForm = document.querySelector(".inputAnswer");
const h3 = document.querySelector(".answerResult");
if (inpForm) {
  inpForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const { answer, method, action } = event.target;
    const result = await fetch(action, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        answer: answer.value,
        id: event.target.dataset.id,
      }),
    });
    const data = await result.json();
    h3.innerHTML = data.message;
  });
}
