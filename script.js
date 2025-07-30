// Quiz Data
const quizQuestions = {
  dsa: [
    {
      id: 1,
      type: "multiple-choice",
      question: "What is the time complexity of binary search?",
      options: [
        { id: "a", text: "O(n)", emoji: "📈" },
        { id: "b", text: "O(log n)", emoji: "📊" },
        { id: "c", text: "O(n²)", emoji: "📉" },
        { id: "d", text: "O(1)", emoji: "⚡" },
      ],
      correct: "b",
      explanation:
        "Binary search divides the search space in half each time, resulting in O(log n) complexity. This is because we eliminate half of the remaining elements with each comparison.",
    },
    {
      id: 2,
      type: "fill-blank",
      question: "A _____ data structure follows the LIFO (Last In First Out) principle.",
      correct: ["stack", "Stack", "STACK"],
      explanation:
        "Stack follows Last In First Out (LIFO) principle where the last element added is the first to be removed. Common operations include push() and pop().",
    },
    {
      id: 3,
      type: "multi-select",
      question: "Which of the following are sorting algorithms? (Select all that apply)",
      options: [
        { id: "a", text: "QuickSort" },
        { id: "b", text: "BinarySearch" },
        { id: "c", text: "MergeSort" },
        { id: "d", text: "BubbleSort" },
        { id: "e", text: "LinearSearch" },
      ],
      correct: ["a", "c", "d"],
      explanation:
        "QuickSort, MergeSort, and BubbleSort are sorting algorithms that arrange elements in order. BinarySearch and LinearSearch are searching algorithms used to find elements.",
    },
    {
      id: 4,
      type: "true-false",
      question: "A linked list allows random access to its elements.",
      correct: false,
      explanation:
        "Linked lists only allow sequential access. To reach the nth element, you must traverse from the head through n-1 nodes. Arrays allow random access with O(1) time complexity.",
    },
    {
      id: 5,
      type: "code-completion",
      question: "Complete the code for binary search:",
      code: `def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return ____
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1`,
      correct: ["mid", "middle", "index"],
      explanation:
        "Binary search returns the index (mid) when the target element is found. This represents the position of the element in the array.",
    },
  ],
  os: [
    {
      id: 1,
      type: "multiple-choice",
      question: "What is a deadlock in operating systems?",
      options: [
        { id: "a", text: "Process waiting indefinitely", emoji: "⏳" },
        { id: "b", text: "Memory overflow", emoji: "💾" },
        { id: "c", text: "CPU overload", emoji: "🔥" },
        { id: "d", text: "Network failure", emoji: "📡" },
      ],
      correct: "a",
      explanation:
        "Deadlock occurs when two or more processes wait indefinitely for resources held by each other, creating a circular dependency that prevents any process from proceeding.",
    },
    {
      id: 2,
      type: "multi-select",
      question: "Which are the four necessary conditions for deadlock? (Select all that apply)",
      options: [
        { id: "a", text: "Mutual Exclusion" },
        { id: "b", text: "Hold and Wait" },
        { id: "c", text: "Preemption" },
        { id: "d", text: "Circular Wait" },
        { id: "e", text: "No Preemption" },
      ],
      correct: ["a", "b", "d", "e"],
      explanation:
        "The four Coffman conditions for deadlock are: Mutual Exclusion (resources can't be shared), Hold and Wait (process holds resources while waiting), No Preemption (resources can't be forcibly taken), and Circular Wait (circular chain of waiting processes).",
    },
    {
      id: 3,
      type: "fill-blank",
      question: "_____ is a memory management technique that uses hard disk space to extend available RAM.",
      correct: ["Virtual memory", "virtual memory", "Virtual Memory", "VIRTUAL MEMORY"],
      explanation:
        "Virtual memory allows the system to use hard disk space as an extension of RAM, enabling programs larger than physical memory to run by swapping pages between RAM and disk.",
    },
    {
      id: 4,
      type: "true-false",
      question: "Round Robin scheduling is a non-preemptive algorithm.",
      correct: false,
      explanation:
        "Round Robin is a preemptive scheduling algorithm that uses time slicing. Each process gets a fixed time quantum, and if it doesn't complete within that time, it's preempted and moved to the back of the queue.",
    },
    {
      id: 5,
      type: "multiple-choice",
      question: "Which system call is used to create a new process in Unix?",
      options: [
        { id: "a", text: "exec()", emoji: "🔄" },
        { id: "b", text: "fork()", emoji: "🍴" },
        { id: "c", text: "wait()", emoji: "⏰" },
        { id: "d", text: "exit()", emoji: "🚪" },
      ],
      correct: "b",
      explanation:
        "fork() system call creates a new process by duplicating the current process. The new process (child) gets a copy of the parent's memory space and both processes continue execution from the fork() point.",
    },
  ],
  dbms: [
    {
      id: 1,
      type: "fill-blank",
      question: "ACID stands for Atomicity, Consistency, Isolation, and _____.",
      correct: ["Durability", "durability", "DURABILITY"],
      explanation:
        "ACID properties ensure reliable database transactions: Atomicity (all or nothing), Consistency (valid state), Isolation (concurrent transactions don't interfere), and Durability (committed changes persist).",
    },
    {
      id: 2,
      type: "multi-select",
      question: "Which are types of database keys? (Select all that apply)",
      options: [
        { id: "a", text: "Primary Key" },
        { id: "b", text: "Foreign Key" },
        { id: "c", text: "Candidate Key" },
        { id: "d", text: "Super Key" },
        { id: "e", text: "Master Key" },
      ],
      correct: ["a", "b", "c", "d"],
      explanation:
        "Primary Key (unique identifier), Foreign Key (references another table), Candidate Key (potential primary key), and Super Key (set of attributes that uniquely identify) are valid database key types. Master Key is not a standard database key type.",
    },
    {
      id: 3,
      type: "code-completion",
      question: "Complete the SQL query to select all columns from users table:",
      code: `______ * FROM users;`,
      correct: ["SELECT", "select", "Select"],
      explanation:
        "SELECT statement is used to retrieve data from database tables. The asterisk (*) means all columns, and FROM specifies the source table.",
    },
    {
      id: 4,
      type: "true-false",
      question: "Normalization increases data redundancy in databases.",
      correct: false,
      explanation:
        "Normalization reduces data redundancy and improves data integrity by organizing data efficiently into separate related tables, eliminating duplicate information.",
    },
    {
      id: 5,
      type: "multiple-choice",
      question: "Which normal form eliminates transitive dependencies?",
      options: [
        { id: "a", text: "1NF", emoji: "1️⃣" },
        { id: "b", text: "2NF", emoji: "2️⃣" },
        { id: "c", text: "3NF", emoji: "3️⃣" },
        { id: "d", text: "BCNF", emoji: "🔄" },
      ],
      correct: "c",
      explanation:
        "Third Normal Form (3NF) eliminates transitive dependencies where a non-key attribute depends on another non-key attribute. This ensures that non-key attributes depend only on the primary key.",
    },
  ],
  networks: [
    {
      id: 1,
      type: "multiple-choice",
      question: "What layer does HTTP operate on in the OSI model?",
      options: [
        { id: "a", text: "Physical Layer", emoji: "🔌" },
        { id: "b", text: "Network Layer", emoji: "🌍" },
        { id: "c", text: "Transport Layer", emoji: "🚚" },
        { id: "d", text: "Application Layer", emoji: "📱" },
      ],
      correct: "d",
      explanation:
        "HTTP operates at the Application Layer (Layer 7) of the OSI model, providing a protocol for web browsers and servers to communicate and transfer web pages.",
    },
    {
      id: 2,
      type: "fill-blank",
      question: "_____ translates human-readable domain names to IP addresses.",
      correct: ["DNS", "dns", "Domain Name System", "domain name system"],
      explanation:
        "DNS (Domain Name System) acts like the internet's phone book, translating human-readable domain names (like google.com) into IP addresses that computers use to communicate.",
    },
    {
      id: 3,
      type: "multi-select",
      question: "Which are characteristics of UDP? (Select all that apply)",
      options: [
        { id: "a", text: "Connectionless" },
        { id: "b", text: "Reliable" },
        { id: "c", text: "Fast" },
        { id: "d", text: "Ordered delivery" },
        { id: "e", text: "Low overhead" },
      ],
      correct: ["a", "c", "e"],
      explanation:
        "UDP is connectionless (no connection establishment), fast (minimal processing), and has low overhead (small header). It's unreliable and doesn't guarantee ordered delivery, making it suitable for real-time applications.",
    },
    {
      id: 4,
      type: "true-false",
      question: "TCP provides reliable data transmission.",
      correct: true,
      explanation:
        "TCP (Transmission Control Protocol) provides reliable, ordered, and error-checked delivery of data through acknowledgments, retransmissions, and flow control mechanisms.",
    },
    {
      id: 5,
      type: "code-completion",
      question: "Complete the subnet mask for a /24 network:",
      code: `Subnet mask: 255.255.255.____`,
      correct: ["0", "0.0", "000"],
      explanation:
        "A /24 network has subnet mask 255.255.255.0, indicating 24 network bits and 8 host bits, allowing for 254 usable host addresses (256 - 2 for network and broadcast).",
    },
  ],
  oop: [
    {
      id: 1,
      type: "fill-blank",
      question: "_____ is the OOP principle that hides implementation details from the user.",
      correct: ["Encapsulation", "encapsulation", "ENCAPSULATION"],
      explanation:
        "Encapsulation bundles data and methods together while hiding internal implementation details from external access, providing a clean interface and data protection.",
    },
    {
      id: 2,
      type: "multi-select",
      question: "Which are the four pillars of OOP? (Select all that apply)",
      options: [
        { id: "a", text: "Encapsulation" },
        { id: "b", text: "Inheritance" },
        { id: "c", text: "Polymorphism" },
        { id: "d", text: "Abstraction" },
        { id: "e", text: "Composition" },
      ],
      correct: ["a", "b", "c", "d"],
      explanation:
        "The four pillars of OOP are: Encapsulation (data hiding), Inheritance (code reuse), Polymorphism (multiple forms), and Abstraction (essential features). Composition is a design principle but not a fundamental pillar.",
    },
    {
      id: 3,
      type: "true-false",
      question: "Method overloading is an example of compile-time polymorphism.",
      correct: true,
      explanation:
        "Method overloading is resolved at compile time based on method signatures (name, parameters), making it compile-time polymorphism. Runtime polymorphism involves method overriding with virtual functions.",
    },
    {
      id: 4,
      type: "code-completion",
      question: "Complete the Java code for method overriding:",
      code: `class Parent {
    void display() { System.out.println("Parent"); }
}
class Child extends Parent {
    ______ void display() { System.out.println("Child"); }
}`,
      correct: ["@Override", "@override", "Override"],
      explanation:
        "@Override annotation indicates that a method is overriding a parent class method, helping catch errors at compile time and improving code readability.",
    },
    {
      id: 5,
      type: "multiple-choice",
      question: "What is the difference between abstract class and interface in Java?",
      options: [
        { id: "a", text: "No difference", emoji: "🤷" },
        { id: "b", text: "Abstract class can have concrete methods", emoji: "🏗️" },
        { id: "c", text: "Interface can have constructors", emoji: "🔧" },
        { id: "d", text: "Abstract class supports multiple inheritance", emoji: "👨‍👩‍👧‍👦" },
      ],
      correct: "b",
      explanation:
        "Abstract classes can have both abstract and concrete methods, constructors, and instance variables. Interfaces (before Java 8) could only have abstract methods and constants, and support multiple inheritance.",
    },
  ],
}

