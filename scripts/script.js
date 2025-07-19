 document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('user'));
    
    if (window.location.pathname.includes('index.html') && !user) {
        window.location.href = 'form.html';
    }

    if (window.location.pathname.includes('form.html')) {
        const form = document.getElementById('user-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const userData = {
                name: document.getElementById('name').value,
                ipte: document.getElementById('ipte').value,
                district: document.getElementById('district').value
            };
            localStorage.setItem('user', JSON.stringify(userData));
            window.location.href = 'index.html';
        });
    }

    if (window.location.pathname.includes('index.html') && user) {
        document.getElementById('user-info').innerHTML = `
            Welcome, ${user.name} (IPTE ${user.ipte}, ${user.district})
        `;
        
        let currentQuestionIndex = 0;
        const questionElement = document.getElementById('question');
        const optionsElement = document.getElementById('options');
        const feedbackElement = document.getElementById('feedback');
        const nextButton = document.getElementById('next-btn');

        function loadQuestion() {
            const q = questions[currentQuestionIndex];
            questionElement.textContent = q.question;
            optionsElement.innerHTML = '';
            q.options.forEach((option, index) => {
                const div = document.createElement('div');
                div.classList.add('option');
                div.textContent = option;
                div.addEventListener('click', () => selectOption(index));
                optionsElement.appendChild(div);
            });
            feedbackElement.textContent = '';
            nextButton.disabled = true;
        }

        function selectOption(selectedIndex) {
            const q = questions[currentQuestionIndex];
            const options = optionsElement.children;
            for (let i = 0; i < options.length; i++) {
                options[i].classList.remove('selected');
            }
            options[selectedIndex].classList.add('selected');
            if (selectedIndex === q.correct) {
                feedbackElement.textContent = 'Correct!';
                feedbackElement.style.color = '#2ecc71';
            } else {
                feedbackElement.textContent = `Incorrect. The correct answer is: ${q.options[q.correct]}`;
                feedbackElement.style.color = '#e74c3c';
            }
            nextButton.disabled = false;
        }

        nextButton.addEventListener('click', () => {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                loadQuestion();
            } else {
                questionElement.textContent = 'Quiz Completed!';
                optionsElement.innerHTML = '';
                feedbackElement.textContent = '';
                nextButton.style.display = 'none';
            }
        });

        loadQuestion();
    }
});