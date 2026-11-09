
const output = document.getElementById("output");

async function callAI(endpoint, data) {
    output.textContent = "AI is generating your result...";

    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => button.disabled = true);

    try {
        const response = await fetch(`/api/${endpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.error || "AI request failed.");
        }

        output.textContent = result.result;

    } catch (error) {
        output.textContent = "Error: " + error.message;
    } finally {
        buttons.forEach(button => button.disabled = false);
    }
}

function analyzeResume() {
    const resume = document.getElementById("resume").value.trim();
    const role = document.getElementById("role").value.trim();

    if (!resume) {
        alert("Please enter your resume.");
        return;
    }

    callAI("resume", { resume, role });
}

function generateInterview() {
    const role = document.getElementById("interviewRole").value.trim();
    const level = document.getElementById("level").value;
    const type = document.getElementById("type").value;

    if (!role) {
        alert("Please enter a job role.");
        return;
    }

    callAI("interview", { role, level, type });
}

function generateRoadmap() {
    const role = document.getElementById("career").value.trim();
    const skills = document.getElementById("skills").value.trim();
    const duration = document.getElementById("duration").value;

    if (!role) {
        alert("Please enter your career goal.");
        return;
    }

    callAI("roadmap", { role, skills, duration });
}

function generateCoverLetter() {
    const role = document.getElementById("job").value.trim();
    const company = document.getElementById("company").value.trim();
    const details = document.getElementById("details").value.trim();

    if (!role || !company || !details) {
        alert("Please complete all fields.");
        return;
    }

    callAI("cover-letter", { role, company, details });
}

async function copyResult() {
    try {
        await navigator.clipboard.writeText(output.textContent);
        alert("Result copied successfully!");
    } catch {
        alert("Please select and copy the result manually.");
    }
}
