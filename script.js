// =====================================================
// AKTU RESULT / SGPA CALCULATOR
// Branch-wise Subjects + Labs
// CSE | IT | ME | CE
// =====================================================


// =====================================================
// DARK MODE
// =====================================================

const toggle = document.getElementById("modeToggle");

if (toggle) {
    toggle.addEventListener("change", () => {
        document.body.classList.toggle("dark");
    });
}


// =====================================================
// SUBJECT HELPER
// =====================================================

const S = (name, credit = 0) => ({
    name,
    credit
});


// =====================================================
// COMMON 1ST YEAR
// =====================================================
// First year is kept common for all branches.
// If your college follows a different scheme,
// you can edit these subjects easily.
// =====================================================

const commonYear1 = {

    sem1: [
        S("Engineering Mathematics-I", 4),
        S("Engineering Physics", 4),
        S("Programming for Problem Solving", 3),
        S("Basic Electrical Engineering", 3),
        S("Environment and Ecology", 3),

        S("Engineering Physics Lab", 1),
        S("Programming for Problem Solving Lab", 1),
        S("Basic Electrical Engineering Lab", 1),
        S("Engineering Graphics", 2)
    ],

    sem2: [
        S("Engineering Mathematics-II", 4),
        S("Engineering Chemistry", 4),
        S("Fundamentals of Mechanical Engineering", 3),
        S("Fundamentals of Electronics Engineering", 3),
        S("Soft Skills", 3),

        S("Engineering Chemistry Lab", 1),
        S("Fundamentals of Electronics Engineering Lab", 1),
        S("English Language Lab", 1),
        S("Workshop Practice", 2)
    ]

};


// =====================================================
// CSE
// =====================================================

const CSE = {

    1: commonYear1,

    2: {

        sem3: [
            S("Data Structures", 4),
            S("Computer Organization and Architecture", 4),
            S("Discrete Structures and Theory of Logic", 4),
            S("Technical Communication", 3),
            S("Mathematics-IV", 4),
            S("Cyber Security", 3),
            S("Python Programming", 2),

            S("Data Structures Lab", 1),
            S("Computer Organization and Architecture Lab", 1),
            S("Python Programming Lab", 1),
            S("Mini Project / Internship", 2)
        ],

        sem4: [
            S("Operating System", 4),
            S("Theory of Automata and Formal Languages", 4),
            S("Object Oriented Programming", 3),
            S("Universal Human Values and Professional Ethics", 3),
            S("Technical Communication", 3),

            S("Operating System Lab", 1),
            S("Object Oriented Programming Lab", 1),
            S("Web Designing Workshop", 1),
            S("Mini Project", 2)
        ]

    },

    3: {

        sem5: [
            S("Database Management System", 4),
            S("Design and Analysis of Algorithms", 4),
            S(" Data analytics & Visualization ", 4),
            S("Department Elective-I", 3),
            S("Department Elective-II", 3),
            S("Essence of Indian Traditional Knowledge", 0),

            S("DBMS Lab", 1),
            S("DAA Lab", 1),
            S("DAV", 1),
        
            S("Mini Project / Internship", 2)
        ],

        sem6: [
            S("Software Engineering", 4),
            S("Computer Networks", 4),
            S("Compiler Design", 4),
            S("Department Elective-II", 3),
            S("Open Elective-I", 3),
            S("Constitution of India", 0),

            S("Software Engineering Lab", 1),
            S("Computer Networks Lab", 1),
            S("Compiler Design Lab", 1),
    
        ]

    },

    4: {

        sem7: [
            S("Artificial Intelligence", 3),
            S("Department Elective-IV", 3),
            S("Open Elective-II", 3),

            S("Artificial Intelligence Lab", 1),
            S("Project-I", 5),
            S("Seminar", 1),
            S("Startup and Entrepreneurship", 2)
        ],

        sem8: [
            S("Department Elective-V", 3),
            S("Open Elective-III", 3),
            S("Open Elective-IV", 3),

            S("Project-II", 10),
            S("Internship / Training", 2)
        ]

    }

};


// =====================================================
// INFORMATION TECHNOLOGY
// =====================================================

