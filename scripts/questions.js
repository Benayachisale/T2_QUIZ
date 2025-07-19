 const questions = [
    // English Grammar (30 questions)
    {
        question: "Which part of speech describes a noun?",
        genre: "grammar",
        score: 3,
        options: ["Verb", "Adjective", "Adverb", "Preposition"],
        correct: 1
    },
    {
        question: "What is the past tense of 'go'?",
        genre: "grammar",
        score: 2,
        options: ["Went", "Gone", "Going", "Goes"],
        correct: 0
    },
    {
        question: "Identify the subject in: 'The teacher explained the lesson.'",
        genre: "grammar",
        score: 4,
        options: ["The lesson", "Explained", "The teacher", "The"],
        correct: 2
    },
    {
        question: "Which is a correct plural form?",
        genre: "grammar",
        score: 2,
        options: ["Childs", "Children", "Childes", "Childrens"],
        correct: 1
    },
    {
        question: "What is the correct form of the verb in: 'She ___ to school every day.'",
        genre: "grammar",
        score: 3,
        options: ["Go", "Goes", "Going", "Gone"],
        correct: 1
    },
    {
        question: "Which word is a pronoun?",
        genre: "grammar",
        score: 3,
        options: ["Run", "He", "Quickly", "Table"],
        correct: 1
    },
    {
        question: "What is the function of a conjunction?",
        genre: "grammar",
        score: 4,
        options: ["Describes a noun", "Joins words or phrases", "Shows action", "Modifies a verb"],
        correct: 1
    },
    {
        question: "Which sentence is in the active voice?",
        genre: "grammar",
        score: 5,
        options: ["The book was read by the student.", "The student read the book.", "The book is being read.", "The book has been read."],
        correct: 1
    },
    {
        question: "Choose the correct article: ___ apple is red.",
        genre: "grammar",
        score: 3,
        options: ["A", "An", "The", "No article"],
        correct: 1
    },
    {
        question: "What is the superlative form of 'good'?",
        genre: "grammar",
        score: 2,
        options: ["Gooder", "Best", "Better", "Goodest"],
        correct: 1
    },
    // ... (20 more grammar questions can be added here for brevity)

    // Mathematics (30 questions)
    {
        question: "What is 25% of 200?",
        genre: "maths",
        score: 3,
        options: ["25", "50", "75", "100"],
        correct: 1
    },
    {
        question: "If a shirt costs 1200 MWK and is discounted by 20%, what is the new price?",
        genre: "maths",
        score: 4,
        options: ["960 MWK", "1000 MWK", "1080 MWK", "900 MWK"],
        correct: 0
    },
    {
        question: "A car travels 240 km in 3 hours. What is its speed in km/h?",
        genre: "maths",
        score: 3,
        options: ["60 km/h", "80 km/h", "90 km/h", "120 km/h"],
        correct: 1
    },
    {
        question: "What is 15% of 500?",
        genre: "maths",
        score: 3,
        options: ["65", "75", "85", "95"],
        correct: 1
    },
    {
        question: "If 2/5 of a number is 40, what is the number?",
        genre: "maths",
        score: 5,
        options: ["80", "100", "120", "140"],
        correct: 1
    },
    {
        question: "A shop offers a 10% discount on a 2000 MWK item. What is the discount amount?",
        genre: "maths",
        score: 3,
        options: ["100 MWK", "150 MWK", "200 MWK", "250 MWK"],
        correct: 2
    },
    {
        question: "If a rate is 50 MWK per hour, how much is earned in 8 hours?",
        genre: "maths",
        score: 3,
        options: ["300 MWK", "350 MWK", "400 MWK", "450 MWK"],
        correct: 2
    },
    {
        question: "What is the percentage increase from 100 to 125?",
        genre: "maths",
        score: 4,
        options: ["20%", "25%", "30%", "35%"],
        correct: 1
    },
    {
        question: "If 3 books cost 900 MWK, what is the cost of 5 books?",
        genre: "maths",
        score: 4,
        options: ["1200 MWK", "1350 MWK", "1500 MWK", "1650 MWK"],
        correct: 2
    },
    {
        question: "A tank fills at a rate of 10 liters per minute. How much fills in 6 minutes?",
        genre: "maths",
        score: 3,
        options: ["50 liters", "60 liters", "70 liters", "80 liters"],
        correct: 1
    },
    // ... (20 more maths questions can be added here)

    // Education Policies (40 questions)
    {
        question: "When was primary education made free and compulsory in Malawi?",
        genre: "education",
        score: 4,
        options: ["1980", "1994", "2000", "2010"],
        correct: 1
    },
    {
        question: "Which body oversees academic standards for all schools in Malawi?",
        genre: "education",
        score: 3,
        options: ["MANEB", "Ministry of Education", "UNICEF", "Mzuzu University"],
        correct: 1
    },
    {
        question: "What is the minimum qualification for primary teacher training in Malawi?",
        genre: "education",
        score: 4,
        options: ["PSLCE", "JCE", "MSCE", "PTCE"],
        correct: 1
    },
    {
        question: "Which organization partners with the Ministry of Education for the Unlocking Talent initiative?",
        genre: "education",
        score: 5,
        options: ["USAID", "UNICEF", "World Bank", "UNESCO"],
        correct: 1
    },
    {
        question: "What is the duration of primary education in Malawi?",
        genre: "education",
        score: 3,
        options: ["6 years", "7 years", "8 years", "9 years"],
        correct: 2
    },
    {
        question: "Which examination is taken at the end of primary school in Malawi?",
        genre: "education",
        score: 3,
        options: ["JCE", "MSCE", "PSLCE", "PTCE"],
        correct: 2
    },
    {
        question: "What is the student-teacher ratio in first grade in Malawi?",
        genre: "education",
        score: 5,
        options: ["1:50", "1:80", "1:100", "1:130"],
        correct: 3
    },
    {
        question: "Which year was the JCE examination reintroduced in Malawi?",
        genre: "education",
        score: 4,
        options: ["2016", "2018", "2020", "2021"],
        correct: 3
    },
    {
        question: "What percentage of the national budget is committed to education in Malawi?",
        genre: "education",
        score: 5,
        options: ["10%", "15%", "18%", "20%"],
        correct: 2
    },
    {
        question: "Which college specializes in secondary teacher education in Malawi?",
        genre: "education",
        score: 4,
        options: ["Domasi College", "Mzuzu University", "Chancellor College", "Lilongwe College"],
        correct: 0
    },
    // ... (30 more education policy questions can be added here)
];