// Subject configurations
const subjects = {
  dsa: { name: "Data Structures & Algorithms", emoji: "🔢", color: "dsa-color" },
  os: { name: "Operating Systems", emoji: "💻", color: "os-color" },
  dbms: { name: "Database Management", emoji: "🗄️", color: "dbms-color" },
  networks: { name: "Computer Networks", emoji: "🌐", color: "networks-color" },
  oop: { name: "Object-Oriented Programming", emoji: "🎯", color: "oop-color" },
  mixed: { name: "Mixed Questions", emoji: "🎲", color: "mixed-color" },
}

// Global state
let currentState = {
  selectedSubject: null,
  currentQuestions: [],
  currentQuestionIndex: 0,
  answers: [],
  score: 0,
  reviewIndex: 0,
  userAnswers: {
    selected: "",
    fill: "",
    multiSelect: [],
  },
  timer: {
    enabled: true,
    duration: 60, // seconds
    remaining: 60,
    interval: null,
    startTime: null,
    questionTimes: [],
    totalTime: 0,
  },
}

// Utility functions
function showScreen(screenId) {
  document.querySelectorAll(".screen").forEach((screen) => {
    screen.classList.remove("active")
  })
  document.getElementById(screenId).classList.add("active")
}

function getQuestionsForSubject(subject) {
  if (subject === "mixed") {
    const allQuestions = Object.values(quizQuestions).flat()
    return shuffleArray(allQuestions).slice(0, 8)
  }
  return quizQuestions[subject] || []
}