const IT = {

    1: commonYear1,

    2: {

        sem3: [
            S("Data Structures", 4),
            S("Computer Organization and Architecture", 4),
            S("Discrete Structures and Theory of Logic", 4),
            S("Technical Communication", 3),
            S("Mathematics-IV", 4),
            S("Cyber Security", 3),
            S("Python Programming", 2),

            S("Data Structures Lab", 1),
            S("Computer Organization and Architecture Lab", 1),
            S("Python Programming Lab", 1),
            S("Web Designing Lab", 1),
            S("Mini Project / Internship", 2)
        ],

        sem4: [
            S("Operating System", 4),
            S("Theory of Automata and Formal Languages", 4),
            S("Object Oriented Programming", 3),
            S("Universal Human Values and Professional Ethics", 3),
            S("Cyber Security", 3),

            S("Operating System Lab", 1),
            S("Object Oriented Programming Lab", 1),
            S("Cyber Security Lab", 1),
            S("Web Technology Lab", 1),
            S("Mini Project", 2)
        ]

    },

    3: {

        sem5: [
            S("Database Management System", 4),
            S("Web Technology", 4),
            S("Design and Analysis of Algorithms", 4),
            S("Software Engineering", 3),
            S("Department Elective-I", 3),
            S("Department Elective-II", 3),

            S("DBMS Lab", 1),
            S("Web Technology Lab", 1),
            S("DAA Lab", 1),
            S("Software Engineering Lab", 1),
            S("Mini Project / Internship", 2)
        ],

        sem6: [
            S("Computer Networks", 4),
            S("Software Quality Management", 4),
            S("Compiler Design", 4),
            S("Department Elective-III", 3),
            S("Open Elective-I", 3),
            S("Essence of Indian Traditional Knowledge", 0),

            S("Computer Networks Lab", 1),
            S("Software Quality Management Lab", 1),
            S("Compiler Design Lab", 1),
            S("Mini Project", 2)
        ]

    },

    4: {

        sem7: [
            S("Artificial Intelligence", 3),
            S("Department Elective-IV", 3),
            S("Open Elective-II", 3),

            S("Artificial Intelligence Lab", 1),
            S("Project-I", 5),
            S("Seminar", 1),
            S("Startup and Entrepreneurship", 2)
        ],

        sem8: [
            S("Department Elective-V", 3),
            S("Open Elective-III", 3),
            S("Open Elective-IV", 3),

            S("Project-II", 10),
            S("Internship / Training", 2)
        ]

    }

};


// =====================================================
// MECHANICAL ENGINEERING
// =====================================================

const ME = {

    1: commonYear1,

    2: {

        sem3: [
            S("Engineering Mathematics-IV", 4),
            S("Thermodynamics", 4),
            S("Fluid Mechanics and Fluid Machines", 4),
            S("Materials Engineering", 3),
            S("Universal Human Values and Professional Ethics", 3),
            S("Cyber Security", 3),

            S("Fluid Mechanics Lab", 1),
            S("Material Testing Lab", 1),
            S("Computer Aided Machine Drawing-I Lab", 1),
            S("Internship Assessment / Mini Project", 2)
        ],

        sem4: [
            S("Applied Thermodynamics", 4),
            S("Strength of Materials", 4),
            S("Theory of Machines", 4),
            S("Manufacturing Processes", 4),
            S("Engineering Metrology", 3),

            S("Strength of Materials Lab", 1),
            S("Theory of Machines Lab", 1),
            S("Manufacturing Processes Lab", 1),
            S("Computer Aided Machine Drawing-II Lab", 1)
        ]

    },

    3: {

        sem5: [
            S("Heat and Mass Transfer", 4),
            S("Machine Design-I", 4),
            S("Industrial Engineering", 3),
            S("Unconventional Manufacturing Processes", 3),
            S("Department Elective-I", 3),
            S("Department Elective-II", 3),

            S("Heat Transfer Lab", 1),
            S("Machine Design Lab", 1),
            S("Manufacturing Technology Lab", 1),
            S("Mini Project / Internship", 2)
        ],

        sem6: [
            S("Refrigeration and Air Conditioning", 4),
            S("Internal Combustion Engines", 4),
            S("Machine Design-II", 4),
            S("Production and Operations Management", 3),
            S("Department Elective-III", 3),
            S("Open Elective-I", 3),

            S("RAC Lab", 1),
            S("IC Engine Lab", 1),
            S("Machine Design Lab-II", 1),
            S("Production Engineering Lab", 1),
            S("Mini Project", 2)
        ]

    },

    4: {

        sem7: [
            S("Department Elective-IV", 3),
            S("Department Elective-V", 3),
            S("Open Elective-II", 3),

            S("CAD/CAM Lab", 1),
            S("Project-I", 5),
            S("Seminar", 1),
            S("Industrial Training", 2)
        ],

        sem8: [
            S("Department Elective-VI", 3),
            S("Open Elective-III", 3),
            S("Open Elective-IV", 3),

            S("Major Project", 10),
            S("Internship / Training", 2)
        ]

    }

};


