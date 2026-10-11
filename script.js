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
    name: name.trim(),
    credit,
    // Lab, project, internship and practical/workshop items use 50+50.
    type: /\blab\b|project|internship|training|seminar|workshop|graphics|startup|entrepreneurship|industrial training|assessment/i.test(name)
        ? "practical"
        : "theory"
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

            S("DAV lab", 1),



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
// ELECTRONICS & COMMUNICATION ENGINEERING (ECE)
// Editable reference subject list; verify against your college scheme.
// =====================================================
const ECE = {
    1: commonYear1,
    2: {
        sem3: [
            S("Engineering Mathematics-IV", 4),
            S("Electronic Devices", 4),
            S("Network Analysis and Synthesis", 4),
            S("Signals and Systems", 4),
            S("Analog Electronics", 3),
            S("Cyber Security", 3),
            S("Electronic Devices Lab", 1),
            S("Analog Electronics Lab", 1),
            S("Network Analysis Lab", 1),
            S("Mini Project / Internship", 2)
        ],
        sem4: [
            S("Electromagnetic Field Theory", 4),
            S("Digital Electronics", 4),
            S("Control Systems", 4),
            S("Communication Systems", 4),
            S("Universal Human Values and Professional Ethics", 3),
            S("Digital Electronics Lab", 1),
            S("Communication Systems Lab", 1),
            S("Simulation Lab", 1),
            S("Mini Project", 2)
        ]
    },
    3: {
        sem5: [
            S("Microprocessors and Microcontrollers", 4),
            S("Digital Signal Processing", 4),
            S("Analog Communication", 4),
            S("Antenna and Wave Propagation", 3),
            S("Department Elective-I", 3),
            S("Department Elective-II", 3),
            S("Microprocessor Lab", 1),
            S("DSP Lab", 1),
            S("Communication Lab", 1),
            S("Mini Project / Internship", 2)
        ],
        sem6: [
            S("Digital Communication", 4),
            S("VLSI Design", 4),
            S("Microwave Engineering", 4),
            S("Embedded Systems", 3),
            S("Department Elective-III", 3),
            S("Open Elective-I", 3),
            S("VLSI Lab", 1),
            S("Microwave Lab", 1),
            S("Embedded Systems Lab", 1),
            S("Mini Project", 2)
        ]
    },
    4: {
        sem7: [
            S("Wireless Communication", 3),
            S("Optical Fiber Communication", 3),
            S("Department Elective-IV", 3),
            S("Open Elective-II", 3),
            S("Wireless Communication Lab", 1),
            S("Project-I", 5),
            S("Seminar", 1),
            S("Industrial Training", 2)
        ],
        sem8: [
            S("Department Elective-V", 3),
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



    CE: CE,
    ECE: ECE
};





// =====================================================


// =====================================================
// BRANCH SELECTOR + SEMESTER RENDERING
// =====================================================

let branchSelect = document.getElementById("branch");
if (!branchSelect) {
    branchSelect = document.createElement("select");
    branchSelect.id = "branch";
    [
        ["CSE", "Computer Science & Engineering"],
        ["IT", "Information Technology"],
        ["ME", "Mechanical Engineering"],
        ["CE", "Civil Engineering"],
        ["ECE", "Electronics & Communication Engineering"]
    ].forEach(([value, label]) => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = label;
        branchSelect.appendChild(option);
    });
    const yearElement = document.getElementById("year");
    if (yearElement?.parentNode) yearElement.parentNode.insertBefore(branchSelect, yearElement);
}

// Keep the branch menu aligned with the branches supported by this calculator.
if (branchSelect) {
    [...branchSelect.options].forEach(option => {
        if (option.value.toUpperCase() === "EEE") option.remove();
    });
    if (![...branchSelect.options].some(option => option.value === "ECE")) {
        const option = document.createElement("option");
        option.value = "ECE";
        option.textContent = "ECE";
        branchSelect.appendChild(option);
    }
}

function getSelectedBranch() {
    return branchSelect?.value || "CSE";
}

function getLimits(subject) {
    return subject.type === "practical"
        ? { internal: 50, external: 50 }
        : { internal: 30, external: 70 };
}

// Example grade thresholds; confirm against the applicable AKTU regulations.
function getGradeInfo(marks) {
    if (marks >= 90) return { grade: "A+", point: 10 };
    if (marks >= 80) return { grade: "A", point: 9 };
    if (marks >= 70) return { grade: "B+", point: 8 };
    if (marks >= 60) return { grade: "B", point: 7 };
    if (marks >= 50) return { grade: "C", point: 6 };
    if (marks >= 45) return { grade: "D", point: 5 };
    if (marks >= 40) return { grade: "E", point: 4 };
    return { grade: "F", point: 0 };
}

function createSubjectRow(subject) {
    const row = document.createElement("div");
    row.className = "sone";
    row.dataset.type = subject.type;
    row.dataset.credit = subject.credit;

    const limits = getLimits(subject);

    const heading = document.createElement("div");
    heading.className = "subjectHeading";

    const title = document.createElement("h2");
    title.className = "subjectName";
    title.textContent = `${subject.name} (${subject.credit} credits)`;

    // Do not display the colored Theory/Lab marks-split note.
    heading.append(title);

    const marks = document.createElement("div");
    marks.className = "marksInputs";

    const internalWrap = document.createElement("label");
    internalWrap.className = "markField";
    const internal = document.createElement("input");
    internal.type = "number";
    internal.min = "0";
    internal.max = String(limits.internal);
    internal.step = "1";
    internal.inputMode = "numeric";
    internal.placeholder = `0–${limits.internal}`;
    internal.className = "internalMarks";
    internal.setAttribute("aria-label", `${subject.name} internal marks`);
    internalWrap.append(internal);

    const externalWrap = document.createElement("label");
    externalWrap.className = "markField";
    const external = document.createElement("input");
    external.type = "number";
    external.min = "0";
    external.max = String(limits.external);
    external.step = "1";
    external.inputMode = "numeric";
    external.placeholder = `0–${limits.external}`;
    external.className = "externalMarks";
    external.setAttribute("aria-label", `${subject.name} external marks`);
    externalWrap.append(external);

    marks.append(internalWrap, externalWrap);

    const result = document.createElement("div");
    result.className = "subjectResult";
    result.textContent = "—";

    function showGrade() {
        if (internal.value === "" || external.value === "") {
            result.textContent = "—";
            result.classList.remove("gradeFail");
            return;
        }
        const im = Number(internal.value);
        const em = Number(external.value);
        if (!Number.isFinite(im) || !Number.isFinite(em) ||
            im < 0 || im > limits.internal || em < 0 || em > limits.external) {
            result.textContent = `Check marks: Internal max ${limits.internal}, External max ${limits.external}`;
            result.classList.remove("gradeFail");
            return;
        }
        const total = im + em;
        const info = getGradeInfo(total);
        result.textContent = info.grade;
        result.classList.toggle("gradeFail", info.grade === "F");
    }

    internal.addEventListener("input", showGrade);
    external.addEventListener("input", showGrade);

    row.append(heading, marks, result);
    return row;
}

function updateSemester(container, subjects) {
    if (!container) return;
    const subjectsDiv = container.querySelector(".onesubjects");
    if (!subjectsDiv) return;
    subjectsDiv.innerHTML = "";
    subjects.forEach(subject => subjectsDiv.appendChild(createSubjectRow(subject)));

    const totalCredits = subjects.reduce((sum, subject) => sum + subject.credit, 0);
    const boxes = container.querySelectorAll(".credit h2");
    if (boxes.length >= 3) {
        boxes[0].textContent = `Total Credit: ${totalCredits}`;
        boxes[1].textContent = "Marks: —";
        boxes[2].textContent = "Percentage: —";
    }
    const sgpa = container.querySelector(".calculate h2");
    if (sgpa) sgpa.textContent = "SGPA: —";
    const download = container.querySelector(".downloadBtn");
    if (download) download.style.display = "none";
}

function switchYear() {
    const yearElement = document.getElementById("year");
    if (!yearElement) return;
    const selected = branchData[getSelectedBranch()];
    const data = selected?.[Number(yearElement.value)];
    if (!data) return;
    const cards = document.querySelectorAll(".left");
    if (cards.length < 2) return;
    const semesters = Object.keys(data);
    updateSemester(cards[0], data[semesters[0]]);
    updateSemester(cards[1], data[semesters[1]]);
    const circles = document.querySelectorAll(".circle");
    if (circles.length >= 2) {
        circles[0].textContent = semesters[0].replace("sem", "");
        circles[1].textContent = semesters[1].replace("sem", "");
    }
    const total = document.querySelector("#Total h2");
    if (total) total.textContent = "Total: —";
}

document.getElementById("year")?.addEventListener("change", switchYear);
branchSelect?.addEventListener("change", switchYear);
switchYear();

function validateInputs(container) {
    for (const row of container.querySelectorAll(".sone")) {
        const internal = row.querySelector(".internalMarks");
        const external = row.querySelector(".externalMarks");
        if (!internal || !external || internal.value === "" || external.value === "") {
            alert("Please enter internal and external marks for every subject.");
            (internal?.value === "" ? internal : external)?.focus();
            return false;
        }
        const practical = row.dataset.type === "practical";
        const maxInternal = practical ? 50 : 30;
        const maxExternal = practical ? 50 : 70;
        const im = Number(internal.value), em = Number(external.value);
        if (!Number.isFinite(im) || !Number.isFinite(em) || im < 0 || im > maxInternal || em < 0 || em > maxExternal) {
            alert(`${row.querySelector("h2")?.textContent || "Subject"}\nInternal: 0-${maxInternal}\nExternal: 0-${maxExternal}`);
            return false;
        }
    }
    return true;
}

function calculateSemester(container) {
    const rows = [...container.querySelectorAll(".sone")];
    let totalMarks = 0, totalMax = 0, creditSum = 0, weightedGP = 0, hasFail = false;
    rows.forEach(row => {
        const im = Number(row.querySelector(".internalMarks").value);
        const em = Number(row.querySelector(".externalMarks").value);
        const marks = im + em;
        const credit = Number(row.dataset.credit) || 0;
        const info = getGradeInfo(marks);
        totalMarks += marks;
        totalMax += 100;
        creditSum += credit;
        weightedGP += credit * info.point;
        if (info.grade === "F") hasFail = true;
    });
    const percentage = totalMax ? (totalMarks / totalMax * 100) : 0;
    const sgpa = creditSum ? weightedGP / creditSum : 0;
    const boxes = container.querySelectorAll(".credit h2");
    if (boxes.length >= 3) {
        boxes[0].textContent = `Total Credit: ${creditSum}`;
        boxes[1].textContent = `Marks: ${totalMarks}/${totalMax}`;
        boxes[2].textContent = `Percentage: ${percentage.toFixed(2)}%`;
    }
    const sgpaHeading = container.querySelector(".calculate h2");
    if (sgpaHeading) sgpaHeading.textContent = `SGPA: ${sgpa.toFixed(2)}${hasFail ? " (F grade present)" : ""}`;
    return { totalMarks, totalMax };
}

function updateOverallTotal() {
    let marks = 0, max = 0;
    document.querySelectorAll(".left .sone").forEach(row => {
        const i = row.querySelector(".internalMarks");
        const e = row.querySelector(".externalMarks");
        if (i?.value !== "" && e?.value !== "") {
            marks += Number(i.value) + Number(e.value);
            max += 100;
        }
    });
    const total = document.querySelector("#Total h2");
    if (total) total.textContent = `Total: ${marks}/${max}`;
}

document.querySelectorAll(".calCGPA").forEach((button, index) => {
    button.addEventListener("click", () => {
        const container = document.querySelectorAll(".left")[index];
        if (!container || !validateInputs(container)) return;
        calculateSemester(container);
        updateOverallTotal();
        const download = container.querySelector(".downloadBtn");
        if (download) download.style.display = "inline-block";
    });
});

function resetAll() {
    document.querySelectorAll(".left").forEach(card => {
        card.querySelectorAll("input").forEach(input => input.value = "");
        card.querySelectorAll(".subjectResult").forEach(result => {
            result.textContent = "—";
            result.classList.remove("gradeFail");
        });
        const boxes = card.querySelectorAll(".credit h2");
        if (boxes.length >= 3) {
            boxes[1].textContent = "Marks: —";
            boxes[2].textContent = "Percentage: —";
        }
        const sgpa = card.querySelector(".calculate h2");
        if (sgpa) sgpa.textContent = "SGPA: —";
        const download = card.querySelector(".downloadBtn");
        if (download) download.style.display = "none";
    });
    const total = document.querySelector("#Total h2");
    if (total) total.textContent = "Total: —";
}
document.getElementById("reset")?.addEventListener("click", resetAll);

async function downloadPDF(container, semesterNumber) {
    if (typeof html2canvas === "undefined" || !window.jspdf?.jsPDF) {
        alert("PDF libraries are not loaded.");
        return;
    }
    const canvas = await html2canvas(container, { scale: 2, useCORS: true });
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF("p", "mm", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const imageWidth = pageWidth - 20;
    const imageHeight = canvas.height * imageWidth / canvas.width;
    const image = canvas.toDataURL("image/png");
    let remaining = imageHeight, y = 10;
    pdf.addImage(image, "PNG", 10, y, imageWidth, imageHeight);
    remaining -= pageHeight - 20;
    while (remaining > 0) {
        pdf.addPage();
        y = 10 - (imageHeight - remaining);
        pdf.addImage(image, "PNG", 10, y, imageWidth, imageHeight);
        remaining -= pageHeight - 20;
    }
    pdf.save(`AKTU_${getSelectedBranch()}_Sem_${semesterNumber}_Result.pdf`);
}

document.querySelectorAll(".downloadBtn").forEach(button => {
    button.addEventListener("click", () => {
        const card = button.closest(".left");
        if (!card) return;
        const sem = card.querySelector(".circle")?.textContent.trim() || "Semester";
        downloadPDF(card, sem).catch(error => {
            console.error(error);
            alert("PDF generate nahi ho payi. Please try again.");
        });
    });
});

// Optional CSS:
// .subjectResult { margin: 8px 0; font-weight: 600; }
// .gradeFail { color: #dc2626; }