function shuffleArray(array) {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

function checkAnswer(question, userAnswer) {
  switch (question.type) {
    case "multiple-choice":
    case "true-false":
      return userAnswer === question.correct
    case "fill-blank":
    case "code-completion":
      return question.correct.some((correct) => userAnswer.toLowerCase().trim() === correct.toLowerCase().trim())
    case "multi-select":
      const correctSet = new Set(question.correct)
      const userSet = new Set(userAnswer)
      return correctSet.size === userSet.size && [...correctSet].every((x) => userSet.has(x))
    default:
      return false
  }
}

function formatUserAnswer(question, userAnswer) {
  switch (question.type) {
    case "multiple-choice":
      const option = question.options.find((opt) => opt.id === userAnswer)
      return option ? option.text : "No answer"
    case "true-false":
      return userAnswer === "true" ? "True" : userAnswer === "false" ? "False" : "No answer"
    case "fill-blank":
    case "code-completion":
      return userAnswer || "No answer"
    case "multi-select":
      if (Array.isArray(userAnswer) && userAnswer.length > 0) {
        return question.options
          .filter((opt) => userAnswer.includes(opt.id))
          .map((opt) => opt.text)
          .join(", ")
      }
      return "No answer"
    default:
      return "No answer"
  }
}

function formatCorrectAnswer(question) {
  switch (question.type) {
    case "multiple-choice":
      const option = question.options.find((opt) => opt.id === question.correct)
      return option ? option.text : "Unknown"
    case "true-false":
      return question.correct ? "True" : "False"
    case "fill-blank":
    case "code-completion":
      return Array.isArray(question.correct) ? question.correct[0] : question.correct
    case "multi-select":
      return question.options
        .filter((opt) => question.correct.includes(opt.id))
        .map((opt) => opt.text)
        .join(", ")
    default:
      return "Unknown"
  }
}

function getScoreEmoji(percentage) {
  if (percentage >= 80) return "🔥"
  if (percentage >= 60) return "✨"
  if (percentage >= 40) return "💫"
  return "🌟"
}

function getScoreMessage(percentage) {
  if (percentage >= 80) return "Excellent! You're ready for interviews! 🚀"
  if (percentage >= 60) return "Good job! Keep practicing! 💪"
  if (percentage >= 40) return "Not bad! Review the concepts! 📚"
  return "Keep studying! You'll get there! 💕"
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${mins}:${secs.toString().padStart(2, "0")}`
}

// Timer functions
function startTimer() {
  if (!currentState.timer.enabled) return

  currentState.timer.remaining = currentState.timer.duration
  currentState.timer.startTime = Date.now()
  updateTimerDisplay()

  currentState.timer.interval = setInterval(() => {
    currentState.timer.remaining--
    updateTimerDisplay()

    if (currentState.timer.remaining <= 0) {
      handleTimeUp()
    }
  }, 1000)
}

function stopTimer() {
  if (currentState.timer.interval) {
    clearInterval(currentState.timer.interval)
    currentState.timer.interval = null
  }

  // Record time taken for this question
  if (currentState.timer.startTime) {
    const timeTaken = currentState.timer.duration - currentState.timer.remaining
    currentState.timer.questionTimes.push(timeTaken)
    currentState.timer.totalTime += timeTaken
  }
}

function updateTimerDisplay() {
  const timerDisplay = document.getElementById("timer-display")
  const timerSeconds = document.getElementById("timer-seconds")
  const timerProgress = document.getElementById("timer-progress")

  if (!currentState.timer.enabled) {
    timerDisplay.style.display = "none"
    return
  }

  timerDisplay.style.display = "flex"
  timerSeconds.textContent = currentState.timer.remaining

  // Update progress circle
  const percentage = (currentState.timer.remaining / currentState.timer.duration) * 100
  const circumference = 2 * Math.PI * 45 // radius = 45
  const offset = circumference - (percentage / 100) * circumference
  timerProgress.style.strokeDashoffset = offset

  // Change color based on remaining time
  timerProgress.classList.remove("warning", "danger")
  if (currentState.timer.remaining <= 10) {
    timerProgress.classList.add("danger")
  } else if (currentState.timer.remaining <= 20) {
    timerProgress.classList.add("warning")
  }
}

function handleTimeUp() {
  stopTimer()
  // Auto-submit with current answer (or empty if none selected)
  handleNextQuestion()
}

// Screen functions
function initSubjectSelection() {
  const subjectCards = document.querySelectorAll(".subject-card")
  subjectCards.forEach((card) => {
    card.addEventListener("click", () => {
      const subject = card.dataset.subject
      selectSubject(subject)
    })
  })
}

function selectSubject(subject) {
  currentState.selectedSubject = subject
  currentState.currentQuestions = getQuestionsForSubject(subject)

  // Update start screen
  const subjectInfo = subjects[subject]
  document.getElementById("start-subject-title").textContent = `${subjectInfo.name} ${subjectInfo.emoji}`
  document.getElementById("start-subject-icon").textContent = subjectInfo.emoji
  document.getElementById("start-subject-icon").className = `subject-icon ${subjectInfo.color}`
  document.getElementById("question-count").textContent = currentState.currentQuestions.length

  showScreen("quiz-start")
}

function initQuizStart() {
  // Timer option buttons
  const timerButtons = document.querySelectorAll(".timer-btn")
  timerButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      timerButtons.forEach((b) => b.classList.remove("active"))
      btn.classList.add("active")

      const time = Number.parseInt(btn.dataset.time)
      currentState.timer.duration = time
      currentState.timer.enabled = time > 0

      // Update display
      const timerSetting = document.getElementById("timer-setting")
      if (time === 0) {
        timerSetting.textContent = "No timer"
      } else if (time >= 60) {
        timerSetting.textContent = `${Math.floor(time / 60)}min per question`
      } else {
        timerSetting.textContent = `${time}s per question`
      }
    })
  })

  document.getElementById("start-quiz-btn").addEventListener("click", startQuiz)
  document.getElementById("back-to-subjects-btn").addEventListener("click", () => {
    showScreen("subject-selection")
  })
}

function startQuiz() {
  currentState.currentQuestionIndex = 0
  currentState.answers = []
  currentState.score = 0
  currentState.timer.questionTimes = []
  currentState.timer.totalTime = 0
  resetUserAnswers()
  showScreen("quiz-screen")
  displayQuestion()
  startTimer()
}

function resetUserAnswers() {
  currentState.userAnswers = {
    selected: "",
    fill: "",
    multiSelect: [],
  }
}

function displayQuestion() {
  const question = currentState.currentQuestions[currentState.currentQuestionIndex]
  const questionNum = currentState.currentQuestionIndex + 1
  const totalQuestions = currentState.currentQuestions.length
  const progress = (questionNum / totalQuestions) * 100

  // Update header
  document.getElementById("question-badge").textContent = `QUESTION ${questionNum}/${totalQuestions}`
  document.getElementById("progress-text").textContent = `${Math.round(progress)}% PROGRESS`
  document.getElementById("progress-fill").style.width = `${progress}%`

  // Update question content
  document.getElementById("question-type").textContent = question.type.toUpperCase().replace("-", "_")
  document.getElementById("question-title").textContent = question.question

  // Handle code block
  const codeBlock = document.getElementById("code-block")
  if (question.code) {
    document.getElementById("code-content").textContent = question.code
    codeBlock.style.display = "block"
  } else {
    codeBlock.style.display = "none"
  }

  // Render question based on type
  renderQuestion(question)

  // Update next button
  updateNextButton()

  // Update timer display
  updateTimerDisplay()
}

function renderQuestion(question) {
  const answersSection = document.getElementById("answers-section")
  answersSection.innerHTML = ""

  switch (question.type) {
    case "multiple-choice":
      renderMultipleChoice(question, answersSection)
      break
    case "true-false":
      renderTrueFalse(question, answersSection)
      break
    case "fill-blank":
    case "code-completion":
      renderFillBlank(question, answersSection)
      break
    case "multi-select":
      renderMultiSelect(question, answersSection)
      break
  }
}

function renderMultipleChoice(question, container) {
  question.options.forEach((option) => {
    const optionDiv = document.createElement("div")
    optionDiv.className = "answer-option"
    optionDiv.innerHTML = `
            <div class="answer-emoji">${option.emoji}</div>
            <div class="answer-text">${option.text}</div>
            <div class="answer-check" style="display: none;">✅</div>
        `

    optionDiv.addEventListener("click", () => {
      // Remove previous selection
      container.querySelectorAll(".answer-option").forEach((opt) => {
        opt.classList.remove("selected")
        opt.querySelector(".answer-check").style.display = "none"
      })

      // Add new selection
      optionDiv.classList.add("selected")
      optionDiv.querySelector(".answer-check").style.display = "block"
      currentState.userAnswers.selected = option.id
      updateNextButton()
    })

    container.appendChild(optionDiv)
  })
}

function renderTrueFalse(question, container) {
  const gridDiv = document.createElement("div")
  gridDiv.className = "true-false-grid"

  const options = [
    { id: "true", text: "True", emoji: "✅" },
    { id: "false", text: "False", emoji: "❌" },
  ]

  options.forEach((option) => {
    const optionDiv = document.createElement("div")
    optionDiv.className = "true-false-option"
    optionDiv.innerHTML = `
            <div class="tf-emoji">${option.emoji}</div>
            <div class="tf-text">${option.text}</div>
        `

    optionDiv.addEventListener("click", () => {
      // Remove previous selection
      gridDiv.querySelectorAll(".true-false-option").forEach((opt) => {
        opt.classList.remove("selected")
      })

      // Add new selection
      optionDiv.classList.add("selected")
      currentState.userAnswers.selected = option.id
      updateNextButton()
    })

    gridDiv.appendChild(optionDiv)
  })

  container.appendChild(gridDiv)
}

function renderFillBlank(question, container) {
  const input = document.createElement("input")
  input.type = "text"
  input.className = "fill-input"
  input.placeholder = "Type your answer here..."
  input.value = currentState.userAnswers.fill

  input.addEventListener("input", (e) => {
    currentState.userAnswers.fill = e.target.value
    updateNextButton()
  })

  container.appendChild(input)
}

function renderMultiSelect(question, container) {
  const infoDiv = document.createElement("div")
  infoDiv.className = "multi-select-info"
  infoDiv.textContent = "Select all correct answers:"
  container.appendChild(infoDiv)

  question.options.forEach((option) => {
    const optionDiv = document.createElement("div")
    optionDiv.className = "checkbox-option"

    const checkbox = document.createElement("div")
    checkbox.className = "checkbox"

    const label = document.createElement("div")
    label.className = "checkbox-label"
    label.textContent = option.text

    optionDiv.appendChild(checkbox)
    optionDiv.appendChild(label)

    optionDiv.addEventListener("click", () => {
      const isChecked = currentState.userAnswers.multiSelect.includes(option.id)

      if (isChecked) {
        currentState.userAnswers.multiSelect = currentState.userAnswers.multiSelect.filter((id) => id !== option.id)
        checkbox.classList.remove("checked")
      } else {
        currentState.userAnswers.multiSelect.push(option.id)
        checkbox.classList.add("checked")
      }

      updateNextButton()
    })

    // Restore previous selection
    if (currentState.userAnswers.multiSelect.includes(option.id)) {
      checkbox.classList.add("checked")
    }

    container.appendChild(optionDiv)
  })
}

function updateNextButton() {
  const nextBtn = document.getElementById("next-question-btn")
  const question = currentState.currentQuestions[currentState.currentQuestionIndex]
  let isValid = false

  switch (question.type) {
    case "multiple-choice":
    case "true-false":
      isValid = currentState.userAnswers.selected !== ""
      break
    case "fill-blank":
    case "code-completion":
      isValid = currentState.userAnswers.fill.trim() !== ""
      break
    case "multi-select":
      isValid = currentState.userAnswers.multiSelect.length > 0
      break
  }

  nextBtn.disabled = !isValid

  // Update button text for last question
  if (currentState.currentQuestionIndex === currentState.currentQuestions.length - 1) {
    nextBtn.textContent = "SUBMIT_ASSESSMENT()"
  } else {
    nextBtn.textContent = "NEXT_QUESTION()"
  }
}

function initQuizScreen() {
  document.getElementById("next-question-btn").addEventListener("click", handleNextQuestion)
}

function handleNextQuestion() {
  stopTimer()

  const question = currentState.currentQuestions[currentState.currentQuestionIndex]
  let currentAnswer

  // Get current answer based on question type
  switch (question.type) {
    case "multiple-choice":
    case "true-false":
      currentAnswer = currentState.userAnswers.selected
      break
    case "fill-blank":
    case "code-completion":
      currentAnswer = currentState.userAnswers.fill
      break
    case "multi-select":
      currentAnswer = [...currentState.userAnswers.multiSelect]
      break
  }

  // Store answer
  currentState.answers.push(currentAnswer)

  // Check if correct
  if (checkAnswer(question, currentAnswer)) {
    currentState.score++
  }

  // Move to next question or show results
  if (currentState.currentQuestionIndex < currentState.currentQuestions.length - 1) {
    currentState.currentQuestionIndex++
    resetUserAnswers()
    displayQuestion()
    startTimer()
  } else {
    showResults()
  }
}

function showResults() {
  const totalQuestions = currentState.currentQuestions.length
  const percentage = (currentState.score / totalQuestions) * 100

  // Update results display
  document.getElementById("score-emoji").textContent = getScoreEmoji(percentage)
  document.getElementById("score-display").textContent = `${currentState.score}/${totalQuestions}`
  document.getElementById("accuracy-badge").textContent = `${Math.round(percentage)}% ACCURACY`
  document.getElementById("score-message").textContent = getScoreMessage(percentage)
  document.getElementById("correct-count").textContent = currentState.score
  document.getElementById("incorrect-count").textContent = totalQuestions - currentState.score

  // Update accuracy badge color
  const accuracyBadge = document.getElementById("accuracy-badge")
  const subjectInfo = subjects[currentState.selectedSubject]
  accuracyBadge.className = `accuracy-badge ${subjectInfo.color}`

  // Show time stats if timer was enabled
  const timeStats = document.getElementById("time-stats")
  if (currentState.timer.enabled && currentState.timer.totalTime > 0) {
    timeStats.style.display = "flex"
    document.getElementById("total-time").textContent = formatTime(currentState.timer.totalTime)
    const avgTime = Math.round(currentState.timer.totalTime / totalQuestions)
    document.getElementById("avg-time").textContent = formatTime(avgTime)
  } else {
    timeStats.style.display = "none"
  }

  // Generate summary
  generateSummary()

  showScreen("results-screen")
}

function generateSummary() {
  const summaryList = document.getElementById("summary-list")
  summaryList.innerHTML = ""

  currentState.currentQuestions.forEach((question, index) => {
    const isCorrect = checkAnswer(question, currentState.answers[index])

    const summaryItem = document.createElement("div")
    summaryItem.className = `summary-item ${isCorrect ? "correct" : "incorrect"}`
    summaryItem.innerHTML = `
            <span class="summary-question">Q${index + 1}: ${question.question.substring(0, 50)}...</span>
            <span class="summary-status">${isCorrect ? "✅" : "❌"}</span>
        `

    summaryList.appendChild(summaryItem)
  })
}

function initResultsScreen() {
  document.getElementById("review-answers-btn").addEventListener("click", () => {
    currentState.reviewIndex = 0
    showReview()
  })

  document.getElementById("restart-quiz-btn").addEventListener("click", () => {
    resetQuiz()
    showScreen("quiz-start")
  })

  document.getElementById("new-module-btn").addEventListener("click", () => {
    resetQuiz()
    showScreen("subject-selection")
  })
}

function resetQuiz() {
  // Stop any running timer
  if (currentState.timer.interval) {
    clearInterval(currentState.timer.interval)
  }

  currentState = {
    selectedSubject: null,
    currentQuestions: [],
    currentQuestionIndex: 0,
    answers: [],
    score: 0,
    reviewIndex: 0,
    userAnswers: {
      selected: "",
      fill: "",
      multiSelect: [],
    },
    timer: {
      enabled: true,
      duration: 60,
      remaining: 60,
      interval: null,
      startTime: null,
      questionTimes: [],
      totalTime: 0,
    },
  }
}

function showReview() {
  displayReviewQuestion()
  showScreen("review-screen")
}

function displayReviewQuestion() {
  const question = currentState.currentQuestions[currentState.reviewIndex]
  const userAnswer = currentState.answers[currentState.reviewIndex]
  const isCorrect = checkAnswer(question, userAnswer)
  const reviewNum = currentState.reviewIndex + 1
  const totalQuestions = currentState.currentQuestions.length
  const progress = (reviewNum / totalQuestions) * 100

  // Update header
  document.getElementById("review-badge").textContent = `REVIEW ${reviewNum}/${totalQuestions}`
  document.getElementById("review-progress-fill").style.width = `${progress}%`

  const correctnessBadge = document.getElementById("correctness-badge")
  correctnessBadge.textContent = isCorrect ? "CORRECT ✅" : "INCORRECT ❌"
  correctnessBadge.className = `correctness-badge ${isCorrect ? "correct" : "incorrect"}`

  // Update question content
  document.getElementById("review-question-type").textContent = question.type.toUpperCase().replace("-", "_")
  document.getElementById("review-question-title").textContent = question.question

  // Handle code block
  const codeBlock = document.getElementById("review-code-block")
  if (question.code) {
    document.getElementById("review-code-content").textContent = question.code
    codeBlock.style.display = "block"
  } else {
    codeBlock.style.display = "none"
  }

  // Update answers
  const userAnswerBox = document.getElementById("user-answer-box")
  userAnswerBox.className = `answer-box user-answer ${isCorrect ? "correct" : "incorrect"}`
  userAnswerBox.querySelector(".answer-icon").textContent = isCorrect ? "✅" : "❌"
  document.getElementById("user-answer-text").textContent = formatUserAnswer(question, userAnswer)
  document.getElementById("correct-answer-text").textContent = formatCorrectAnswer(question)

  // Update explanation
  document.getElementById("explanation-text").textContent = question.explanation

  // Update navigation
  updateReviewNavigation()
}

function updateReviewNavigation() {
  const prevBtn = document.getElementById("prev-review-btn")
  const nextBtn = document.getElementById("next-review-btn")
  const backBtn = document.getElementById("back-to-results-btn")
  const counter = document.getElementById("review-counter")

  prevBtn.disabled = currentState.reviewIndex === 0
  counter.textContent = `${currentState.reviewIndex + 1} / ${currentState.currentQuestions.length}`

  if (currentState.reviewIndex === currentState.currentQuestions.length - 1) {
    nextBtn.style.display = "none"
    backBtn.style.display = "inline-block"
  } else {
    nextBtn.style.display = "inline-block"
    backBtn.style.display = "none"
  }
}

function initReviewScreen() {
  document.getElementById("prev-review-btn").addEventListener("click", () => {
    if (currentState.reviewIndex > 0) {
      currentState.reviewIndex--
      displayReviewQuestion()
    }
  })

  document.getElementById("next-review-btn").addEventListener("click", () => {
    if (currentState.reviewIndex < currentState.currentQuestions.length - 1) {
      currentState.reviewIndex++
      displayReviewQuestion()
    }
  })

  document.getElementById("back-to-results-btn").addEventListener("click", () => {
    showScreen("results-screen")
  })
}

// Initialize the application
function init() {
  initSubjectSelection()
  initQuizStart()
  initQuizScreen()
  initResultsScreen()
  initReviewScreen()

  // Show initial screen
  showScreen("subject-selection")
}

// Start the application when DOM is loaded
document.addEventListener("DOMContentLoaded", init)