// =====================================================
// CIVIL ENGINEERING
// =====================================================

const CE = {

    1: commonYear1,

    2: {

        sem3: [
            S("Engineering Mathematics-IV", 4),
            S("Strength of Materials", 4),
            S("Building Materials and Construction", 4),
            S("Fluid Mechanics", 4),
            S("Surveying and Geomatics-I", 3),
            S("Engineering Geology", 3),

            S("Strength of Materials Lab", 1),
            S("Surveying and Geomatics Lab-I", 1),
            S("Fluid Mechanics Lab", 1),
            S("Building Materials Lab", 1),
            S("Computer Aided Drawing Lab", 1)
        ],

        sem4: [
            S("Structural Analysis-I", 4),
            S("Concrete Technology", 4),
            S("Geotechnical Engineering-I", 4),
            S("Surveying and Geomatics-II", 3),
            S("Transportation Engineering-I", 3),
            S("Universal Human Values and Professional Ethics", 3),

            S("Concrete Technology Lab", 1),
            S("Surveying and Geomatics Lab-II", 1),
            S("Geotechnical Engineering Lab-I", 1),
            S("Computer Aided Civil Engineering Drawing Lab", 1)
        ]

    },

    3: {

        sem5: [
            S("Geotechnical Engineering-II", 4),
            S("Structural Analysis-II", 4),
            S("Quantity Estimation and Construction Management", 4),
            S("Department Elective-I", 3),
            S("Department Elective-II", 3),

            S("Geotechnical Engineering Lab-II", 1),
            S("Structural Analysis Lab", 1),
            S("Quantity Estimation Lab", 1),
            S("Mini Project / Internship", 2)
        ],

        sem6: [
            S("Design of Concrete Structures", 4),
            S("Transportation Engineering-II", 4),
            S("Environmental Engineering", 4),
            S("Department Elective-III", 3),
            S("Open Elective-I", 3),

            S("Structural Detailing Lab", 1),
            S("Transportation Engineering Lab", 1),
            S("Environmental Engineering Lab", 1),
            S("Mini Project", 2)
        ]

    },

    4: {

        sem7: [
            S("Design of Steel Structures", 4),
            S("Department Elective-IV", 3),
            S("Department Elective-V", 3),
            S("Open Elective-II", 3),

            S("Steel Structure Design Lab", 1),
            S("Project-I", 5),
            S("Seminar", 1),
            S("Industrial Training", 2)
        ],

        sem8: [
            S("Department Elective-VI", 3),
            S("Open Elective-III", 3),
            S("Open Elective-IV", 3),

            S("Major Project", 10),
            S("Internship / Training", 2)
        ]

    }

};


// =====================================================
// ALL BRANCHES
// =====================================================

const branchData = {

    CSE: CSE,

    IT: IT,

    ME: ME,

    CE: CE

};


// =====================================================
// BRANCH SELECTOR
// =====================================================

let branchSelect = document.getElementById("branch");


// If branch dropdown does not exist in HTML,
// create it automatically.

if (!branchSelect) {

    branchSelect = document.createElement("select");

    branchSelect.id = "branch";

    const branches = [
        ["CSE", "Computer Science & Engineering"],
        ["IT", "Information Technology"],
        ["ME", "Mechanical Engineering"],
        ["CE", "Civil Engineering"]
    ];

    branches.forEach(([value, text]) => {

        const option = document.createElement("option");

        option.value = value;
        option.textContent = text;

        branchSelect.appendChild(option);

    });

    const yearElement = document.getElementById("year");

    if (yearElement && yearElement.parentNode) {

        yearElement.parentNode.insertBefore(
            branchSelect,
            yearElement
        );

    }

}


// =====================================================
// GET SELECTED BRANCH
// =====================================================

function getSelectedBranch() {

    return branchSelect.value || "CSE";

}


// =====================================================
// UPDATE SEMESTER
// =====================================================

function updateSemester(container, subjects) {

    if (!container) return;

    const subjectsDiv =
        container.querySelector(".onesubjects");

    if (!subjectsDiv) return;

    subjectsDiv.innerHTML = "";

    let totalCredits = 0;

    subjects.forEach(sub => {

        const row = document.createElement("div");

        row.className = "sone";


        // SUBJECT NAME

        const title = document.createElement("h2");

        title.textContent =
            `${sub.name} (${sub.credit})`;


        // INTERNAL MARKS

        const internal =
            document.createElement("input");

        internal.type = "number";
        internal.min = "0";
        internal.max = "30";
        internal.placeholder = "Internal";


        // EXTERNAL MARKS

        const external =
            document.createElement("input");

        external.type = "number";
        external.min = "0";
        external.max = "70";
        external.placeholder = "External";


        totalCredits += sub.credit;


        row.appendChild(title);
        row.appendChild(internal);
        row.appendChild(external);

        subjectsDiv.appendChild(row);

    });


    const creditBox =
        container.querySelectorAll(".credit h2");


    if (creditBox.length >= 3) {

        creditBox[0].textContent =
            `Total Credit: ${totalCredits}`;

        creditBox[1].textContent =
            "Marks: ";

        creditBox[2].textContent =
            "Percentage: ";

    }


    const calculate =
        container.querySelector(".calculate h2");

    if (calculate) {

        calculate.textContent =
            "SGPA: 0";

    }

}


// =====================================================
// SWITCH YEAR + BRANCH
// =====================================================

function switchYear() {

    const yearElement =
        document.getElementById("year");

    if (!yearElement) return;


    const year =
        Number(yearElement.value);


    const branch =
        getSelectedBranch();


    const selectedBranch =
        branchData[branch];


    if (!selectedBranch) return;


    const data =
        selectedBranch[year];


    if (!data) return;


    const semesterCards =
        document.querySelectorAll(".left");


    if (semesterCards.length < 2) return;


    const semesters =
        Object.keys(data);


    updateSemester(
        semesterCards[0],
        data[semesters[0]]
    );


    updateSemester(
        semesterCards[1],
        data[semesters[1]]
    );


    const circles =
        document.querySelectorAll(".circle");


    if (circles.length >= 2) {

        circles[0].textContent =
            semesters[0].replace("sem", "");

        circles[1].textContent =
            semesters[1].replace("sem", "");

    }


    // Reset overall total
    const totalElement =
        document.querySelector("#Total h2");

    if (totalElement) {

        totalElement.textContent =
            "Total:";

    }

}


// =====================================================
// YEAR CHANGE
// =====================================================

const yearElement =
    document.getElementById("year");

if (yearElement) {

    yearElement.addEventListener(
        "change",
        switchYear
    );

}


// =====================================================
// BRANCH CHANGE
// =====================================================

if (branchSelect) {

    branchSelect.addEventListener(
        "change",
        switchYear
    );

}


// =====================================================
// INITIAL LOAD
// =====================================================

switchYear();


// =====================================================
// CALCULATE BUTTON
// =====================================================

document
.querySelectorAll(".calCGPA")
.forEach((button, index) => {

    button.addEventListener("click", () => {

        const containers =
            document.querySelectorAll(".left");


        const container =
            containers[index];


        if (!container) return;


        if (!validateInputs(container)) {

            return;

        }


        calculateSemester(container);


        updateOverallTotal();


        const downloadButton =
            container.querySelector(".downloadBtn");


        if (downloadButton) {

            downloadButton.style.display =
                "inline-block";

        }

    });

});


// =====================================================
// GRADE POINT
// =====================================================

function getGradePoint(marks) {

    if (marks >= 90) return 10;
    if (marks >= 80) return 9;
    if (marks >= 70) return 8;
    if (marks >= 60) return 7;
    if (marks >= 50) return 6;
    if (marks >= 45) return 5;
    if (marks >= 40) return 4;

    return 0;
}


// =====================================================
// CALCULATE SEMESTER
// =====================================================

function calculateSemester(container) {

    const rows =
        container.querySelectorAll(".sone");


    let totalMarks = 0;
    let creditSum = 0;
    let weightedGP = 0;


    rows.forEach(row => {

        const inputs =
            row.querySelectorAll("input");


        if (inputs.length < 2) return;


        const internal =
            Number(inputs[0].value) || 0;


        const external =
            Number(inputs[1].value) || 0;


        const marks =
            internal + external;


        totalMarks += marks;


        const title =
            row.querySelector("h2");


        if (!title) return;


        const match =
            title.textContent.match(/\(([\d.]+)\)/);


        const credit =
            match ? Number(match[1]) : 0;


        const gradePoint =
            getGradePoint(marks);


        creditSum += credit;


        weightedGP +=
            credit * gradePoint;

    });


    const totalMax =
        rows.length * 100;


    const percentage =
        totalMax === 0
            ? "0.00"
            : ((totalMarks / totalMax) * 100)
                .toFixed(2);


    const sgpa =
        creditSum === 0
            ? "0.00"
            : (weightedGP / creditSum)
                .toFixed(2);


    const creditBox =
        container.querySelectorAll(".credit h2");


    if (creditBox.length >= 3) {

        creditBox[0].textContent =
            `Total Credit: ${creditSum}`;

        creditBox[1].textContent =
            `Marks: ${totalMarks}/${totalMax}`;

        creditBox[2].textContent =
            `Percentage: ${percentage}%`;

    }


    const calculate =
        container.querySelector(".calculate h2");


    if (calculate) {

        calculate.textContent =
            `SGPA: ${sgpa}`;

    }

}


// =====================================================
// VALIDATE INPUT
// =====================================================

function validateInputs(container) {

    const inputs =
        container.querySelectorAll("input");


    for (const input of inputs) {

        if (input.value === "") {

            alert(
                "Please enter all subject marks."
            );

            input.focus();

            return false;

        }


        const value =
            Number(input.value);


        if (Number.isNaN(value)) {

            alert(
                "Please enter valid marks."
            );

            input.focus();

            return false;

        }


        if (
            input.placeholder === "Internal" &&
            (value < 0 || value > 30)
        ) {

            alert(
                "Internal marks must be between 0 and 30."
            );

            input.focus();

            return false;

        }


        if (
            input.placeholder === "External" &&
            (value < 0 || value > 70)
        ) {

            alert(
                "External marks must be between 0 and 70."
            );

            input.focus();

            return false;

        }

    }


    return true;

}


// =====================================================
// UPDATE OVERALL TOTAL
// =====================================================

function updateOverallTotal() {

    const cards =
        document.querySelectorAll(".left");


    let overallMarks = 0;
    let overallMax = 0;


    cards.forEach(card => {

        const rows =
            card.querySelectorAll(".sone");


        overallMax +=
            rows.length * 100;


        rows.forEach(row => {

            const inputs =
                row.querySelectorAll("input");


            if (inputs.length < 2) return;


            overallMarks +=
                (Number(inputs[0].value) || 0) +
                (Number(inputs[1].value) || 0);

        });

    });


    const total =
        document.querySelector("#Total h2");


    if (total) {

        total.textContent =
            `Total: ${overallMarks}/${overallMax}`;

    }

}


// =====================================================
// DOWNLOAD PDF
// =====================================================

document
.querySelectorAll(".downloadBtn")
.forEach(btn => {

    btn.addEventListener("click", () => {

        const card =
            btn.closest(".left");


        if (!card) return;


        const circle =
            card.querySelector(".circle");


        const semNumber =
            circle
                ? circle.textContent
                : "Semester";


        downloadPDF(
            card,
            semNumber
        );

    });

});


// =====================================================
// PDF FUNCTION
// =====================================================

async function downloadPDF(
    container,
    semNumber
) {

    if (
        typeof html2canvas === "undefined" ||
        typeof window.jspdf === "undefined"
    ) {

        alert(
            "PDF libraries are not loaded."
        );

        return;

    }


    await new Promise(resolve =>
        setTimeout(resolve, 300)
    );


    const canvas =
        await html2canvas(container, {
            scale: 2
        });


    const image =
        canvas.toDataURL("image/png");


    const { jsPDF } =
        window.jspdf;


    const pdf =
        new jsPDF(
            "p",
            "mm",
            "a4"
        );


    const width =
        pdf.internal.pageSize.getWidth();


    const height =
        (canvas.height * width) /
        canvas.width;


    pdf.addImage(
        image,
        "PNG",
        0,
        0,
        width,
        height
    );


    pdf.setFontSize(12);


    pdf.text(
        "Generated by Ritesh Kumar",
        10,
        Math.min(height - 15, 280)
    );


    pdf.save(
        `AKTU_${getSelectedBranch()}_Sem_${semNumber}_Result.pdf`
    );

}


// =====================================================
// RESET
// =====================================================

const resetButton =
    document.getElementById("reset");


if (resetButton) {

    resetButton.addEventListener(
        "click",
        resetAll
    );

}


function resetAll() {

    document
    .querySelectorAll(".left")
    .forEach(card => {

        card
        .querySelectorAll("input")
        .forEach(input => {

            input.value = "";

        });


        const creditBox =
            card.querySelectorAll(
                ".credit h2"
            );


        if (creditBox.length >= 3) {

            creditBox[0].textContent =
                "Total Credit:";

            creditBox[1].textContent =
                "Marks:";

            creditBox[2].textContent =
                "Percentage:";

        }


        const calculate =
            card.querySelector(".calculate h2");


        if (calculate) {

            calculate.textContent =
                "SGPA: 0";

        }


        const download =
            card.querySelector(".downloadBtn");


        if (download) {

            download.style.display =
                "none";

        }

    });


    const total =
        document.querySelector("#Total h2");


    if (total) {

        total.textContent =
            "Total:";

    }

}